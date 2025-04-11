import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Teaser({ onFinish }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const launchDate = new Date("2025-04-15T00:00:00");
    const now = new Date();
    const difference = launchDate - now;

    if (difference <= 0) return null;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = getTimeLeft();
      if (!updated) {
        clearInterval(timer);
        onFinish(); // cambia a la landing
      } else {
        setTimeLeft(updated);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return null; // Si ya pasó la fecha
  }

  return (
    <div className="bg-black h-screen w-screen text-[#f5f5f5] flex flex-col items-center justify-center text-center font-sans px-6">
      <motion.h1
        className="text-2xl md:text-4xl italic text-gray-400 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Made to be seen by the unseen.
      </motion.h1>

      <motion.div
        className="text-4xl md:text-5xl font-light tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
      </motion.div>

      <motion.button
        onClick={onFinish}
        className="mt-10 px-6 py-3 border border-gray-500 text-sm uppercase tracking-widest hover:bg-[#1a1a1a] transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Entrar
      </motion.button>
    </div>
  );
}