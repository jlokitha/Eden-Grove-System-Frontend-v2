import {CloseBtn} from "../buttons/CloseBtn.tsx";
import styles from "./style/titleContainer.module.css"

interface TitleContainerProps {
    title: string;
    onClose: () => void;
}

export function TitleContainer(props: TitleContainerProps) {
    return (
        <div
            className={`${styles.titleContainer} d-flex justify-content-between align-items-center`}
        >
            <h1>{props.title}</h1>
            <CloseBtn onClick={props.onClose}/>
        </div>
    )
}