import styles from "./style/formInput.module.css"

interface TextInputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

export function TextInputField(props: TextInputFieldProps) {
    return (
        <div className={`${styles.detailContainer} d-flex flex-column`}>
            <label className={styles.lbl}>{props.label}</label>
            <input
                type="text"
                required
                className={styles.input}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                onInput={(e) => e.currentTarget.setCustomValidity('')}
            />
        </div>
    )
}