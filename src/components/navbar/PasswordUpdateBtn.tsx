import "./styles/passwordUpdateBtn.css"

interface PasswordUpdateButtonProps {
    staffName: string;
    staffRole: string;
    onClick: () => void;
}

export function PasswordUpdateBtn(props: PasswordUpdateButtonProps) {
    return (
        <button className="nav-btn d-flex justify-content-left align-items-center" id="password-update-btn" onClick={props.onClick}>
            <img src="/src/assets/icons/user-profile.svg" alt="User profile button icon in black color" />
            <div id="user-info">
                <p className="name">{props.staffName}</p>
                <p className="role">{props.staffRole}</p>
            </div>
        </button>
    );
}