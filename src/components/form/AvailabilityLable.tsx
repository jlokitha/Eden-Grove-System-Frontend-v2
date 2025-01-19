import styles from "./style/detailContainer.module.css";

interface AvailabilityLabelProps {
    status: string;
}

export function AvailabilityLabel({ status }: AvailabilityLabelProps) {
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
        <div className={`${styles.detailContainer} d-flex flex-column`}>
            <label className={`${styles.tag} ${getClassName(status)}`}>{status}</label>
        </div>
    );
}