import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet.jsx";
import {motion} from "framer-motion";
import {Link, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";

const MobileNav = ({navItems}) => {
    const [isOpen, setIsOpen] = useState(false)     ;
    const location = useLocation();
    const [activePath, setActivePath] = useState("/");

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
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
                    <div className="flex flex-col h-full justify-between">

                        <div className="-mt-[0.85rem]">
                            <img
                                src="/images/logo_with_text.png"
                                alt="Logo"
                                className="w-44 object-contain"
                            />
                        </div>


                        {/* Mobile Navigation Links */}
                        <nav className="-mt-56">
                            {navItems.map((item, index) => (
                                <motion.span
                                    key={item.path}
                                    initial={{x: -100, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut",
                                        delay: index * 0.2,
                                    }}
                                >
                                    <Link
                                        to={item.path}
                                        className={`block p-2 text-xl rounded-lg my-4 ${
                                            activePath === item.path
                                                ? "bg-mainColor text-white"
                                                : "text-gray-600 hover:text-gray-900"
                                        }`}
                                        onClick={toggleMenu}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.span>
                            ))}
                        </nav>

                        <div className="mt-6">
                            <h3 className="text-xs text-center leading-none">
                                Deal Done Properties. All rights reserved © {new Date().getFullYear()}
                            </h3>
                        </div>

                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;
