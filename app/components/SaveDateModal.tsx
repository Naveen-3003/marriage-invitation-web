"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SaveDateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SaveDateModal({ isOpen, onClose }: SaveDateModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  const weddingDate = "June 15, 2026";
  const weddingDay = "Monday";

  const handleWhyClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 500);
  };

  // Google Calendar link
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Celebration&dates=20260615T090000/20260615T210000&details=You+are+cordially+invited+to+celebrate+the+wedding&location=Temple+Venue&sf=true&output=xml`;

  return (
    <AnimatePresence>
      {isOpen && !isClosing && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Overlay background */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Modal Card */}
          <motion.div
            className="relative z-10 w-[90%] max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className="rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #1A0A0A 0%, #2A0F0F 50%, #1A0A0A 100%)",
                border: "1px solid rgba(212, 168, 83, 0.3)",
                boxShadow: "0 0 60px rgba(212, 168, 83, 0.15), 0 25px 50px rgba(0,0,0,0.5)",
              }}
            >
              {/* Decorative corners */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4A853] rounded-tl-lg opacity-50" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#D4A853] rounded-tr-lg opacity-50" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#D4A853] rounded-bl-lg opacity-50" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4A853] rounded-br-lg opacity-50" />

              {/* Ornamental Top */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-2xl md:text-3xl" style={{ color: "#D4A853" }}>
                  ✦ ❋ ✦
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                className="text-3xl md:text-4xl mb-2 gradient-text"
                style={{ fontFamily: "'Great Vibes', cursive" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Save the Date
              </motion.h2>

              {/* Divider */}
              <motion.div
                className="w-24 h-[1px] mx-auto my-4"
                style={{
                  background: "linear-gradient(90deg, transparent, #D4A853, transparent)",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />

              {/* Date */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p
                  className="text-lg md:text-xl mb-1 tracking-[0.2em] uppercase"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "rgba(212,168,83,0.7)",
                    fontWeight: 400,
                  }}
                >
                  {weddingDay}
                </p>
                <p
                  className="text-4xl md:text-5xl mb-1"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#D4A853",
                    fontWeight: 700,
                  }}
                >
                  {weddingDate}
                </p>
                <p
                  className="text-base md:text-lg mt-3"
                  style={{
                    fontFamily: "'Noto Serif Tamil', serif",
                    color: "rgba(255,248,231,0.6)",
                  }}
                >
                  நல்ல நாள் | An Auspicious Day
                </p>
              </motion.div>

              {/* Google Calendar Button */}
              <motion.a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-sm md:text-base transition-all duration-300 hover:scale-105"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  background: "linear-gradient(135deg, #D4A853, #B8860B)",
                  color: "#1A0A0A",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{
                  boxShadow: "0 0 30px rgba(212,168,83,0.5)",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Add to Google Calendar
              </motion.a>

              {/* Divider */}
              <motion.div
                className="w-16 h-[1px] mx-auto my-5"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(212,168,83,0.3), transparent)",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              />

              {/* Why Button (only way to close) */}
              <motion.button
                onClick={handleWhyClick}
                className="text-sm md:text-base cursor-pointer transition-all duration-300 hover:scale-105 px-6 py-2 rounded-full"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#D4A853",
                  letterSpacing: "0.15em",
                  border: "1px solid rgba(212,168,83,0.3)",
                  background: "rgba(212,168,83,0.05)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                whileHover={{
                  borderColor: "rgba(212,168,83,0.6)",
                  background: "rgba(212,168,83,0.1)",
                }}
              >
                Why? — Because love doesn&apos;t wait ❤️
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
