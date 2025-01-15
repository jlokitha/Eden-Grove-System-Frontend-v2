import "./styles/topBar.css"
import {DateContainer} from "./DateContainer.tsx";

export function TopBar() {
    return (
        <div
            className="d-flex justify-content-between align-items-center"
            id="top-panel"
        >
            <div className="d-flex">
                <div className="d-flex" id="line-container">
                    <div className="v-line"></div>
                    <div className="v-line"></div>
                </div>
                <div id="text-container">
                    <p>Welcome Back to Eden Grove</p>
                    <div></div>
                    <p className="name">User</p>
                </div>
            </div>
            <DateContainer/>
        </div>
    )
}