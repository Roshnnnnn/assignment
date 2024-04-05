import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="flex justify-center items-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="spinner"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, loop: Infinity, ease: "linear" }}
      >
        <div className="border-8 border-t-8 border-green-200 rounded-full w-16 h-16"></div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
