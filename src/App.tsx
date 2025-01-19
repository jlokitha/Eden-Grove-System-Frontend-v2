import './App.css'
import {MainRootLayout} from "./components/MainRootLayout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import {StaffPage} from "./pages/embedded-pages/StaffPage.tsx";
import {VehiclePage} from "./pages/embedded-pages/VehiclePage.tsx";
import {EquipmentPage} from "./pages/embedded-pages/EquipmentPage.tsx";
import {UserPage} from "./pages/embedded-pages/UserPage.tsx";
import {FieldPage} from "./pages/embedded-pages/FieldPage.tsx";
import {CropPage} from "./pages/embedded-pages/CropPage.tsx";
import {MonitoringLogPage} from "./pages/embedded-pages/MonitoringLogPage.tsx";
import {DashboardPage} from "./pages/embedded-pages/DashboardPage.tsx";
import {SignInPage} from "./pages/AuthPages/SignInPage.tsx";
import {AuthRootLayout} from "./components/registration/AuthRootLayout.tsx";
import {OtpRequestPage} from "./pages/AuthPages/OtpRequestPage.tsx";
import {OtpVerification} from "./pages/AuthPages/OtpVerification.tsx";
import {SignUpPage} from "./pages/AuthPages/SignUpPage.tsx";
import {PasswordResetPage} from "./pages/AuthPages/PasswordResetPage.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <MainRootLayout/>,
            children: [
                {path: '', element: <DashboardPage/>},
                {path: 'staff', element: <StaffPage/>},
                {path: 'vehicle', element: <VehiclePage/>},
                {path: 'equipment', element: <EquipmentPage/>},
                {path: 'user', element: <UserPage/>},
                {path: 'field', element: <FieldPage/>},
                {path: 'crop', element: <CropPage/>},
                {path: 'log', element: <MonitoringLogPage/>}
            ]
        },
        {
            path: '/auth',
            element: <AuthRootLayout/>,
            children: [
                {path: 'sign-in', element: <SignInPage/>},
                {path: 'otp-request', element: <OtpRequestPage/>},
                {path: 'otp-verification', element: <OtpVerification/>},
                {path: 'sign-up', element: <SignUpPage/>},
                {path: 'password-reset', element: <PasswordResetPage/>}
            ]
        }
    ]);

    return (
        <RouterProvider router={routes}/>
    )
}

export default App