import {createSlice} from "@reduxjs/toolkit";
import {Crop} from "../model/Crop.ts";

export const initialState: Crop[] = [
    new Crop('C-001', 'Wheat', 'Triticum', 'Cereal', 'Winter', 'Active', 'src/assets/image/crop-images/wheat.jpg'),
    new Crop('C-002', 'Corn', 'Zea mays', 'Cereal', 'Summer', 'Active', 'src/assets/image/crop-images/corn.webp'),
    new Crop('C-003', 'Rice', 'Oryza sativa', 'Cereal', 'Summer', 'Active', 'src/assets/image/crop-images/rice.jpg'),
    new Crop('C-004', 'Barley', 'Hordeum vulgare', 'Cereal', 'Spring', 'Active', 'src/assets/image/crop-images/barley.jpg'),
    new Crop('C-005', 'Soybean', 'Glycine max', 'Legume', 'Summer', 'Active', 'src/assets/image/crop-images/soybean.jpg'),
    new Crop('C-006', 'Potato', 'Solanum tuberosum', 'Tuber', 'Spring', 'Active', 'src/assets/image/crop-images/potato.webp'),
    new Crop('C-007', 'Tomato', 'Solanum lycopersicum', 'Fruit', 'Summer', 'Active', 'src/assets/image/crop-images/tomato.jpg'),
    new Crop('C-008', 'Carrot', 'Daucus carota', 'Root', 'Spring', 'Active', 'src/assets/image/crop-images/carrot.webp'),
    new Crop('C-009', 'Lettuce', 'Lactuca sativa', 'Leafy', 'Spring', 'Active', 'src/assets/image/crop-images/lettuce.jpg'),
    new Crop('C-010', 'Peanut', 'Arachis hypogaea', 'Legume', 'Summer', 'Active', 'src/assets/image/crop-images/peanut.jpg'),
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