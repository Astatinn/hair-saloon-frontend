"use client";


import React from 'react';
import './page.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';

const localizer = momentLocalizer(moment);

export default function BookingsCalendar() {
  const [events, setEvents] = useState([
    {
      title: 'Meeting with John',
      start: new Date(2024, 11, 26, 10, 0), // Dec 26, 2024, 10:00 AM
      end: new Date(2024, 11, 26, 11, 0),   // Dec 26, 2024, 11:00 AM
    },
    {
      title: 'Team Lunch',
      start: new Date(2024, 11, 27, 13, 0), // Dec 27, 2024, 1:00 PM
      end: new Date(2024, 11, 27, 14, 0),   // Dec 27, 2024, 2:00 PM
    },
  ]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('Enter the title for your booking:');
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <div style={{ height: '100vh', padding: '20px' }}>
      <h1>Bookings Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '80vh' }}
        selectable
        className='custom-calendar text-black'
        onSelectSlot={handleSelectSlot}
        onSelectEvent={(event) => alert(`Booking: ${event.title}`)}
      />
    </div>
  );
}
