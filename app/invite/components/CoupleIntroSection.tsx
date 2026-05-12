"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { weddingData } from "../weddingData";

export default function CoupleIntroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="invite-snap-section" id="couple-intro">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255,64,129,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 text-center w-full max-w-md mx-auto px-2">
        {/* Decorative */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <span style={{ color: "rgba(255,107,157,0.5)" }} className="text-xl">
            ✦ 💕 ✦
          </span>
        </motion.div>

        {/* Groom Name */}
        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl pink-gradient-text couple-name-glow leading-tight mb-1"
          style={{ fontFamily: "'Great Vibes', cursive" }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {weddingData.groom.name}
        </motion.h2>
        <motion.p
          className="text-xs sm:text-sm tracking-[0.2em] mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "rgba(255,182,206,0.5)",
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {weddingData.groom.qualifications}
        </motion.p>

        {/* Weds divider */}
        <motion.div
          className="flex items-center justify-center gap-3 my-3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <div className="w-12 h-[1px] pink-divider" />
          <span
            className="text-lg sm:text-xl italic"
            style={{ fontFamily: "'Great Vibes', cursive", color: "#ff6b9d" }}
          >
            weds
          </span>
          <div className="w-12 h-[1px] pink-divider" />
        </motion.div>

        {/* Bride Name */}
        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl pink-gradient-text couple-name-glow leading-tight mb-1"
          style={{ fontFamily: "'Great Vibes', cursive" }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          {weddingData.bride.name}
        </motion.h2>
        <motion.p
          className="text-xs sm:text-sm tracking-[0.2em] mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "rgba(255,182,206,0.5)",
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {weddingData.bride.qualifications}
        </motion.p>

        {/* Divider */}
        <motion.div
          className="w-24 h-[1px] mx-auto pink-divider-soft mb-6"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        {/* Marriage Date & Time Cards */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {/* Muhurtham */}
          <div className="invite-card rounded-2xl p-5">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-2"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "rgba(255,107,157,0.7)",
              }}
            >
              {weddingData.muhurtham.tamilTitle} • {weddingData.muhurtham.title}
            </p>
            <p
              className="text-lg sm:text-xl font-semibold mb-1"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#ffb3c6",
              }}
            >
              {weddingData.muhurtham.date}
            </p>
            <p
              className="text-sm"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "rgba(255,182,206,0.65)",
              }}
            >
              {weddingData.muhurtham.time}
            </p>
          </div>

          {/* Reception */}
          <div className="invite-card rounded-2xl p-4">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-1"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "rgba(255,107,157,0.6)",
              }}
            >
              {weddingData.reception.tamilTitle} • {weddingData.reception.title}
            </p>
            <p
              className="text-base sm:text-lg font-medium mb-1"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#ffb3c6",
              }}
            >
              {weddingData.reception.date}
            </p>
            <p
              className="text-xs"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "rgba(255,182,206,0.55)",
              }}
            >
              {weddingData.reception.time}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
