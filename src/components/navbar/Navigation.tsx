import {NavButton} from "./NavButton.tsx";
import "./styles/navigation.css"
import {PasswordUpdateBtn} from "./PasswordUpdateBtn.tsx";
import {LogoutButton} from "./LogoutButton.tsx";

const navButtons = [
    {icon: '/src/assets/icons/dashboard-black.svg', text: 'Dashboard', path: '/'},
    {icon: '/src/assets/icons/staff-black.svg', text: 'Staff', path: '/staff'},
    {icon: '/src/assets/icons/field-black.svg', text: 'Field', path: '/field'},
    {icon: '/src/assets/icons/crop-black.svg', text: 'Crop', path: '/crop'},
    {
        icon: '/src/assets/icons/monitoring-log-black.svg',
        text: 'Monitoring Log',
        path: '/monitoring-log',
    },
    {icon: '/src/assets/icons/vehicle-black-svg.svg', text: 'Vehicle', path: '/vehicle'},
    {icon: '/src/assets/icons/equipment-black.svg', text: 'Equipment', path: '/equipment'},
    {icon: '/src/assets/icons/user-black.svg', text: 'User', path: '/user'},
];

export function Navigation() {
    return (
        <div className="d-flex flex-column align-items-center" id="navbar">
            <div id="logo-container">
                <img src="/src/assets/icons/logo.svg" alt="Eden Grove logo" id="logo"/>
            </div>

            <div id="nav-btn-container">
                {navButtons.map((button, index) => (
                    <NavButton key={index} icon={button.icon} text={button.text} path={button.path}/>
                ))}
            </div>

            <div id="user-action">
                <PasswordUpdateBtn staffName="John Doe" staffRole="MANAGER"
                                   onClick={() => console.log('Profile clicked')}/>
                <LogoutButton/>
            </div>
        </div>
    );
}