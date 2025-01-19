import styles from "./style/CountCard.module.css";

interface CountCardProps {
    icon: string;
    alt: string;
    title: string;
    count: number;
}

export function CountCard(props: CountCardProps) {
    return (
        <div className={`${styles.countCard} d-flex justify-content-start align-items-center`}>
            <div
                className={`${styles.iconContainer} d-flex justify-content-center align-items-center`}
            >
                <img
                    src={`${props.icon}`}
                    alt={props.alt}
                />
            </div>
            <div className={styles.textWrapper}>
                <p>{props.title}</p>
                <div className={styles.line}></div>
                <h2>{props.count}</h2>
            </div>
        </div>
    )
}