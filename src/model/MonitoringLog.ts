import {Field} from "./Field.ts";
import {Crop} from "./Crop.ts";
import {Staff} from "./Staff.ts";

export class MonitoringLog {
    constructor(
        public logCode: string,
        public logDate: Date,
        public observation: string,
        public observedImage: string,
        public field: Field,
        public crops: Crop[],
        public staffs: Staff[]
    ) {
    }
}