import styles from "./style/addOrUpdate.module.css";
import {TitleContainer} from "../form/TitleContainer.tsx";
import {ImageInputContainer} from "../form/ImageInputContainer.tsx";
import {useEffect, useState} from "react";
import {TextInputField} from "../form/TextInputField.tsx";
import {SelectFieldWithCount} from "../form/SelectFieldWithCount.tsx";
import {ButtonContainer} from "../form/ButtonContainer.tsx";
import {Field} from "../../model/Field.ts";
import {useSelector} from "react-redux";
import {generateGoogleMapsLink} from "../../utils/LocationLinkGenerator.ts";

interface FieldAddOrUpdateProps {
    type: "save" | "update";
    fieldId?: string;
    onSubmit: (event: React.FormEvent, field: Field) => void;
    onClose: () => void;
}

interface RootState {
    field: Field[];
}

export function FieldAddOrUpdate(props: FieldAddOrUpdateProps) {
    const [selectedImage1, setSelectedImage1] = useState<string | null>(null);
    const [selectedImage2, setSelectedImage2] = useState<string | null>(null);
    const [fieldName, setFieldName] = useState('');
    const [fieldSize, setFieldSize] = useState('');
    const [fieldLocation, setFieldLocation] = useState('');
    const [staff, setStaff] = useState<string[]>([]);
    const [equipment, setEquipment] = useState<string[]>([]);
    
    const fields = useSelector((state: RootState) => state.field);

    useEffect(() => {
        if (props.type === 'update') {
            const field = fields.find(field => field.fCode === props.fieldId);
            if (field) {
                setSelectedImage1(field.fieldImage1);
                setSelectedImage2(field.fieldImage2);
                setFieldName(field.fieldName);
                setFieldSize(field.fieldSize.toString());
                setFieldLocation(generateGoogleMapsLink(field.fieldLocation));
                setStaff([]);
                setEquipment([]);
            }
        }
    }, [fields, props.fieldId, props.type]);

    const handleSubmit = () => {
        const data = new Field(
            props.fieldId || '',
            fieldName,
            Number(fieldSize),
            fieldLocation,
            selectedImage1 || '',
            selectedImage2 || '',
            ''
        )
        console.log(data);
    }

    const handleImage1Select = (image: string | null) => {
        setSelectedImage1(image);
    };

    const handleImage2Select = (image: string | null) => {
        setSelectedImage2(image);
    };

    return (
        <div id={styles.addOrUpdate}>
            <TitleContainer title={props.type === 'save' ? 'Add Field' : 'Update Field'} onClose={props.onClose}/>

            <form className={styles.mainContent}>
                <h3>Details</h3>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center`}>
                    <ImageInputContainer value={selectedImage1!} onImageSelect={handleImage1Select}/>
                    <ImageInputContainer value={selectedImage2!} onImageSelect={handleImage2Select}/>
                </div>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center`}>
                    <TextInputField label={'Field Name'} value={fieldName} onChange={setFieldName}/>
                    <TextInputField label={'Field Size (Sq.mt)'} value={fieldSize} onChange={setFieldSize}/>
                </div>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center`}>
                    <TextInputField label={'Field Location (Please enter google map web URL)'} value={fieldLocation}
                                    onChange={setFieldLocation}/>
                </div>

                <h3>Optional</h3>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center`}>
                    <SelectFieldWithCount label={'Staff'} secondLabel={'Staff'} options={[]} selectedValues={staff}
                                          onChange={setStaff}/>
                    <SelectFieldWithCount label={'Equipment'} secondLabel={'Equipment'} options={[]}
                                          selectedValues={equipment} onChange={setEquipment}/>
                </div>

                <ButtonContainer type={props.type} onClick={handleSubmit}/>
            </form>
        </div>
    )
}