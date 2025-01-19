import {createSlice} from "@reduxjs/toolkit";
import {User} from "../model/User.ts";

export const initialState: User[] = [
    new User('S-001-01', 'Alice Johnson', 'alice.johnson@example.com', 'Manager', 'MANAGER'),
    new User('S-001-02', 'Bob Smith', 'bob.smith@example.com', 'Senior Assistant Manager', 'SENIOR_ASSISTANT_MANAGER'),
    new User('S-001-03', 'Charlie Brown', 'charlie.brown@example.com', 'Assistant Manager', 'ASSISTANT_MANAGER'),
    new User('S-001-04', 'David Wilson', 'david.wilson@example.com', 'Admin and HR Staff', 'ADMIN_AND_HR_STAFF'),
    new User('S-001-05', 'Eve Davis', 'eve.davis@example.com', 'Office Assistant', 'OFFICE_ASSISTANT'),
    new User('S-001-06', 'Frank Miller', 'frank.miller@example.com', 'Senior Agronomist', 'SENIOR_AGRONOMIST'),
    new User('S-001-07', 'Grace Lee', 'grace.lee@example.com', 'Agronomist', 'AGRONOMIST'),
    new User('S-001-08', 'Hank Taylor', 'hank.taylor@example.com', 'Soil Scientist', 'SOIL_SCIENTIST'),
    new User('S-001-09', 'Ivy Martinez', 'ivy.martinez@example.com', 'Senior Technician', 'SENIOR_TECHNICIAN'),
    new User('S-001-10', 'Jack Anderson', 'jack.anderson@example.com', 'Technician', 'TECHNICIAN')
];

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        deleteUser: (state, action) => {
            return state.filter(user => user.email !== action.payload);
        }
    }
})

export const {addUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;