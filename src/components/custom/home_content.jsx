import React from "react";

// const HomeContent = () => {
//   return (
//     <div className="bg-gradient-to-t from-mainColor to-secondColor w-full h-[35rem] py-10 flex items-center justify-center">
//       <div className="text-white text-center flex flex-col items-center justify-center">
//         {/* text content  */}
//         <div className="mb-5">
//           <h1 className="text-3xl font-bold md:text-6xl">
//             Best Locations in India
//           </h1>

//           <p className="text-md  py-5 md:text-center md:text-xl md:w-[38rem]">
//             We are experts in the sector of selling high-end real estate in
//             India thanks to our extensive network of high-quality property
//             owners.
//           </p>
//         </div>

//         {/* image container */}

//         <div className="flex space-x-2 items-center overflow-x-auto md:overflow-hidden">
//           <ImageContainer imgSrc={"images/sample1.jpg"} />
//           <ImageContainer imgSrc={"images/sample2.jpg"} />
//           <ImageContainer imgSrc={"images/sample3.jpg"} />
//           <ImageContainer imgSrc={"images/sample4.jpg"} />
//           <ImageContainer imgSrc={"images/sample5.jpg"} />
//         </div>
//       </div>
//     </div>
//   );
// };

const HomeContent = () => {
  return (
    <>
      <div className="bg-mainColor w-full h-auto rounded-3xl flex flex-col lg:flex-row items-center lg:h-[32rem] overflow-hidden relative">
        {/* Text Section */}
        <div className="flex-1 text-center mt-14 lg:mt-0 lg:text-left  lg:ml-8 lg:p-6">
          <h1 className="text-5xl lg:text-[6rem] lg:leading-none font-bold text-white">
            DISCOVER YOUR IDEAL
            <span className="bg-[#F7CB67] text-[#2f3340] inline-flex items-center">
              PROPERTY
            </span>
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full h-full lg:h-auto lg:w-[30rem]">
          <img
            src="images/building1.png"
            alt="Building"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default HomeContent;
