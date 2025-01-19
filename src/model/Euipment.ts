export class Equipment {
    equipmentId: string;
    name: string;
    type: string;
    status: string;
    staff: string;
    field: string;


    constructor(equipmentId: string, name: string, type: string, status: string, staff: string, field: string) {
        this.equipmentId = equipmentId;
        this.name = name;
        this.type = type;
        this.status = status;
        this.staff = staff;
        this.field = field;
    }
}