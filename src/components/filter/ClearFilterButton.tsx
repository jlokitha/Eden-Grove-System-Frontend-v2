import styles from "./style/clearFilterButton.module.css"

interface ClearFilterProps {
    onClick: () => void;
}

export function ClearFilterButton(props: ClearFilterProps) {
    return (
        <button className={styles.clearFilter} onClick={props.onClick}>
            <img src="/src/assets/icons/reset-filter.svg" alt="clear all icon"/>
        </button>
    )
}