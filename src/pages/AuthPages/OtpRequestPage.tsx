import styles from "./style/authPages.module.css";
import {FormLogo} from "../../components/registration/FormLogo.tsx";
import {TitleContainer} from "../../components/registration/TitleContainer.tsx";
import {useState} from "react";
import {EmailInputField} from "../../components/registration/EmailInputField.tsx";
import {NextPageBtn} from "../../components/registration/NextPageBtn.tsx";
import {PreviousPageBtn} from "../../components/registration/PreviousPageBtn.tsx";
import {useNavigate} from "react-router-dom";

export function OtpRequestPage() {
    const [email, setEmail] = useState<string>('');

    const navigation = useNavigate();

    const handleSubmit = () => {
        console.log(`Requesting OTP for email: ${email}`);
        navigation('/auth/otp-verification');
    }

    const handlePrevious = () => {
        navigation('/auth/sign-in');
    }

    return (
        <div className="d-flex flex-column align-items-center" id={styles.inputContainer}>
            <FormLogo/>
            <TitleContainer
                title={'OTP Request'}
                subtitle={'Please enter the email address registered in the system to receive an OTP.'}
            />

            <form>
                <EmailInputField onChange={setEmail}/>

                <div className="d-flex justify-content-end align-items-center" id={styles.buttonContainer}>
                    <PreviousPageBtn onClick={handlePrevious} text={'Back'}/>
                    <NextPageBtn text={'Send Otp'} onClick={handleSubmit}/>
                </div>
            </form>
        </div>
    )
}