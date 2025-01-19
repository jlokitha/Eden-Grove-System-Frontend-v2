export class Vehicle {
    vehicleCode: string;
    licensePlateNo: string;
    category: string;
    fuelType: string;
    status: string;
    remarks: string;
    staff: string;


    constructor(vehicleCode: string, licensePlateNo: string, category: string, fuelType: string, status: string, remarks: string, staff: string) {
        this.vehicleCode = vehicleCode;
        this.licensePlateNo = licensePlateNo;
        this.category = category;
        this.fuelType = fuelType;
        this.status = status;
        this.remarks = remarks;
        this.staff = staff;
    }
}