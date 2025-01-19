import {Outlet} from "react-router";
import styles from "./style/authRootLayout.module.css";
import {SideImageContainer} from "./SideImageContainer.tsx";

export function AuthRootLayout() {
    return (
        <div className={`${styles.rootLayout} d-flex justify-content-center align-items-center`}>
            <div className="d-flex" id={styles.formContainer}>
                <SideImageContainer/>

                <Outlet/>
            </div>
        </div>
    )
}