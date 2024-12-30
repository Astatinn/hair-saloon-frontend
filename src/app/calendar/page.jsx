"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function BookingsCalendar() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const availableSlots = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "5 PM", "6 PM", "7 PM"];

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
    setShowForm(false);
    setShowModal(false);
  };

  const handleTimeSlotClick = (time) => {
    setSelectedTime(time);
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const [hour, period] = selectedTime.split(" ");
    const selectedHour = period === "PM" && hour !== "12" ? parseInt(hour) + 12 : parseInt(hour);

    const newEvent = {
      title: `${formData.name} (${selectedTime})`,
      start: new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), selectedHour, 0),
      end: new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), selectedHour + 1, 0),
    };

    setEvents([...events, newEvent]);
    setShowForm(false);
    setShowModal(true);
    setFormData({ name: "", email: "", phone: "" });
  };

  const eventPropGetter = (event) => {
    const isToday = moment(event.start).isSame(moment(), "day");
    const isSelectedDate = selectedDate && moment(event.start).isSame(selectedDate, "day");
    return {
      className: isToday ? "bg-blue-500 text-white" : isSelectedDate ? "bg-green-500 text-white" : "bg-gray-200",
    };
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Appointment Booking</h1>
      <div className="flex gap-8">
        {/* Calendar */}
        <div className="flex-1">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "70vh" }}
            className="text-black bg-white"
            selectable
            views={["month", "week", "day", "agenda"]}
            onSelectSlot={handleSelectSlot}
            onSelectEvent={(event) => alert(`Booking: ${event.title}`)}
            eventPropGetter={eventPropGetter}
          />
        </div>


        <div className="flex-1">
          <h3 className="text-lg font-medium mb-4">Available Slots</h3>
          <div className="grid grid-cols-3 gap-4">
            {availableSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => handleTimeSlotClick(slot)}
                className="px-4 py-2 border rounded shadow hover:bg-gray-100"
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>


      {showForm && (
        <div className="fixed text-black inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-lg font-medium mb-4">Enter your personal data</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name:</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email:</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Phone:</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      {showModal && (
        <div className="text-black fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-medium mb-4">Thank you for your booking!</h3>
            <p className="mb-4">Please proceed to the counter for payment.</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
