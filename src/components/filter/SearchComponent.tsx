import styles from "./style/filterComponent.module.css"

interface SearchComponentProps {
    placeholder: string;
}

export function SearchComponent(props: SearchComponentProps) {
    return (
        <div className={`${styles.filterComponent} d-flex flex-column justify-content-left`}>
            <label>What are you looking for?</label>
            <input type="text" placeholder={props.placeholder}/>
        </div>
    );
}