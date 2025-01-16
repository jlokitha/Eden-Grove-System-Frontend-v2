import styles from "./style/buttonContainer.module.css"

interface ButtonContainerProps {
    type: string;
    onClick: () => void;
}

export function ButtonContainer(props: ButtonContainerProps) {
    return (
        <div className={`${styles.buttonContainer} d-flex justify-content-end`}>
            {props.type === "save" ? (
                <button className="btn-add" onClick={props.onClick}>Add</button>
            ) : (
                <button className="btn-update">Update</button>
            )}
        </div>
    )
}