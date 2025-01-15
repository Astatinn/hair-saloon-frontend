"use client";

import React, { useState, useEffect } from "react";
import { IoIosCheckmark } from "react-icons/io";

export default function Page() {
    const [service, setService] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!date) {
            setDate(new Date().toISOString().split("T")[0]);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newService = { service, time, price, date };
        console.log("New service submitted:", newService);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex text-black min-h-screen bg-gray-100">
            <div className="w-9/12 bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center">
                <h2 className="text-4xl font-medium mb-4 text-center pt-10">
                    Enter your personal data
                </h2>

                <form action="" className="mt-14 mx-72">
                    <div className="mb-8">
                        <label className="block mb-2">Name</label>
                        <input
                            type="text"
                            className="w-full border px-3 py-2 rounded-lg"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                        />
                    </div>

                    <div className="mb-8">
                        <label className="block mb-2">Email</label>
                        <input
                            type="text"
                            className="w-full border px-3 py-2 rounded-lg"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>

                    <div className="mb-8">
                        <label className="block mb-2">Phone</label>
                        <input
                            type="text"
                            className="w-full border px-3 py-2 rounded-lg"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="px-24 mt-20 py-2 bg-orange-600 text-white rounded-md"
                            onClick={handleSubmit}
                        >
                            Book now
                        </button>
                    </div>
                </form>
            </div>

            <div className="bg-gray-200 p-8 rounded-lg w-3/12">
                <h3 className="text-xl mb-4">Appointment Details</h3>
                <div className="mb-2">
                    <strong>Service:</strong> {service || "Not specified"}
                </div>
                <div className="mb-2">
                    <strong>Email:</strong> {time || "Not specified"}
                </div>
                <div className="mb-2">
                    <strong>Phone:</strong> {price || "Not specified"}
                </div>
                <div className="mb-2">
                    <strong>Date:</strong> {date || "Not specified"}
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
                        {/* Circle with Centered Icon */}
                        <div className="bg-orange-100 flex items-center justify-center p-4 rounded-full w-16 h-16 mx-auto mb-4">
                            <span className="text-orange-600 text-6xl"> <IoIosCheckmark /> </span>
                        </div>
                        <h2 className="text-xl font-medium mb-2">Thank you for your booking</h2>
                        <p className="text-gray-500 mb-6">
                            Please proceed to the counter for payment
                        </p>
                        <button
                            className="bg-orange-600 text-white px-8 py-2 rounded-md"
                            onClick={closeModal}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}
