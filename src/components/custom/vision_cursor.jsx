import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);

  useEffect(() => {
    const moveMouse = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveMouse);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x -16,
      y: mousePosition.y -16,
    },
  };
  return (
    <motion.div
      style={{
        position: "fixed",
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        top: 0,
        left: 0,
        zIndex: 999,
      }}
      variants={variants}
      animate="default"
      className="bg-mainColor"
    />
  );
};

export default CustomCursor;
