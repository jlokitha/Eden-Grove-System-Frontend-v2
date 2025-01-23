import page from "./styles/embeddedPage.module.css";
import {SearchComponent} from "../../components/filter/SearchComponent.tsx";
import {useState} from "react";
import {SearchButton} from "../../components/filter/SearchButton.tsx";
import {ClearFilterButton} from "../../components/filter/ClearFilterButton.tsx";
import {AddBtn} from "../../components/buttons/AddBtn.tsx";
import {useDispatch, useSelector} from "react-redux";
import {Crop} from "../../model/Crop.ts";
import {CropCard} from "../../components/cards/CropCard.tsx";
import {PageTitle} from "../../components/filter/PageTitle.tsx";
import {addCrop, deleteCrop, updateCrop} from "../../reducers/CropReducer.ts";
import {CropAddOrUpdate} from "../../components/popup/CropAddOrUpdate.tsx";
import {CropView} from "../../components/popup/CropView.tsx";
import {DeletePopup} from "../../components/popup/DeletePopup.tsx";
import {Overlay} from "../../components/popup/Overlay.tsx";

interface RootState {
    crop: Crop[];
}

export function CropPage() {
    const [cropName, setCropName] = useState('');

    const [openPopup, setOpenPopup] = useState(false);
    const [popupType, setPopupType] = useState<"save" | "update">("save");
    const [viewPopup, setViewPopup] = useState(false);
    const [deletePopup, setDeletePopup] = useState(false);
    const [selectedCropId, setSelectedCropId] = useState<string | undefined>(undefined);

    const crops = useSelector((state: RootState) => state.crop);
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent, crop: Crop) => {
        event.preventDefault();
        if (popupType === "save") {
            dispatch(addCrop(crop));
        } else if (popupType === "update") {
            dispatch(updateCrop(crop));
        }
        setOpenPopup(false);
    };

    const handleAdd = () => {
        setPopupType("save");
        setSelectedCropId(undefined);
        setOpenPopup(true);
    };

    const handleUpdate = (id: string) => {
        setPopupType("update");
        setSelectedCropId(id);
        setOpenPopup(true);
    };

    const handleSearch = () => {
        console.log('Search Crop with crop name: ' + cropName);
    }

    const handleClearFilter = () => {
        console.log('Clear Filter');
    }

    const handleView = (id: string) => {
        setSelectedCropId(id);
        setViewPopup(true);
    };

    const handleDelete = (id: string) => {
        setSelectedCropId(id);
        setDeletePopup(true);
    };

    const handleDeleteConfirm = () => {
        if (selectedCropId) {
            dispatch(deleteCrop(selectedCropId));
        }
        setDeletePopup(false);
    }

    const handleDeleteCancel = () => {
        setDeletePopup(false);
    }

    return (
        <div className={page.embeddedPage}>
            <section id={page.filterContainer}>
                <PageTitle title={'Crops'}/>
                <div
                    className="d-flex justify-content-between align-items-center flex-wrap gap-3"
                >
                    <div className="d-flex justify-content-even align-items-center" id={page.filter}>
                        <SearchComponent placeholder={'What are you looking for?'} onChange={setCropName}/>
                        <SearchButton onClick={handleSearch}/>
                        <ClearFilterButton onClick={handleClearFilter}/>
                    </div>
                    <AddBtn text={'Add Crop'} onClick={handleAdd}/>
                </div>
            </section>

            <section id={page.cardContainer}>
                {crops && crops.map((crop: Crop) => (
                    <CropCard
                        crop={crop}
                        viewOnClick={() => handleView(crop.cropCode)}
                        updateOnClick={() => handleUpdate(crop.cropCode)}
                        deleteOnClick={() => handleDelete(crop.cropCode)}
                    />
                ))}
            </section>
            {openPopup && (
                <>
                    <Overlay/>
                    <CropAddOrUpdate
                        type={popupType}
                        cropCode={selectedCropId}
                        onSubmit={handleSubmit}
                        onClose={() => setOpenPopup(false)}
                    />
                </>
            )}
            {viewPopup && (
                <>
                    <Overlay/>
                    <CropView cropCode={selectedCropId!} onClose={() => setViewPopup(false)}/>
                </>
            )}
            {deletePopup && (
                <>
                    <Overlay/>
                    <DeletePopup onCancel={handleDeleteCancel} onDelete={handleDeleteConfirm}/>
                </>
            )}
        </div>
    )
}