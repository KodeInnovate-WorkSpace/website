import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ContactForm from "@/components/page_specific/contact/contact_form";
import {Label} from "@/components/ui/label";
import {useCursor} from "@/context/cursor.context";
import {useEffect} from "react";
import {FaFacebook, FaInstagram, FaXTwitter} from "react-icons/fa6";
import {SlSocialYoutube} from "react-icons/sl";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {company_address, company_phone} from "@/constants/constants.js";

const ContactPage = () => {
    const {mouseLeave, blendMouseEnter} = useCursor();
    //scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar/>
            <div className="pt-[6rem] px-4 md:px-8">
                {/* Heading Section */}
                <div className="text-center mb-8">
                    <motion.h1
                        onMouseEnter={blendMouseEnter}
                        onMouseLeave={mouseLeave}
                        initial={{x: -100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 0.5, ease: "easeOut"}}
                        className="text-3xl font-bold mb-2"
                    >
                        Contact Our Team
                    </motion.h1>
                    <motion.p
                        className="text-lg"
                        onMouseEnter={blendMouseEnter}
                        onMouseLeave={mouseLeave}
                        initial={{x: -100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 0.5, ease: "easeOut", delay: 0.2}}
                    >
                        Got any questions about our service? We're here to help.
                    </motion.p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row gap-6 ">
                    {/* Left: Form */}
                    <div className="flex-1 p-6 flex justify-end lg:py-6">
                        <div className="w-full max-w-md">
                            <ContactForm/>
                        </div>
                    </div>

                    {/* Right: Contact Details */}
                    <div
                        onMouseEnter={blendMouseEnter}
                        onMouseLeave={mouseLeave}
                        className="flex-1 p-6 space-y-6 flex justify-start bg-mainColor text-white rounded-3xl"
                    >
                        <div className="w-full max-w-md space-y-6">
                            {/* Call Section */}
                            <div>
                                <h1 className="text-2xl font-bold">Call Us</h1>
                                <Label>Call our team for your queries</Label>
                                <h2>+91 {company_phone}</h2>
                            </div>

                            {/* Address Section */}
                            <div>
                                <h1 className="text-2xl font-bold">Visit Us</h1>
                                <Label>Chat to us in person</Label>
                                <h2>{company_address}</h2>
                            </div>

                            {/* Social Media Section */}
                            <div>
                                <h1 className="text-2xl font-bold">Socials</h1>
                                <Label>Follow us on social media</Label>
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
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ContactPage;
