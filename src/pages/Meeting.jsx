import { useState } from "react";
import "../styles/Meeting.css";


function Meeting() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [subject, setSubject] = useState("");

    const handleSubmit = () => {
        if (!date || !time || !subject) {
            alert("Please fill in all fields.");
            return;
        }

        // Convert date and time to Google Calendar format
        const eventDate = new Date(`${date}T${time}:00`);
        const startDate = eventDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

        // Assume a default duration of 1 hour
        const endDate = new Date(eventDate.getTime() + 60 * 60 * 1000)
            .toISOString()
            .replace(/[-:]/g, "")
            .split(".")[0] + "Z";

        // Google Calendar Event URL
        const googleCalendarURL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            subject
        )}&dates=${startDate}/${endDate}&details=Scheduled%20via%20Meeting%20App`;

        // Redirect to Google Calendar
        window.open(googleCalendarURL, "_blank");
    };

    return (
        <div className="meeting-container">
            <h2 className="meeting-title">Schedule a Meeting</h2>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="meeting-input"
            />
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="meeting-input"
            />
            <input
                type="text"
                placeholder="Meeting Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="meeting-input"
            />
            <button onClick={handleSubmit} className="meeting-button">
                Add to Google Calendar
            </button>
        </div>
    );
}

export default Meeting;
