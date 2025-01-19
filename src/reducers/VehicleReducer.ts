import {createSlice} from "@reduxjs/toolkit";
import {Vehicle} from "../model/Vehicle.ts";

export const initialState: Vehicle[] = [
    new Vehicle('V-001', 'ABC123', 'Sedan', 'Petrol', 'AVAILABLE', 'No remarks', 'John Doe'),
    new Vehicle('V-002', 'DEF456', 'SUV', 'Diesel', 'OUT_OF_SERVICE', 'Needs service', 'Jane Smith'),
    new Vehicle('V-003', 'GHI789', 'Truck', 'Electric', 'AVAILABLE', 'No remarks', 'Alice Johnson'),
    new Vehicle('V-004', 'JKL012', 'Van', 'Hybrid', 'OUT_OF_SERVICE', 'No remarks', 'Bob Brown'),
    new Vehicle('V-005', 'MNO345', 'Sedan', 'Petrol', 'IN_USE', 'Accident damage', 'Charlie Davis'),
    new Vehicle('V-006', 'PQR678', 'SUV', 'Diesel', 'IN_USE', 'No remarks', 'Diana Evans'),
    new Vehicle('V-007', 'STU901', 'Truck', 'Electric', 'UNDER_MAINTENANCE', 'Battery issue', 'Eve Foster'),
    new Vehicle('V-008', 'VWX234', 'Van', 'Hybrid', 'AVAILABLE', 'No remarks', 'Frank Green'),
    new Vehicle('V-009', 'YZA567', 'Sedan', 'Petrol', 'UNDER_MAINTENANCE', 'Engine issue', 'Grace Harris'),
    new Vehicle('V-010', 'BCD890', 'SUV', 'Diesel', 'OUT_OF_SERVICE', 'No remarks', 'Hank Irving')
];

const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        addVehicle: (state, action) => {
            state.push(action.payload);
        },
        updateVehicle: (state, action) => {
            const index = state.findIndex(vehicle => vehicle.vehicleCode === action.payload.vehicleCode);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteVehicle: (state, action) => {
            return state.filter(vehicle => vehicle.vehicleCode !== action.payload);
        },
    }
})

export const {addVehicle, updateVehicle, deleteVehicle} = vehicleSlice.actions;
export default vehicleSlice.reducer;