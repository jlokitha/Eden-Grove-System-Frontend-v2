import styles from "./style/filterComponent.module.css"

interface SelectorComponentProps {
    label: string;
    options: { value: string; text: string }[];
}

export function SelectorComponent(props: SelectorComponentProps) {
    return (
        <div className={`${styles.filterComponent} d-flex flex-column justify-content-left`}>
            <label>{props.label}</label>
            <select>
                {props.options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
    );
}