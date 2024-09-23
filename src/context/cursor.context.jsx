import React, { createContext, useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

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
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: "transparent",
      border: "4px solid #7C4BD2",
    },
    blend: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: "#7C4BD2",
      mixBlendMode: "multiply",
    },
  };

  const mouseEnter = () => setCursorVariant("text");
  const blendMouseEnter = () => setCursorVariant("blend");
  const mouseLeave = () => setCursorVariant("default");

  return (
    <CursorContext.Provider value={{ mouseEnter, mouseLeave, blendMouseEnter }}>
      <motion.div
        style={{
          position: "fixed",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          top: 0,
          left: 0,
          zIndex: 999,
          pointerEvents: "none",
        }}
        variants={variants}
        animate={cursorVariant}
        className="bg-mainColor hidden lg:block"
      />
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
