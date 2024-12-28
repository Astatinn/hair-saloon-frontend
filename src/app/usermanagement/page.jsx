"use client";

import React, { useState, createContext } from 'react';
import Sidebar from '../sidebar';
import { FaPlus } from "react-icons/fa6";
import PopupForm from './CreateAccount';
import { SlOptionsVertical } from "react-icons/sl";

export const ServicesContext = createContext();

export default function Page() {
    const [IsformOpen, setIsformOpen] = useState(false);
    const [userData, setUserData] = useState([
        { username: "JohnDoe", accountType: "cashier", dateAdded: "2023-07-07" },
        { username: "JaneSmith", accountType: "hairstylist", dateAdded: "2023-05-14" },
        { username: "RobertBrown", accountType: "cashier", dateAdded: "2023-03-21" },
        { username: "EmilyDavis", accountType: "hairstylist", dateAdded: "2023-06-10" },
        { username: "MichaelWilson", accountType: "cashier", dateAdded: "2023-02-11" },
        { username: "SarahTaylor", accountType: "hairstylist", dateAdded: "2023-01-25" },
        { username: "DavidAnderson", accountType: "cashier", dateAdded: "2023-04-19" },
        { username: "LauraThomas", accountType: "hairstylist", dateAdded: "2023-09-13" }
    ]);

    const handleUser = (newUser) => {
        setUserData([...userData, newUser]);
        setIsformOpen(false);
    };

    return (
        <div className='h-full divide-x grid grid-cols-6 bg-white text-black'>
            <Sidebar selected='User Management' />
            <div className='col-span-5'>
                <div>
                    <h2 className='text-4xl mt-4 mx-5'>User Management</h2>
                    <button className='flex items-center place-self-end mx-8 border rounded-lg py-3 px-4 bg-orange-700 text-white' onClick={() => setIsformOpen(true)}>
                        <FaPlus className='mr-2' /> Add new user
                    </button>
                </div>

                <table className="w-10/12 mx-20 rounded-3xl mt-14 shadow-lg ">
                    <thead>
                        <tr className='text-center'>
                            <th className="py-4 border-b">Username</th>
                            <th className=" py-4 border-b">Account Type</th>
                            <th className=" py-4 border-b">Date Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user, index) => (
                            <tr key={index} className="text-center">
                                <td className=" py-4 border-b">{user.username}</td>
                                <td className=" py-4 border-b">{user.accountType}</td>
                                <td className="ps-2 py-4 border-b">{user.dateAdded}</td>
                                <td><SlOptionsVertical /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <PopupForm isOpen={IsformOpen} onClose={() => setIsformOpen(false)} onSubmit={handleUser} />
            </div>
        </div>
    );
}
