import React from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegClipboard } from "react-icons/fa";
import { FiScissors } from "react-icons/fi";
import { LuCalendarCheck } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import Link from 'next/link';

export default function Sidebar({ selected }) {
    const isSelected = (option) => (
        selected === option ? 'font-bold' : 'font-normal'
    );

    // Define menu options for each role
    const menuOptions = {
        admin: [
            { name: 'Dashboard', icon: <MdOutlineDashboard />, link: '/dashboard' },
            { name: 'Services', icon: <FaRegClipboard />, link: '/services' },
            { name: 'Hairstylists', icon: <FiScissors />, link: '/hairstylist' },
            { name: 'Bookings', icon: <LuCalendarCheck />, link: '/bookings' },
            { name: 'User Management', icon: <LuCalendarCheck />, link: '/user' },
        ],
        cashier: [
            { name: 'Dashboard', icon: <MdOutlineDashboard />, link: '/dashboard' },
            { name: 'Bookings', icon: <LuCalendarCheck />, link: '/bookings' },
            { name: 'Calendar', icon: <LuCalendarCheck />, link: '/calendar' },
        ],
    };

    // Get the appropriate menu options based on role
    const options = menuOptions.cashier || [];

    return (
        <div className='grid grid-cols-1 divide-x bg-white text-black h-full'>
            <div className='ps-8 flex flex-col justify-between'>
                <div>
                    <h1 className='text-4xl mt-3'>LOGO</h1>
                    <div className='mt-14 space-y-5 text-lg'>
                        {options.map((item, index) => (
                            <h5 key={index} className={`flex items-center ${isSelected(item.name)}`}>
                                {item.icon}
                                <span className='mx-2'><Link href={item.link}>{item.name}</Link></span>
                            </h5>
                        ))}
                    </div>
                </div>
                <div className='mb-8 flex items-center space-x-3'>
                    <span><MdLogout /></span>
                    <h5 className='flex items-center text-xl'>Logout</h5>
                </div>
            </div>
        </div>
    );
}
