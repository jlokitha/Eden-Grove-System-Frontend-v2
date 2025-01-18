import './App.css'
import {RootLayout} from "./components/RootLayout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import {StaffPage} from "./pages/StaffPage.tsx";
import {VehiclePage} from "./pages/VehiclePage.tsx";
import {EquipmentPage} from "./pages/EquipmentPage.tsx";
import {UserPage} from "./pages/UserPage.tsx";
import {FieldPage} from "./pages/FieldPage.tsx";
import {CropPage} from "./pages/CropPage.tsx";
import {MonitoringLogPage} from "./pages/MonitoringLogPage.tsx";
import {DashboardPage} from "./pages/DashboardPage.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            element: <RootLayout/>,
            children: [
                {path: '', element: <DashboardPage/>},
                {path: '/staff', element: <StaffPage/>},
                {path: '/vehicle', element: <VehiclePage/>},
                {path: '/equipment', element: <EquipmentPage/>},
                {path: '/user', element: <UserPage/>},
                {path: '/field', element: <FieldPage/>},
                {path: '/crop', element: <CropPage/>},
                {path: '/log', element: <MonitoringLogPage/>}
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
