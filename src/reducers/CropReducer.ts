import {createSlice} from "@reduxjs/toolkit";
import {Crop} from "../model/Crop.ts";

export const initialState: Crop[] = [
    new Crop('C-001', 'Wheat', 'Triticum', 'Cereal', 'Winter', 'Active', 'image1.jpg'),
    new Crop('C-002', 'Corn', 'Zea mays', 'Cereal', 'Summer', 'Active', 'image2.jpg'),
    new Crop('C-003', 'Rice', 'Oryza sativa', 'Cereal', 'Summer', 'Active', 'image3.jpg'),
    new Crop('C-004', 'Barley', 'Hordeum vulgare', 'Cereal', 'Spring', 'Active', 'image4.jpg'),
    new Crop('C-005', 'Soybean', 'Glycine max', 'Legume', 'Summer', 'Active', 'image5.jpg'),
    new Crop('C-006', 'Potato', 'Solanum tuberosum', 'Tuber', 'Spring', 'Active', 'image6.jpg'),
    new Crop('C-007', 'Tomato', 'Solanum lycopersicum', 'Fruit', 'Summer', 'Active', 'image7.jpg'),
    new Crop('C-008', 'Carrot', 'Daucus carota', 'Root', 'Spring', 'Active', 'image8.jpg'),
    new Crop('C-009', 'Lettuce', 'Lactuca sativa', 'Leafy', 'Spring', 'Active', 'image9.jpg'),
    new Crop('C-010', 'Peanut', 'Arachis hypogaea', 'Legume', 'Summer', 'Active', 'image10.jpg')
];

const cropSlice = createSlice({
    name: 'crop',
    initialState,
    reducers: {
        setCrop: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const {setCrop} = cropSlice.actions;
export default cropSlice.reducer;