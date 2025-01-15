"use client";

import React, { useState, createContext } from 'react';
import Sidebar from '../sidebar';
import { FaPlus } from "react-icons/fa6";
import PopupForm from '../detailForm/page';

export const ServicesContext = createContext();

export default function Page() {
    const [IsformOpen, setIsformOpen] = useState(false);
    const [servicesData, setServicesData] = useState([
        { service: "Haircut", time: "30 minutes", price: "$10" },
        { service: "Hair Coloring", time: "2 hours", price: "$30" },
        { service: "Beard Trimming", time: "20 minutes", price: "$5" },
        { service: "Facial Cleanup", time: "45 minutes", price: "$15" },
        { service: "Hair Spa", time: "1.5 hours", price: "$25" },
        { service: "Bridal Makeup", time: "3 hours", price: "$80" },
        { service: "Manicure", time: "40 minutes", price: "$20" },
        { service: "Pedicure", time: "50 minutes", price: "$25" },
    ]);

    const handleNewService = (newService) => {
        setServicesData([...servicesData, newService]);
        setIsformOpen(false);
    };

    return (
        <div className='h-full divide-x grid grid-cols-6 bg-white text-black'>
            <Sidebar selected='Services' />
            <div className='col-span-5'>
                <div>
                    <h2 className='text-4xl mt-4 mx-5'>Services</h2>
                    <button className='flex items-center place-self-end mx-8 border rounded-lg py-3 px-4 bg-orange-700 text-white' onClick={() => setIsformOpen(true)}>
                        <FaPlus className='mr-2' /> Add new service
                    </button>
                </div>

                <table className="w-10/12 mx-20 rounded-3xl mt-14 shadow-lg ">
                    <thead>
                        <tr className='text-center'>
                            <th className="py-4 border-b">Service</th>
                            <th className=" py-4 border-b">Time</th>
                            <th className=" py-4 border-b">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {servicesData.map((service, index) => (
                            <tr key={index} className="text-center">
                                <td className=" py-4 border-b">{service.service}</td>
                                <td className=" py-4 border-b">{service.time}</td>
                                <td className="px-10 py-4 border-b">{service.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <PopupForm isOpen={IsformOpen} onClose={() => setIsformOpen(false)} onSubmit={handleNewService} />
            </div>
        </div>
    );
}
