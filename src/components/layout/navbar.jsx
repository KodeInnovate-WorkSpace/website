import { useCursor } from "@/context/cursor.context";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { blendMouseEnter, mouseLeave } = useCursor();

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <div
                onMouseEnter={blendMouseEnter}
                onMouseLeave={mouseLeave}
                className="flex items-center"
              >
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="w-16 object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              onMouseEnter={blendMouseEnter}
              onMouseLeave={mouseLeave}
              className="text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/about"
              onMouseEnter={blendMouseEnter}
              onMouseLeave={mouseLeave}
              className="text-gray-600 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              to="/properties"
              onMouseEnter={blendMouseEnter}
              onMouseLeave={mouseLeave}
              className="text-gray-600 hover:text-gray-900"
            >
              Properties
            </Link>
            <Link
              to="/contact"
              onMouseEnter={blendMouseEnter}
              onMouseLeave={mouseLeave}
              className="text-gray-600 hover:text-gray-900"
            >
              Contact
            </Link>
            <Link
              to="/careers"
              onMouseEnter={blendMouseEnter}
              onMouseLeave={mouseLeave}
              className="text-gray-600 hover:text-gray-900"
            >
              Careers
            </Link>
          </div>

          {/* Mobile Menu (Hamburger) */}
          <div className="flex md:hidden items-center">
            <Sheet open={isOpen} onOpenChange={toggleMenu}>
              <SheetTrigger asChild>
                <button className="text-gray-800 focus:outline-none">
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </SheetTrigger>

              {/* Sheet Content (Mobile Sidebar) */}
              <SheetContent side="left">
                <div>
                  {/* <SheetHeader>
                    <div className="flex justify-between items-center mb-4">
                      <img src="/images/logo.png" alt="Logo" className="w-16" />
                    </div>
                  </SheetHeader> */}

                  {/* Mobile Navigation Links */}
                  <nav className="mt-6">
                    <Link
                      to="/"
                      className="block text-gray-600 hover:text-gray-900 py-2"
                      onClick={toggleMenu}
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      className="block text-gray-600 hover:text-gray-900 py-2"
                      onClick={toggleMenu}
                    >
                      About
                    </Link>
                    <Link
                      to="/properties"
                      className="block text-gray-600 hover:text-gray-900 py-2"
                      onClick={toggleMenu}
                    >
                      Properties
                    </Link>
                    <Link
                      to="/contact"
                      className="block text-gray-600 hover:text-gray-900 py-2"
                      onClick={toggleMenu}
                    >
                      Contact
                    </Link>
                    <Link
                      to="/careers"
                      className="block text-gray-600 hover:text-gray-900 py-2"
                      onClick={toggleMenu}
                    >
                      Careers
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
