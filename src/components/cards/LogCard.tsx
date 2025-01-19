import {MonitoringLog} from "../../model/MonitoringLog.ts";
import {extractDate} from "../../utils/DateUtil.ts";
import styles from "./style/card.module.css";
import {ButtonContainer} from "./ButtonContainer.tsx";

interface LogCardProps {
    log: MonitoringLog;
    index: number;
    viewOnClick: () => void;
    updateOnClick: () => void;
}

export function LogCard(props: LogCardProps) {
    return (
        <div key={props.index} className={styles.card}>
            <img
                // src={`data:image/png;base64,${props.log.observedImage}`}
                src={props.log.observedImage}
                className={styles.cardImgTop}
                alt="Log Image"
            />
            <div className={styles.cardBody}>
                <h5 className={`${styles.cardTitle} ${styles.wrapText}`}>${props.log.logCode}</h5>
                <p className={`${styles.cardText} ${styles.wrapText}`}>${extractDate(props.log.logDate)}</p>
                <p className={`${styles.cardText} ${styles.wrapText}`}>Field : ${
                    props.log.field.fieldName
                }</p>
                <ButtonContainer viewOnClick={props.viewOnClick} updateOnClick={props.updateOnClick}/>
            </div>
        </div>
    )
}