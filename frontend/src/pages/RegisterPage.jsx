import React, { useState, useEffect } from 'react';
import logo from '/vdart-logo.png';
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa"
import { Lock, User, Mail, LockOpen } from "lucide-react"
import { useNavigate } from "react-router-dom";
export default function RegisterPage() {
    const navigate = useNavigate();
    const images = [
          "/young-businesswoman-smiling-camera-removebg-preview 1.png",
          "/young-businesswoman-smiling-camera-removebg-preview 1 (1).png",
          "/young-businesswoman-smiling-camera-removebg-preview 1 (2).png",
        ];
      
        const [currentIndex, setCurrentIndex] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
          }, 3000); // Change every 3 seconds
          return () => clearInterval(interval);
        }, []);
        
    return (
        <div className="flex flex-col h-screen bg-green-100 font-sans text-[#002244] w-full">
      {/* Header */}
      <header className="bg-[#D9F5E2] py-2 px-4 w-full flex justify-between items-center shadow-sm z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <img src={logo} alt="VDart Logo" className="h-12 w-auto scale-125" />
        </div>
        </header>
        <section className="w-screen h-screen px-4 py-24 flex flex-col items-center justify-center relative overflow-hidden">
  {/* Left Decorative Image */}
  <img
    src="/login-design4 (1).png"
    alt="Left Shape"
    className="absolute bottom-0 left-0 w-[50vw] max-w-[250px] md:max-w-[580px] h-[530px] z-0"
  />

  {/* Back Button (Positioned at top-left globally) */}
  <img
    src="/ArrowBendUpLeft.png"
    alt="Back"
    onClick={() => navigate("/")}
    className="absolute top-8 right-8 w-6 h-6 cursor-pointer z-50"
  />

  {/* Right Decorative Image */}
  <img
    src="/login-design1-removebg-preview.png"
    alt="Right Shape"
    className="absolute top-0 right-0 w-[40vw] max-w-[300px] md:max-w-[350px] h-auto z-10"
  />

  {/* Content Layout */}
  <div className="flex w-full max-w-7xl h-full z-0">
    {/* Left Side Image */}
    <div className="hidden md:flex w-1/2 items-center justify-center bg-transparent z-0">
      <img
        src={images[currentIndex]}
        alt="Changing"
        className={`absolute left-10 bottom-0 transition-all duration-500 h-[500px] ${
          currentIndex === 2 ? 'w-[50vw] max-w-[600px]' : 'w-[40vw] max-w-[380px]'
        }`}
      />
    </div>

    {/* Right Side Login Form */}
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-16 bg-green-100">
      <div className="w-full max-w-md pr-10">
        <h2 className="text-sm font-semibold text-center text-blue-900 mb-6">Sign Up</h2>

        {/* Username */}
        <div className="w-full mb-6">
          <label htmlFor="username" className="sr-only">Username</label>
          <div className="flex items-center border-2 border-blue-900 px-4 py-2 bg-green-50">
            <span className="mr-3 text-blue-900"><User className="w-4 h-4" /></span>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="w-full bg-green-50 text-sm outline-none"
            />
          </div>
        </div>
        <div className="w-full mb-6">
          <label htmlFor="email" className="sr-only">Email</label>
          <div className="flex items-center border-2 border-blue-900 px-4 py-2 bg-green-50">
            <span className="mr-3 text-blue-900"><Mail className="w-4 h-4" /></span>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full bg-green-50 text-sm outline-none"
            />
          </div>
        </div>
        {/* Password */}
        <div className="w-full mb-2">
          <label htmlFor="password" className="sr-only">Password</label>
          <div className="flex items-center border-2 border-blue-900 px-4 py-2 bg-green-50">
            <span className="mr-3 text-blue-900"><Lock className="w-4 h-4" /></span>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full bg-green-50 text-sm outline-none"
            />
          </div>
        </div>
        <div className="w-full mb-2">
          <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
          <div className="flex items-center border-2 border-blue-900 px-4 py-2 bg-green-50">
            <span className="mr-3 text-blue-900"><LockOpen className="w-4 h-4" /></span>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-green-50 text-sm outline-none"
            />
          </div>
        </div>

        {/* Login Button */}
        <div className="w-full text-right pr-36 pt-10">
          <button className="bg-blue-900 text-white px-8 py-2 text-sm rounded shadow hover:bg-blue-800 transition">
            Sign Up
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <FaGoogle className="text-2xl text-blue-900 hover:scale-110 transition" />
          <FaFacebook className="text-2xl text-blue-900 hover:scale-110 transition" />
          <FaTwitter className="text-2xl text-blue-900 hover:scale-110 transition" />
        </div>

        {/* Sign Up */}
        <div className="text-xs text-center mt-6 text-gray-700">
          Already Have An Account? <a href="/login" className="text-blue-900 font-medium hover:underline">Login</a>
        </div>
      </div>
    </div>
  </div>
</section>


</div>
    );
}