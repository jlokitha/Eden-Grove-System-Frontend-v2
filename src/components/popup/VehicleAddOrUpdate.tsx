import {TitleContainer} from "../form/TitleContainer.tsx";
import {Staff} from "../../model/Staff.ts";
import styles from "./style/addOrUpdate.module.css";
import {TextInputField} from "../form/TextInputField.tsx";
import {useEffect, useState} from "react";
import {SelectField} from "../form/SelectField.tsx";
import {TextArea} from "../form/TextArea.tsx";
import {ButtonContainer} from "../form/ButtonContainer.tsx";
import {useSelector} from "react-redux";
import {Vehicle} from "../../model/Vehicle.ts";

interface AddVehicleProps {
    type: "save" | "update";
    vehicleId?: string;
    onSubmit: (event: React.FormEvent, staff: Staff) => void;
    onClose: () => void;
}

interface RootState {
    vehicle: Vehicle[];
}

export function VehicleAddOrUpdate(props: AddVehicleProps) {
    const [licensePlate, setLicensePlate] = useState('');
    const [category, setCategory] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [status, setStatus] = useState('');
    const [remark, setRemark] = useState('');
    const [staff, setStaff] = useState<Staff[]>([]);

    const [staffOptions, setStaffOptions] = useState<{ value: string, text: string }[]>([]);
    const vehicles = useSelector((state: RootState) => state.vehicle);

    useEffect(() => {
        console.log('VehicleAddOrUpdate: useEffect', props.vehicleId);
        if (props.type === "update" && props.vehicleId) {
            const initialData = vehicles.find((vehicle: Vehicle) => vehicle.vehicleCode === props.vehicleId);

            if (initialData) {
                setLicensePlate(initialData.licensePlateNo);
                setCategory(initialData.category);
                setFuelType(initialData.fuelType);
                setStatus(initialData.status);
                setRemark(initialData.remarks);
                console.log('VehicleAddOrUpdate: initialData', initialData);
            }
        }
        
        const options = staff.map(s => ({ value: s.id, text: s.name }));
        setStaffOptions(options);
    }, [props.type, props.vehicleId, staff, vehicles]);

    const fuelTypeOptions = [
        {value: '', text: 'Fuel Type'},
        {value: 'DIESEL', text: 'Diesel'},
        {value: 'PETROL', text: 'Petrol'}
    ];

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
            <TitleContainer title={props.type === 'save' ? 'Add Vehicle' : 'Update Vehicle'} onClose={props.onClose}/>

            <form className={styles.mainContent}>
                <h3>Details</h3>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center`}>
                    <TextInputField label={'License plate number'} value={licensePlate} onChange={setLicensePlate}/>
                    <TextInputField label={'Category'} value={category} onChange={setCategory}/>
                </div>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center`}>
                    <SelectField label={'Fuel Type'} value={fuelType} options={fuelTypeOptions} onSelected={setFuelType}/>
                    <SelectField label={'Status'} value={status} options={statusOptions} onSelected={setStatus}/>
                </div>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center`}>
                    <TextArea label={'Remark'} placeholder={'Enter remark of the vehicle....'} value={remark} onChange={setRemark}/>
                </div>

                <h3 className="mt-2">Optional</h3>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center`}>
                    <SelectField label={'Staff'} value={""} options={statusOptions} onSelected={handleSubmit}/>
                </div>

                <ButtonContainer type={props.type} onClick={handleSubmit}/>
            </form>
        </section>
    )
}