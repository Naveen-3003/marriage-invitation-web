"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { weddingData } from "../weddingData";

export default function HeroSection() {
  return (
    <section className="invite-snap-section" id="hero-section">
      {/* Radial bg glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(255,107,157,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        {/* Wedding Invitation Title — ABOVE image */}
        <motion.div
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl pink-gradient-text"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Wedding Invitation
          </h1>
          <div className="w-20 h-[1px] mx-auto mt-3 pink-divider-soft" />
        </motion.div>

        {/* Couple Image with glow border */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          style={{ animation: "float-gentle 4s ease-in-out infinite" }}
        >
          <div className="relative w-[260px] h-[330px] sm:w-[300px] sm:h-[380px] md:w-[340px] md:h-[430px] rounded-[2rem] overflow-hidden hero-image-glow">
            <Image
              src={weddingData.coupleImage}
              alt={`${weddingData.groom.name} & ${weddingData.bride.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, 340px"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                boxShadow: "inset 0 0 50px rgba(0,0,0,0.35)",
                borderRadius: "2rem",
              }}
            />
          </div>

          {/* Sparkle dots */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-pink-300"
              style={{
                top: `${15 + i * 22}%`,
                left: i % 2 === 0 ? "-8px" : "auto",
                right: i % 2 !== 0 ? "-8px" : "auto",
              }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,107,157,0.5)" strokeWidth="2" strokeLinecap="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
