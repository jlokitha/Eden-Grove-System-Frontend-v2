import { useState } from 'react';
import styles from './style/PasswordInputField.module.css';

interface PasswordInputFieldProps {
    placeholder: string;
    onChange: (value: string) => void;
}

export function PasswordInputField(props: PasswordInputFieldProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className={`${styles.input} d-flex align-items-center`}>
            <div className="d-flex justify-content-center align-items-center">
                <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder={props.placeholder}
                    required
                    onChange={(e) => props.onChange(e.target.value)}
                    onInput={(e) => { e.currentTarget.setCustomValidity('') }}
                />
                <img
                    className={styles.visibilityToggle}
                    src={isPasswordVisible ? '/src/assets/icons/eye-open.svg' : '/src/assets/icons/eye-close.svg'}
                    alt="Toggle visibility"
                    onClick={togglePasswordVisibility}
                />
            </div>
        </div>
    );
}