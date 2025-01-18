import page from "./styles/embeddedPage.module.css";
import {SearchComponent} from "../components/filter/SearchComponent.tsx";
import {useState} from "react";
import {SearchButton} from "../components/filter/SearchButton.tsx";
import {ClearFilterButton} from "../components/filter/ClearFilterButton.tsx";
import {AddBtn} from "../components/buttons/AddBtn.tsx";
import {useSelector} from "react-redux";
import {Crop} from "../model/Crop.ts";
import {CropCard} from "../components/cards/CropCard.tsx";

interface RootState {
    crop: Crop[];
}

export function CropPage() {
    const [cropName, setCropName] = useState('');

    const crops = useSelector((state: RootState) => state.crop);

    const handleAdd = () => {
    };

    const handleUpdate = (id: string) => {
        console.log(`Update Crop with ID: ${id}`);
    };

    const handleSearch = () => {
        console.log('Search Crop with crop name: ' + cropName);
    }

    const handleClearFilter = () => {
        console.log('Clear Filter');
    }

    const handleView = (id: string) => {
        console.log(`View Crop with ID: ${id}`);
    };

    const handleDelete = (id: string) => {
        console.log(`Delete Crop with ID: ${id}`);
    };

    return (
        <div className={page.embeddedPage}>
            <section id={page.filterContainer}>
                <h1>Crop</h1>
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
                {crops && crops.map((crop: Crop, index: number) => (
                    <CropCard
                        crop={crop}
                        index={index}
                        viewOnClick={() => handleView(crop.cropCode)}
                        updateOnClick={() => handleUpdate(crop.cropCode)}
                        deleteOnClick={() => handleDelete(crop.cropCode)}
                    />
                ))}
            </section>
        </div>
    )
}