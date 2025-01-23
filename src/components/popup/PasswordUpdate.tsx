import {CloseBtn} from "../buttons/CloseBtn.tsx";
import styles from "./style/PasswordUpdate.module.css"
import {PasswordInputField} from "../form/PasswordInputField.tsx";
import {useState} from "react";
import {UpdateBtn} from "../buttons/UpdateBtn.tsx";
import {UserProfileDetails} from "../form/UserProfileDetails.tsx";

interface PasswordUpdatePopupProps {
    onClose: () => void;
}

export function PasswordUpdate(props: PasswordUpdatePopupProps) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUpdate = () => {
        if (newPassword === confirmPassword) {
            alert('Password updated successfully');
        } else {
            alert('Passwords do not match');
        }
    }

    return (
        <section className={styles.passwordUpdatePopup}>
            <div className={`${styles.titleContainer} d-flex justify-content-between align-items-center`}>
                <h1>Update Password</h1>
                <CloseBtn onClick={props.onClose}/>
            </div>

            <UserProfileDetails name={'Janindu Lokitha'} email={'lokitha@gmail.com'} designation={'Manager'}/>

            <form className="main-content">
                <PasswordInputField placeholder={'New Password'} onChange={setNewPassword}/>
                <PasswordInputField placeholder={'Confirm Password'} onChange={setConfirmPassword}/>

                <UpdateBtn onClick={handleUpdate}/>
            </form>
        </section>
    )
}