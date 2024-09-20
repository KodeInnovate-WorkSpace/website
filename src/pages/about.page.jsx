import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[4rem]">
        {/* intro section */}
        <section className="flex flex-col md:flex-row items-start justify-between p-6 md:p-12 h-screen md:h-auto mb-8 lg:mb-0">
          {/* Left Side - Text */}
          <div className="md:w-1/2 w-full mb-4 md:mb-0">
            <h1 className="text-mainColor text-3xl md:text-5xl font-bold mb-4">
              This is Deal Done Broker
            </h1>
            <p className="text-gray-600 text-lg text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eget arcu justo. Duis scelerisque elit et arcu
              efficitur, et pretium tortor facilisis. Cras non orci at nisl
              tempus fermentum. Sed sit amet mi interdum, gravida justo nec,
              dapibus libero. Proin non consequat libero. Suspendisse potenti.
              Aenean id erat vel ligula viverra vehicula.
            </p>
          </div>

          {/* Right Side - Image Container */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-end items-center">
            <div className="lg:w-[30rem] lg:h-[28rem] w-full bg-gray-300 rounded-md">
              <img
                src="https://via.placeholder.com/300"
                alt="Placeholder"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* vission & mission section  */}
        <section className="px-6 md:p-12 bg-white">
          {/* Title in the Middle */}
          <div className="text-center mb-12">
            <h1 className="text-3xl text-mainColor md:text-5xl font-bold">Vision & Mission</h1>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Left Section */}
            <div className="md:w-1/2 w-full bg-blue-300 h-64 md:h-auto mb-6 md:mb-0">
              {/* Placeholder for future content on the left */}
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 w-full flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0">
              {/* First Rectangle */}
              <div className="bg-green-300 h-[28rem] w-full flex flex-col items-center p-6">
                {/* image  */}
                <div className="bg-red-300 w-48 h-52 "></div>
                {/* text */}

                <div className="my-2">
                  <h2 className="text-center my-2 font-bold text-2xl">
                    Our Mission
                  </h2>
                  <p className="text-justify font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto tenetur illo nihil facilis dolorem blanditiis eos
                    harum fugit suscipit voluptate!
                  </p>
                </div>
              </div>

              {/* Second Rectangle */}
              <div className="bg-yellow-300 h-[28rem] w-full flex flex-col items-center p-6">
                {/* image  */}
                <div className="bg-green-300 w-48 h-52 "></div>

                {/* text */}

                <div className="my-2">
                  <h2 className="text-center my-2 font-bold text-2xl">
                    Our Vision
                  </h2>
                  <p className="text-justify font-semibold">
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
