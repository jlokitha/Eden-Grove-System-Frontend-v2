import {createSlice} from "@reduxjs/toolkit";
import {MonitoringLog} from "../model/MonitoringLog.ts";
import { Field } from "../model/Field.ts";

export const initialState: MonitoringLog[] = [
    new MonitoringLog('M-001', new Date('2023-01-01'), 'Observation 1', 'image.jpg', new Field('F-001', 'Field A', 10.5, '10.123,20.456', 'image1A.jpg', 'image2A.jpg', 'Active'), [], []),
    new MonitoringLog('M-002', new Date('2023-01-02'), 'Observation 2', 'image.jpg', new Field('F-002', 'Field B', 15.0, '11.123,21.456', 'image1B.jpg', 'image2B.jpg', 'Inactive'), [], []),
    new MonitoringLog('M-003', new Date('2023-01-03'), 'Observation 3', 'image.jpg', new Field('F-003', 'Field C', 20.0, '12.123,22.456', 'image1C.jpg', 'image2C.jpg', 'Active'), [], []),
    new MonitoringLog('M-004', new Date('2023-01-04'), 'Observation 4', 'image.jpg', new Field('F-004', 'Field D', 25.5, '13.123,23.456', 'image1D.jpg', 'image2D.jpg', 'Inactive'), [], []),
    new MonitoringLog('M-005', new Date('2023-01-05'), 'Observation 5', 'image.jpg', new Field('F-005', 'Field E', 30.0, '14.123,24.456', 'image1E.jpg', 'image2E.jpg', 'Active'), [], []),
    new MonitoringLog('M-006', new Date('2023-01-06'), 'Observation 6', 'image.jpg', new Field('F-006', 'Field F', 35.5, '15.123,25.456', 'image1F.jpg', 'image2F.jpg', 'Inactive'), [], []),
    new MonitoringLog('M-007', new Date('2023-01-07'), 'Observation 7', 'image.jpg', new Field('F-007', 'Field G', 40.0, '16.123,26.456', 'image1G.jpg', 'image2G.jpg', 'Active'), [], []),
    new MonitoringLog('M-008', new Date('2023-01-08'), 'Observation 8', 'image.jpg', new Field('F-008', 'Field H', 45.5, '17.123,27.456', 'image1H.jpg', 'image2H.jpg', 'Inactive'), [], []),
    new MonitoringLog('M-009', new Date('2023-01-09'), 'Observation 9', 'image.jpg', new Field('F-009', 'Field I', 50.0, '18.123,28.456', 'image1I.jpg', 'image2I.jpg', 'Active'), [], []),
    new MonitoringLog('M-010', new Date('2023-01-10'), 'Observation 10', 'image.jpg', new Field('F-010', 'Field J', 55.5, '19.123,29.456', 'image1J.jpg', 'image2J.jpg', 'Inactive'), [], [])
];

const logSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        setLog: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const {setLog} = logSlice.actions;
export default logSlice.reducer;