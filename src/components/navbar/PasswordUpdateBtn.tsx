import styles from "./style/passwordUpdateBtn.module.css"
import navBtn from "./style/navButton.module.css"

interface PasswordUpdateButtonProps {
    staffName: string;
    staffRole: string;
    onClick: () => void;
}

export function PasswordUpdateBtn(props: PasswordUpdateButtonProps) {
    return (
        <button className={`${navBtn.navBtn} d-flex justify-content-left align-items-center`} onClick={props.onClick}>
            <img src="/src/assets/icons/user-profile.svg" id={styles.profileImg} alt="User profile button icon in black color" />
            <div id={styles.userInfo}>
                <p>{props.staffName}</p>
                <p>{props.staffRole}</p>
            </div>
        </button>
    );
}