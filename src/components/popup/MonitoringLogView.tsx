import {MonitoringLog} from "../../model/MonitoringLog.ts";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import styles from "./style/view.module.css";
import {CloseBtn} from "../buttons/CloseBtn.tsx";
import {Carousel} from "../form/Carousel.tsx";
import {DetailContainer} from "../form/DetailContainer.tsx";
import {TagContainer} from "../form/TagContainer.tsx";

interface MonitoringLogViewProps {
    logCode: string;
    onClose: () => void;
}

interface RootState {
    log: MonitoringLog[];
}

export function MonitoringLogView({logCode, onClose}: MonitoringLogViewProps) {
    const [monitoringLog, setMonitoringLog] = useState<MonitoringLog | null>(null);

    const monitoringLogs = useSelector((state: RootState) => state.log);

    useEffect(() => {
        const selectedMonitoringLog = monitoringLogs.find((m: MonitoringLog) => m.logCode === logCode);
        setMonitoringLog(selectedMonitoringLog || null);
    }, [logCode, monitoringLogs]);

    if (!monitoringLog) {
        return null;
    }

    return (
        <section className={styles.viewPopup}>
            <div className={`${styles.titleContainer} d-flex justify-content-between align-items-center`}>
                <h1>Log Details</h1>
                <CloseBtn onClick={onClose}/>
            </div>
            <div className="main-content">
                <Carousel image1={monitoringLog.observedImage} image2={undefined}/>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center mb-3`}>
                    <DetailContainer label={'Log Code'} value={monitoringLog.logCode}/>
                    <DetailContainer label={'Log Date'}
                                     value={new Date(monitoringLog.logDate).toISOString().slice(0, 10)}/>
                    <TagContainer label={'Field'} values={[monitoringLog.field.fieldName]}/>
                    {monitoringLog.crops && monitoringLog.crops.length > 0 &&
                        <TagContainer label={'Crop'} values={monitoringLog.crops.map(crop => crop.commonName)}/>
                    }
                </div>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center mb-3`}>
                    <DetailContainer label={'Observation'} value={monitoringLog.observation}/>
                    {monitoringLog.staffs && monitoringLog.staffs.length > 0 &&
                        <TagContainer label={'Staffs'} values={monitoringLog.staffs.map(staff => staff.name)}/>
                    }
                </div>
            </div>
        </section>

    )
}