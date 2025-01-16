import { combineReducers } from "redux";
import StaffReducer from "../reducers/StaffReducer.ts";
import {configureStore} from "@reduxjs/toolkit";
import VehicleReducer from "../reducers/VehicleReducer.ts";
import EquipmentReducer from "../reducers/EquipmentReducer.ts";
import UserReducer from "../reducers/UserReducer.ts";

export const rootReducer = combineReducers({
    staff: StaffReducer,
    vehicle: VehicleReducer,
    equipment: EquipmentReducer,
    user: UserReducer
});

export const store = configureStore({
    reducer: rootReducer
})