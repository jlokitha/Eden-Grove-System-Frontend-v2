import styles from "./style/filterComponent.module.css"

interface SearchComponentProps {
    placeholder: string;
    onChange: (value: string) => void;
}

export function SearchComponent(props: SearchComponentProps) {
    return (
        <div className={`${styles.filterComponent} d-flex flex-column justify-content-left`}>
            <label>What are you looking for?</label>
            <input type="text" placeholder={props.placeholder} onChange={(e) => props.onChange(e.target.value)}/>
        </div>
    );
}