import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {store} from "./store/Store.ts";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import {OtpProvider} from "./store/OtpProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <OtpProvider>
                <App/>
            </OtpProvider>
        </Provider>
    </StrictMode>,
)
