import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useRef } from 'react';
import {ChartData} from "../../model/ChartData.ts";
import styles from "./style/doughnutChart.module.css"

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
    props: ChartData[];
}

const DoughnutChart = ({props}: DoughnutChartProps) => {
    const chartRef = useRef<ChartJS | null>(null);

    // Calculate total logs
    const totalLogs = props.reduce((sum, item) => sum + item.logCount, 0);

    // Transform data into labels and percentages
    const labels = props.map((item) => item.fieldName);
    const data = props.map(
        (item) => parseFloat(((item.logCount / totalLogs) * 100).toFixed(2))
    );

    // Dynamically generated data based on props
    const chartDataConfig = {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: [
                    '#1dbc5d',
                    '#1dbccd',
                    '#1d7dbc',
                    '#b4db1d',
                    '#1d96bc',
                ],
                hoverBackgroundColor: [
                    '#17a752',
                    '#17a8b3',
                    '#166994',
                    '#99b017',
                    '#187999',
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: '#000',
                },
            },
        },
    };

    useEffect(() => {
        return () => {
            // Destroy the Chart instance on unmount
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className={styles.chart}>
            <Doughnut
                data={chartDataConfig}
                options={options}
                ref={(instance) => {
                    if (instance) {
                        chartRef.current = instance; // Assign the Chart.js instance
                    }
                }}
            />
        </div>
    );
};

export default DoughnutChart;
