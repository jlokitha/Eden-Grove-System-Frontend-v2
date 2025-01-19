import { useState } from 'react';
import styles from "./style/tableRowActionBtn.module.css";

interface ViewRowBtnProps {
    onClick: () => void;
}

export function ViewRowBtn(props: ViewRowBtnProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`${styles.button} ${styles.viewBtn}`}
            onClick={props.onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ background: isHovered ? '#d5e5ff' : '#f9f9f9' }}
        >
            <img
                src={isHovered ? '/src/assets/icons/eye-open-color.svg' : '/src/assets/icons/eye-open.svg'}
                alt="Eye open svg in grey color"
            />
        </button>
    );
}