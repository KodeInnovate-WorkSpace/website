import {useCursor} from "@/context/cursor.context";
import React from "react";
import {FaArrowUpLong} from "react-icons/fa6";

const ScrollTopButton = () => {
    const ScrollTopButton = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    //cursor animation
    const {blendMouseEnter, mouseLeave} = useCursor();

    return (
        <button
            onMouseEnter={blendMouseEnter}
            onMouseLeave={mouseLeave}
            className="fixed bottom-[65px] right-[20px] lg:right-[30px] w-[56px] h-[56px] bg-secondColor text-white border-none flex items-center justify-center cursor-pointer ease-in hover:bg-mainColor rounded-md z-40"
            onClick={ScrollTopButton}
        >
            <FaArrowUpLong/>
        </button>
    );
};

export default ScrollTopButton;
