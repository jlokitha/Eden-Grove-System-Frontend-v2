import styles from "./style/formInput.module.css"

interface DateInputFieldProps {
    label: string;
    value: Date | null;
    onChange: (date: Date | null) => void;
}

export function DateInputField(props: DateInputFieldProps) {
    return (
        <div className={`${styles.detailContainer} d-flex flex-column`}>
            <label className={styles.lbl}>{props.label}</label>
            <input
                type="date"
                required
                className={styles.input}
                value={props.value ? props.value.toISOString().slice(0, 10) : ''}
                onChange={(e) => props.onChange(e.target.value ? new Date(e.target.value) : null)}
                onInput={(e) => e.currentTarget.setCustomValidity('')}
            />
        </div>
    )
}