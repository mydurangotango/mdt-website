'use client';

import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function Home() {
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [isEmployerModalOpen, setIsEmployerModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      {/* Logo and Tagline */}
      <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 w-full px-4">
        <Image
          src="/mdt_logo_transparent_background_708x708.png"
          alt="Durango Tango logo"
          width={120}
          height={120}
          priority
          className="mb-2 sm:mb-4 w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30"
        />
        <h1 className="text-[#f5e6d3] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight px-2">
          Your next job finds you.
        </h1>
        <p className="text-[#f5e6d3] text-lg sm:text-xl md:text-2xl text-center mt-2">
          Coming Fall 2025
        </p>
      </div>

      {/* Main Content - Two Sides */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16 w-full max-w-6xl mt-40 sm:mt-44 md:mt-48 lg:mt-32">
        
        {/* Students Side */}
        <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-105">
          <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-[#3a7b85] rounded-2xl flex flex-col items-center justify-center shadow-2xl relative">
            <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#f5e6d3]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"/>
            </svg>
            <div className="absolute -bottom-2 bg-[#e05745] text-white px-3 py-1 sm:px-4 rounded-full text-xs sm:text-sm font-semibold">
              Students
            </div>
          </div>
          <p className="mt-4 sm:mt-6 text-[#f5e6d3] text-center text-sm sm:text-base max-w-xs px-2">
            Find opportunities that match your skills instantly
          </p>
          <button
            onClick={() => setIsStudentModalOpen(true)}
            className="mt-3 sm:mt-4 bg-[#e05745] hover:bg-[#c74636] text-white font-semibold py-2 px-4 sm:px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            Notify Me
          </button>
        </div>

        {/* Bidirectional Arrows */}
        <div className="flex flex-row lg:flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 my-4 lg:my-0">
          <div className="relative">
            {/* Top/Left Arrow */}
            <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#f5e6d3] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 12h10m0 0l-3-3m3 3l-3 3" className="lg:rotate-0 rotate-90"/>
            </svg>
          </div>
          <div className="text-[#f5e6d3] text-sm sm:text-base md:text-lg font-medium px-3 py-1 sm:px-4 sm:py-2 bg-[#2a4a52] rounded-lg whitespace-nowrap">
            AI Matches
          </div>
          <div className="relative">
            {/* Bottom/Right Arrow */}
            <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#f5e6d3] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 12H7m0 0l3 3m-3-3l3-3" className="lg:rotate-0 rotate-90"/>
            </svg>
          </div>
        </div>

        {/* Employers Side */}
        <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-105">
          <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-[#3a7b85] rounded-2xl flex flex-col items-center justify-center shadow-2xl relative">
            <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#f5e6d3]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z"/>
            </svg>
            <div className="absolute -bottom-2 bg-[#e05745] text-white px-3 py-1 sm:px-4 rounded-full text-xs sm:text-sm font-semibold">
              Employers
            </div>
          </div>
          <p className="mt-4 sm:mt-6 text-[#f5e6d3] text-center text-sm sm:text-base max-w-xs px-2">
            Connect with qualified candidates immediately
          </p>
          <button
            onClick={() => setIsEmployerModalOpen(true)}
            className="mt-3 sm:mt-4 bg-[#e05745] hover:bg-[#c74636] text-white font-semibold py-2 px-4 sm:px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            Notify Me
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl text-center px-4">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e05745] rounded-lg flex items-center justify-center mb-2 sm:mb-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z"/>
            </svg>
          </div>
          <h3 className="text-[#f5e6d3] font-semibold mb-1 text-sm sm:text-base">Privacy First</h3>
          <p className="text-[#a8a8a8] text-xs sm:text-sm px-2">Numbers stay hidden until both say yes</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e05745] rounded-lg flex items-center justify-center mb-2 sm:mb-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.5,12.5L11,15L15.5,9.5L21,3L3,3L3,21L21,21V13.5"/>
            </svg>
          </div>
          <h3 className="text-[#f5e6d3] font-semibold mb-1 text-sm sm:text-base">Friction-Free</h3>
          <p className="text-[#a8a8a8] text-xs sm:text-sm px-2">No resumes or endless applications</p>
        </div>
        
        <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e05745] rounded-lg flex items-center justify-center mb-2 sm:mb-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"/>
            </svg>
          </div>
          <h3 className="text-[#f5e6d3] font-semibold mb-1 text-sm sm:text-base">AI-Powered</h3>
          <p className="text-[#a8a8a8] text-xs sm:text-sm px-2">Smart matching sends texts instantly</p>
        </div>
      </div>

      {/* Website URL */}
      <div className="mt-12 sm:mt-16 flex flex-col items-center px-4">
        <p className="text-[#a8a8a8] text-xs sm:text-sm">www.mydurangotango.com</p>
      </div>

      {/* Modals */}
      <Modal
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
        type="student"
      />
      <Modal
        isOpen={isEmployerModalOpen}
        onClose={() => setIsEmployerModalOpen(false)}
        type="employer"
      />
    </div>
  );
}