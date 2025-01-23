import {TitleContainer} from "../form/TitleContainer.tsx";
import {Equipment} from "../../model/Euipment.ts";
import styles from "./style/addOrUpdate.module.css";
import {useEffect, useState} from "react";
import {TextInputField} from "../form/TextInputField.tsx";
import {SelectField} from "../form/SelectField.tsx";
import {ButtonContainer} from "../form/ButtonContainer.tsx";
import {useSelector} from "react-redux";

interface EquipmentAddOrUpdateProps {
    type: "save" | "update";
    equipmentId?: string;
    onSubmit: (event: React.FormEvent, equipment: Equipment) => void;
    onClose: () => void;
}

interface RootState {
    equipment: Equipment[];
}

export function EquipmentAddOrUpdate(props: EquipmentAddOrUpdateProps) {
    const [equipmentName, setEquipmentName] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] = useState('');
    const [staff, setStaff] = useState<string>('');
    const [field, setField] = useState<string>('');
    
    const equipments = useSelector((state: RootState) => state.equipment);

    useEffect(() => {
        console.log(props.equipmentId);
        if (props.type == "update" && props.equipmentId) {
            const initialData = equipments.find((equipment: Equipment) => equipment.equipmentId === props.equipmentId);

            console.log(initialData)
            if (initialData) {
                setEquipmentName(initialData.name);
                setType(initialData.type);
                setStatus(initialData.status);
                setStaff(initialData.staff);
                setField(initialData.field);
            }
        }
    }, [equipments, props.equipmentId, props.type]);

    const statusOptions = [
        {value: 'AVAILABLE', text: 'Available'},
        {value: 'OUT_OF_SERVICE', text: 'Out of Service'},
        {value: 'IN_USE', text: 'In Use'},
        {value: 'UNDER_MAINTENANCE', text: 'Under Maintenance'}
    ];

    const handleSubmit = () => {
    }
    
    return (
        <section id={styles.addOrUpdate}>
            <TitleContainer title={props.type === 'save' ? 'Add Equipment' : 'Update Equipment'} onClose={props.onClose}/>

            <form className={styles.mainContent}>
                <h3>Details</h3>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center`}>
                    <TextInputField label={'Equipment Name'} value={equipmentName} onChange={setEquipmentName}/>
                    <SelectField label={'Type'} value={type} options={[]} onSelected={setType}/>
                </div>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center`}>
                   <SelectField label={'Status'} value={status} options={statusOptions} onSelected={setStatus}/>
                </div>

                <h3 className="mt-2">Optional</h3>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center`}>
                    <SelectField label={'Staff'} value={staff} options={[]} onSelected={setStaff}/>
                    <SelectField label={'Field'} value={field} options={[]} onSelected={setField}/>
                </div>

                <ButtonContainer type={props.type} onClick={handleSubmit}/>
            </form>
        </section>
    )
}