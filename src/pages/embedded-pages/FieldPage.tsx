import page from "./styles/embeddedPage.module.css"
import {AddBtn} from "../../components/buttons/AddBtn.tsx";
import {useState} from "react";
import {SearchButton} from "../../components/filter/SearchButton.tsx";
import {ClearFilterButton} from "../../components/filter/ClearFilterButton.tsx";
import {SearchComponent} from "../../components/filter/SearchComponent.tsx";
import {NumberFieldComponent} from "../../components/filter/NumberFieldComponent.tsx";
import {useDispatch, useSelector} from "react-redux";
import {Field} from "../../model/Field.ts";
import {FieldCard} from "../../components/cards/FieldCard.tsx";
import {PageTitle} from "../../components/filter/PageTitle.tsx";
import {addField, deleteField, updateField} from "../../reducers/FieldReducer.ts";
import {DeletePopup} from "../../components/popup/DeletePopup.tsx";
import {FieldAddOrUpdate} from "../../components/popup/FieldAddOrUpdate.tsx";
import {FieldView} from "../../components/popup/FieldView.tsx";
import {Overlay} from "../../components/popup/Overlay.tsx";

interface RootState {
    field: Field[];
}

export function FieldPage() {
    const [fieldName, setFieldName] = useState('');
    const [fromSize, setFromSize] = useState('');
    const [toSize, setToSize] = useState('');

    const [openPopup, setOpenPopup] = useState(false);
    const [popupType, setPopupType] = useState<"save" | "update">("save");
    const [viewPopup, setViewPopup] = useState(false);
    const [deletePopup, setDeletePopup] = useState(false);
    const [selectedFieldId, setSelectedFieldId] = useState<string | undefined>(undefined);

    const fields = useSelector((state: RootState) => state.field);
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent, field: Field) => {
        event.preventDefault();
        if (popupType === "save") {
            dispatch(addField(field));
        } else if (popupType === "update") {
            dispatch(updateField(field));
        }
        setOpenPopup(false);
    };

    const handleAdd = () => {
        setPopupType("save");
        setSelectedFieldId(undefined);
        setOpenPopup(true);
    };

    const handleUpdate = (id: string) => {
        setPopupType("update");
        setSelectedFieldId(id);
        setOpenPopup(true);
    };

    const handleSearch = () => {
        console.log('Search Field with field name: ' + fieldName + ', from size: ' + fromSize + ', to size: ' + toSize);
    }

    const handleClearFilter = () => {
        console.log('Clear Filter');
    }

    const handleView = (id: string) => {
        setSelectedFieldId(id);
        setViewPopup(true);
    };

    const handleDelete = (id: string) => {
        setSelectedFieldId(id);
        setDeletePopup(true);
    };

    const handleDeleteConfirm = () => {
        if (selectedFieldId) {
            dispatch(deleteField(selectedFieldId));
        }
        setDeletePopup(false);
    }

    const handleDeleteCancel = () => {
        setDeletePopup(false);
    }

    return (
        <div className={page.embeddedPage}>
            <section id={page.filterContainer}>
                <div className="d-flex justify-content-between">
                    <PageTitle title={'Field'}/>
                    <AddBtn text={'Add Field'} onClick={handleAdd}/>
                </div>
                <div className="d-flex justify-content-even align-items-center" id={page.filter}>
                    <SearchComponent placeholder={'What are you looking for?'} onChange={setFieldName}/>
                    <NumberFieldComponent label={'From'} onChange={setFromSize}/>
                    <NumberFieldComponent label={'To'} onChange={setToSize}/>
                    <SearchButton onClick={handleSearch}/>
                    <ClearFilterButton onClick={handleClearFilter}/>
                </div>
            </section>

            <section id={page.cardContainer}>
                {fields && fields.map((field: Field, index: number) => (
                    <FieldCard
                        field={field}
                        index={index}
                        viewOnClick={() => handleView(field.fCode)}
                        updateOnClick={() => handleUpdate(field.fCode)}
                        deleteOnClick={() => handleDelete(field.fCode)}
                    />
                ))}
            </section>

            {openPopup && (
                <>
                    <Overlay/>
                    <FieldAddOrUpdate
                        fieldId={selectedFieldId}
                        onClose={() => setOpenPopup(false)}
                        onSubmit={handleSubmit}
                        type={popupType}
                    />
                </>
            )}
            {viewPopup && (
                <>
                    <Overlay/>
                    <FieldView fieldId={selectedFieldId!} onClose={() => setViewPopup(false)}/>
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