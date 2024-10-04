import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCursor } from "@/context/cursor.context";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const { blendMouseEnter, mouseLeave } = useCursor();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="pt-[4rem]">
        {/* intro section */}
        <section className="flex flex-col md:flex-row items-start justify-between p-6 md:p-12 h-screen md:h-auto mb-8 lg:mb-0 cursor-default">
          {/* Left Side - Text */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
              className="text-gray-600 text-lg text-justify"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eget arcu justo. Duis scelerisque elit et arcu
              efficitur, et pretium tortor facilisis. Cras non orci at nisl
              tempus fermentum. Sed sit amet mi interdum, gravida justo nec,
              dapibus libero. Proin non consequat libero. Suspendisse potenti.
              Aenean id erat vel ligula viverra vehicula.
            </p>
            <Link to={"/contact"}>
              <Button
                className="mt-10 bg-mainColor w-64 h-12 hover:bg-secondColor text-xl flex items-center justify-center group text-white rounded-xl transition-transform duration-300"
                onMouseEnter={blendMouseEnter}
                onMouseLeave={mouseLeave}
              >
                Contact Us
                <span className="ml-5 mt-1 transform transition-transform duration-300 group-hover:translate-x-2">
                  <FaArrowRightLong />
                </span>
              </Button>
            </Link>
          </motion.div>

          {/* Right Side - Image Container */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-end items-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
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

        {/* vision & mission section  */}

        <section className="mt-24 px-6 lg:px-12 bg-white lg:mt-2">
          {/* Title in the Middle */}
          <div className="text-center mb-12">
            <h1
              onMouseEnter={blendMouseEnter}
              onMouseLeave={mouseLeave}
              className="text-3xl text-mainColor md:text-5xl font-bold"
            >
              Vision & Mission
            </h1>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Left Section */}
            <div className=" w-full h-96 hidden justify-evenly items-center lg:flex ">
              <img
                src="images/trophy.png"
                alt="Placeholder"
                className="w-42 h-full object-contain rounded-lg "
              />
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 w-full flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0">
              {/* First Rectangle */}
              <div className="h-[28rem] w-full flex flex-col items-center p-6  rounded-tr-[2rem]">
                {/* image  */}
                <div className=" w-48 h-52 ">
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
                    className="text-left my-2 font-bold text-2xl"
                  >
                    Our Mission
                  </h2>
                  <p
                    onMouseEnter={blendMouseEnter}
                    onMouseLeave={mouseLeave}
                    className="text-left font-semibold"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto tenetur illo nihil facilis dolorem blanditiis eos
                    harum fugit suscipit voluptate!
                  </p>
                </div>
              </div>

              {/* Second Rectangle */}
              <div className="h-[28rem] w-full flex flex-col items-center p-6 rounded-tr-[2rem]">
                {/* image  */}
                <div className=" w-48 h-52 ">
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
                    className="text-left my-2 font-bold text-2xl"
                  >
                    Our Vision
                  </h2>
                  <p
                    onMouseEnter={blendMouseEnter}
                    onMouseLeave={mouseLeave}
                    className="text-left font-semibold"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto tenetur illo nihil facilis dolorem blanditiis eos
                    harum fugit suscipit voluptate!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
