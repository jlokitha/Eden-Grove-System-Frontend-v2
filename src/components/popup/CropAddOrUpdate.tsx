import styles from "./style/addOrUpdate.module.css";
import {Crop} from "../../model/Crop.ts";
import {useState} from "react";
import {TitleContainer} from "../form/TitleContainer.tsx";
import {ImageInputContainer} from "../form/ImageInputContainer.tsx";
import {TextInputField} from "../form/TextInputField.tsx";
import {SelectField} from "../form/SelectField.tsx";
import {ButtonContainer} from "../form/ButtonContainer.tsx";

interface CropAddOrUpdateProps {
    type: "save" | "update";
    cropCode?: string;
    onSubmit: (event: React.FormEvent, crop: Crop) => void;
    onClose: () => void;
}

export function CropAddOrUpdate(props: CropAddOrUpdateProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [commonName, setCommonName] = useState('');
    const [scientificName, setScientificName] = useState('');
    const [category, setCategory] = useState('');
    const [season, setSeason] = useState('');
    const [field, setField] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const data = new Crop(
            props.cropCode || '',
            commonName,
            scientificName,
            category,
            season,
            selectedImage || '',
            field
        )
        props.onSubmit(event, data);
    }

    const handleImageSelect = (image: string | null) => {
        setSelectedImage(image);
    };

    return (
        <section id={styles.addOrUpdate}>
            <TitleContainer title={props.type === 'save' ? 'Add Crop' : 'Update Crop'} onClose={props.onClose}/>

            <form className={styles.mainContent}>
                <h3>Details</h3>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center`}>
                    <ImageInputContainer onImageSelect={handleImageSelect}/>
                    <div className={`${styles.wrapper}`}>
                        <TextInputField label={'Common Name'} value={commonName} onChange={setCommonName}/>
                        <TextInputField label={'Scientific Name'} value={scientificName} onChange={setScientificName}/>
                    </div>
                </div>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center`}>
                    <TextInputField label={'Category'} value={category} onChange={setCategory}/>
                    <TextInputField label={'Season'} value={season} onChange={setSeason}/>
                </div>

                <h3>Optional</h3>
                <SelectField label={'Field'} value={field} options={[]} onSelected={setField}/>

                <ButtonContainer type={props.type} onClick={handleSubmit}/>
            </form>
        </section>
    )
}