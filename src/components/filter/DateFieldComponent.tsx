import styles from "./style/filterComponent.module.css"

interface DateFieldComponentProps {
    label: string;
    onChange: (value: string) => void;
}

export function DateFieldComponent(props: DateFieldComponentProps) {
    return (
        <div className={`${styles.filterComponent} d-flex flex-column justify-content-left`}>
            <label>{props.label}</label>
            <input type="date" onChange={(e) => props.onChange(e.target.value)}/>
        </div>
    )
}