import React from "react";
import { motion } from "framer-motion";

const FloatingHearts = () => {
  const hearts = Array.from({ length: 30 });

  return (
    <div className="overflow-hidden fixed inset-0 pointer-events-none">
      {hearts.map((_, index) => (
        <motion.div
          key={index}
          className="text-red-400 text-3xl absolute animate-float"
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: index * 0.5,
          }}
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 3 + 4}s`
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
