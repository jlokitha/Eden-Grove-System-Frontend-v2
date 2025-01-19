import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import styles from "./style/view.module.css";
import {CloseBtn} from "../buttons/CloseBtn.tsx";
import {DetailContainer} from "../form/DetailContainer.tsx";
import {Staff} from "../../model/Staff.ts";

interface StaffViewProps {
    staffId: string;
    onClose: () => void;
}

interface RootState {
    staff: Staff[];
}

export function StaffView({staffId, onClose}: StaffViewProps) {
    const [staff, setStaff] = useState<Staff | null>(null);
    const staffs = useSelector((state: RootState) => state.staff);

    useEffect(() => {
        const selectedStaff = staffs.find((s: Staff) => s.id === staffId);
        setStaff(selectedStaff || null);
    }, [staffId, staffs]);

    if (!staff) {
        return null;
    }

    return (
        <section id={styles.viewPopup}>
            <div className={`${styles.titleContainer} d-flex justify-content-between align-items-center`}>
                <h1>Staff Details</h1>
                <CloseBtn onClick={onClose}/>
            </div>
            <div className={styles.mainContainer}>
                <DetailContainer label={'Name'} value={staff.name}/>
                <DetailContainer label={'Gender'} value={staff.gender}/>
                <DetailContainer label={'Date of Birth'} value={staff.dob?.toLocaleDateString() || ''}/>
                <DetailContainer label={'Address'} value={staff.address}/>
                <DetailContainer label={'Email'} value={staff.email}/>
                <DetailContainer label={'Mobile'} value={staff.mobile}/>
                <DetailContainer label={'Postal Code'} value={staff.postalCode}/>
                <DetailContainer label={'Designation'} value={staff.designation}/>
                <DetailContainer label={'Role'} value={staff.role}/>
                <DetailContainer label={'Joined Date'} value={staff.joinedDate?.toLocaleDateString() || ''}/>
            </div>
        </section>
    );
}