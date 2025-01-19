import styles from "./style/formInput.module.css"

interface TextAreaProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export function TextArea(props: TextAreaProps) {
    return (
        <div className="detail-container d-flex flex-column">
            <label className="lbl">{props.label}</label>
            <textarea
                rows={4}
                placeholder={props.placeholder}
                className={styles.textArea}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            ></textarea>
        </div>
    )
}