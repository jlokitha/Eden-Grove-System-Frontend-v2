import './App.css'
import {RootLayout} from "./components/RootLayout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import {Dashboard} from "./pages/Dashboard.tsx";
import {StaffPage} from "./pages/StaffPage.tsx";
import {VehiclePage} from "./pages/VehiclePage.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            element: <RootLayout/>,
            children: [
                {path: '', element: <Dashboard/>},
                {path: '/staff', element: <StaffPage/>},
                {path: '/vehicle', element: <VehiclePage/>},
            ]
        },
    ]);

    return (
        <>
            <RouterProvider router={routes}/>
        </>
    )
}

export default App
