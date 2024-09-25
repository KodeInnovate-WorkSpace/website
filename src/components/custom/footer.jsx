import AgentCard from "./agent_card";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useCursor } from "@/context/cursor.context";

const Footer = () => {
  const { blendMouseEnter, mouseLeave } = useCursor();

  return (
    <footer
      onMouseEnter={blendMouseEnter}
      onMouseLeave={mouseLeave}
      className="bg-mainColor text-gray-300 py-10 mt-10"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Recent Properties */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">
            Recent Properties
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Raheja Classique
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Piramal Tower
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                One Avighna Park
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Godrej Platinum
              </a>
            </li>
          </ul>
        </div>

        {/* Our Agents */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Our Agents</h2>
          <ul className="space-y-4">
            <AgentCard agentName={"Prime Property Solutions"} />
            <AgentCard agentName={"Dream Homes Realty"} />
            <AgentCard agentName={"Urban Nest Realtors"} />
            <AgentCard agentName={"Haven Realty Co."} />
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Contact</h2>
          <p className="mb-2">
            <strong>Address:</strong> 123 Real Estate Ave, City, State
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p className="mb-2">
            <strong>Email:</strong> contact@realestate.com
          </p>
          <p className="mb-2">
            <strong>RERA No:</strong> ABC123456
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Follow Us</h2>
          <ul className="flex space-x-4 mt-2">
            <li className="transform transition-transform duration-300 hover:-translate-y-1">
              <Link>
                <FaXTwitter className="text-2xl" />
              </Link>
            </li>
            <li className="transform transition-transform duration-300 hover:-translate-y-1">
              <Link>
                <SlSocialYoutube className="text-2xl" />
              </Link>
            </li>
            <li className="transform transition-transform duration-300 hover:-translate-y-1">
              <Link>
                <FaInstagram className="text-2xl" />
              </Link>
            </li>
            <li className="transform transition-transform duration-300 hover:-translate-y-1">
              <Link>
                <FaFacebook className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
