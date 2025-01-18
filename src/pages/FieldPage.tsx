import page from "./styles/embeddedPage.module.css"
import {AddBtn} from "../components/buttons/AddBtn.tsx";
import {useState} from "react";
import {SearchButton} from "../components/filter/SearchButton.tsx";
import {ClearFilterButton} from "../components/filter/ClearFilterButton.tsx";
import {SearchComponent} from "../components/filter/SearchComponent.tsx";
import {NumberFieldComponent} from "../components/filter/NumberFieldComponent.tsx";
import {useSelector} from "react-redux";
import {Field} from "../model/Field.ts";
import {FieldCard} from "../components/cards/FieldCard.tsx";
import {PageTitle} from "../components/filter/PageTitle.tsx";

interface RootState {
    field: Field[];
}

export function FieldPage() {
    const [fieldName, setFieldName] = useState('');
    const [fromSize, setFromSize] = useState('');
    const [toSize, setToSize] = useState('');

    const fields = useSelector((state: RootState) => state.field);

    const handleAdd = () => {
    };

    const handleUpdate = (id: string) => {
        console.log(`Update Field with ID: ${id}`);
    };

    const handleSearch = () => {
        console.log('Search Field with field name: ' + fieldName + ', from size: ' + fromSize + ', to size: ' + toSize);
    }

    const handleClearFilter = () => {
        console.log('Clear Filter');
    }

    const handleView = (id: string) => {
        console.log(`View Field with ID: ${id}`);
    };

    const handleDelete = (id: string) => {
        console.log(`Delete Field with ID: ${id}`);
    };

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
        </div>
    )
}