export class User {
    staffId: string;
    staffName: string;
    email: string;
    designation: string;
    role: string;


    constructor(staffId: string, staffName: string, email: string, designation: string, role: string) {
        this.staffId = staffId;
        this.staffName = staffName;
        this.email = email;
        this.designation = designation;
        this.role = role;
    }
}