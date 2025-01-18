"use client";

import React, { useState } from 'react';
import Sidebar from '../sidebar';
import { FaPlus } from "react-icons/fa6";
import member1 from '../../../public/Service1.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {

    const [selectedCard, setSelectedCard] = useState(null);

    const data = [
        { serviceName: 'Haircut', time: '1 Hour', price: '10' },
        { serviceName: 'Haircut', time: '1 Hour', price: '10' },
        { serviceName: 'Haircut', time: '1 Hour', price: '10' },
        { serviceName: 'Haircut', time: '1 Hour', price: '10' },
    ];

    const handleCardSelect = (index) => {
        setSelectedCard(index);
    };

    return (
        <div className="min-h-screen flex justify-center bg-white text-black">
            <div className="col-span-5 flex flex-col">
                <h1 className="text-center text-4xl mt-8">Choose a Service</h1>

                <div className="flex-grow mx-4 mt-5 flex items-center justify-center">
                    <div className="grid sm:grid-cols-4 gap-3">
                        {/* Mapping over the data */}
                        {data.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleCardSelect(index)} // Click handler for selection
                                className={`relative mb-10 border-2 ${selectedCard === index ? 'border-orange-500' : 'border-transparent'
                                    } rounded-lg overflow-hidden cursor-pointer transition-all duration-300`}
                            >
                                <Image
                                    src={member1} // Replace with dynamic images for each member
                                    alt={item.serviceName}
                                    className="w-full h-80 object-cover rounded-lg"
                                />
                                <div className="absolute text-white top-0 right-34 ps-4 py-2 rounded-lg">
                                    <h1 className='text-3xl flex items-center'>{item.serviceName} <p className='text-xl mx-4'>{item.time}</p></h1>
                                    <p className='text-4xl font-bold'>${item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Button Container */}
                <div className="flex justify-center items-center gap-14 mb-24">
                    <Link href={selectedCard !== null ? '/SelectHairstylist' : '#'}>
                        <button
                            className={`px-32 py-3 px-36 bg-orange-600 text-white rounded-md hover:bg-orange-700 ${selectedCard === null ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            disabled={selectedCard === null} // Disable button if no card is selected
                        >
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
