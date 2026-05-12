"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set wedding date (e.g., Aug 21, 2026)
    const weddingDate = new Date("2026-08-21T07:30:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#0A0505] to-[#120808] overflow-hidden">
      {/* Decorative floral/mandala background hint */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl gradient-text mb-12" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Counting down to forever
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {timeBlocks.map((block, index) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-20 h-24 md:w-28 md:h-32 flex flex-col items-center justify-center bg-gradient-to-br from-[#1A0A0A] to-[#2A1515] rounded-xl border border-[#D4A853]/30 shadow-[0_8px_32px_rgba(212,168,83,0.1)] relative overflow-hidden group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#D4A853]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="text-3xl md:text-5xl font-light text-[#F0D68A] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {block.value.toString().padStart(2, '0')}
                </span>
                <span className="text-xs md:text-sm text-[#D4A853]/70 uppercase tracking-widest font-semibold">
                  {block.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
