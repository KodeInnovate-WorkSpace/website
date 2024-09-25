import { motion } from "framer-motion";

const AgentCard = ({ agentName }) => {
  return (
    <motion.li initial={{ opacity: 1 }} className="flex items-center">
      {/* Image */}
      <img
        src="images/user.jpg"
        alt="Agent 1"
        className="w-8 h-8 rounded-full mr-2"
      />

      {/* Text */}
      <motion.span
        className="ml-2 text-lg font-semibold"
        initial={{ x: -50, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {agentName}
      </motion.span>
    </motion.li>
  );
};

export default AgentCard;
