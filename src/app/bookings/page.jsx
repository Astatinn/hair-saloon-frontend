"use client";

import React from "react";

// Component to display a list of bookings
const BookingsPage = ({ bookings = [] }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Bookings</h1>
      {/* If no bookings, display message */}
      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings yet. Book your first slot!</p>
      ) : (
        <ul className="space-y-4">
          {/* Display each booking */}
          {bookings.map((booking, index) => (
            <li key={index} className="p-4 border rounded-md shadow-sm">
              <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Email:</strong> {booking.email}</p>
              <p><strong>Phone:</strong> {booking.phone}</p>
              <p><strong>Date:</strong> {new Date(booking.selectedDate).toDateString()}</p>
              <p><strong>Slot:</strong> {booking.selectedSlot}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingsPage;
