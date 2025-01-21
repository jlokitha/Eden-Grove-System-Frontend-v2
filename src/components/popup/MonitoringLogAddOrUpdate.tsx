import {MonitoringLog} from "../../model/MonitoringLog.ts";
import {TitleContainer} from "../form/TitleContainer.tsx";
import styles from "./style/addOrUpdate.module.css";
import {useEffect, useState} from "react";
import {ImageInputContainer} from "../form/ImageInputContainer.tsx";
import {SelectField} from "../form/SelectField.tsx";
import {TextArea} from "../form/TextArea.tsx";
import {ButtonContainer} from "../form/ButtonContainer.tsx";
import {Field} from "../../model/Field.ts";
import {useSelector} from "react-redux";
import {SelectFieldWithCount} from "../form/SelectFieldWithCount.tsx";

interface MonitoringLogAddOrUpdateProps {
    type: "save" | "update";
    logId?: string;
    onSubmit: (event: React.FormEvent, log: MonitoringLog) => void;
    onClose: () => void;
}

interface RootState {
    log: MonitoringLog[];
}

export function MonitoringLogAddOrUpdate(props: MonitoringLogAddOrUpdateProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [field, setField] = useState<string>('');
    const [observation, setObservation] = useState<string>('');
    const [crop, setCrop] = useState<string[]>([]);
    const [staff, setStaff] = useState<string[]>([]);

    const logs = useSelector((state: RootState) => state.log);

    useEffect(() => {
        if (props.type === "update" && props.logId && logs) {
            const initialData = logs.find((log: MonitoringLog) => log.logCode === props.logId);

            if (initialData) {
                setField(initialData.field.fieldName);
                setObservation(initialData.observation);
                setSelectedImage(initialData.observedImage);
            }
        }
    }, [logs, props.logId, props.type]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const data = new MonitoringLog(
            '',
            new Date(),
            observation,
            selectedImage || '',
            new Field('', '', 0, '', '', '', '', [], [], []),
            [],
            [],
        )
        props.onSubmit(event, data);
    }

    const handleImageSelect = (image: string | null) => {
        setSelectedImage(image);
    };

    return (
        <section id={styles.addOrUpdate}>
            <TitleContainer title={props.type === 'save' ? 'Add Log' : 'Update Log'} onClose={props.onClose}/>

            <form className={styles.mainContent}>
                <h3>Details</h3>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center`}>
                    <ImageInputContainer value={selectedImage!} onImageSelect={handleImageSelect}/>
                    <div className={`${styles.wrapper}`}>
                        <SelectField label={'Field'} value={field} options={[]} onSelected={setField}/>
                        <SelectFieldWithCount label={'Crop'} secondLabel={'Crop'} options={[]} selectedValues={[]} onChange={setCrop}/>
                        <SelectFieldWithCount label={'Staff'} secondLabel={'Staff'} options={[]} selectedValues={[]} onChange={setStaff}/>
                    </div>
                </div>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center`}>
                    <TextArea label={'Observation'} placeholder={'Enter Observation of the field....'} value={observation} onChange={setObservation}/>
                </div>

                <ButtonContainer type={props.type} onClick={handleSubmit}/>
            </form>
        </section>
    )
}