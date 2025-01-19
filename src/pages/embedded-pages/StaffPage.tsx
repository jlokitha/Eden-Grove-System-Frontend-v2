import {AddBtn} from "../../components/buttons/AddBtn.tsx";
import {SelectorComponent} from "../../components/filter/SelectorComponent.tsx";
import {SearchButton} from "../../components/filter/SearchButton.tsx";
import {ClearFilterButton} from "../../components/filter/ClearFilterButton.tsx";
import {SearchComponent} from "../../components/filter/SearchComponent.tsx";
import {ViewRowBtn} from "../../components/buttons/ViewRowBtn.tsx";
import {UpdateRowBtn} from "../../components/buttons/UpdateRowBtn.tsx";
import {DeleteRowBtn} from "../../components/buttons/DeleteRowBtn.tsx";
import {Staff} from "../../model/Staff.ts";
import {useDispatch, useSelector} from "react-redux";
import page from "./styles/embeddedPage.module.css"
import {useState} from "react";
import {StaffAddOrUpdate} from "../../components/popup/StaffAddOrUpdate.tsx";
import {setStaff} from "../../reducers/StaffReducer.ts";
import {PageTitle} from "../../components/filter/PageTitle.tsx";

interface RootState {
    staff: Staff[];
}

export function StaffPage() {
    const [staffName, setStaffName] = useState('');
    const [gender, setGender] = useState('');
    const [designation, setDesignation] = useState('');

    const [openPopup, setOpenPopup] = useState(false);
    const [popupType, setPopupType] = useState<"save" | "update">("save");
    const [selectedStaffId, setSelectedStaffId] = useState<string | undefined>(undefined);

    const staffs = useSelector((state: RootState) => state.staff);
    const dispatch = useDispatch();

    const genderOptions = [
        {value: "ALL", text: "All"},
        {value: "MALE", text: "MALE"},
        {value: "FEMALE", text: "FEMALE"},
    ];

    const designationOptions = [
        {value: "ALL", text: "All"},
        {value: "MANAGER", text: "MANAGER"},
        {value: "SENIOR_ASSISTANT_MANAGER", text: "SENIOR_ASSISTANT_MANAGER"},
        {value: "ASSISTANT_MANAGER", text: "ASSISTANT_MANAGER"},
        {value: "ADMIN_AND_HR_STAFF", text: "ADMIN_AND_HR_STAFF"},
        {value: "OFFICE_ASSISTANT", text: "OFFICE_ASSISTANT"},
        {value: "SENIOR_AGRONOMIST", text: "SENIOR_AGRONOMIST"},
        {value: "AGRONOMIST", text: "AGRONOMIST"},
        {value: "SOIL_SCIENTIST", text: "SOIL_SCIENTIST"},
        {value: "SENIOR_TECHNICIAN", text: "SENIOR_TECHNICIAN"},
        {value: "TECHNICIAN", text: "TECHNICIAN"},
        {value: "SUPERVISOR", text: "SUPERVISOR"},
        {value: "LABOR", text: "LABOR"},
    ];

    const handleAdd = () => {
        setPopupType("save");
        setSelectedStaffId(undefined);
        setOpenPopup(true);
    };

    const handleUpdate = (id: string) => {
        setPopupType("update");
        setSelectedStaffId(id);
        setOpenPopup(true);
    };

    const handleSubmit = (staff: Staff) => {
        console.log(`Add or Update Staff ${staff.name}`);
        setOpenPopup(false);
        dispatch(setStaff(staff));
    };

    const handleSearch = () => {
        console.log('Search Staff with name: ', staffName , 'gender: ', gender, 'designation: ', designation);
    }

    const handleClearFilter = () => {
        console.log('Clear Filter');
    }

    const handleView = (id: string) => {
        console.log(`View staff with ID: ${id}`);
    };

    const handleDelete = (id: string) => {
        console.log(`Delete staff with ID: ${id}`);
    };

    return (
        <div className={page.embeddedPage}>
            <section id={page.filterContainer}>
                <div className="d-flex justify-content-between">
                    <PageTitle title={'Staff'}/>
                    <AddBtn text={'Add Staff'} onClick={handleAdd}/>
                </div>
                <div className="d-flex justify-content-even align-items-center" id={page.filter}>
                    <SearchComponent placeholder={'Search by staff name'} onChange={setStaffName}/>

                    <SelectorComponent
                        label="Gender"
                        options={genderOptions}
                        onChange={setGender}
                    />

                    <SelectorComponent
                        label="Designation"
                        options={designationOptions}
                        onChange={setDesignation}
                    />
                    <SearchButton onClick={handleSearch}/>
                    <ClearFilterButton onClick={handleClearFilter}/>
                </div>
            </section>

            <section id={`${page.mainContent}`}>
                <div id={`${page.tableContainer}`}>
                    <table>
                        <thead>
                        <tr>
                            <th scope="col">Staff Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {staffs && staffs.map((staff: Staff, index: number) => {
                            return (
                                <tr key={index}>
                                    <td>{staff.name}</td>
                                    <td>{staff.designation}</td>
                                    <td>{staff.email}</td>
                                    <td>{staff.gender}</td>
                                    <td>
                                        <div className={`${page.actionContainer} d-flex`}>
                                            <ViewRowBtn onClick={() => handleView(staff.id)}/>
                                            <UpdateRowBtn onClick={() => handleUpdate(staff.id)}/>
                                            <DeleteRowBtn onClick={() => handleDelete(staff.id)}/>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </section>

            {openPopup && (
                <StaffAddOrUpdate
                    type={popupType}
                    staffId={selectedStaffId}
                    onSubmit={handleSubmit}
                    onClose={() => setOpenPopup(false)}
                />
            )}
        </div>
    )
}