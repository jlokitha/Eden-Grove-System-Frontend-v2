import {AddBtn} from "../components/buttons/AddBtn.tsx";
import {ClearFilterButton} from "../components/filter/ClearFilterButton.tsx";
import {SearchButton} from "../components/filter/SearchButton.tsx";
import {SearchComponent} from "../components/filter/SearchComponent.tsx";
import {useState} from "react";
import {SelectorComponent} from "../components/filter/SelectorComponent.tsx";
import page from "./styles/embeddedPage.module.css"
import {useSelector} from "react-redux";
import {Vehicle} from "../model/Vehicle.ts";
import {ViewRowBtn} from "../components/buttons/ViewRowBtn.tsx";
import {UpdateRowBtn} from "../components/buttons/UpdateRowBtn.tsx";
import {DeleteRowBtn} from "../components/buttons/DeleteRowBtn.tsx";

interface RootState {
    vehicle: Vehicle[];
}

export function VehiclePage() {
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');

    const vehicles = useSelector((state: RootState) => state.vehicle);

    const statusOptions = [
        {value: "ALL", text: "All"},
        {value: "AVAILABLE", text: "Available"},
        {value: "OUT_OF_SERVICE", text: "Out of Service"},
        {value: "IN_USE", text: "In Use"},
        {value: "UNDER_MAINTENANCE", text: "Under Maintenance"},
    ];

    const handleAdd = () => {
        console.log('Add Vehicle');
    }

    const handleUpdate = (id: string) => {
        console.log(`Update staff with ID: ${id}`);
    }

    const handleSearch = () => {
        console.log('Search Vehicle with category: ', category, ' and status: ', status);
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
                <h1>Vehicle</h1>
                <div
                    className="d-flex justify-content-between align-items-center flex-wrap gap-3"
                >
                    <div className="d-flex justify-content-even align-items-center" id={page.filter}>
                        <SearchComponent placeholder={'Search by category'} onChange={setCategory}/>
                        <SelectorComponent label={'Status'} options={statusOptions} onChange={setStatus}/>
                        <SearchButton onClick={handleSearch}/>
                        <ClearFilterButton onClick={handleClearFilter}/>
                    </div>
                    <AddBtn text={'Add Vehicle'} onClick={handleAdd}/>
                </div>
            </section>

            <section id={page.mainContent}>
                <div id={page.tableContainer}>
                    <table>
                        <thead>
                        <tr>
                            <th scope="col">License Plate No</th>
                            <th scope="col">Category</th>
                            <th scope="col">Fuel Type</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {vehicles && vehicles.map((vehicle: Vehicle, index: number) => (
                            <tr key={index}>
                                <td>{vehicle.licensePlateNo}</td>
                                <td>{vehicle.category}</td>
                                <td>{vehicle.fuelType}</td>
                                <td>{vehicle.status}</td>
                                <td>
                                    <div className={`${page.actionContainer} d-flex`}>
                                        <ViewRowBtn onClick={() => handleView(vehicle.vehicleCode)}/>
                                        <UpdateRowBtn onClick={() => handleUpdate(vehicle.vehicleCode)}/>
                                        <DeleteRowBtn onClick={() => handleDelete(vehicle.vehicleCode)}/>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}