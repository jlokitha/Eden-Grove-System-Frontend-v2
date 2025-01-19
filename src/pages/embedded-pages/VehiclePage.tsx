import {AddBtn} from "../../components/buttons/AddBtn.tsx";
import {ClearFilterButton} from "../../components/filter/ClearFilterButton.tsx";
import {SearchButton} from "../../components/filter/SearchButton.tsx";
import {SearchComponent} from "../../components/filter/SearchComponent.tsx";
import {useState} from "react";
import {SelectorComponent} from "../../components/filter/SelectorComponent.tsx";
import page from "./styles/embeddedPage.module.css"
import {useDispatch, useSelector} from "react-redux";
import {Vehicle} from "../../model/Vehicle.ts";
import {ViewRowBtn} from "../../components/table/ViewRowBtn.tsx";
import {UpdateRowBtn} from "../../components/table/UpdateRowBtn.tsx";
import {DeleteRowBtn} from "../../components/table/DeleteRowBtn.tsx";
import {PageTitle} from "../../components/filter/PageTitle.tsx";
import {VehicleAddOrUpdate} from "../../components/popup/VehicleAddOrUpdate.tsx";
import {VehicleView} from "../../components/popup/VehicleView.tsx";
import {DeletePopup} from "../../components/popup/DeletePopup.tsx";
import {deleteVehicle} from "../../reducers/VehicleReducer.ts";
import {TableAvailabilityTag} from "../../components/table/TableAvailabilityTag.tsx";

interface RootState {
    vehicle: Vehicle[];
}

export function VehiclePage() {
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');

    const [openPopup, setOpenPopup] = useState(false);
    const [popupType, setPopupType] = useState<"save" | "update">("save");
    const [viewPopup, setViewPopup] = useState(false);
    const [deletePopup, setDeletePopup] = useState(false);
    const [selectedVehicleId, setSelectedVehicleId] = useState<string | undefined>(undefined);

    const vehicles = useSelector((state: RootState) => state.vehicle);
    const dispatch = useDispatch();

    const statusOptions = [
        {value: "ALL", text: "All"},
        {value: "AVAILABLE", text: "Available"},
        {value: "OUT_OF_SERVICE", text: "Out of Service"},
        {value: "IN_USE", text: "In Use"},
        {value: "UNDER_MAINTENANCE", text: "Under Maintenance"},
    ];

    const handleSubmit = () => {
        console.log('Submit Vehicle');
    }

    const handleAdd = () => {
        setPopupType("save");
        setSelectedVehicleId(undefined);
        setOpenPopup(true);
    }

    const handleUpdate = (id: string) => {
        setPopupType("update");
        setSelectedVehicleId(id);
        setOpenPopup(true);
    }

    const handleSearch = () => {
        console.log('Search Vehicle with category: ', category, ' and status: ', status);
    }

    const handleClearFilter = () => {
        console.log('Clear Filter');
    }

    const handleView = (id: string) => {
        setSelectedVehicleId(id);
        setViewPopup(true);
    };

    const handleDelete = (id: string) => {
        setSelectedVehicleId(id);
        setDeletePopup(true);
    };

    const handleDeleteConfirm = () => {
        if (selectedVehicleId) {
            dispatch(deleteVehicle(selectedVehicleId));
        }
        setDeletePopup(false);
    }

    const handleDeleteCancel = () => {
        setDeletePopup(false);
    }

    return (
        <div className={page.embeddedPage}>
            <section id={page.filterContainer}>
                <PageTitle title={'Vehicle'}/>
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
                                <td className="d-flex justify-content-center">
                                    <TableAvailabilityTag statusText={vehicle.status}/>
                                </td>
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

            {openPopup && (
                <VehicleAddOrUpdate type={popupType} onSubmit={handleSubmit} onClose={() => setOpenPopup(false)}/>
            )}
            {viewPopup && (
                <VehicleView vehicleId={selectedVehicleId!} onClose={() => setViewPopup(false)}/>
            )}
            {deletePopup && (
                <DeletePopup onCancel={handleDeleteCancel} onDelete={handleDeleteConfirm}/>
            )}
        </div>
    );
}