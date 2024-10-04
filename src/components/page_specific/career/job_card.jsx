import React from "react";
import careerData from "../../../constants/career.json";
import { motion } from "framer-motion";
import { useCursor } from "@/context/cursor.context";
import useWhatsApp from "@/hooks/useWhatsApp";

const JobCard = () => {
  const { blendMouseEnter, mouseLeave } = useCursor();

  const submitApplication = (job) => {
    const message = `
      - Title: ${job.title}\n
      - Location: ${job.city}, ${job.state}\n
      - Salary: ${job.salary}`;

    const sendWhatsAppMessage = useWhatsApp(message);
    sendWhatsAppMessage();
  };

  return (
    <div>
      {careerData.map((job, index) => (
        <motion.div
          key={index}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="p-4 m-4 border rounded-lg shadow-md bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center"
        >
          {/* Left Side - Job Details */}
          <div className="md:w-3/4">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">
              Location: {job.city}, {job.state}
            </p>
            <p className="text-gray-600">Salary (INR): {job.salary}</p>
            <p className="text-gray-600">Skills: {job.skills.join(", ")}</p>
          </div>

          {/* Right Side - Apply Button */}
          <div className="mt-4 md:mt-0 md:w-1/4 flex justify-end">
            <button
              onMouseEnter={blendMouseEnter}
              onMouseLeave={mouseLeave}
              onClick={() => submitApplication(job)}
              className="bg-mainColor text-white py-2 px-4 rounded-md hover:bg-secondColor"
            >
              Apply
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default JobCard;
