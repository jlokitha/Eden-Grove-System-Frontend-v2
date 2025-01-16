import { NavButton } from "./NavButton.tsx";
import styles from "./style/navigation.module.css";
import { PasswordUpdateBtn } from "./PasswordUpdateBtn.tsx";
import { LogoutButton } from "./LogoutButton.tsx";
import { useState } from "react";
import navBtn from './style/navButton.module.css'

const navButtons = [
    { icon: '/src/assets/icons/dashboard-black.svg', text: 'Dashboard', path: '/' },
    { icon: '/src/assets/icons/staff-black.svg', text: 'Staff', path: '/staff' },
    { icon: '/src/assets/icons/field-black.svg', text: 'Field', path: '/field' },
    { icon: '/src/assets/icons/crop-black.svg', text: 'Crop', path: '/crop' },
    {
        icon: '/src/assets/icons/monitoring-log-black.svg',
        text: 'Monitoring Log',
        path: '/monitoring-log',
    },
    { icon: '/src/assets/icons/vehicle-black-svg.svg', text: 'Vehicle', path: '/vehicle' },
    { icon: '/src/assets/icons/equipment-black.svg', text: 'Equipment', path: '/equipment' },
    { icon: '/src/assets/icons/user-black.svg', text: 'User', path: '/user' },
];

export function Navigation() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleNavButtonClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="d-flex flex-column align-items-center" id={styles.navbar}>
            <div>
                <img src="/src/assets/icons/logo.svg" alt="Eden Grove logo" id={styles.logo} />
            </div>

            <div className={styles.navBtnContainer}>
                {navButtons.map((button, index) => (
                    <NavButton
                        key={index}
                        icon={button.icon}
                        text={button.text}
                        path={button.path}
                        onClick={() => handleNavButtonClick(index)}
                        className={activeIndex === index ? navBtn.navBtnActive : ''}
                    />
                ))}
            </div>

            <div className={styles.navBtnContainer}>
                <PasswordUpdateBtn staffName="John Doe" staffRole="MANAGER"
                                   onClick={() => console.log('Profile clicked')} />
                <LogoutButton />
            </div>
        </div>
    );
}