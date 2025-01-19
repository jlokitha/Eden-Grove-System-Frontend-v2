import styles from "./style/tableAvailabilityTag.module.css";

interface TableAvailabilityTagProps {
    statusText: string;
}

export function TableAvailabilityTag({ statusText }: TableAvailabilityTagProps) {
    const getClassName = (status: string) => {
        switch (status) {
            case 'AVAILABLE':
                return styles.availableTag;
            case 'OUT_OF_SERVICE':
                return styles.outOfServiceTag;
            case 'IN_USE':
                return styles.inUseTag;
            case 'UNDER_MAINTENANCE':
                return styles.underMaintenanceTag;
            default:
                return '';
        }
    };

    return (
        <p className={`${styles.tag} ${getClassName(statusText)}`}>{statusText}</p>
    )
}