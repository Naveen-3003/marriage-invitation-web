"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { weddingData } from "../weddingData";

function ParentCard({
  label,
  father,
  mother,
  image,
  note,
  delay,
  isInView,
}: {
  label: string;
  father: string;
  mother: string;
  image: string;
  note?: string;
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Centered Rounded Parent Image */}
      <div className="relative w-[160px] h-[160px] sm:w-[190px] sm:h-[190px] rounded-full overflow-hidden parent-image-ring mx-auto mb-4">
        <Image
          src={image}
          alt={`${father} & ${mother}`}
          fill
          className="object-cover"
          sizes="190px"
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{ boxShadow: "inset 0 0 25px rgba(0,0,0,0.2)" }}
        />
      </div>

      {/* Label */}
      <p
        className="text-xs uppercase tracking-[0.2em] mb-2"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "rgba(255,107,157,0.6)",
        }}
      >
        {label}
      </p>

      {/* Names */}
      <h3
        className="text-lg sm:text-xl font-semibold"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "#ffb3c6",
        }}
      >
        {father}
      </h3>
      <p
        className="text-base sm:text-lg"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "#ffb3c6",
        }}
      >
        {mother}
      </p>
      {note && (
        <p
          className="text-xs mt-1 italic"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "rgba(255,182,206,0.4)",
          }}
        >
          ({note})
        </p>
      )}
    </motion.div>
  );
}

export default function InviteParentsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="invite-snap-section" id="parents-section">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,64,129,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-lg mx-auto px-2">
        {/* Section Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span style={{ color: "rgba(255,107,157,0.4)" }} className="text-lg">
            ✦ 👨‍👩‍👧‍👦 ✦
          </span>
          <h2
            className="text-3xl sm:text-4xl mt-2 pink-gradient-text"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            With the Blessings of
          </h2>
          <div className="w-16 h-[1px] mx-auto mt-3 pink-divider-soft" />
        </motion.div>

        {/* Parents — stacked on mobile, side by side on md */}
        <div className="flex flex-col gap-10 items-center">
          <ParentCard
            label="Groom's Parents"
            father={weddingData.groomParents.father}
            mother={weddingData.groomParents.mother}
            image={weddingData.groomParents.image}
            note={weddingData.groomParents.note}
            delay={0.2}
            isInView={isInView}
          />
          <ParentCard
            label="Bride's Parents"
            father={weddingData.brideParents.father}
            mother={weddingData.brideParents.mother}
            image={weddingData.brideParents.image}
            delay={0.4}
            isInView={isInView}
          />
        </div>

        {/* Welcome message */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p
            className="text-sm leading-relaxed italic"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "rgba(255,182,206,0.55)",
            }}
          >
            {weddingData.welcomeMessage}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
