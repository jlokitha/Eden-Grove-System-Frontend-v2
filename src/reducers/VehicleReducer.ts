import {createSlice} from "@reduxjs/toolkit";
import {Vehicle} from "../model/Vehicle.ts";

export const initialState: Vehicle[] = [
    new Vehicle('V-001', 'ABC123', 'Sedan', 'Petrol', 'Active', 'No remarks', 'John Doe'),
    new Vehicle('V-002', 'DEF456', 'SUV', 'Diesel', 'Inactive', 'Needs service', 'Jane Smith'),
    new Vehicle('V-003', 'GHI789', 'Truck', 'Electric', 'Active', 'No remarks', 'Alice Johnson'),
    new Vehicle('V-004', 'JKL012', 'Van', 'Hybrid', 'Active', 'No remarks', 'Bob Brown'),
    new Vehicle('V-005', 'MNO345', 'Sedan', 'Petrol', 'Inactive', 'Accident damage', 'Charlie Davis'),
    new Vehicle('V-006', 'PQR678', 'SUV', 'Diesel', 'Active', 'No remarks', 'Diana Evans'),
    new Vehicle('V-007', 'STU901', 'Truck', 'Electric', 'Inactive', 'Battery issue', 'Eve Foster'),
    new Vehicle('V-008', 'VWX234', 'Van', 'Hybrid', 'Active', 'No remarks', 'Frank Green'),
    new Vehicle('V-009', 'YZA567', 'Sedan', 'Petrol', 'Inactive', 'Engine issue', 'Grace Harris'),
    new Vehicle('V-010', 'BCD890', 'SUV', 'Diesel', 'Active', 'No remarks', 'Hank Irving')
];

const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        setVehicle: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const {setVehicle} = vehicleSlice.actions;
export default vehicleSlice.reducer;