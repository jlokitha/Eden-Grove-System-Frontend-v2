import {Equipment} from "./Euipment.ts";
import {Crop} from "./Crop.ts";
import {Staff} from "./Staff.ts";

export class Field {
    constructor(
        public fCode: string,
        public fieldName: string,
        public fieldSize: number,
        public fieldLocation: string,
        public fieldImage1: string,
        public fieldImage2: string,
        public status: string,
        public staffs?: Staff[],
        public crops?: Crop[],
        public equipment?: Equipment[]
    ) {}
}