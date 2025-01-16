import { useState } from 'react';
import styles from "./style/tableRowActionBtn.module.css";

interface DeleteRowBtnProps {
    onClick: () => void;
}

export function DeleteRowBtn(props: DeleteRowBtnProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`${styles.button} ${styles.deleteBtn}`}
            onClick={props.onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ background: isHovered ? '#FFE0E0' : '#f9f9f9' }}
        >
            <img
                src={isHovered ? '/src/assets/icons/delete-color.svg' : '/src/assets/icons/delete.svg'}
                alt="Delete svg in grey color"
            />
        </button>
    );
}