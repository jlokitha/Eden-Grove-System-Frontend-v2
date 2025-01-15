import {useEffect, useState} from "react";
import "./styles/dateContainer.css"

export function DateContainer() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        function updateDateTime() {
            const now = new Date();
            const formattedDate = now.toLocaleDateString('en-US', {
                weekday: 'long',
                day: '2-digit',
                month: 'short',
                year: 'numeric',
            });
            const formattedTime = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            });

            setDate(formattedDate);
            setTime(formattedTime);
        }

        const intervalId = setInterval(updateDateTime, 60000);
        updateDateTime(); // Initial call to set the date and time immediately

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div id="date-container">
            <p id="date">{date}</p>
            <p id="time">{time}</p>
        </div>
    )
}