import { Staff } from "../model/Staff.ts";
import { createSlice } from "@reduxjs/toolkit";
import { generateNewId } from "../utils/IdGenerator.ts";

export const initialState: Staff[] = [
    new Staff('S-001', 'John Doe', new Date('1990-01-01'), 'MALE', 'MANAGER', 'MANAGER', 'john.doe@example.com', '1234567890', '123 Main St', '12345', new Date('2020-01-01')),
    new Staff('S-002', 'Jane Smith', new Date('1985-02-02'), 'FEMALE', 'SENIOR_ASSISTANT_MANAGER', 'SENIOR_ASSISTANT_MANAGER', 'jane.smith@example.com', '0987654321', '456 Elm St', '67890', new Date('2019-02-02')),
    new Staff('S-003', 'Alice Johnson', new Date('1992-03-03'), 'FEMALE', 'ASSISTANT_MANAGER', 'ASSISTANT_MANAGER', 'alice.johnson@example.com', '1122334455', '789 Oak St', '11223', new Date('2018-03-03')),
    new Staff('S-004', 'Bob Brown', new Date('1988-04-04'), 'MALE', 'ADMIN_AND_HR_STAFF', 'ADMIN_AND_HR_STAFF', 'bob.brown@example.com', '2233445566', '101 Pine St', '44556', new Date('2017-04-04')),
    new Staff('S-005', 'Charlie Davis', new Date('1995-05-05'), 'MALE', 'OFFICE_ASSISTANT', 'OFFICE_ASSISTANT', 'charlie.davis@example.com', '3344556677', '202 Maple St', '77889', new Date('2016-05-05')),
    new Staff('S-006', 'Diana Evans', new Date('1987-06-06'), 'FEMALE', 'SENIOR_AGRONOMIST', 'SENIOR_AGRONOMIST', 'diana.evans@example.com', '4455667788', '303 Birch St', '99000', new Date('2015-06-06')),
    new Staff('S-007', 'Evan Foster', new Date('1991-07-07'), 'MALE', 'AGRONOMIST', 'AGRONOMIST', 'evan.foster@example.com', '5566778899', '404 Cedar St', '11122', new Date('2014-07-07')),
    new Staff('S-008', 'Fiona Green', new Date('1989-08-08'), 'FEMALE', 'SOIL_SCIENTIST', 'SOIL_SCIENTIST', 'fiona.green@example.com', '6677889900', '505 Spruce St', '33344', new Date('2013-08-08')),
    new Staff('S-009', 'George Harris', new Date('1993-09-09'), 'MALE', 'SENIOR_TECHNICIAN', 'SENIOR_TECHNICIAN', 'george.harris@example.com', '7788990011', '606 Willow St', '55566', new Date('2012-09-09')),
    new Staff('S-010', 'Hannah White', new Date('1986-10-10'), 'FEMALE', 'TECHNICIAN', 'TECHNICIAN', 'hannah.white@example.com', '8899001122', '707 Aspen St', '77788', new Date('2011-10-10')),
];

const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        addStaff: (state, action) => {
            const newId = generateNewId(state);
            state.push({ ...action.payload, id: newId });
        },
        updateStaff: (state, action) => {
            const index = state.findIndex(staff => staff.id === action.payload.id);
            if (index !== -1) {
                state[index] = { ...state[index], ...action.payload };
            }
        },
        deleteStaff: (state, action) => {
            return state.filter(staff => staff.id !== action.payload);
        },
    }
});

export const { addStaff, updateStaff, deleteStaff } = staffSlice.actions;
export default staffSlice.reducer;