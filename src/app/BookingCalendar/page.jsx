"use client";

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';

export default function Calendar() {
    const [events, setEvents] = useState([
        {
            title: 'Guy Hawkins - Haircut',
            start: '2024-10-23T08:00:00',
            end: '2024-10-23T09:00:00',
            backgroundColor: '#a7f3d0', // Green
        },
        {
            title: 'Guy Hawkins - Haircut',
            start: '2024-10-23T10:00:00',
            end: '2024-10-23T11:00:00',
            backgroundColor: '#bfdbfe', // Blue
        },
        {
            title: 'Guy Hawkins - Haircut',
            start: '2024-10-26T12:00:00',
            end: '2024-10-26T13:00:00',
            backgroundColor: '#fde68a', // Yellow
        },
        {
            title: 'Guy Hawkins - Haircut',
            start: '2024-10-27T08:00:00',
            end: '2024-10-27T09:00:00',
            backgroundColor: '#fca5a5', // Red
        },
    ]);

    const [highlightedDates, setHighlightedDates] = useState({});
    const [BookingInfo, setBookingInfo] = useState();

    const getRandomColor = () => {
        const colors = ['#a7f3d0', '#bfdbfe', '#fde68a', '#fca5a5', '#fbbf24', '#60a5fa'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const handleDateClick = (info) => {
        const dateStr = info.dateStr;
        const newColor = getRandomColor();

        // Add or update the color for the clicked date
        setHighlightedDates((prev) => ({
            ...prev,
            [dateStr]: newColor,
        }));

        // Optionally add an event for this date with the selected color
        setEvents((prevEvents) => [
            ...prevEvents,
            {
                title: `Event on ${dateStr}`,
                start: `${dateStr}T08:00:00`,
                end: `${dateStr}T09:00:00`,
                backgroundColor: newColor,
            }
        ]);
    };

    return (
        <div className="container mx-auto p-4 min-h-screen bg-white text-black">
            <h1 className="text-2xl font-bold mb-4">Bookings</h1>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                events={events}
                editable={true}
                selectable={true}
                eventClick={(info) => alert(`Clicked on: ${info.event.title}`)}
                dateClick={handleDateClick}
                eventColor={(event) => event.backgroundColor}
            />



            {BookingInfo && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 text-gray-500 text-2xl"
                            onClick={onClose}
                        >
                            &times;
                        </button>

                        {/* Timer Display */}
                        <div className="flex justify-center items-center bg-gray-200 rounded-lg p-4 mb-4">
                            <span className="text-4xl font-bold text-gray-800">12:10:00</span>
                        </div>

                        <div className="text-center mb-4">
                            <h2 className="text-xl font-bold">{event.title}</h2>
                            <p className="text-gray-600">
                                {new Date(event.start).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} -{" "}
                                {new Date(event.end).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </p>
                        </div>

                        <div className="text-left mb-4">
                            <p className="mb-2">
                                <strong className="text-gray-700">Name:</strong> {event.title.split(" - ")[0]}
                            </p>
                            <p className="mb-2">
                                <strong className="text-gray-700">Time:</strong>{" "}
                                {new Date(event.start).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} -{" "}
                                {new Date(event.end).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </p>
                            <p>
                                <strong className="text-gray-700">Service:</strong> Haircut
                            </p>
                        </div>

                        {/* Start Appointment Button */}
                        <button
                            className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition"
                            onClick={() => alert("Starting Appointment")}
                        >
                            Start Appointment
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
