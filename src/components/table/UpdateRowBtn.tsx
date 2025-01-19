import { useState } from 'react';
import styles from "./style/tableRowActionBtn.module.css";

interface UpdateRowBtnProps {
    onClick: () => void;
}

export function UpdateRowBtn(props: UpdateRowBtnProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`${styles.button} ${styles.updateBtn}`}
            onClick={props.onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ background: isHovered ? '#DEFFEC' : '#f9f9f9' }}
        >
            <img
                src={isHovered ? '/src/assets/icons/update-color.svg' : '/src/assets/icons/update.svg'}
                alt="Update svg in grey color"
            />
        </button>
    );
}