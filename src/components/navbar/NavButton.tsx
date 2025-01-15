import "./styles/navButton.css"
import {Link} from "react-router";

interface NavButtonProps {
    icon: string;
    text: string;
    path: string;
}

export function NavButton(props: NavButtonProps) {
    return (
        <Link to={props.path} className="nav-btn d-flex justify-content-left align-items-center">
            <img src={props.icon} alt={`${props.text} button icon`} />
            {props.text}
        </Link>
    );
}