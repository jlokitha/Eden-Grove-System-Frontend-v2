import {Navigation} from "./navbar/Navigation.tsx";
import {Outlet} from "react-router";
import {TopBar} from "./topbar/TopBar.tsx";
import {useState} from "react";
import {PasswordUpdate} from "./popup/PasswordUpdate.tsx";
import {Overlay} from "./popup/Overlay.tsx";

export function MainRootLayout() {
    const [passwordUpdate, setPasswordUpdate] = useState(false);

    const onClose = () => {
        setPasswordUpdate(false);
    }

    return (
        <div className="d-flex">
            <Navigation passwordUpdate={() => setPasswordUpdate(true)}/>

            <section className="d-flex flex-column w-100">
                <TopBar/>
                <Outlet></Outlet>
            </section>

            {passwordUpdate &&
                <>
                    <Overlay/>
                    <PasswordUpdate onClose={onClose}/>
                </>
            }
        </div>
    );
}