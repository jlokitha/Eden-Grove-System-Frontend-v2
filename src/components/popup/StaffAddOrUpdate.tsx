import {TextInputField} from "../form/TextInputField.tsx";
import {useEffect, useState} from "react";
import {SelectField} from "../form/SelectField.tsx";
import {DateInputField} from "../form/DateInputField.tsx";
import {NumberInputField} from "../form/NumberInputField.tsx";
import {EmailInputField} from "../form/EmailInputField.tsx";
import {ButtonContainer} from "../form/ButtonContainer.tsx";
import {Staff} from "../../model/Staff.ts";
import {useSelector} from "react-redux";
import {TitleContainer} from "../form/TitleContainer.tsx";
import styles from "./style/addOrUpdate.module.css"

interface AddStaffProps {
    type: "save" | "update";
    staffId?: string;
    onSubmit: (event: React.FormEvent, staff: Staff) => void;
    onClose: () => void;
}

interface RootState {
    staff: Staff[];
}

export function StaffAddOrUpdate(props: AddStaffProps) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [designation, setDesignation] = useState('');
    const [dob, setDob] = useState<Date | null>(null);
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [joinedDate, setJoinedDate] = useState<Date | null>(null);

    const staffs = useSelector((state: RootState) => state.staff);

    useEffect(() => {
        if (props.type === "update" && props.staffId) {
            const initialData = staffs.find((staff: Staff) => staff.id === props.staffId);

            if (initialData) {
                const [first, last] = initialData.name.split(' ');
                setFirstName(first);
                setLastName(last);
                setGender(initialData.gender);
                setDesignation(initialData.designation);
                setDob(initialData.dob);
                setAddress(initialData.address);
                setPostalCode(initialData.postalCode);
                setEmail(initialData.email);
                setMobile(initialData.mobile);
                setJoinedDate(initialData.joinedDate);
            }
            console.log(initialData);
        }
    }, [props.type, props.staffId, staffs]);

    const handleSubmit = () => {
        const data = new Staff(
            props.staffId || '',
            firstName + " " + lastName,
            dob || new Date(),
            gender,
            designation,
            designation,
            email,
            mobile,
            address,
            postalCode,
            joinedDate || new Date(),
        );
        console.log(data);
    };

    const genderOptions = [
        {value: "", text: "Select a gender"},
        {value: "MALE", text: "MALE"},
        {value: "FEMALE", text: "FEMALE"},
    ];

    const designationOptions = [
        {value: "", text: "Select a designation"},
        {value: "MANAGER", text: "MANAGER"},
        {value: "SENIOR_ASSISTANT_MANAGER", text: "SENIOR_ASSISTANT_MANAGER"},
        {value: "ASSISTANT_MANAGER", text: "ASSISTANT_MANAGER"},
        {value: "ADMIN_AND_HR_STAFF", text: "ADMIN_AND_HR_STAFF"},
        {value: "OFFICE_ASSISTANT", text: "OFFICE_ASSISTANT"},
        {value: "SENIOR_AGRONOMIST", text: "SENIOR_AGRONOMIST"},
        {value: "AGRONOMIST", text: "AGRONOMIST"},
        {value: "SOIL_SCIENTIST", text: "SOIL_SCIENTIST"},
        {value: "SENIOR_TECHNICIAN", text: "SENIOR_TECHNICIAN"},
        {value: "TECHNICIAN", text: "TECHNICIAN"},
        {value: "SUPERVISOR", text: "SUPERVISOR"},
        {value: "LABOR", text: "LABOR"},
    ];

    return (
        <div id={styles.addOrUpdate}>
            <TitleContainer title={props.type === 'save' ? 'Add Staff' : 'Update Staff'} onClose={props.onClose}/>
            <form className={styles.mainContent}>
                <h3>Details</h3>
                <div className={`${styles.inputContainer} d-grid`}>
                    <TextInputField label={'First Name'} value={firstName} onChange={setFirstName}/>
                    <TextInputField label={'Last Name'} value={lastName} onChange={setLastName}/>
                    <SelectField label={'Gender'} value={gender} options={genderOptions} onSelected={setGender}/>
                    <SelectField label={'Designation'} value={designation} options={designationOptions} onSelected={setDesignation}/>
                    <DateInputField label={'Date of Birth'} value={dob} onChange={setDob}/>
                    <TextInputField label={'Address'} value={address} onChange={setAddress}/>
                    <NumberInputField label={'Postal Code'} value={postalCode} onChange={setPostalCode}/>
                    <EmailInputField label={'Email'} value={email} onChange={setEmail}/>
                    <NumberInputField label={'Mobile'} value={mobile} onChange={setMobile}/>
                    <DateInputField label={'Joined Date'} value={joinedDate} onChange={setJoinedDate}/>
                </div>

                <ButtonContainer type={props.type} onClick={handleSubmit}/>
            </form>
        </div>
    )
}