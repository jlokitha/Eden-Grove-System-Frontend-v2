import styles from "./style/navButton.module.css";
import { Link } from "react-router";

interface NavButtonProps {
    icon: string;
    text: string;
    path: string;
    onClick?: () => void;
    className?: string;
}

export function NavButton(props: NavButtonProps) {
    return (
        <Link to={props.path} onClick={props.onClick} className={`${styles.navBtn} ${props.className} d-flex justify-content-left align-items-center`}>
            <img src={props.icon} alt={`${props.text} button icon`} />
            {props.text}
        </Link>
    );
}