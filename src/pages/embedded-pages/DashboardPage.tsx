import {useEffect, useState} from "react";
import {CountCard} from "../../components/cards/CountCard.tsx";
import dashboard from "./styles/dashboardPage.module.css";
import page from "./styles/embeddedPage.module.css";
import {DashboardFieldCard} from "../../components/cards/DashboardFieldCard.tsx";
import {MonitoringLog} from "../../model/MonitoringLog.ts";
import {DashboardLogCard} from "../../components/cards/DashboardLogCard.tsx";
import DoughnutChart from "../../components/chart/DoughnutChart.tsx";
import {FieldDashboard} from "../../model/FieldDashboard.ts";
import {ChartData} from "../../model/ChartData.ts";
import {Field} from "../../model/Field.ts";

export function DashboardPage() {
    const [staffCount, setStaffCount] = useState(0);
    const [fieldCount, setFieldCount] = useState(0);
    const [cropCount, setCropCount] = useState(0);
    const [vehicleCount, setVehicleCount] = useState(0);

    const [fields, setFields] = useState<FieldDashboard[]>([]);
    const [logs, setLogs] = useState<MonitoringLog[]>([]);
    const [chartData, setChartData] = useState<ChartData[]>([]);

    useEffect(() => {
        setStaffCount(10)
        setFieldCount(10)
        setCropCount(10)
        setVehicleCount(10)

        const fields = [
            {
                fCode: "F001",
                fieldName: "Field Alpha",
                fieldSize: 1200,
                staffList: 5,
                cropList: 3,
                fieldImage1: "iVBORw0KGgoAAAANSUhEUgAA...",
            },
            {
                fCode: "F002",
                fieldName: "Field Beta",
                fieldSize: 1500,
                staffList: 8,
                cropList: 4,
                fieldImage1: "iVBORw0KGgoAAAANSUhEUgAA...",
            },
            {
                fCode: "F003",
                fieldName: "Field Gamma",
                fieldSize: 900,
                staffList: 3,
                cropList: 2,
                fieldImage1: "iVBORw0KGgoAAAANSUhEUgAA...",
            },
            {
                fCode: "F004",
                fieldName: "Field Delta",
                fieldSize: 2000,
                staffList: 10,
                cropList: 5,
                fieldImage1: "iVBORw0KGgoAAAANSUhEUgAA...",
            },
            {
                fCode: "F005",
                fieldName: "Field Epsilon",
                fieldSize: 1100,
                staffList: 4,
                cropList: 3,
                fieldImage1: "iVBORw0KGgoAAAANSUhEUgAA...",
            },
            {
                fCode: "F006",
                fieldName: "Field Zeta",
                fieldSize: 1300,
                staffList: 6,
                cropList: 4,
                fieldImage1: "iVBORw0KGgoAAAANSUhEUgAA...",
            },
            {
                fCode: "F007",
                fieldName: "Field Eta",
                fieldSize: 1400,
                staffList: 7,
                cropList: 3,
                fieldImage1: "iVBORw0KGgoAAAANSUhEUgAA...",
            },
            {
                fCode: "F008",
                fieldName: "Field Theta",
                fieldSize: 1600,
                staffList: 9,
                cropList: 5,
                fieldImage1: "iVBORw0KGgoAAAANSUhEUgAA...",
            },
            {
                fCode: "F009",
                fieldName: "Field Iota",
                fieldSize: 1000,
                staffList: 4,
                cropList: 2,
                fieldImage1: "iVBORw0KGgoAAAANSUhEUgAA...",
            },
            {
                fCode: "F010",
                fieldName: "Field Kappa",
                fieldSize: 1700,
                staffList: 11,
                cropList: 6,
                fieldImage1: "iVBORw0KGgoAAAANSUhEUgAA...",
            },
        ];
        setFields(fields);

        const logs = [
            new MonitoringLog('M-001', new Date('2023-01-01'), 'Observation 1', 'image.jpg', new Field('F-001', 'Field A', 10.5, '10.123,20.456', 'image1A.jpg', 'image2A.jpg', 'Active'), [], []),
            new MonitoringLog('M-002', new Date('2023-01-02'), 'Observation 2', 'image.jpg', new Field('F-002', 'Field B', 15.0, '11.123,21.456', 'image1B.jpg', 'image2B.jpg', 'Inactive'), [], []),
            new MonitoringLog('M-003', new Date('2023-01-03'), 'Observation 3', 'image.jpg', new Field('F-003', 'Field C', 20.0, '12.123,22.456', 'image1C.jpg', 'image2C.jpg', 'Active'), [], []),
            new MonitoringLog('M-004', new Date('2023-01-04'), 'Observation 4', 'image.jpg', new Field('F-004', 'Field D', 25.5, '13.123,23.456', 'image1D.jpg', 'image2D.jpg', 'Inactive'), [], []),
            new MonitoringLog('M-005', new Date('2023-01-05'), 'Observation 5', 'image.jpg', new Field('F-005', 'Field E', 30.0, '14.123,24.456', 'image1E.jpg', 'image2E.jpg', 'Active'), [], []),
            new MonitoringLog('M-006', new Date('2023-01-06'), 'Observation 6', 'image.jpg', new Field('F-006', 'Field F', 35.5, '15.123,25.456', 'image1F.jpg', 'image2F.jpg', 'Inactive'), [], []),
            new MonitoringLog('M-007', new Date('2023-01-07'), 'Observation 7', 'image.jpg', new Field('F-007', 'Field G', 40.0, '16.123,26.456', 'image1G.jpg', 'image2G.jpg', 'Active'), [], []),
            new MonitoringLog('M-008', new Date('2023-01-08'), 'Observation 8', 'image.jpg', new Field('F-008', 'Field H', 45.5, '17.123,27.456', 'image1H.jpg', 'image2H.jpg', 'Inactive'), [], []),
            new MonitoringLog('M-009', new Date('2023-01-09'), 'Observation 9', 'image.jpg', new Field('F-009', 'Field I', 50.0, '18.123,28.456', 'image1I.jpg', 'image2I.jpg', 'Active'), [], []),
            new MonitoringLog('M-010', new Date('2023-01-10'), 'Observation 10', 'image.jpg', new Field('F-010', 'Field J', 55.5, '19.123,29.456', 'image1J.jpg', 'image2J.jpg', 'Inactive'), [], [])
        ];
        setLogs(logs);

        const chartData: ChartData[] = [
            new ChartData("Field Alpha", 10),
            new ChartData("Field Beta", 20),
            new ChartData("Field Gamma", 30),
            new ChartData("Field Delta", 40),
            new ChartData("Field Epsilon", 50),
        ];
        setChartData(chartData);
    }, []);

    return (
        <div className={page.embeddedPage}>
            <section className={dashboard.topContainer}>
                <CountCard
                    icon={'/src/assets/icons/staff-black.svg'}
                    alt={'icon for represent staff'}
                    title={'Staff Count'}
                    count={staffCount}
                />
                <CountCard
                    icon={'/src/assets/icons/field-black.svg'}
                    alt={'icon for represent field'}
                    title={'Field Count'}
                    count={fieldCount}
                />
                <CountCard
                    icon={'/src/assets/icons/crop-black.svg'}
                    alt={'icon for represent crop'}
                    title={'Crop Count'}
                    count={cropCount}
                />
                <CountCard
                    icon={'/src/assets/icons/vehicle-black.svg'}
                    alt={'icon for represent vehicle'}
                    title={'Vehicle Count'}
                    count={vehicleCount}
                />
            </section>

            <section className={dashboard.bottomContainer}>
                <div className={dashboard.sideCardContainer}>
                    <h2 className="text-center">Field Details</h2>

                    {fields && fields.map((field) => (
                        <DashboardFieldCard field={field}/>
                    ))}
                </div>

                <div className={dashboard.sideCardContainer}>
                    <h2 className="text-center">Field Monitored Detailed</h2>
                    <DoughnutChart props={chartData}/>
                </div>

                <div className={dashboard.sideCardContainer}>
                    <h2 className="text-center">Recent Logs</h2>

                    {logs && logs.map((log) => (
                        <DashboardLogCard log={log}/>
                    ))}
                </div>
            </section>
        </div>
    );
}
