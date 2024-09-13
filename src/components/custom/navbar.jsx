import React, { useState } from "react";
import { Link } from "react-router-dom";

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

            <Link to={"/"}>
              <h1 className={`text-2xl font-bold text-mainColor`}>Logo</h1>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {/* Navigation Links */}
            <Link to={"/"} className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to={"/about"} className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link to={"/"} className="text-gray-600 hover:text-gray-900">
              Properties
            </Link>
            <Link to={"/"} className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link to={"/"} className="text-gray-600 hover:text-gray-900">
              Careers
            </Link>
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
            <Link to={"/"} className="block text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link
              to={"/about"}
              className="block text-gray-600 hover:text-gray-900"
            >
              About
            </Link>
            <Link className="block text-gray-600 hover:text-gray-900">
              Properties
            </Link>
            <Link className="block text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link className="block text-gray-600 hover:text-gray-900">
              Careers
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
