export class Staff {
    id: string;
    name: string;
    dob: Date;
    gender: string;
    designation: string;
    role: string;
    email: string;
    mobile: string;
    address: string;
    postalCode: string;
    joinedDate: Date;

    constructor(id: string, name: string, dob: Date, gender: string, designation: string, role: string, email: string, mobile: string, address: string, postalCode: string, joinedDate: Date) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        this.designation = designation;
        this.role = role;
        this.email = email;
        this.mobile = mobile;
        this.address = address;
        this.postalCode = postalCode;
        this.joinedDate = joinedDate;
    }
}