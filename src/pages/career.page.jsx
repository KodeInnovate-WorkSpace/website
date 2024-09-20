import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import React from "react";

const CareerPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[4rem]">
        <section>
          {/* Top Image Div */}
          <div className="w-full h-1/3 bg-cover bg-center bg-slate-500 hidden lg:block">
            <img src="https://via.placeholder.com/1200x400" alt="Placeholder" />
          </div>

          <div className="p-6 md:p-12">
            {/* Title - Available Jobs */}
            <div className="text-center my-8">
              <h2 className="text-4xl text-mainColor md:text-4xl font-bold">
                Available Jobs
              </h2>
            </div>

            {/* Jobs List */}
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-6 md:space-y-0">
              {/* Sample Job 1 */}
              <div className="p-4 border rounded-lg shadow-md bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center">
                {/* Left Side - Job Details */}
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold">Frontend Developer</h3>
                  <p className="text-gray-600">Location: New York, NY</p>
                  <p className="text-gray-600">Salary: $80,000 - $100,000</p>
                  <p className="text-gray-600">
                    Skills: React, JavaScript, CSS, HTML
                  </p>
                </div>

                {/* Right Side - Apply Button */}
                <div className="mt-4 md:mt-0 md:w-1/4 flex justify-end">
                  <button className="bg-mainColor text-white py-2 px-4 rounded-md hover:bg-secondColor">
                    Apply
                  </button>
                </div>
              </div>

              {/* Sample Job 2 */}
              <div className="p-4 border rounded-lg shadow-md bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center">
                {/* Left Side - Job Details */}
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold">Frontend Developer</h3>
                  <p className="text-gray-600">Location: New York, NY</p>
                  <p className="text-gray-600">Salary: $80,000 - $100,000</p>
                  <p className="text-gray-600">
                    Skills: React, JavaScript, CSS, HTML
                  </p>
                </div>

                {/* Right Side - Apply Button */}
                <div className="mt-4 md:mt-0 md:w-1/4 flex justify-end">
                  <button className="bg-mainColor text-white py-2 px-4 rounded-md hover:bg-secondColor">
                    Apply
                  </button>
                </div>
              </div>

              {/* Sample Job 3 */}
              <div className="p-4 border rounded-lg shadow-md bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center">
                {/* Left Side - Job Details */}
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold">Frontend Developer</h3>
                  <p className="text-gray-600">Location: New York, NY</p>
                  <p className="text-gray-600">Salary: $80,000 - $100,000</p>
                  <p className="text-gray-600">
                    Skills: React, JavaScript, CSS, HTML
                  </p>
                </div>

                {/* Right Side - Apply Button */}
                <div className="mt-4 md:mt-0 md:w-1/4 flex justify-end">
                  <button className="bg-mainColor text-white py-2 px-4 rounded-md hover:bg-secondColor">
                    Apply
                  </button>
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

export default CareerPage;
