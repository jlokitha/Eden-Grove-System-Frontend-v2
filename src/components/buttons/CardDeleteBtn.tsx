import styles from "./style/cardDeleteBtn.module.css";

interface CardDeleteBtnProps {
    onClick: () => void;
}

export function CardDeleteBtn(props: CardDeleteBtnProps) {
    return (
        <button className={styles.btnDelete} onClick={props.onClick}>
            <img src="/src/assets/icons/cancel-grey.svg" alt="Delete icon"/>
        </button>
    )
}