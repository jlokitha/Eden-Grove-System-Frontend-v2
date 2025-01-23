import styles from "./style/UserProfileDetails.module.css"

interface UserProfileDetailsProps {
    name: string;
    email: string;
    designation: string;
}

export function UserProfileDetails({name, email, designation}: UserProfileDetailsProps) {
    return (
        <div className={`${styles.detailContainer} d-flex justify-content-start align-items-center`}>
            <div className="d-flex justify-content-start">
                <img src="/src/assets/icons/profile-update.svg" alt="Profie image"/>
                <div className="d-flex flex-column justify-content-center">
                    <p className={styles.lbl}>{name}</p>
                    <p className={styles.lbl}>{email}</p>
                    <p className={styles.lbl}>{designation}</p>
                </div>
            </div>
        </div>
    )
}