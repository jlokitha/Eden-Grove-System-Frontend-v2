import styles from "./style/detailContainer.module.css"

interface DetailContainerProps {
    label: string;
    value: string;
}

export function DetailContainer({label, value}: DetailContainerProps) {
    return (
        <div className={styles.detailContainer}>
            <label className={styles.lbl}>{label}</label>
            <label>{value}</label>
        </div>
    )
}