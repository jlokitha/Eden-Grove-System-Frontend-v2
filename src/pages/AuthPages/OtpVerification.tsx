import { FormLogo } from "../../components/registration/FormLogo.tsx";
import { TitleContainer } from "../../components/registration/TitleContainer.tsx";
import styles from "./style/authPages.module.css";
import { PreviousPageBtn } from "../../components/registration/PreviousPageBtn.tsx";
import { NextPageBtn } from "../../components/registration/NextPageBtn.tsx";
import { useNavigate } from "react-router-dom";
import { OtpNumberField } from "../../components/registration/OtpNumberField.tsx";
import { useOtp } from "../../store/OtpProvider.tsx";
import {useRef} from "react";

export function OtpVerification() {
    const { otp, setOtp, otpAction } = useOtp();
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const navigation = useNavigate();

    const handleChange = (value: string, index: number) => {
        if (/^\d*$/.test(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

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

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(`Verifying OTP: ${otp.join('')}`);
        if (otpAction === 'signUp') {
            navigation('/auth/sign-up');
        } else if (otpAction === 'passwordReset') {
            navigation('/auth/password-reset');
        }
    };

    const handlePrevious = () => {
        navigation('/auth/otp-request');
    };

    const handleResend = () => {
        console.log('Resending OTP');
    };

    return (
        <div className="d-flex flex-column align-items-center" id={styles.inputContainer}>
            <FormLogo />
            <TitleContainer title={'OTP Verification'} subtitle={'Enter the 6 digit code sent to your email'} />

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
                    <PreviousPageBtn onClick={handlePrevious} text={'Back'} />
                    <NextPageBtn text={'Next'} onClick={handleSubmit} />
                </div>
            </form>

            <p>
                Didn’t receive OTP?
                <a onClick={handleResend}>Resend OTP</a>
            </p>
        </div>
    );
}