import React from "react";
import { Button } from "../ui/button";

const ImageContainer = ({ imgSrc }) => {
  return (
    <div className="hidden relative w-60 h-80 rounded-lg overflow-hidden cursor-pointer md:block transform transition-transform duration-300 ease-out hover:scale-105">
      {/* Image */}
      <img
        src={imgSrc}
        alt="Placeholder"
        className="w-full h-full object-cover"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 z-30 flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black/70 to-transparent">
        {/* Title */}
        <h3 className="text-white font-bold text-lg">Title</h3>
        {/* Subtitle */}
        <p className="text-white text-sm">Subtitle</p>
        {/* Rating stars */}

        <Button
          className={`w-full h-11 mt-4  py-2 px-4 text-lg bg-mainColor hover:bg-secondColor`}
        >
          Take a look
        </Button>
      </div>
    </div>
  );
};

export default ImageContainer;
