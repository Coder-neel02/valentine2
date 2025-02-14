import React, { useState } from "react";
import { motion } from "framer-motion";
import FloatingHearts from "../components/FloatingHearts.jsx";

const ValentinePage = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="text-center relative z-10">
      <motion.h1
        className="text-6xl font-bold text-white drop-shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {clicked ? "Happy Valentine Putu! 💖" : "You are my Valentine ❤️"}
      </motion.h1>

      <motion.button
        className="px-8 py-4 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 outline-none focus:outline-none"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
      >
        {clicked ? "💖 Forever" : "Be My Valentine"}
      </motion.button>
      
      <FloatingHearts />
    </div>
  );
};

export default ValentinePage;
