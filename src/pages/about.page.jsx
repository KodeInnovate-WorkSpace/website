import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import {FaArrowRightLong} from "react-icons/fa6";
import {motion} from "framer-motion";

import { useEffect } from "react";
import {Link} from "react-router-dom";
import {useCursor} from "@/context/cursor.context";
import {Button} from "@/components/ui/button";

const AboutPage = () => {
    const {blendMouseEnter, mouseLeave} = useCursor();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar/>
            <div className="pt-[4rem]">
                {/* intro section */}
                <section
                    className="flex flex-col md:flex-row items-start justify-between p-6 md:p-12 h-screen md:h-auto mb-8 lg:mb-0 cursor-default">
                    {/* Left Side - Text */}
                    <motion.div
                        initial={{x: -100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 0.5, ease: "easeOut"}}
                        className="md:w-1/2 w-full mb-4 md:mb-0"
                    >
                        <h1
                            onMouseEnter={blendMouseEnter}
                            onMouseLeave={mouseLeave}
                            className="text-mainColor text-3xl md:text-5xl font-bold mb-4"
                        >
                            This is Deal Done Properties
                        </h1>
                        <p
                            onMouseEnter={blendMouseEnter}
                            onMouseLeave={mouseLeave}
                            className="text-gray-600 text-lg lg:text-justify"
                        >
                            DDP is India’s largest integrated platform for Real Estate & Mortgages and one of the
                            fastest growing
                            Proptech platform in Mumbai and UAE. DDP platform offers an integrated consumer experience &
                            covers the
                            full real-estate journey from search & discovery, transactions, home loans, interiors,
                            rentals, property
                            management and post-sales service.
                        </p>
                        <Link to={"/contact"}>
                            <Button
                                className="mt-10 bg-mainColor w-64 h-12 hover:bg-secondColor text-xl flex items-center justify-center group text-white rounded-xl transition-transform duration-300"
                                onMouseEnter={blendMouseEnter}
                                onMouseLeave={mouseLeave}
                            >
                                Contact Us
                                <span
                                    className="ml-5 mt-1 transform transition-transform duration-300 group-hover:translate-x-2">
                  <FaArrowRightLong/>
                </span>
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Right Side - Image Container */}
                    <div className="md:w-1/2 w-full flex justify-center md:justify-end items-center">
                        <motion.div
                            initial={{x: 100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 0.5, ease: "easeOut"}}
                            className="lg:w-[30rem] lg:h-[28rem] w-full  rounded-md"
                        >
                            <img
                                src="images/team.png"
                                alt="Placeholder"
                                className="w-full h-full object-contain rounded-lg"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* vision & mission contiainer  */}
                <section className="mt-24 px-6 lg:px-12 bg-white lg:mt-2">
                    {/* vision & mission title */}
                    <div className="text-center mb-12">
                        <h1
                            onMouseEnter={blendMouseEnter}
                            onMouseLeave={mouseLeave}
                            className="text-3xl text-mainColor md:text-5xl font-bold"
                        >
                            Vision & Mission
                        </h1>
                    </div>

                    {/* vision & mission content */}
                    <div className="flex flex-col md:flex-row items-start justify-between">
                        {/* Left Section */}
                        <div className="w-full h-96 hidden justify-evenly items-center lg:flex">
                            <img
                                src="images/trophy.png"
                                alt="Placeholder"
                                className="w-42 h-full object-contain rounded-lg"
                            />
                        </div>

                        {/* Mission Section */}
                        <div className="md:w-1/2 w-full flex flex-col lg:flex-row lg:space-x-8 space-y-2 lg:space-y-0">
                            <div className="h-[20rem] w-full flex flex-col items-center p-4 md:p-6 rounded-tr-[2rem]">
                                {/* image  */}
                                <div className="w-48 h-52">
                                    <img
                                        src="images/mission.png"
                                        alt=""
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                {/* text */}
                                <div className="my-2">
                                    <h2
                                        onMouseEnter={blendMouseEnter}
                                        onMouseLeave={mouseLeave}
                                        className="text-left my-1 font-bold text-2xl"
                                    >
                                        Our Mission
                                    </h2>
                                    <p
                                        onMouseEnter={blendMouseEnter}
                                        onMouseLeave={mouseLeave}
                                        className="text-left font-semibold"
                                    >
                                        To provide seamless experiences from search to post-sales service, making
                                        property transactions
                                        effortless.
                                    </p>
                                </div>
                            </div>

                            {/* Vision Section */}
                            <div className="h-[27rem] w-full flex flex-col items-center p-4 md:p-6 rounded-tr-[2rem]">
                                {/* image  */}
                                <div className="w-48 h-52">
                                    <img
                                        src="images/vision.png"
                                        alt=""
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                </div>

                                {/* text */}
                                <div className="my-2">
                                    <h2
                                        onMouseEnter={blendMouseEnter}
                                        onMouseLeave={mouseLeave}
                                        className="text-left my-1 font-bold text-2xl"
                                    >
                                        Our Vision
                                    </h2>
                                    <p
                                        onMouseEnter={blendMouseEnter}
                                        onMouseLeave={mouseLeave}
                                        className="text-left font-semibold"
                                    >
                                        Revolutionizing real estate and mortgages with an integrated platform to
                                        simplify every step of the
                                        property journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <Footer/>
        </>
    );
};

export default AboutPage;
