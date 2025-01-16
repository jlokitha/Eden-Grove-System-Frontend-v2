import styles from "./style/filterComponent.module.css"

interface NumberFieldComponentProps {
    label: string;
    onChange: (value: string) => void;
}

export function NumberFieldComponent(props: NumberFieldComponentProps) {
    return (
        <div className={`${styles.filterComponent} d-flex flex-column justify-content-left`}>
            <label>{props.label}</label>
            <input type="number" onChange={(e) => props.onChange(e.target.value)}/>
        </div>
    )
}