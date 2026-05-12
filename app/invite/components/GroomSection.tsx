"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { weddingData } from "../weddingData";

export default function GroomSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative w-full py-20 px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden"
      id="groom-section"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255,64,129,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 text-center max-w-md mx-auto">
        {/* Section title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span style={{ color: "rgba(255,107,157,0.4)" }} className="text-lg">
            ✦ 🤵 ✦
          </span>
          <h2
            className="text-3xl sm:text-4xl mt-2 pink-gradient-text"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            The Groom
          </h2>
          <div className="w-16 h-[1px] mx-auto mt-3 pink-divider-soft" />
        </motion.div>

        {/* Groom Image */}
        <motion.div
          className="relative mx-auto mb-6"
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <div
            className="relative w-[240px] h-[300px] sm:w-[280px] sm:h-[350px] mx-auto rounded-[1.5rem] overflow-hidden"
            style={{
              border: "2px solid rgba(255,107,157,0.3)",
              boxShadow:
                "0 0 30px rgba(255,107,157,0.15), 0 15px 40px rgba(0,0,0,0.3)",
            }}
          >
            <Image
              src={weddingData.groom.image}
              alt={weddingData.groom.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 240px, 280px"
            />
            <div
              className="absolute inset-0"
              style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,0.3)" }}
            />
          </div>
        </motion.div>

        {/* Groom Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3
            className="text-3xl sm:text-4xl pink-gradient-text-soft"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            {weddingData.groom.name}
          </h3>
          <p
            className="text-xs tracking-[0.2em] mt-1"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "rgba(255,182,206,0.5)",
            }}
          >
            {weddingData.groom.qualifications}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
