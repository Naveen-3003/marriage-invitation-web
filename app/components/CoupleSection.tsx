"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function CoupleSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0.1, 0.4], [1, 0.75]);
  const imageX = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "-15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const contentX = useTransform(scrollYProgress, [0.25, 0.45], ["60px", "0px"]);

  return (
    <section ref={sectionRef} className="relative min-h-[200vh] w-full" id="couple-section">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(128,0,32,0.15) 0%, transparent 60%)" }} />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full px-4 md:px-8 lg:px-16 gap-6 md:gap-12">
          {/* Couple Image */}
          <motion.div className="relative w-full md:w-1/2 h-[50vh] md:h-[80vh] flex items-center justify-center" style={{ scale: imageScale, x: imageX }}>
            <div className="relative w-full h-full max-w-[500px] rounded-2xl overflow-hidden">
              <Image src="/couple.png" alt="The Beautiful Couple" fill className="object-cover" sizes="(max-width: 768px) 90vw, 50vw" />
              <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.4), 0 0 40px rgba(212,168,83,0.15)", border: "1px solid rgba(212,168,83,0.2)" }} />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left" style={{ opacity: contentOpacity, x: contentX }}>
            <div className="mb-4"><span className="text-xl" style={{ color: "rgba(212,168,83,0.5)" }}>✦ ❋ ✦</span></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl gradient-text leading-tight" style={{ fontFamily: "'Great Vibes', cursive" }}>Priya</h2>
            <div className="my-2 flex items-center gap-3">
              <div className="w-12 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, #D4A853, transparent)" }} />
              <span className="text-xl md:text-2xl" style={{ color: "#D4A853" }}>❤️</span>
              <div className="w-12 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, #D4A853, transparent)" }} />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl gradient-text leading-tight" style={{ fontFamily: "'Great Vibes', cursive" }}>Karthik</h2>

            <div className="w-32 h-[1px] my-6" style={{ background: "linear-gradient(90deg, transparent, #D4A853, transparent)" }} />

            <div className="space-y-3">
              <DetailRow icon="calendar" text="June 15, 2026 — Monday" />
              <DetailRow icon="clock" text="Muhurtham: 9:00 AM - 10:30 AM" />
              <DetailRow icon="location" text="Sri Meenakshi Sundareswarar Temple Hall" />
            </div>

            <p className="mt-6 text-base md:text-lg" style={{ fontFamily: "'Noto Serif Tamil', serif", color: "rgba(212,168,83,0.5)" }}>
              இரு இதயங்கள் ஒன்றாகும் நாள்
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 pointer-events-none z-20" style={{ boxShadow: "inset 0 0 120px rgba(0,0,0,0.5)" }} />
      </div>
    </section>
  );
}

function DetailRow({ icon, text }: { icon: string; text: string }) {
  const paths: Record<string, React.ReactNode> = {
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
    location: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  };
  return (
    <div className="flex items-center gap-3 justify-center md:justify-start">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 shrink-0">{paths[icon]}</svg>
      <p className="text-lg md:text-xl" style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,248,231,0.8)", fontWeight: 500, letterSpacing: "0.05em" }}>{text}</p>
    </div>
  );
}
