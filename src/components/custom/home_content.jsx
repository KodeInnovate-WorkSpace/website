import { useCursor } from "@/context/cursor.context";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
const HomeContent = () => {
  const { blendMouseEnter, mouseLeave } = useCursor();

  return (
    <>
      <div
        onMouseEnter={blendMouseEnter}
        onMouseLeave={mouseLeave}
        className="bg-mainColor w-full h-auto rounded-3xl flex flex-col lg:flex-row items-center lg:h-[32rem] overflow-hidden relative"
      >
        {/* Text Section */}
        <div className="flex-1 text-center mt-14 lg:mt-0 lg:text-left lg:ml-8 lg:p-6 cursor-default">
          <motion.h1
            className="text-5xl lg:text-[6rem] lg:leading-none font-bold text-white"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            DISCOVER YOUR IDEAL
            <motion.span
              className="bg-[#F7CB67] text-[#2f3340] inline-flex items-center"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            >
              PROPERTY
            </motion.span>
          </motion.h1>
          {/* <Button className="bg-thirdColor mt-6 text-black text-lg lg:text-xl font-bold lg:h-14 lg:w-56 ">
            Explore
          </Button> */}
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full h-full lg:h-auto lg:w-[30rem]">
          <motion.img
            src="images/building1.png"
            alt="Building"
            className="object-cover w-full h-full"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default HomeContent;
