import {FormLogo} from "../../components/registration/FormLogo.tsx";
import styles from "./style/authPages.module.css";
import {TitleContainer} from "../../components/registration/TitleContainer.tsx";
import {EmailInputField} from "../../components/registration/EmailInputField.tsx";
import {useState} from "react";
import {PasswordInputField} from "../../components/registration/PasswordInputField.tsx";
import {Link} from "react-router";
import {NextPageBtn} from "../../components/registration/NextPageBtn.tsx";
import {useOtp} from "../../store/OtpProvider.tsx";
import {useNavigate} from "react-router-dom";

export function SignInPage() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { setOtpAction } = useOtp();
    const navigation = useNavigate()

    const handleSubmit = () => {
        console.log(`Signing in with email: ${email} and password: ${password}`);
        navigation('/');
    }

    return (
        <div className="d-flex flex-column align-items-center" id={styles.inputContainer}>
            <FormLogo/>
            <TitleContainer title={'Sign In Here!'} subtitle={'Welcome back to Eden Grove!'}/>

            <form>
                <EmailInputField onChange={setEmail}/>
                <PasswordInputField onChange={setPassword}/>

                <div className="d-flex justify-content-between align-items-center" id={styles.buttonContainer}>
                    <Link to={'/auth/otp-request'} onClick={() => setOtpAction('passwordReset')}>Forgot Password?</Link>
                    <NextPageBtn text={'Sign In'} onClick={handleSubmit}/>
                </div>
            </form>

            <p>
                Don’t have an account? Create your account
                <Link to={'/auth/otp-request'} onClick={() => setOtpAction('signUp')}>here!</Link>
            </p>
        </div>
    )
}