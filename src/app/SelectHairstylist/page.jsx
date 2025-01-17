"use client";

import React, { useState } from 'react';
import Sidebar from '../sidebar';
import { FaPlus } from "react-icons/fa6";
import member1 from '../../../public/img1.png'; // This is the static image for now, replace with dynamic if needed
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {

    const data = [
        { mem: 'member1', heading: 'Jenny Wilson', description: 'Master Hairstylists' },
        { mem: 'member1', heading: 'Jenny Wilson1', description: 'Master Hairstylists' },
        { mem: 'member1', heading: 'Jenny Wilson2', description: 'Master Hairstylists' },
        { mem: 'member1', heading: 'Jenny Wilson3', description: 'Master Hairstylists' },
    ];

    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardSelect = (index) => {
        setSelectedCard(index);
    };

    return (
        <div className="min-h-screen flex justify-center bg-white text-black">
            <div className="col-span-5 flex flex-col">
                <h1 className="text-center text-4xl mt-8">Choose a hairstylist</h1>

                <div className="flex-grow flex items-center justify-center">
                    <div className="grid grid-cols-4 gap-6">
                        {/* Mapping over the data */}
                        {data.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleCardSelect(index)}
                                className={`relative mb-10 border-2 ${selectedCard === index ? 'border-orange-500 ' : ''
                                    } rounded-lg overflow-hidden cursor-pointer transition-all duration-300`}
                            >
                                <Image
                                    src={member1} // Replace with dynamic images for each member
                                    alt={item.heading}
                                    className="w-full h-80 object-cover rounded-lg"
                                />
                                <div className="absolute bottom-5 left-0 right-0 bg-slate-50 mx-4 text-center px-10 py-2 rounded-lg">
                                    <h1>{item.heading}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Button Container */}
                <div className="flex justify-center items-center gap-14 mb-24">
                    <button className="px-6 py-3 px-28 border rounded-md">
                        Anyone is Fine
                    </button>
                    <Link href={selectedCard !== null ? '/calendar' : '#'}>
                        <button
                            className={`px-6 py-3 px-36 bg-orange-600 text-white rounded-md hover:bg-orange-700 ${selectedCard === null ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            disabled={selectedCard === null}
                        >
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
