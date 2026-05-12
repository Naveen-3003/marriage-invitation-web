"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { weddingData } from "../weddingData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 } as const,
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function CoupleIntroSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const show = (d: number) => (inView ? { opacity: 1, y: 0 } : {});
  const showFade = (d: number) => (inView ? { opacity: 0.8, y: 0 } : {});

  return (
    <section ref={ref} className="invite-snap-section" id="couple-intro">
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(255,64,129,0.06) 0%, transparent 60%)" }} />

      <div className="relative z-10 text-center w-full max-w-md mx-auto px-4 py-8">
        <motion.div className="mb-6" {...fadeUp(0)} animate={show(0)}>
          <span style={{ color: "rgba(255,107,157,0.5)" }} className="text-xl">✦ 💕 ✦</span>
        </motion.div>

        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl pink-gradient-text couple-name-glow leading-tight"
          style={{ fontFamily: "'Great Vibes', cursive" }}
          {...fadeUp(0.1)} animate={show(0.1)}
        >
          {weddingData.groom.name}
        </motion.h2>

        <motion.p
          className="text-xs sm:text-sm tracking-[0.2em] mt-3 mb-8"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,182,206,0.7)" }}
          {...fadeUp(0.15)} animate={showFade(0.15)}
        >
          {weddingData.groom.qualifications}
        </motion.p>

        <motion.div className="flex items-center justify-center gap-4 my-5" {...fadeUp(0.2)} animate={show(0.2)}>
          <div className="w-12 h-[1px] pink-divider" />
          <span className="text-2xl sm:text-3xl" style={{ color: "#ff6b9d" }}>❤️</span>
          <div className="w-12 h-[1px] pink-divider" />
        </motion.div>

        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl pink-gradient-text couple-name-glow leading-tight"
          style={{ fontFamily: "'Great Vibes', cursive" }}
          {...fadeUp(0.25)} animate={show(0.25)}
        >
          {weddingData.bride.name}
        </motion.h2>

        <motion.p
          className="text-xs sm:text-sm tracking-[0.2em] mt-3 mb-8"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,182,206,0.7)" }}
          {...fadeUp(0.3)} animate={showFade(0.3)}
        >
          {weddingData.bride.qualifications}
        </motion.p>

        <motion.div
          className="w-3/4 h-[1px] mx-auto pink-divider-soft mb-6"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        />

        <motion.div className="flex flex-col gap-4 pb-4" {...fadeUp(0.4)} animate={show(0.4)}>


          <div className="invite-card rounded-2xl p-5 border border-pink-900/30 shadow-lg">
            <p className="text-sm sm:text-base uppercase tracking-[0.25em] font-bold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#ff6b9d" }}>
              {weddingData.reception.tamilTitle} • {weddingData.reception.title}
            </p>
            <p className="text-xl sm:text-2xl font-bold mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#ffffff" }}>
              {weddingData.reception.date}
            </p>
            <p className="text-base sm:text-lg font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#ffb3c6" }}>
              {weddingData.reception.time}
            </p>
          </div>

          <div className="invite-card rounded-2xl p-5 border border-pink-900/30 shadow-lg">
            <p className="text-sm sm:text-base uppercase tracking-[0.25em] font-bold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#ff6b9d" }}>
              {weddingData.muhurtham.tamilTitle} • {weddingData.muhurtham.title}
            </p>
            <p className="text-xl sm:text-2xl font-bold mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#ffffff" }}>
              {weddingData.muhurtham.date}
            </p>
            <p className="text-base sm:text-lg font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#ffb3c6" }}>
              {weddingData.muhurtham.time}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
