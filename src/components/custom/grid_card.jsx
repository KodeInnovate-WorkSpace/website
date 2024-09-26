import React from "react";
import { useCursor } from "@/context/cursor.context";
import { motion } from "framer-motion";
const GridCard = ({ title, image, gridColor, textColor }) => {
  const { blendMouseEnter, mouseLeave } = useCursor();

  return (
    <div
      onMouseEnter={blendMouseEnter}
      onMouseLeave={mouseLeave}
      className={`bg-${gridColor} lg:h-96 md:h-auto rounded-lg lg:rounded-3xl p-8 flex items-start justify-between`}
    >
      {/* text outer-div */}
      <div className="lg:h-1/2 lg:w-[30rem] flex items-start">
        {/* text  */}
        <motion.div
          whileHover={{
            scale: 1.05,
            textShadow:
              "0px 0px 8px rgba(255, 255, 255, 0.8), 0px 0px 16px rgba(255, 255, 255, 0.6)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h2 className={`text-2xl lg:text-3xl font-bold  text-${textColor}`}>
            {title}
          </h2>
        </motion.div>
      </div>

      {/* image outer-div */}
      <div className="lg:h-[20rem] lg:w-full   flex items-end">
        {/* image */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className=""
        >
          <img
            src={image}
            alt="Grid Image"
            loading="lazy"
            className="w-64 lg:w-[30rem]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default GridCard;
