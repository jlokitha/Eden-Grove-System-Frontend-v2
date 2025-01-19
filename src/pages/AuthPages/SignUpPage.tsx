import {FormLogo} from "../../components/registration/FormLogo.tsx";
import {TitleContainer} from "../../components/registration/TitleContainer.tsx";
import {EmailInputField} from "../../components/registration/EmailInputField.tsx";
import {PasswordInputField} from "../../components/registration/PasswordInputField.tsx";
import {useState} from "react";
import styles from "./style/authPages.module.css";
import {NextPageBtn} from "../../components/registration/NextPageBtn.tsx";
import {Link} from "react-router";
import {useNavigate} from "react-router-dom";

export function SignUpPage() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigation = useNavigate();

    const handleSubmit = () => {
        console.log(`Signing up with email: ${email} and password: ${password}`);
        navigation('/');
    }

    return (
        <div className="d-flex flex-column align-items-center" id={styles.inputContainer}>
            <FormLogo/>
            <TitleContainer title={'Sign Up Here!'} subtitle={'Welcome to Eden Grove - Let’s create your account'}/>

            <form>
                <EmailInputField onChange={setEmail}/>
                <PasswordInputField onChange={setPassword}/>

                <div className="d-flex justify-content-end" id={styles.buttonContainer}>
                    <NextPageBtn text={'Sign Up'} onClick={handleSubmit}/>
                </div>
            </form>

            <p>
                Already have an account
                <Link to={'/auth/sign-in'}>Sign in!</Link>
            </p>
        </div>
    )
}