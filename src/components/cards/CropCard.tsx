import {Crop} from "../../model/Crop.ts";
import {CardDeleteBtn} from "../buttons/CardDeleteBtn.tsx";
import styles from "./style/card.module.css";
import {ButtonContainer} from "./ButtonContainer.tsx";

interface CropCardProps {
    crop: Crop;
    index: number;
    viewOnClick: () => void;
    updateOnClick: () => void;
    deleteOnClick: () => void;
}

export function CropCard(props: CropCardProps) {
    return (
        <div key={props.index} className={styles.card}>
            <img
                // src={`data:image/png;base64,${props.crop.cropImage}`}
                src={props.crop.cropImage}
                className={styles.cardImgTop}
                alt="Crop Image"
            />
            <CardDeleteBtn onClick={props.deleteOnClick}/>
            <div className={styles.cardBody}>
                <h5 className={`${styles.cardTitle} ${styles.wrapText}`}>{props.crop.commonName}</h5>
                <p className={`${styles.cardText} ${styles.wrapText}`}>{props.crop.scientificName}</p>
                <p className={`${styles.cardText} ${styles.wrapText}`}>Season: {props.crop.season}</p>
                <ButtonContainer viewOnClick={props.viewOnClick} updateOnClick={props.updateOnClick}/>
            </div>
        </div>
    )
}