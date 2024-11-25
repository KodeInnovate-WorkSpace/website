import {FaFacebook, FaInstagram, FaXTwitter} from "react-icons/fa6";
import {SlSocialYoutube} from "react-icons/sl";
import {Link} from "react-router-dom";
import {useCursor} from "@/context/cursor.context";
import featuredData from "../../constants/data.json";
import {company_phone, company_address, company_email, developer_website} from "@/constants/constants.js";

const Footer = () => {
    const {blendMouseEnter, mouseLeave} = useCursor();

    const filterFeaturedProperty = [];

    for (let i = 0; i < featuredData.length; i++) {
        if (featuredData[i].featured) {
            filterFeaturedProperty.push(featuredData[i]);
            if (filterFeaturedProperty.length === 4) break;
        }
    }

    return (
        <footer className="bg-mainColor text-gray-300 py-10 px-2 mt-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                {/* Recent Properties */}
                <div onMouseEnter={blendMouseEnter} onMouseLeave={mouseLeave}>
                    <h2 className="text-xl font-bold mb-4 text-white">
                        Recent Properties
                    </h2>
                    <ul className="space-y-2">
                        {filterFeaturedProperty.map((d) => (
                            <li className="text-white" key={d.id}>
                                <Link to={"/"} className="hover:underline">
                                    {d.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div onMouseEnter={blendMouseEnter} onMouseLeave={mouseLeave}>
                    <h2 className="text-xl font-bold mb-4 text-white">Contact</h2>
                    <p className="mb-2 text-white">
                        <span className="font-bold ">Address:</span> {company_address}
                    </p>
                    <p className="mb-2 text-white">
                        <span className="font-bold">Phone:</span> +91 {company_phone}
                    </p>
                    <p className="mb-2 text-white">
                        <span className="font-bold">Email:</span> {company_email}
                    </p>
                </div>

                {/* Social Media Links */}
                <div onMouseEnter={blendMouseEnter} onMouseLeave={mouseLeave}>
                    <h2 className="text-xl font-bold mb-4 text-white">Follow Us</h2>
                    <ul className="flex space-x-4 mt-2">
                        <li className="transform transition-transform duration-300 hover:-translate-y-1">
                            <Link>
                                <FaXTwitter className="text-2xl"/>
                            </Link>
                        </li>
                        <li className="transform transition-transform duration-300 hover:-translate-y-1">
                            <Link>
                                <SlSocialYoutube className="text-2xl"/>
                            </Link>
                        </li>
                        <li className="transform transition-transform duration-300 hover:-translate-y-1">
                            <Link>
                                <FaInstagram className="text-2xl"/>
                            </Link>
                        </li>
                        <li className="transform transition-transform duration-300 hover:-translate-y-1">
                            <Link>
                                <FaFacebook className="text-2xl"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Powered by Kodeinnovate Solutions */}
            <div
                onMouseEnter={blendMouseEnter}
                onMouseLeave={mouseLeave}
                className="text-center mt-10 text-white text-sm lg:text-[1rem]"
            >
                <a href={developer_website}>
                    Powered by Kodeinnovate Solutions Private Limited
                </a>
            </div>
        </footer>
    );
};

export default Footer;
