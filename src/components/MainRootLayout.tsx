import {Navigation} from "./navbar/Navigation.tsx";
import {Outlet} from "react-router";
import {TopBar} from "./topbar/TopBar.tsx";

export function MainRootLayout() {
    return (
        <div className="d-flex">
            <Navigation/>

            <section className="d-flex flex-column w-100">
                <TopBar/>
                <Outlet></Outlet>
            </section>
        </div>
    );
}