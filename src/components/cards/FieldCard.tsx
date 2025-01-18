import {generateGoogleMapsLink} from "../../utils/LocationLinkGenerator.ts";
import {Field} from "../../model/Field.ts";
import styles from "./style/card.module.css"
import {CardDeleteBtn} from "../buttons/CardDeleteBtn.tsx";
import {ButtonContainer} from "./ButtonContainer.tsx";

interface FieldCardProps {
    field: Field;
    index: number;
    viewOnClick: () => void;
    updateOnClick: () => void;
    deleteOnClick: () => void;
}

export function FieldCard(props: FieldCardProps) {
    return (
        <div key={props.index} className={styles.card}>
            <img
                src={`data:image/png;base64,${props.field.fieldImage1}`}
                className={styles.cardImgTop}
                alt="Field Image"
            />
            <CardDeleteBtn onClick={props.deleteOnClick}/>
            <div className={styles.cardBody}>
                <h5 className={`${styles.cardTitle} ${styles.wrapText}`}>{props.field.fieldName}</h5>
                <p className={`${styles.cardText} ${styles.wrapText}`}>{props.field.fieldSize} Sq.mt</p>
                <div className={`${styles.locationUrl} d-flex align-items-center`}>
                    <a href={generateGoogleMapsLink(props.field.fieldLocation)} target="_blank">View on Google Maps</a>
                    <img src="/src/assets/icons/location-arrow.svg" alt=""/>
                </div>
                <ButtonContainer viewOnClick={props.viewOnClick} updateOnClick={props.updateOnClick}/>
            </div>
        </div>
    )
}