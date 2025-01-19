import styles from "./style/view.module.css";
import popup from "./style/fieldView.module.css"
import {Field} from "../../model/Field.ts";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {CloseBtn} from "../buttons/CloseBtn.tsx";
import {DetailContainer} from "../form/DetailContainer.tsx";
import {LocationDetailContainer} from "../form/LocationDetailContainer.tsx";
import {TagContainer} from "../form/TagContainer.tsx";
import {Carousel} from "../form/Carousel.tsx";

interface FieldViewProps {
    fieldId: string;
    onClose: () => void;
}

interface RootState {
    field: Field[];
}

export function FieldView({fieldId, onClose}: FieldViewProps) {
    const [field, setField] = useState<Field | null>(null);
    const fields = useSelector((state: RootState) => state.field);

    useEffect(() => {
        const selectedField = fields.find((f: Field) => f.fCode === fieldId);
        setField(selectedField || null);
    }, [fieldId, fields]);

    if (!field) {
        return null;
    }

    return (
        <section className={styles.viewPopup} id={popup.fieldViewPopup}>
            <div className={`${styles.titleContainer} d-flex justify-content-between align-items-center`}>
                <h1>Field Details</h1>
                <CloseBtn onClick={onClose}/>
            </div>
            <div>
                <Carousel image1={field.fieldImage1} image2={field.fieldImage2}/>
                <div className="wrapper d-flex justify-content-between align-items-center mb-3 selector-wrapper">
                    <DetailContainer label={'Field Name'} value={field.fieldName}/>
                    <DetailContainer label={'Field Size'} value={String(field.fieldSize)}/>
                    <LocationDetailContainer locationString={field.fieldLocation}/>
                </div>
                <div className="wrapper d-flex justify-content-between align-items-center mb-3">
                    <TagContainer label={'Crops'} values={[]}/>
                </div>
                <div className="wrapper d-flex justify-content-between align-items-center mb-3">
                    <TagContainer label={'Staff'} values={[]}/>
                </div>
                <div className="wrapper d-flex justify-content-between align-items-center mb-3">
                    <TagContainer label={'Equipment'} values={[]}/>
                </div>
            </div>
        </section>
    )
}