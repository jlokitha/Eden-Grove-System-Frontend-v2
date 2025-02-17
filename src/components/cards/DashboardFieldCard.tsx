import styles from "./style/horizontalCard.module.css"

interface DashboardFieldCardProps {
    key: string;
    field: {
        fCode: string;
        fieldName: string;
        fieldSize: number;
        staffList: number;
        cropList: number;
        fieldImage1: string;
    };
}

export function DashboardFieldCard(props: DashboardFieldCardProps) {
    return (
        <div className={`${styles.horizontalCard} d-flex justify-content-start align-items-center`}>
            <img
                // src={`data:image/png;base64,${props.field.fieldImage1}`}
                src={props.field.fieldImage1}
                alt="field image"/>
            <div className={`${styles.textContainer} d-flex flex-column`}>
                <label className={styles.cardTitle}>{props.field.fieldName}</label>
                <label className={styles.cardText}>{props.field.fieldSize} Sq.mt</label>
                <div className={`{styles.countContainer} d-flex justify-content-between`}>
                    <label>Staff: {props.field.staffList}</label>
                    <label>Crop: {props.field.cropList}</label>
                </div>
            </div>
        </div>
    )
}