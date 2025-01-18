import page from "./styles/embeddedPage.module.css"
import {useState} from "react";
import {SelectorComponent} from "../components/filter/SelectorComponent.tsx";
import {ClearFilterButton} from "../components/filter/ClearFilterButton.tsx";
import {useSelector} from "react-redux";
import {User} from "../model/User.ts";
import {DeleteRowBtn} from "../components/buttons/DeleteRowBtn.tsx";
import {PageTitle} from "../components/filter/PageTitle.tsx";

interface RootState {
    user: User[];
}

export function UserPage() {
    const [role, setRole] = useState('');

    const users = useSelector((state: RootState) => state.user);

    const roleOptions = [
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

    const handleClearFilter = () => {
        console.log('Clear Filter');
    }
    const handleDelete = (id: string) => {
        console.log(`Delete user with ID: ${id}`);
    };

    return (
        <div className={page.embeddedPage}>
            <section id={page.filterContainer}>
                <div className="d-flex justify-content-between">
                    <PageTitle title={'User'}/>
                    <div className="d-flex justify-content-between align-items-end">
                        <SelectorComponent label={'Role'} options={roleOptions} onChange={setRole}/>
                        <ClearFilterButton onClick={handleClearFilter}/>
                    </div>
                </div>
            </section>

            <section id={page.mainContent}>
                <div id={page.tableContainer}>
                    <table>
                        <thead>
                        <tr>
                            <th scope="col">Staff Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users && users.map((user: User, index: number) => (
                            <tr key={index}>
                                <td>{user.staffName}</td>
                                <td>{user.designation}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <div className={`${page.actionContainer} d-flex`}>
                                        <DeleteRowBtn onClick={() => handleDelete(user.email)}/>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}