import {Field} from "../model/Field.ts";
import {createSlice} from "@reduxjs/toolkit";

export const initialState: Field[] = [
    new Field('F-001', 'Field A', 10.5, '10.123,20.456', 'src/assets/image/field-images/field1.jpg', 'src/assets/image/field-images/field1.jpg', 'Active'),
    new Field('F-002', 'Field B', 15.0, '11.123,21.456', 'src/assets/image/field-images/field2.jpg', 'src/assets/image/field-images/field1.jpg', 'Inactive'),
    new Field('F-003', 'Field C', 20.0, '12.123,22.456', 'src/assets/image/field-images/field3.jpg', 'src/assets/image/field-images/field1.jpg', 'Active'),
    new Field('F-004', 'Field D', 25.5, '13.123,23.456', 'src/assets/image/field-images/field4.jpg', 'src/assets/image/field-images/field1.jpg', 'Inactive'),
    new Field('F-005', 'Field E', 30.0, '14.123,24.456', 'src/assets/image/field-images/field9.jpg', 'src/assets/image/field-images/field1.jpg', 'Active'),
    new Field('F-006', 'Field F', 35.5, '15.123,25.456', 'src/assets/image/field-images/field6.jpg', 'src/assets/image/field-images/field1.jpg', 'Inactive'),
    new Field('F-007', 'Field G', 40.0, '16.123,26.456', 'src/assets/image/field-images/field7.jpg', 'src/assets/image/field-images/field1.jpg', 'Active'),
    new Field('F-008', 'Field H', 45.5, '17.123,27.456', 'src/assets/image/field-images/field8.jpg', 'src/assets/image/field-images/field1.jpg', 'Inactive'),
    new Field('F-009', 'Field I', 50.0, '18.123,28.456', 'src/assets/image/field-images/field9.jpg', 'src/assets/image/field-images/field1.jpg', 'Active'),
    new Field('F-010', 'Field J', 55.5, '19.123,29.456', 'src/assets/image/field-images/field10.jpg', 'src/assets/image/field-images/field1.jpg', 'Inactive'),
];

const fieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        addField: (state, action) => {
            state.push(action.payload);
        },
        updateField: (state, action) => {
            const index = state.findIndex(field => field.fCode === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteField: (state, action) => {
            return state.filter(field => field.fCode !== action.payload);
        },
    }
})

export const {addField, updateField, deleteField} = fieldSlice.actions;
export  default fieldSlice.reducer;