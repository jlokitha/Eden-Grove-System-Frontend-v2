import styles from "./style/formInput.module.css"

interface SelectFieldProps {
    label: string;
    value: string;
    options: { value: string; text: string }[];
    onSelected: (value: string) => void;
}

export function SelectField(props: SelectFieldProps) {
    return (
        <div className={`${styles.detailContainer} d-flex flex-column`}>
            <label className={styles.lbl}>{props.label}</label>
            <select
                required
                className={styles.select}
                value={props.value}
                onChange={(e) => props.onSelected(e.target.value)}
                onInput={(e) => e.currentTarget.setCustomValidity('')}
            >
                {props.options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
    )
}