"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function CloudHero({
  onScrollToTemple,
}: {
  onScrollToTemple: () => void;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Heading fades out + moves up on scroll
  const headingOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const headingY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  // Parallax for sky background
  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center"
    >

      {/* Heading */}
      <motion.div
        className="relative z-10 text-center px-4 flex flex-col items-center"
        style={{ opacity: headingOpacity, y: headingY }}
      >
        {/* Deity Image */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <Image
            src="/murugan1.png"
            alt="Lord Murugan"
            width={280}
            height={280}
            className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto object-contain drop-shadow-lg"
            priority
          />
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-[#2d4a22]"
          style={{
            fontFamily: "'Great Vibes', cursive",
            textShadow: "0 2px 10px rgba(255,255,255,0.8)"
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          Wedding Invitation
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl tracking-[0.25em] uppercase text-[#4a6d33]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          திருமண அழைப்பிதழ்
        </motion.p>

        {/* Unique Circular CTA Button */}
        <motion.div
          className="mt-16 flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="relative flex items-center justify-center group cursor-pointer" onClick={onScrollToTemple}>
            {/* Glowing aura */}
            <div className="absolute inset-0 rounded-full bg-[#4a6d33]/20 blur-xl group-hover:bg-[#4a6d33]/40 transition-colors duration-500"></div>
            
            {/* Ripple rings */}
            <div className="absolute w-16 h-16 rounded-full border-2 border-[#4a6d33]/40 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            <div className="absolute w-16 h-16 rounded-full border-2 border-[#4a6d33]/30 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '0.8s' }}></div>
            
            {/* Core Circular Button */}
            <motion.div
              className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b from-[#6f9a52] to-[#2d4a22] text-white shadow-[0_8px_20px_rgba(45,74,34,0.4)] border border-[#a2c982]/50 group-hover:scale-110 transition-transform duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-7 h-7 relative top-[2px] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
          
          <p 
            className="text-[#2d4a22] text-sm md:text-base tracking-[0.3em] uppercase font-bold drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Scroll to begin
          </p>
        </motion.div>
      </motion.div>

    </div>
  );
}
