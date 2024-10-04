import { useCursor } from "@/context/cursor.context";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { blendMouseEnter, mouseLeave } = useCursor();
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Properties", path: "/properties" },
    { label: "Contact", path: "/contact" },
    { label: "Careers", path: "/careers" },
  ];
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
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onMouseEnter={blendMouseEnter}
                onMouseLeave={mouseLeave}
                className="text-gray-600 hover:text-gray-900 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-mainColor after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
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
                  {/* Mobile Navigation Links */}
                  <nav className="mt-6">
                    {navItems.map((item, index) => (
                      <motion.span
                        key={item.path}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: index * 0.2,
                        }}
                      >
                        <Link
                          to={item.path}
                          className="block text-gray-600 hover:text-gray-900 py-2 text-xl"
                          onClick={toggleMenu}
                        >
                          {item.label}
                        </Link>
                      </motion.span>
                    ))}
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
