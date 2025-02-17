import { combineReducers } from "redux";
import StaffReducer from "../reducers/StaffReducer.ts";
import {configureStore} from "@reduxjs/toolkit";
import VehicleReducer from "../reducers/VehicleReducer.ts";
import EquipmentReducer from "../reducers/EquipmentReducer.ts";
import UserReducer from "../reducers/UserReducer.ts";
import FieldReducer from "../reducers/FieldReducer.ts";
import CropReducer from "../reducers/CropReducer.ts";
import MonitoringLogReducer from "../reducers/MonitoringLogReducer.ts";

export const rootReducer = combineReducers({
    staff: StaffReducer,
    vehicle: VehicleReducer,
    equipment: EquipmentReducer,
    user: UserReducer,
    field: FieldReducer,
    crop: CropReducer,
    log: MonitoringLogReducer
});

export const store = configureStore({
    reducer: rootReducer
})