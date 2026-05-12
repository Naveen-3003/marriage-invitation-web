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

  const handleWhatsAppShare = () => {
    const text = `We Cordially invite you to the wedding of Aakash & Gayathri. Join us on 28th May 2026 at Balalakshmi A/c Thirumana Mandapam. Check out our invitation here: ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleAddToCalendar = () => {
    const title = "Aakash & Gayathri Wedding";
    const details = "We cordially invite you to our wedding. Reception on 28th May 6:00 PM onwards and Muhurtham on 29th May 4:30 AM.";
    const location = "Balalakshmi A/c Thirumana Mandapam, Koranad, Mayiladuthurai";
    // 6:00 PM IST is 12:30 PM UTC
    const startDate = "20260528T123000Z";
    const endDate = "20260529T023000Z";
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    window.open(googleCalUrl, "_blank");
  };

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

        {/* Call to Action Buttons */}
        <motion.div
          className="mt-12 mb-10 flex flex-row items-center justify-center gap-8 sm:gap-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {/* WhatsApp Button */}
          <div className="flex flex-col items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppShare}
              className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-950/60 to-black/80 border border-pink-500/40 shadow-[0_0_15px_rgba(255,107,157,0.15)] hover:shadow-[0_0_25px_rgba(255,107,157,0.4)] hover:border-pink-400 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-full bg-pink-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink-300 group-hover:text-green-400 transition-colors z-10"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
            </motion.button>
            <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xs tracking-[0.2em] text-pink-200/80 uppercase font-medium text-center">WhatsApp</span>
          </div>
          
          {/* Download Button */}
          <div className="flex flex-col items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              href="/pdf/wedding-invitation.pdf"
              download="Aakash_Gayathri_Wedding_Invitation.pdf"
              className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-950/60 to-black/80 border border-pink-500/40 shadow-[0_0_15px_rgba(255,107,157,0.15)] hover:shadow-[0_0_25px_rgba(255,107,157,0.4)] hover:border-pink-400 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-full bg-pink-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink-300 group-hover:text-pink-400 transition-colors z-10"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
            </motion.a>
            <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xs tracking-[0.2em] text-pink-200/80 uppercase font-medium text-center">Download</span>
          </div>

          {/* Calendar Button */}
          <div className="flex flex-col items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCalendar}
              className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-950/60 to-black/80 border border-pink-500/40 shadow-[0_0_15px_rgba(255,107,157,0.15)] hover:shadow-[0_0_25px_rgba(255,107,157,0.4)] hover:border-pink-400 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-full bg-pink-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink-300 group-hover:text-blue-400 transition-colors z-10"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><line x1="8" x2="8" y1="14" y2="18" /><line x1="12" x2="12" y1="14" y2="18" /><line x1="16" x2="16" y1="14" y2="18" /></svg>
            </motion.button>
            <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xs tracking-[0.2em] text-pink-200/80 uppercase font-medium text-center">Calendar</span>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <span style={{ color: "rgba(255,107,157,0.4)" }}>✦</span>
          <span style={{ color: "rgba(255,107,157,0.5)" }}>💕</span>
          <span style={{ color: "rgba(255,107,157,0.4)" }}>✦</span>
        </motion.div>

        <motion.p
          className="mt-4 text-xs sm:text-sm tracking-[0.18em] uppercase"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "rgba(255, 228, 236, 0.85)", // 🔥 FIXED VISIBILITY
            textShadow: "0 0 6px rgba(255, 182, 206, 0.25)", // ✨ soft glow
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          With Best Compliments from Friends & Relatives
        </motion.p>
      </div>
    </section>
  );
}
