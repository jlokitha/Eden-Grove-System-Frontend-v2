import styles from "./style/detailContainer.module.css"

interface SelectFieldWithCountProps {
    label: string;
    secondLabel: string;
    options: { value: string; label: string }[];
    selectedValues: string[];
    onChange: (selectedValues: string[]) => void;
}

export function SelectFieldWithCount(props: SelectFieldWithCountProps) {
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        props.onChange(selectedOptions);
    };

    return (
        <div className={`${styles.detailContainer} d-flex flex-column`}>
            <div className="d-flex justify-content-between align-items-center">
                <label className="lbl">{props.label}</label>
                <label className="count-tag">{props.secondLabel}: {props.selectedValues.length}</label>
            </div>
            <select
                multiple
                value={props.selectedValues}
                onChange={handleSelectChange}
                className="form-select"
            >
                {props.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}