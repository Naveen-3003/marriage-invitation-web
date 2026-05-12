"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ParentsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center py-20 px-4 md:px-8"
      id="parents-section"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(128,0,32,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
        >
          <span className="text-lg" style={{ color: "rgba(212,168,83,0.5)" }}>
            ✦ ❋ ✦
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mt-3 gradient-text"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            With the Blessings of
          </h2>
          <div
            className="w-24 h-[1px] mx-auto mt-4"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4A853, transparent)",
            }}
          />
        </motion.div>

        {/* Parents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Bride's Parents */}
          <motion.div
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
          >
            <div
              className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden mb-6"
              style={{
                border: "2px solid rgba(212,168,83,0.3)",
                boxShadow: "0 0 30px rgba(212,168,83,0.1)",
                background:
                  "linear-gradient(135deg, rgba(128,0,32,0.2), rgba(26,10,10,0.8))",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-5xl">👨‍👩‍👧</span>
              </div>
            </div>
            <p
              className="text-sm uppercase tracking-[0.2em] mb-2"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "rgba(212,168,83,0.6)",
              }}
            >
              Bride&apos;s Parents
            </p>
            <h3
              className="text-xl md:text-2xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#FFF8E7",
                fontWeight: 600,
              }}
            >
              Mr. & Mrs. Sundaram
            </h3>
            <p
              className="text-sm mt-1"
              style={{
                fontFamily: "'Noto Serif Tamil', serif",
                color: "rgba(212,168,83,0.4)",
              }}
            >
              திரு & திருமதி சுந்தரம்
            </p>
          </motion.div>

          {/* Center Welcome Text */}
          <motion.div
            className="text-center order-first md:order-none"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.5}
          >
            <div
              className="p-8 rounded-2xl"
              style={{
                background:
                  "linear-gradient(145deg, rgba(26,10,10,0.6), rgba(42,15,15,0.4))",
                border: "1px solid rgba(212,168,83,0.15)",
              }}
            >
              <p
                className="text-2xl sm:text-3xl md:text-4xl leading-relaxed"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  color: "#D4A853",
                }}
              >
                We warmly welcome you all
              </p>
              <div
                className="w-16 h-[1px] mx-auto my-4"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(212,168,83,0.4), transparent)",
                }}
              />
              <p
                className="text-base md:text-lg"
                style={{
                  fontFamily: "'Noto Serif Tamil', serif",
                  color: "rgba(255,248,231,0.5)",
                }}
              >
                அன்புடன் அழைக்கிறோம்
              </p>
              <p
                className="text-sm mt-3"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "rgba(255,248,231,0.3)",
                  fontStyle: "italic",
                  letterSpacing: "0.05em",
                }}
              >
                to witness the union of our beloved children
              </p>
            </div>
          </motion.div>

          {/* Groom's Parents */}
          <motion.div
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
          >
            <div
              className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden mb-6"
              style={{
                border: "2px solid rgba(212,168,83,0.3)",
                boxShadow: "0 0 30px rgba(212,168,83,0.1)",
                background:
                  "linear-gradient(135deg, rgba(128,0,32,0.2), rgba(26,10,10,0.8))",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-5xl">👨‍👩‍👦</span>
              </div>
            </div>
            <p
              className="text-sm uppercase tracking-[0.2em] mb-2"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "rgba(212,168,83,0.6)",
              }}
            >
              Groom&apos;s Parents
            </p>
            <h3
              className="text-xl md:text-2xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#FFF8E7",
                fontWeight: 600,
              }}
            >
              Mr. & Mrs. Ramanathan
            </h3>
            <p
              className="text-sm mt-1"
              style={{
                fontFamily: "'Noto Serif Tamil', serif",
                color: "rgba(212,168,83,0.4)",
              }}
            >
              திரு & திருமதி ராமநாதன்
            </p>
          </motion.div>
        </div>

        {/* Bottom decorative */}
        <motion.div
          className="text-center mt-16"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={3}
        >
          <div
            className="w-32 h-[1px] mx-auto mb-4"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,168,83,0.3), transparent)",
            }}
          />
          <p
            className="text-sm tracking-[0.3em] uppercase"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "rgba(212,168,83,0.3)",
            }}
          >
            Your presence is our blessing
          </p>
        </motion.div>
      </div>
    </section>
  );
}
