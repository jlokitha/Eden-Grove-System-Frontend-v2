import styles from "./style/buttonContainer.module.css"

interface ButtonContainerProps {
    type: string;
    onClick: (event: React.FormEvent) => void;
}

export function ButtonContainer(props: ButtonContainerProps) {
    return (
        <div className={`${styles.buttonContainer} d-flex justify-content-end`}>
            {props.type === "save" ? (
                <button type={'submit'} className="btn-add" onClick={props.onClick}>Add</button>
            ) : (
                <button type={'submit'} className="btn-update">Update</button>
            )}
        </div>
    )
}