import styles from './style/nextPageBtn.module.css';

interface NextPageBtnProps {
    onClick: () => void;
    text: string;
}

export function NextPageBtn({onClick, text}: NextPageBtnProps) {
    return (
        <button
            className={`${styles.nextButton} d-flex justify-content-center align-items-center`}
            type={'submit'}
            onClick={onClick}
        >
            <div>
                {text}
                <img
                    src="/src/assets/icons/btn-arrow-right.svg"
                    alt="arrow to right icon"
                />
            </div>
        </button>
    )
}