import styles from "./style/searchButton.module.css"

interface SearchButtonProps {
    onClick: () => void;
}

export function SearchButton(props: SearchButtonProps) {
    return (
        <button className={styles.search} onClick={props.onClick}>Search</button>
    )
}