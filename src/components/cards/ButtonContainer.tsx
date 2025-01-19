import styles from "./style/buttonContainer.module.css"

interface ButtonContainerProps {
    viewOnClick: () => void;
    updateOnClick: () => void;
}

export function ButtonContainer(props: ButtonContainerProps) {
    return (
        <div className={`${styles.buttonContainer} d-flex`}>
            <button className={styles.btnView} onClick={props.viewOnClick}>Learn More</button>
            <button className={styles.btnUpdate} onClick={props.updateOnClick}>
                <img src="/src/assets/icons/edit-pen.svg" alt="Edit icon"/>
            </button>
        </div>
    )
}