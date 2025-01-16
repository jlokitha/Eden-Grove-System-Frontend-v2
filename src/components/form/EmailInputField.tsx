import styles from "./style/formInput.module.css"

interface EmailInputFieldProps {
    label: string;
    onChange: (value: string) => void;
}

export function EmailInputField(props: EmailInputFieldProps) {
    return (
        <div className={`${styles.detailContainer} d-flex flex-column`}>
            <label className={styles.lbl}>{props.label}</label>
            <input
                type="email"
                required
                className={styles.input}
                onChange={(e) => props.onChange(e.target.value)}
                onInput={(e) => e.currentTarget.setCustomValidity('')}
            />
        </div>
    )
}