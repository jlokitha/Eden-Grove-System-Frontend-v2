import styles from "./style/titleContainer.module.css"

export function TitleContainer({title, subtitle}: {title: string, subtitle: string}) {
    return (
        <div id={styles.titleContainer}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}