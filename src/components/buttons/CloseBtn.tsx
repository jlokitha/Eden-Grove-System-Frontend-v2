import styles from "./style/closeBtn.module.css"

interface CloseBtnProps {
    onClick: () => void;
}

export function CloseBtn(props: CloseBtnProps) {
    return (
        <button className={styles.closeBtn} onClick={props.onClick}>
            <img
                src="/src/assets/icons/cancel-grey.svg"
                alt="Close svg in grey color"
            />
        </button>
    )
}