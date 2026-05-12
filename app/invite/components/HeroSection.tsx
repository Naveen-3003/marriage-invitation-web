"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { weddingData } from "../weddingData";

export default function HeroSection() {
  return (
    <section className="invite-snap-section pt-20" id="hero-section">
      {/* Radial bg glow — static */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(255,107,157,0.1) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        {/* Wedding Invitation Title */}
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl pink-gradient-text"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Wedding Invitation
          </h1>
          <div className="w-20 h-[1px] mx-auto mt-3 pink-divider-soft" />
        </motion.div>

        {/* Couple Image — simple fade-in, no float */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
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
                boxShadow: "inset 0 0 40px rgba(0,0,0,0.3)",
                borderRadius: "2rem",
              }}
            />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="scroll-indicator mt-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,107,157,0.5)" strokeWidth="2" strokeLinecap="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}
