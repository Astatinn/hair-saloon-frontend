"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";

// Booking Form Page Component
const Page = ({ onNewBooking }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const slots = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "5 PM", "6 PM", "7 PM"];

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    if (selectedDate) {
      setFormData({ ...formData }); // Keeping form data intact if modal was to open before
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = { ...formData, selectedDate, selectedSlot };
    if (typeof onNewBooking === "function") {
      onNewBooking(newBooking);
    }
    setSelectedDate(null);
    setSelectedSlot(null);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="text-center min-h-screen bg-white pt-20">
      <h1 className="text-5xl pb-8 text-black">Book Your Appointment</h1>
      <div className="flex justify-center gap-56 mt-20">
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            minDate={new Date()}
            className="rounded-lg shadow-md"
            required
          />
        </div>
        <div className="text-black">
          <h3 className="text-lg font-semibold mb-4">Available Slots</h3>
          <div className="grid grid-cols-3 gap-4">
            {slots.map((slot) => (
              <button
                key={slot}
                className={`p-2 px-4 rounded-2xl text-sm font-medium ${selectedSlot === slot
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 border border-gray-300 hover:bg-gray-200"
                  }`}
                onClick={() => handleSlotSelect(slot)}
                required
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>


      <div className="mt-20">
        <Link href='/detailForm'>
          <button className="bg-orange-600 px-40 py-2 rounded-md hover:bg-orange-700 text-white">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
