import {createSlice} from "@reduxjs/toolkit";
import {Equipment} from "../model/Euipment.ts";

export const initialState: Equipment[] = [
    new Equipment('E-001-01', 'Excavator', 'MECHANICAL', 'AVAILABLE', 'John Doe', 'Construction'),
    new Equipment('E-001-02', 'Bulldozer', 'MECHANICAL', 'IN_USE', 'Jane Smith', 'Construction'),
    new Equipment('E-001-03', 'Tractor', 'AGRICULTURAL', 'UNDER_MAINTENANCE', 'Mike Johnson', 'Farming'),
    new Equipment('E-001-04', 'Generator', 'ELECTRICAL', 'OUT_OF_SERVICE', 'Emily Davis', 'Power Supply'),
    new Equipment('E-001-05', 'Sprinkler', 'AGRICULTURAL', 'AVAILABLE', 'Chris Brown', 'Irrigation'),
    new Equipment('E-001-06', 'Crane', 'MECHANICAL', 'IN_USE', 'Patricia Wilson', 'Construction'),
    new Equipment('E-001-07', 'Pump', 'MECHANICAL', 'AVAILABLE', 'Robert Martinez', 'Water Supply'),
    new Equipment('E-001-08', 'Drill', 'MECHANICAL', 'UNDER_MAINTENANCE', 'Linda Anderson', 'Mining'),
    new Equipment('E-001-09', 'Transformer', 'ELECTRICAL', 'OUT_OF_SERVICE', 'David Thomas', 'Power Supply'),
    new Equipment('E-001-10', 'Harvester', 'AGRICULTURAL', 'AVAILABLE', 'Barbara Jackson', 'Farming')
];

const equipmentSlice = createSlice({
    name: 'equipment',
    initialState,
    reducers: {
        addEquipment: (state, action) => {
            state.push(action.payload);
        },
        deleteEquipment: (state, action) => {
            return state.filter(equipment => equipment.equipmentId !== action.payload);
        }
    }
})

export const {addEquipment, deleteEquipment} = equipmentSlice.actions;
export default equipmentSlice.reducer;