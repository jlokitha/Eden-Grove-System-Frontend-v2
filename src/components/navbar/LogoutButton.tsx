import { useState } from 'react';
import styles from "./style/logoutBtn.module.css";
import navBtn from "./style/navButton.module.css"
import {useNavigate} from "react-router-dom";

export function LogoutButton() {
    const [iconSrc, setIconSrc] = useState('/src/assets/icons/logout-black.svg');

    const navigation = useNavigate();

    const handleMouseEnter = () => {
        setIconSrc('/src/assets/icons/logout-red.svg');
    };

    const handleMouseLeave = () => {
        setIconSrc('/src/assets/icons/logout-black.svg');
    };

    const handleClick = () => {
        navigation('/auth/sign-in');
    };

    return (
        <button
            className={`${navBtn.navBtn} d-flex justify-content-left align-items-center`}
            id={styles.logoutBtn}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <img src={iconSrc} alt="Logout button icon" id="logout-icon" />
            Logout
        </button>
    );
}