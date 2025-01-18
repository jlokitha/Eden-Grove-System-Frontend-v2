import page from "./styles/embeddedPage.module.css"
import {AddBtn} from "../components/buttons/AddBtn.tsx";
import {SearchButton} from "../components/filter/SearchButton.tsx";
import {ClearFilterButton} from "../components/filter/ClearFilterButton.tsx";
import {SelectorComponent} from "../components/filter/SelectorComponent.tsx";
import {useState} from "react";
import {useSelector} from "react-redux";
import {Equipment} from "../model/Euipment.ts";
import {ViewRowBtn} from "../components/buttons/ViewRowBtn.tsx";
import {UpdateRowBtn} from "../components/buttons/UpdateRowBtn.tsx";
import {DeleteRowBtn} from "../components/buttons/DeleteRowBtn.tsx";
import {PageTitle} from "../components/filter/PageTitle.tsx";

interface RootState {
    equipment: Equipment[];
}

export function EquipmentPage() {
    const [type, setType] = useState('');
    const [status, setStatus] = useState('');

    const equipments = useSelector((state: RootState) => state.equipment);

    const typeOptions = [
        {value: "ALL", text: "All"},
        {value: "MECHANICAL", text: "Mechanical"},
        {value: "ELECTRICAL", text: "Electrical"},
        {value: "AGRICULTURAL", text: "Agricultural"},
        {value: "OTHER", text: "Other"},
    ];

    const statusOptions = [
        {value: "ALL", text: "All"},
        {value: "AVAILABLE", text: "Available"},
        {value: "OUT_OF_SERVICE", text: "Out of Service"},
        {value: "IN_USE", text: "In Use"},
        {value: "UNDER_MAINTENANCE", text: "Under Maintenance"},
    ];

    const handleAdd = () => {
        console.log('Add equipment');
    }

    const handleUpdate = (id: string) => {
        console.log(`Update equipment with ID: ${id}`);
    }

    const handleSearch = () => {
        console.log('Search equipment with type: ', type, ' and status: ', status);
    }

    const handleClearFilter = () => {
        console.log('Clear Filter');
    }

    const handleView = (id: string) => {
        console.log(`View equipment with ID: ${id}`);
    };

    const handleDelete = (id: string) => {
        console.log(`Delete equipment with ID: ${id}`);
    };

    return (
        <div className={page.embeddedPage}>
            <section id={page.filterContainer}>
                <PageTitle title={'Equipment'}/>
                <div
                    className="d-flex justify-content-between align-items-center flex-wrap gap-3"
                >
                    <div className="d-flex justify-content-even align-items-center" id={page.filter}>
                        <SelectorComponent label={'Type'} options={typeOptions} onChange={setType}/>
                        <SelectorComponent label={'Status'} options={statusOptions} onChange={setStatus}/>
                        <SearchButton onClick={handleSearch}/>
                        <ClearFilterButton onClick={handleClearFilter}/>
                    </div>
                    <AddBtn text={'Add Equipment'} onClick={handleAdd}/>
                </div>
            </section>

            <section id={page.mainContent}>
                <div id={page.tableContainer}>
                    <table>
                        <thead>
                        <tr>
                            <th scope="col">Equipment Name</th>
                            <th scope="col">Equipment Type</th>
                            <th scope="col">Equipment Status</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {equipments && equipments.map((equipment: Equipment, index: number) => (
                            <tr key={index}>
                                <td>{equipment.name}</td>
                                <td>{equipment.type}</td>
                                <td>{equipment.status}</td>
                                <td>
                                    <div className={`${page.actionContainer} d-flex`}>
                                        <ViewRowBtn onClick={() => handleView(equipment.equipmentId)}/>
                                        <UpdateRowBtn onClick={() => handleUpdate(equipment.equipmentId)}/>
                                        <DeleteRowBtn onClick={() => handleDelete(equipment.equipmentId)}/>
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