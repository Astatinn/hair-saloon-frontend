"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import regimg from "../../../public/registration.png";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("An error occurred.");
    }
  };

  return (
    <div className="grid grid-cols-2">
      {/* Left Section with Image */}
      <div>
        <Image
          src={regimg}
          className="object-fit max-h-[100vh]"
          alt="Registration"
        />
      </div>

      {/* Right Section with Login Form */}
      <div className="bg-white text-black">
        <h1 className="text-5xl text-center mt-24">Login</h1>
        <div className="form mx-52 mt-14">
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div id="email" className="my-6">
              <label htmlFor="email" className="text-slate-700 text-sm">
                Email
              </label>
              <br />
              <input
                type="text"
                id="email"
                className="rounded-md py-2 px-4 w-full border border-slate-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="olivia@untitledui.com"
              />
            </div>

            {/* Password Input */}
            <div id="password" className="my-6">
              <label htmlFor="password" className="text-slate-700 text-sm">
                Password
              </label>
              <br />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-md py-2 px-4 w-full border border-slate-300"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="py-2 px-32 rounded-lg bg-orange-600 text-white my-3"
            >
              Login
            </button>

            {/* Message Display */}
            {message && <p className="text-red-600 mt-4">{message}</p>}

            {/* Registration Link */}
            <p className="text-sm mt-4">
              Don’t have an account?{" "}
              <Link href="/registration" className="text-blue-600">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
