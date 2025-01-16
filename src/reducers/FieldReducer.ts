import {Field} from "../model/Field.ts";
import {createSlice} from "@reduxjs/toolkit";

export const initialState: Field[] = [
    new Field('F-001', 'Field A', 10.5, '10.123,20.456', 'image1A.jpg', 'image2A.jpg', 'Active'),
    new Field('F-002', 'Field B', 15.0, '11.123,21.456', 'image1B.jpg', 'image2B.jpg', 'Inactive'),
    new Field('F-003', 'Field C', 20.0, '12.123,22.456', 'image1C.jpg', 'image2C.jpg', 'Active'),
    new Field('F-004', 'Field D', 25.5, '13.123,23.456', 'image1D.jpg', 'image2D.jpg', 'Inactive'),
    new Field('F-005', 'Field E', 30.0, '14.123,24.456', 'image1E.jpg', 'image2E.jpg', 'Active'),
    new Field('F-006', 'Field F', 35.5, '15.123,25.456', 'image1F.jpg', 'image2F.jpg', 'Inactive'),
    new Field('F-007', 'Field G', 40.0, '16.123,26.456', 'image1G.jpg', 'image2G.jpg', 'Active'),
    new Field('F-008', 'Field H', 45.5, '17.123,27.456', 'image1H.jpg', 'image2H.jpg', 'Inactive'),
    new Field('F-009', 'Field I', 50.0, '18.123,28.456', 'image1I.jpg', 'image2I.jpg', 'Active'),
    new Field('F-010', 'Field J', 55.5, '19.123,29.456', 'image1J.jpg', 'image2J.jpg', 'Inactive'),
];

const fieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        setField: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const {setField} = fieldSlice.actions;
export  default fieldSlice.reducer;