import React from "react";
import data from "../../constants/sites.json";
import { motion } from "framer-motion";
import { useCursor } from "@/context/cursor.context";

const LocationCircle = ({ isVisible }) => {
  const { blendMouseEnter, mouseLeave } = useCursor();

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
    hidden: {},
  };

  const circleVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <>
      {data.map((d, index) => (
        <motion.div
          className="flex flex-wrap justify-center mt-10"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          onMouseEnter={blendMouseEnter}
          onMouseLeave={mouseLeave}
        >
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-2 w-1/2 lg:w-1/4 mb-4"
            variants={circleVariants}
          >
            <div className="w-32 h-32 lg:w-52 lg:h-52 bg-blue-300 rounded-full overflow-hidden">
              <motion.img
                src={d.site_img}
                alt={d.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <h1 className="font-semibold">{d.name}</h1>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
};

export default LocationCircle;
