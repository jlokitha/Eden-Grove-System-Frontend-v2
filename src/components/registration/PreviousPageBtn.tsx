import styles from './style/previousPageBtn.module.css';

interface PreviousPageBtnProps {
    onClick: () => void;
    text: string;
}

export function PreviousPageBtn({onClick, text}: PreviousPageBtnProps) {
    return (
        <button
            className={`${styles.previousButton} d-flex justify-content-center align-items-center`}
            type={'button'}
            onClick={onClick}
        >
            <div>
                <img
                    src="/src/assets/icons/btn-arrow-left.svg"
                    alt="arrow to left icon"
                />
                {text}
            </div>
        </button>
    )
}