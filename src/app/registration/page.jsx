"use client"

import React from 'react';
import Image from 'next/image';
import regimg from '../../../public/registration.png';
import Link from 'next/link';

export default function page() {



    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('An error occurred.');
        }
    };



    return (
        <div className='grid grid-cols-2'>
            <div>
                <Image src={regimg} className='object-fit max-h-[100vh] ' alt="" />
            </div>
            <div className='bg-white text-black'>
                <h1 className='text-5xl text-center mt-14'>Create an account</h1>

                {/* <div className="flex justify-center mt-10 justify-center">
                    <div className="admin mx-5">
                        <input type="radio" name='profession' id='admin' className='mx-2' defaultChecked /> Admin
                    </div>
                    <div className="cashier mx-5">
                        <input type="radio" name="profession" id="cashier" className='mx-2' /> Cashier
                    </div>
                    <div className="hairstylist mx-5">
                        <input type="radio" name="profession" id="stylist" className='mx-2' />Hair Stylist
                    </div>
                </div> */}

                <div className="form mx-52 mt-14">

                    <div id="email" className='my-6'>
                        <label htmlFor="" className='text-slate-700 text-sm'>Email</label><br />
                        <input type="text" name="" id="" className='rounded-md py-2 px-4 w-full border border-slate-300 ' placeholder='olivia@untitledui.com' />
                    </div>
                    <div id="password" className='my-6'>
                        <label htmlFor="" className='text-slate-700 text-sm'>Password</label><br />
                        <input type="password" name="" id="" className='rounded-md py-2 px-4 w-full border border-slate-300' />
                    </div>

                    <div id="ConfirmPassword" className='my-6'>
                        <label htmlFor="" className='text-slate-700 text-sm'>Confirm Password</label><br />
                        <input type="text" name="" id="" className='rounded-md py-2 px-4 w-full border border-slate-300' />
                    </div>


                    <div id="ConfirmPassword" className='my-6'>
                        <label htmlFor="" className='text-slate-700 text-sm'>What type of account are you creating?</label><br />
                        <select
                            id="dropdown"
                            style={{
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                            }}
                            className='w-full py-2'
                        >
                            <option value="option1">Admin</option>
                            <option value="option2">Cashier</option>
                            <option value="option3">Hairstylist</option>
                        </select>
                    </div>



                    <button className='py-2 px-24 rounded-lg bg-orange-600 text-white my-3'>Create account</button>
                    <p className='text-sm mx-14 px-5'>Have an account? <Link href='/login' className='text-blue-600'>Login</Link></p>

                </div>

            </div>
        </div>
    )
}
