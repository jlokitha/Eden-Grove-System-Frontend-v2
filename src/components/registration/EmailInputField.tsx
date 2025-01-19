import styles from "./style/inputField.module.css";

interface EmailInputFieldProps {
    onChange: (value: string) => void;
}

export function EmailInputField({onChange}: EmailInputFieldProps) {
    return (
        <div className={`${styles.input} d-flex align-items-center`}>
            <img src="/src/assets/icons/username.svg" alt="profile icon"/>
            <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => {onChange(e.target.value)}}
                onInput={(e) => e.currentTarget.setCustomValidity('')}
            />
        </div>
    )
}