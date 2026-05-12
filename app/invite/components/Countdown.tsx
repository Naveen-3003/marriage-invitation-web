"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { weddingData } from "../weddingData";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(weddingData.muhurtham.isoDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-6 sm:py-5 sm:px-8 backdrop-blur-md bg-black/50 border-b border-pink-500/40"
    >
      <div className="flex gap-6 sm:gap-10 text-pink-50">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Mins", value: timeLeft.minutes },
          { label: "Secs", value: timeLeft.seconds },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-bold drop-shadow-[0_0_12px_rgba(255,107,157,1)]">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-pink-200 mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
