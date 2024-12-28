import React, { useState } from 'react';
import { ImCross } from "react-icons/im";

export default function PopupForm({ isOpen, onClose, onSubmit }) {
    const [service, setService] = useState('');
    const [time, setTime] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = () => {
        const newService = { service, time, price };
        onSubmit(newService);
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <div className='flex justify-end'>
                            <ImCross onClick={onClose} />
                        </div>

                        <h2 className="text-2xl mb-4">Add New Service</h2>
                        <div className="mb-4">
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full border px-3 py-2 rounded-lg"
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Password</label>
                            <input
                                type="password"
                                className="w-full border px-3 py-2 rounded-lg"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Confirm Password</label>
                            <input
                                type="password"
                                className="w-full border px-3 py-2 rounded-lg"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2">What type of account are you creating?</label>
                            <select name="" id="" className='border rounded-lg py-2 w-full'>
                                <option value="Admin">Admin</option>
                                <option value="Cashier">Cashier</option>
                                <option value="Hairstlist">Hairstlist</option>

                            </select>

                        </div>
                        <div className="w-full border py-2 text-center text-white rounded-lg bg-orange-500">
                            <button>Create Account</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
