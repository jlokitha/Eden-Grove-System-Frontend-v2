import styles from "./style/UpdateBtn.module.css"

interface UpdateBtnProps {
    onClick: () => void;
}

export function UpdateBtn({onClick}: UpdateBtnProps) {
    return (
        <div className={`${styles.buttonContainer} d-flex justify-content-end`}>
            <button
                type="submit"
                onClick={onClick}
            >Update</button>
        </div>
    )
}