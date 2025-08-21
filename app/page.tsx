import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Logo and Tagline */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
        <Image
          src="/mdt_logo_transparent_background_708x708.png"
          alt="Durango Tango logo"
          width={120}
          height={120}
          priority
          className="mb-4"
        />
        <h1 className="text-[#f5e6d3] text-4xl sm:text-5xl font-bold text-center tracking-tight">
          Your next job finds you.
        </h1>
      </div>

      {/* Main Content - Two Sides */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-6xl mt-32">
        
        {/* Students Side */}
        <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-105">
          <div className="w-48 h-48 bg-[#3a7b85] rounded-2xl flex flex-col items-center justify-center shadow-2xl relative">
            <svg className="w-24 h-24 text-[#f5e6d3]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"/>
            </svg>
            <div className="absolute -bottom-2 bg-[#e05745] text-white px-4 py-1 rounded-full text-sm font-semibold">
              Students
            </div>
          </div>
          <p className="mt-6 text-[#f5e6d3] text-center max-w-xs">
            Find opportunities that match your skills instantly
          </p>
        </div>

        {/* Bidirectional Arrows */}
        <div className="flex lg:flex-col items-center justify-center gap-4">
          <div className="relative">
            {/* Top/Left Arrow */}
            <svg className="w-16 h-16 text-[#f5e6d3] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 12h10m0 0l-3-3m3 3l-3 3" className="lg:rotate-0 rotate-90"/>
            </svg>
          </div>
          <div className="text-[#f5e6d3] text-lg font-medium px-4 py-2 bg-[#2a4a52] rounded-lg">
            AI Matches
          </div>
          <div className="relative">
            {/* Bottom/Right Arrow */}
            <svg className="w-16 h-16 text-[#f5e6d3] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 12H7m0 0l3 3m-3-3l3-3" className="lg:rotate-0 rotate-90"/>
            </svg>
          </div>
        </div>

        {/* Employers Side */}
        <div className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-105">
          <div className="w-48 h-48 bg-[#3a7b85] rounded-2xl flex flex-col items-center justify-center shadow-2xl relative">
            <svg className="w-24 h-24 text-[#f5e6d3]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z"/>
            </svg>
            <div className="absolute -bottom-2 bg-[#e05745] text-white px-4 py-1 rounded-full text-sm font-semibold">
              Employers
            </div>
          </div>
          <p className="mt-6 text-[#f5e6d3] text-center max-w-xs">
            Connect with qualified candidates immediately
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl text-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-[#e05745] rounded-lg flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z"/>
            </svg>
          </div>
          <h3 className="text-[#f5e6d3] font-semibold mb-1">Privacy First</h3>
          <p className="text-[#a8a8a8] text-sm">Numbers stay hidden until both say yes</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-[#e05745] rounded-lg flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.5,12.5L11,15L15.5,9.5L21,3L3,3L3,21L21,21V13.5"/>
            </svg>
          </div>
          <h3 className="text-[#f5e6d3] font-semibold mb-1">Friction-Free</h3>
          <p className="text-[#a8a8a8] text-sm">No resumes or endless applications</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-[#e05745] rounded-lg flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"/>
            </svg>
          </div>
          <h3 className="text-[#f5e6d3] font-semibold mb-1">AI-Powered</h3>
          <p className="text-[#a8a8a8] text-sm">Smart matching sends texts instantly</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 flex flex-col items-center">
        <button className="bg-[#e05745] hover:bg-[#c74636] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          Join Early Access
        </button>
        <p className="mt-4 text-[#a8a8a8] text-sm">www.mydurangotango.com</p>
      </div>
    </div>
  );
}