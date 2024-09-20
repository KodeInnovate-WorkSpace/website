import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[4rem]">
        {/* intro section */}
        <section className="flex flex-col mb-32 lg:mb-0 md:flex-row items-center justify-between p-6 md:p-12 h-screen">
          {/* Left Side - Text */}
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              This is Deal Done Broker
            </h1>
            <p className="text-gray-600 text-lg text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eget arcu justo. Duis scelerisque elit et arcu
              efficitur, et pretium tortor facilisis. Cras non orci at nisl
              tempus fermentum. Sed sit amet mi interdum, gravida justo nec,
              dapibus libero. Proin non consequat libero. Suspendisse potenti.
              Aenean id erat vel ligula viverra vehicula. Etiam tincidunt sem id
              libero viverra, a elementum libero pretium. Aliquam ut tortor sit
              amet libero luctus pellentesque a sit amet dolor. Nullam vulputate
              tellus lectus, nec aliquam justo facilisis non.
            </p>
          </div>

          {/* Right Side - Image Container */}
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <div className="lg:w-[30rem] lg:h-[28rem] bg-gray-300 rounded-md">
              {/* You can replace this div with an img tag for an actual image */}
              <img
                src="https://via.placeholder.com/300"
                alt="Placeholder"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
        {/* mission section  */}
        <section className="p-6 md:p-12 bg-white">
          {/* Title in the Middle */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Vision & Mission
            </h2>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Left Section */}
            <div className="md:w-1/2 w-full bg-blue-300 h-64 md:h-auto mb-6 md:mb-0">
              {/* Placeholder for future content on the left */}
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 w-full flex flex-col space-y-6">
              {/* First Rectangle */}
              <div className="bg-green-300 h-48 w-full"></div>

              {/* Second Rectangle */}
              <div className="bg-yellow-300 h-48 w-full"></div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
