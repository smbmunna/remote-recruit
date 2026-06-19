import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; 
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-6 relative z-50">
      <div className="flex items-center justify-between">
        
        {/* Logo - Scales smoothly across screen boundaries */}
        <img src={logo} alt="site-logo" className="w-24 sm:w-28 md:w-[123px] object-contain" />

        {/* --- Desktop & Tablet Navigation Menu --- */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-sm text-white font-semibold hover:text-white/80 transition-colors">
            Sign in
          </button>
          <button className="bg-[#4DA8CCE5] hover:bg-[#4DA8CC] text-sm text-white font-semibold px-6 py-2.5 rounded-md transition-all active:scale-[0.98]">
            Sign Up
          </button>
        </div>

        {/* --- Mobile Hamburger Trigger --- */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

      </div>

      {/* --- Mobile Dropdown Menu Drawer --- */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full px-4 pt-4 pb-6 bg-[#11142D]/95 backdrop-blur-md rounded-b-xl flex flex-col gap-4 md:hidden shadow-lg border-t border-white/5 animate-fadeIn">
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 text-white font-semibold hover:bg-white/5 rounded-md transition-colors"
          >
            Sign in
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-[#4DA8CCE5] text-white font-semibold py-3 rounded-md shadow-md active:scale-[0.99] transition-transform"
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}