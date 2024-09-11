import { primaryColor } from "@/constants/colors";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo */}
            <a href="/" className={`text-2xl font-bold text-[#7C4BD2]`}>
              LOGO
            </a>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {/* Navigation Links */}
            <a href="#home" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#properties" className="text-gray-600 hover:text-gray-900">
              Properties
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
            <a href="#careers" className="text-gray-600 hover:text-gray-900">
              Careers
            </a>
          </div>
          {/* Hamburger Menu */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              className="text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-600 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#properties"
              className="block text-gray-600 hover:text-gray-900"
            >
              Properties
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-gray-900"
            >
              Contact
            </a>
            <a
              href="#careers"
              className="block text-gray-600 hover:text-gray-900"
            >
              Careers
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
