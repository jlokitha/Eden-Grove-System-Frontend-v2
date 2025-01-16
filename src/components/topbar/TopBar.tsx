import styles from "./style/topBar.module.css"
import {DateContainer} from "./DateContainer.tsx";

export function TopBar() {
    return (
        <div
            className="d-flex justify-content-between align-items-center"
            id={styles.topPanel}
        >
            <div className="d-flex">
                <div className="d-flex" id={styles.lineContainer}>
                    <div className={styles.vLine}></div>
                    <div className={styles.vLine}></div>
                </div>
                <div id={styles.textContainer}>
                    <p>Welcome Back to Eden Grove</p>
                    <div></div>
                    <p className="name">User</p>
                </div>
            </div>
            <DateContainer/>
        </div>
    )
}