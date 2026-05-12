"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { weddingData } from "../weddingData";

export default function VenueSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const { venue } = weddingData;

  return (
    <section ref={ref} className="invite-snap-section" id="venue-section">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 70%, rgba(255,64,129,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-lg mx-auto px-2">
        {/* Section Title */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span style={{ color: "rgba(255,107,157,0.4)" }} className="text-lg">
            ✦ 📍 ✦
          </span>
          <h2
            className="text-3xl sm:text-4xl mt-2 pink-gradient-text"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Venue
          </h2>
          <div className="w-16 h-[1px] mx-auto mt-3 pink-divider-soft" />
        </motion.div>

        {/* Map */}
        <motion.div
          className="map-container w-full h-[220px] sm:h-[260px] md:h-[300px] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <iframe
            src={`https://maps.google.com/maps?q=${venue.latitude},${venue.longitude}&z=15&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Location"
          />
        </motion.div>

        {/* Venue Details */}
        <motion.div
          className="text-center invite-card rounded-2xl p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff6b9d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <h3
              className="text-lg sm:text-xl font-semibold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#ffb3c6",
              }}
            >
              {venue.name}
            </h3>
          </div>

          <p
            className="text-sm mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "rgba(255,182,206,0.55)",
            }}
          >
            {venue.address}
          </p>

          <a
            href={venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #ff6b9d, #ff4081)",
              color: "#fff",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              boxShadow: "0 0 18px rgba(255,107,157,0.25)",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
