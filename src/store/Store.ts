import { combineReducers } from "redux";
import StaffReducer from "../reducers/StaffReducer.ts";
import {configureStore} from "@reduxjs/toolkit";
import VehicleReducer from "../reducers/VehicleReducer.ts";
import EquipmentReducer from "../reducers/EquipmentReducer.ts";

export const rootReducer = combineReducers({
    staff: StaffReducer,
    vehicle: VehicleReducer,
    equipment: EquipmentReducer,
});

export const store = configureStore({
    reducer: rootReducer
})