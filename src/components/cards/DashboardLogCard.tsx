import styles from "./style/horizontalCard.module.css";
import {MonitoringLog} from "../../model/MonitoringLog.ts";

interface DashboardLogCardProps {
    key: string;
    log: MonitoringLog;
}

export function DashboardLogCard(props: DashboardLogCardProps) {
    return (
        <div className={`${styles.horizontalCard} d-flex justify-content-start align-items-center`}>
            <img
                // src={`data:image/png;base64,${props.log.observedImage}`}
                src={props.log.observedImage}
                alt="field image"/>
            <div className={`${styles.textContainer} d-flex flex-column`}>
                <label className={`${styles.cardTitle} ${styles.wrapText}`}>{props.log.logCode}</label>
                <label className={`${styles.cardText} ${styles.wrapText}`}>
                    {new Date(props.log.logDate).toISOString().slice(0, 10)}
                </label>
                <label className={styles.wrapText}>Field: {props.log.field.fieldName}</label>
            </div>
        </div>
    )
}