"use client";

import React from "react";
import Sidebar from "../sidebar.jsx";
import { FaRegUser } from "react-icons/fa6";


const BookingsPage = () => {
  const bookings = [
    { name: "khushi", service: "Haircut" },
    { name: "Aarav", service: "Facial" },
    { name: "Nisha", service: "Manicure" },
    { name: "Rohan", service: "Pedicure" },
    { name: "Simran", service: "Hair Spa" },
  ];

  return (
    <div className="grid grid-cols-6 divide-x bg-white text-black h-full">
      <Sidebar />
      <div className="ps-4 pt-6 col-span-5">
        <h1 className="text-3xl font-bold mb-6">Your Bookings</h1>
        <div>
          {bookings.length === 0 ? (
            <p className="text-gray-500">No bookings yet. Book your first slot!</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

              {bookings.map((booking, index) => (
                <li
                  key={index}
                  className="p-4 border rounded-md m-2 shadow-sm flex w-80 flex-col"
                >
                  <p className="flex items-center gap-2 text-lg font-semibold">
                    <FaRegUser /> {booking.name}
                  </p>
                  <p>{booking.service}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
