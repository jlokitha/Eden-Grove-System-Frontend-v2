import {FormLogo} from "../../components/registration/FormLogo.tsx";
import {TitleContainer} from "../../components/registration/TitleContainer.tsx";
import styles from "./style/authPages.module.css";
import {PreviousPageBtn} from "../../components/registration/PreviousPageBtn.tsx";
import {NextPageBtn} from "../../components/registration/NextPageBtn.tsx";
import {useNavigate} from "react-router-dom";
import {useState, useRef} from "react";
import {OtpNumberField} from "../../components/registration/OtpNumberField.tsx";

export function OtpVerification() {
    const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const navigation = useNavigate();

    const handleChange = (value: string, index: number) => {
        if (/^\d*$/.test(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Focus on the next input field
            if (value && index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = () => {
        console.log('OTP Verification:', otp.join(''));
    }

    const handlePrevious = () => {
        navigation('/otp-request');
    }

    const handleResend = () => {
        console.log('Resending OTP');
    }

    return (
        <div className="d-flex flex-column align-items-center" id={styles.inputContainer}>
            <FormLogo/>
            <TitleContainer title={'OTP Verification'} subtitle={'Enter the 6 digit code sent to your email'}/>

            <form>
                <div className="d-flex align-items-center">
                    {otp.map((value, index) => (
                        <OtpNumberField
                            key={index}
                            index={index}
                            value={value}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            inputRef={(el) => inputRefs.current[index] = el}
                        />
                    ))}
                </div>

                <div className="d-flex justify-content-end align-items-center" id={styles.buttonContainer}>
                    <PreviousPageBtn onClick={handlePrevious} text={'Back'}/>
                    <NextPageBtn text={'Next'} onClick={handleSubmit}/>
                </div>
            </form>

            <p>
                Didn’t receive OTP?
                <a onClick={handleResend}>Resend OTP</a>
            </p>
        </div>
    )
}