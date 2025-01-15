import { useState } from 'react';
import "./styles/logoutBtn.css";

export function LogoutButton() {
    const [iconSrc, setIconSrc] = useState('/src/assets/icons/logout-black.svg');

    const handleMouseEnter = () => {
        setIconSrc('/src/assets/icons/logout-red.svg');
    };

    const handleMouseLeave = () => {
        setIconSrc('/src/assets/icons/logout-black.svg');
    };

    const handleClick = () => {
        console.log('Logout clicked');
    };

    return (
        <button
            className="nav-btn d-flex justify-content-left align-items-center"
            id="logout-btn"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <img src={iconSrc} alt="Logout button icon" id="logout-icon" />
            Logout
        </button>
    );
}