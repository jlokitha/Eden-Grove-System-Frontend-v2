import {Equipment} from "../../model/Euipment.ts";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import styles from "./style/view.module.css";
import {CloseBtn} from "../buttons/CloseBtn.tsx";
import {DetailContainer} from "../form/DetailContainer.tsx";
import {TagContainer} from "../form/TagContainer.tsx";

interface EquipmentViewProps {
    equipmentId: string;
    onClose: () => void;
}

interface RootState {
    equipment: Equipment[];
}

export function EquipmentView({equipmentId, onClose}: EquipmentViewProps) {
    const [equipment, setEquipment] = useState<Equipment | null>(null);
    const equipments = useSelector((state: RootState) => state.equipment);

    useEffect(() => {
        const selectedEquipment = equipments.find((e: Equipment) => e.equipmentId === equipmentId);
        setEquipment(selectedEquipment || null);
    }, [equipmentId, equipments]);

    if (!equipment) {
        return null;
    }

    return (
        <section className={styles.viewPopup}>
            <div className={`${styles.titleContainer} d-flex justify-content-between align-items-center`}            >
                <h1>Equipment Details</h1>
                <CloseBtn onClick={onClose}/>
            </div>
            <div>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center mb-3`}>
                    <DetailContainer label={'Equipment Code'} value={equipment.equipmentId}/>
                    <DetailContainer label={'Status'} value={equipment.status}/>
                </div>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center mb-3`}>
                    <DetailContainer label={'Equipment Name'} value={equipment.name}/>
                    <DetailContainer label={'Type'} value={equipment.type}/>
                </div>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center mb-3`}>
                    <TagContainer label={'Staff'} values={[equipment.staff]}/>
                    <TagContainer label={'Field'} values={[equipment.field]}/>
                </div>
            </div>
        </section>
    )
}