"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface FloatingHeart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
}

export default function ConclusionSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const emojis = ["💕", "💗", "✨", "🌸", "💖", "🤍"];
    const generated: FloatingHeart[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 14 + 12,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 5,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setHearts(generated);
  }, []);

  return (
    <section ref={ref} className="invite-snap-section" id="conclusion-section">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255,64,129,0.1) 0%, transparent 60%)",
        }}
      />

      {/* Floating hearts */}
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute pointer-events-none z-0"
          initial={{ left: `${h.x}%`, bottom: "-5%", opacity: 0 }}
          animate={isInView ? { bottom: "105%", opacity: [0, 0.4, 0.4, 0] } : {}}
          transition={{
            duration: h.duration,
            repeat: Infinity,
            delay: h.delay,
            ease: "linear",
            opacity: {
              times: [0, 0.1, 0.85, 1],
              duration: h.duration,
              repeat: Infinity,
              delay: h.delay,
            },
          }}
          style={{ fontSize: `${h.size}px` }}
        >
          {h.emoji}
        </motion.div>
      ))}

      <div className="relative z-10 text-center w-full max-w-md mx-auto px-2">
        {/* Big Heart */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-5xl sm:text-6xl heartbeat-animation inline-block">💖</span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl pink-gradient-text mb-3"
          style={{ fontFamily: "'Great Vibes', cursive" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          You are warmly welcome!
        </motion.h2>

        <motion.div
          className="w-20 h-[1px] mx-auto pink-divider-soft mb-5"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        />

        <motion.p
          className="text-sm sm:text-base leading-relaxed mb-3 italic"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "rgba(255,182,206,0.65)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Your presence would be the greatest gift to celebrate the beginning of our beautiful journey together.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg"
          style={{
            fontFamily: "'Noto Serif Tamil', serif",
            color: "rgba(255,107,157,0.55)",
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          அன்புடன் வரவேற்கிறோம்
        </motion.p>

        <motion.div
          className="mt-8 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <span style={{ color: "rgba(255,107,157,0.4)" }}>✦</span>
          <span style={{ color: "rgba(255,107,157,0.5)" }}>💕</span>
          <span style={{ color: "rgba(255,107,157,0.4)" }}>✦</span>
        </motion.div>

        <motion.p
          className="mt-3 text-[10px] tracking-[0.25em] uppercase"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "rgba(255,182,206,0.25)",
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          With Best Compliments from Friends & Relatives
        </motion.p>
      </div>
    </section>
  );
}
