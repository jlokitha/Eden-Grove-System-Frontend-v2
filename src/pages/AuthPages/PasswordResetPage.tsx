import {FormLogo} from "../../components/registration/FormLogo.tsx";
import {TitleContainer} from "../../components/registration/TitleContainer.tsx";
import {useState} from "react";
import {PasswordInputField} from "../../components/registration/PasswordInputField.tsx";
import styles from "./style/authPages.module.css";
import {PreviousPageBtn} from "../../components/registration/PreviousPageBtn.tsx";
import {NextPageBtn} from "../../components/registration/NextPageBtn.tsx";
import {useNavigate} from "react-router-dom";

export function PasswordResetPage() {
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const navigation = useNavigate();

    const handlePrevious = () => {
        navigation('/auth/sign-in');
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(`Resetting password with new password: ${newPassword} and confirm password: ${confirmPassword}`);
        navigation('/auth/sign-in');
    };

    return (
        <div className="d-flex flex-column align-items-center" id={styles.inputContainer}>
            <FormLogo/>
            <TitleContainer title={'Reset Password'} subtitle={'Please enter a new password to reset your account password.'}/>

            <form>
                <PasswordInputField onChange={setNewPassword}/>
                <PasswordInputField onChange={setConfirmPassword}/>

                <div className="d-flex justify-content-between align-items-center" id={styles.buttonContainer}>
                    <PreviousPageBtn onClick={handlePrevious} text={'Back'} />
                    <NextPageBtn text={'Next'} onClick={handleSubmit} />
                </div>
            </form>
        </div>
    )
}