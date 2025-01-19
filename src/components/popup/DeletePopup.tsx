import styles from "./style/DeletePopup.module.css"

interface DeletePopupProps {
    onCancel: () => void;
    onDelete: () => void;
}

export function DeletePopup({onCancel, onDelete}: DeletePopupProps) {
    return (
        <section className={styles.deletePopup}>
            <div className="d-flex flex-column align-items-center">
                <span className="d-flex justify-content-center align-items-center">
                    <img src="/src/assets/icons/warning.svg" alt="Warning icon in red color"/>
                </span>
                <h1>Are you sure?</h1>
                <p className="text-center">
                    Are you sure you want to delete this record? <br/>
                    This process cannot be undone.
                </p>
            </div>
            <div className={`${styles.buttonContainer} d-flex justify-content-between`}>
                <button
                    type="button"
                    className={`${styles.button} ${styles.btnCancel}`}
                    onClick={onCancel}
                >Cancel</button>
                <button
                    type="button"
                    className={`${styles.button} ${styles.btnDelete}`}
                    onClick={onDelete}
                >Delete</button>
            </div>
        </section>
    )
}