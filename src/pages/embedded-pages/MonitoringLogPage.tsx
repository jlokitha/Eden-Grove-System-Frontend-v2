import page from "./styles/embeddedPage.module.css";
import {SearchComponent} from "../../components/filter/SearchComponent.tsx";
import {useState} from "react";
import {DateFieldComponent} from "../../components/filter/DateFieldComponent.tsx";
import {SearchButton} from "../../components/filter/SearchButton.tsx";
import {ClearFilterButton} from "../../components/filter/ClearFilterButton.tsx";
import {AddBtn} from "../../components/buttons/AddBtn.tsx";
import {useDispatch, useSelector} from "react-redux";
import {MonitoringLog} from "../../model/MonitoringLog.ts";
import {LogCard} from "../../components/cards/LogCard.tsx";
import {PageTitle} from "../../components/filter/PageTitle.tsx";
import {MonitoringLogAddOrUpdate} from "../../components/popup/MonitoringLogAddOrUpdate.tsx";
import {MonitoringLogView} from "../../components/popup/MonitoringLogView.tsx";
import {addLog, updateLog} from "../../reducers/MonitoringLogReducer.ts";

interface RootState {
    log: MonitoringLog[];
}

export function MonitoringLogPage() {
    const [fieldName, setFieldName] = useState('');
    const [logDate, setLogDate] = useState('');

    const [openPopup, setOpenPopup] = useState(false);
    const [popupType, setPopupType] = useState<"save" | "update">("save");
    const [viewPopup, setViewPopup] = useState(false);
    const [selectedLogId, setSelectedLogId] = useState<string | undefined>(undefined);

    const logs = useSelector((state: RootState) => state.log);
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent, log: MonitoringLog) => {
        event.preventDefault();
        if (popupType === "save") {
            dispatch(addLog(log));
        } else if (popupType === "update") {
            dispatch(updateLog(log));
        }
        setOpenPopup(false);
    };

    const handleAdd = () => {
        setPopupType("save");
        setSelectedLogId(undefined);
        setOpenPopup(true);
    };

    const handleUpdate = (id: string) => {
        setPopupType("update");
        setSelectedLogId(id);
        setOpenPopup(true);
    };

    const handleSearch = () => {
        console.log('Search Log with field name: ' + fieldName + ', log date: ' + logDate);
    }

    const handleClearFilter = () => {
        console.log('Clear Filter');
    }

    const handleView = (id: string) => {
        setSelectedLogId(id);
        setViewPopup(true);
    };

    return (
        <div className={page.embeddedPage}>
            <section id={page.filterContainer}>
                <PageTitle title={'Monitoring Log'}/>
                <div
                    className="d-flex justify-content-between align-items-center flex-wrap gap-3"
                >
                    <div className="d-flex justify-content-even align-items-center" id={page.filter}>
                        <SearchComponent placeholder={'Search for field name'} onChange={setFieldName}/>
                        <DateFieldComponent label={'Date'} onChange={setLogDate}/>
                        <SearchButton onClick={handleSearch}/>
                        <ClearFilterButton onClick={handleClearFilter}/>
                    </div>
                    <AddBtn text={'Add Log'} onClick={handleAdd}/>
                </div>
            </section>

            <section id={page.cardContainer}>
                {logs && logs.map((log: MonitoringLog, index: number) => (
                    <LogCard
                        log={log}
                        index={index}
                        viewOnClick={() => handleView(log.logCode)}
                        updateOnClick={() => handleUpdate(log.logCode)}
                    />
                ))}
            </section>

            {openPopup && (
                <MonitoringLogAddOrUpdate
                    type={popupType}
                    logId={selectedLogId}
                    onSubmit={handleSubmit}
                    onClose={() => setOpenPopup(false)}
                />
            )}

            {viewPopup && (
                <MonitoringLogView logCode={selectedLogId!} onClose={() => setViewPopup(false)}/>
            )}
        </div>
    )
}