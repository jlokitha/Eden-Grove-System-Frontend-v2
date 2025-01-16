import { Staff } from "../model/Staff.ts";

export const generateNewId = (state: Staff[]): string => {
    const maxId = state.reduce((max, staff) => {
        const idNumber = parseInt(staff.id.split('-')[1], 10);
        return idNumber > max ? idNumber : max;
    }, 0);
    return `S-${String(maxId + 1).padStart(3, '0')}`;
};