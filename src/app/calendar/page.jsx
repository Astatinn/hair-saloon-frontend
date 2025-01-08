"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import "react-datepicker/dist/react-datepicker.css";

// Booking Form Page Component
const Page = ({ onNewBooking }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const slots = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "5 PM", "6 PM", "7 PM"];

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    if (selectedDate) {
      setModalIsOpen(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = { ...formData, selectedDate, selectedSlot };
    if (typeof onNewBooking === "function") {
      onNewBooking(newBooking);
    }
    setModalIsOpen(false);
    setSelectedDate(null);
    setSelectedSlot(null);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="text-center bg-white h-full pt-20">
      <h1 className="text-5xl pb-8 text-black">Book Your Appointment</h1>
      <div className="flex justify-center gap-56 mt-20">
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            minDate={new Date()}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="text-black">
          <h3 className="text-lg font-semibold mb-4">Available Slots</h3>
          <div className="grid grid-cols-3 gap-4">
            {slots.map((slot) => (
              <button
                key={slot}
                className={`p-2 px-4 rounded-2xl text-sm font-medium ${
                  selectedSlot === slot
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 border border-gray-300 hover:bg-gray-200"
                }`}
                onClick={() => handleSlotSelect(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            padding: "20px",
            borderRadius: "10px",
          },
        }}
      >
        <h2 className="text-xl font-bold mb-4 text-black">Enter Your Details</h2>
        <form onSubmit={handleSubmit} className="text-black">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="w-full p-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600"
          >
            Confirm
          </button>
        </form>
      </Modal>
    </div>
  );
};

// Bookings Page Component
const BookingsPage = ({ bookings = [] }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Bookings</h1>
      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings yet. Book your first slot!</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((booking, index) => (
            <li key={index} className="p-4 border rounded-md shadow-sm">
              <p>
                <strong>Name:</strong> {booking.name}
              </p>
              <p>
                <strong>Email:</strong> {booking.email}
              </p>
              <p>
                <strong>Phone:</strong> {booking.phone}
              </p>
              <p>
                <strong>Date:</strong> {new Date(booking.selectedDate).toDateString()}
              </p>
              <p>
                <strong>Slot:</strong> {booking.selectedSlot}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Main Component that combines both Pages
const MainComponent = () => {
  const [bookings, setBookings] = useState([]);

  const handleNewBooking = (newBooking) => {
    setBookings((prevBookings) => [...prevBookings, newBooking]);
  };

  return (
    <div>
      <Page onNewBooking={handleNewBooking} />
      <BookingsPage bookings={bookings} />
    </div>
  );
};

export default MainComponent;
