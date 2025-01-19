import { useState } from 'react';
import styles from "./style/inputField.module.css";

interface PasswordInputFieldProps {
    onChange: (value: string) => void;
}

export function PasswordInputField({ onChange }: PasswordInputFieldProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className={`${styles.input} d-flex align-items-center`}>
            <img src="/src/assets/icons/password.svg" alt="password icon" />
            <div className="d-flex justify-content-center align-items-center">
                <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Password"
                    required
                    onChange={(e) => { onChange(e.target.value) }}
                    onInput={e => e.currentTarget.setCustomValidity('')}
                />
                <img
                    className={styles.visibilityToggle}
                    src={isPasswordVisible ? "/src/assets/icons/eye-open.svg" : "/src/assets/icons/eye-close.svg"}
                    alt="eye toggle icon"
                    onClick={togglePasswordVisibility}
                />
            </div>
        </div>
    );
}