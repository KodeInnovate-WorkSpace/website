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
              <h1 className={`text-2xl font-bold text-mainColor`}>
                Deal Done Broker
              </h1>
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
            <Link
              to={"/properties"}
              className="text-gray-600 hover:text-gray-900"
            >
              Properties
            </Link>
            <Link to={"/contact"} className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link to={"/careers"} className="text-gray-600 hover:text-gray-900">
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
                  d={"M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50">
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center p-4">
              <h2 className="text-xl text-mainColor font-bold">Deal Done Broker</h2>
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="mt-6 px-4">
              <Link
                to={"/"}
                className="block text-gray-600 hover:text-gray-900 py-2"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="block text-gray-600 hover:text-gray-900 py-2"
              >
                About
              </Link>
              <Link
                to={"/properties"}
                className="block text-gray-600 hover:text-gray-900 py-2"
              >
                Properties
              </Link>
              <Link
                to={"/contact"}
                className="block text-gray-600 hover:text-gray-900 py-2"
              >
                Contact
              </Link>
              <Link
                to={"/careers"}
                className="block text-gray-600 hover:text-gray-900 py-2"
              >
                Careers
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
