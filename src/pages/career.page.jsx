import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import React, {useEffect} from "react";
import {motion} from "framer-motion";
import {useCursor} from "@/context/cursor.context";
import JobCard from "@/components/page_specific/career/job_card";

const CareerPage = () => {
    const {blendMouseEnter, mouseLeave} = useCursor();
//scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar/>
            <div className="pt-[4rem]">
                <section>
                    {/* Top section */}
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                        className="w-80 h-44 lg:w-[80rem] lg:h-64 mx-auto mt-6 p-6 rounded-lg lg:rounded-3xl bg-mainColor overflow-hidden sm:px-4 text-white flex flex-col lg:flex-row items-center lg:space-x-6 justify-between"
                    >
                        {/* Text Section */}
                        <div className="flex-1">
                            <motion.h1
                                initial={{x: -100, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{duration: 1}}
                                className="text-md lg:text-4xl font-bold mb-4"
                            >
                                Join Our Passionate Real Estate Team
                            </motion.h1>
                            <motion.p
                                initial={{x: -100, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{duration: 1, delay: 0.4}}
                                className="text-sm lg:text-lg mb-6"
                            >
                                Help us shape the future of real estate with innovation,
                                integrity, and a passion for excellence.
                            </motion.p>
                        </div>

                        {/* Image Section */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1, delay: 0.5}}
                            className="hidden lg:block flex-shrink-0"
                        >
                            <img
                                src="/images/careers.png"
                                alt="Career"
                                className="rounded-lg lg:rounded-3xl object-contain w-[20rem]"
                            />
                        </motion.div>
                    </motion.div>

                    <div className="p-6 md:p-12">
                        {/* Title - Available Jobs */}
                        <div className="text-center my-8">
                            <h2
                                onMouseEnter={blendMouseEnter}
                                onMouseLeave={mouseLeave}
                                className="text-4xl text-mainColor md:text-4xl font-bold"
                            >
                                Available Jobs
                            </h2>
                        </div>

                        {/* Jobs List */}
                        <div className="flex flex-col md:flex-row flex-wrap justify-center">
                            <JobCard/>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
};

export default CareerPage;
