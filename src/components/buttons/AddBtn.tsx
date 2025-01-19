import styles from "./style/addBtn.module.css"

interface AddBtnProps {
    text: string;
    onClick: () => void;
}

export function AddBtn(props: AddBtnProps) {
    return (
        <button className={styles.btnAdd} onClick={props.onClick}>{props.text}</button>
    )
}