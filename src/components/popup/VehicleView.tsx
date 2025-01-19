import {Vehicle} from "../../model/Vehicle.ts";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import styles from "./style/view.module.css";
import {CloseBtn} from "../buttons/CloseBtn.tsx";
import {DetailContainer} from "../form/DetailContainer.tsx";
import {TagContainer} from "../form/TagContainer.tsx";
import {AvailabilityLabel} from "../form/AvailabilityLable.tsx";

interface VehicleViewProps {
    vehicleId: string;
    onClose: () => void;
}

interface RootState {
    vehicle: Vehicle[];
}

export function VehicleView({vehicleId, onClose}: VehicleViewProps) {
    const [vehicle, setVehicle] = useState<Vehicle | null>(null);
    const vehicles = useSelector((state: RootState) => state.vehicle);

    useEffect(() => {
        const selectedVehicle = vehicles.find((v: Vehicle) => v.vehicleCode === vehicleId);
        setVehicle(selectedVehicle || null);
    }, [vehicleId, vehicles]);

    if (!vehicle) {
        return null;
    }

    return (
        <section className={styles.viewPopup}>
            <div className={`${styles.titleContainer} d-flex justify-content-between align-items-center`}>
                <h1>Vehicle Details</h1>
                <CloseBtn onClick={onClose}/>
            </div>
            <div>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center mb-3`}>
                    <DetailContainer label={'Vehicle Code'} value={vehicle.vehicleCode}/>
                    <DetailContainer label={'License Plate No'} value={vehicle.licensePlateNo}/>
                </div>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center mb-3`}>
                    <DetailContainer label={'Category'} value={vehicle.category}/>
                    <DetailContainer label={'Fuel Type'} value={vehicle.fuelType}/>
                </div>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center mb-3`}>
                    <DetailContainer label={'Remark'} value={vehicle.remarks}/>
                </div>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center`}>
                    {vehicle.staff && (
                        <TagContainer label={'Staff'} values={[vehicle.staff]}/>
                    )}
                    {vehicle.status && (
                        <AvailabilityLabel status={vehicle.status}/>
                    )}
                </div>

            </div>
        </section>
    )
}