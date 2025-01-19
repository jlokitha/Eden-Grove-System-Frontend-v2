import styles from "./style/detailContainer.module.css"

interface TagContainerProps {
    label: string;
    values: string[];
}

export function TagContainer({label, values}: TagContainerProps) {
    return (
        <div className={styles.detailContainer} d-flex flex-column flex-wrap>
            <label className={styles.lbl}>{label}</label>
            <div className={`${styles.tagContainer} d-flex justify-content-start align-items-center mt-2`}>
                {values.map((value, index) => (
                    <p key={index}>{value}</p>
                ))}
            </div>
        </div>
    )
}