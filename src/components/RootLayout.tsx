import {Navigation} from "./navbar/Navigation.tsx";
import {Outlet} from "react-router";
import {TopBar} from "./topbar/TopBar.tsx";

export function RootLayout() {
    return (
        <div className="d-flex">
            <Navigation/>

            <section className="d-flex flex-column w-100" id="main-page-container">
                <TopBar/>
                <Outlet/>
            </section>
        </div>
    );
}