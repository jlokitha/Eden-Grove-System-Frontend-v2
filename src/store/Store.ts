import { combineReducers } from "redux";
import StaffReducer from "../reducers/StaffReducer.ts";
import {configureStore} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    staff: StaffReducer,
});

export const store = configureStore({
    reducer: rootReducer
})