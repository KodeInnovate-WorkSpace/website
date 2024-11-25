import { useCursor } from "@/context/cursor.context";
import { Link } from "react-router-dom";
import MobileNav from "@/components/common/mobile_nav.jsx";


const Navbar = () => {


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
          <div className="flex-shrink-0 flex items-center md:order-none  mx-auto md:mx-0">
            <Link to="/">
              <div
                onMouseEnter={blendMouseEnter}
                onMouseLeave={mouseLeave}
                className="flex items-center"
              >
                <img
                  src="/images/logo_with_text.png"
                  alt="Logo"
                  className="w-44 object-contain "
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
                className="text-gray-600 text-lg font-medium hover:text-gray-900 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-mainColor after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu (Hamburger) */}
          <MobileNav navItems={navItems}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
