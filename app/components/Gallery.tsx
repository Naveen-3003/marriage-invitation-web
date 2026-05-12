"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1583939000572-13eb2019ea81?auto=format&fit=crop&q=80&w=800", alt: "Couple moment 1" },
    { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800", alt: "Couple moment 2" },
    { src: "https://images.unsplash.com/photo-1544532679-b1eb21cff243?auto=format&fit=crop&q=80&w=800", alt: "Couple moment 3" },
    { src: "https://images.unsplash.com/photo-1583939411023-1478317924e2?auto=format&fit=crop&q=80&w=800", alt: "Couple moment 4" },
    { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800", alt: "Couple moment 5" },
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", alt: "Couple moment 6" }
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 bg-[#0A0505] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl gradient-text mb-4" style={{ fontFamily: "'Great Vibes', cursive" }}>
          Captured Moments
        </h2>
        <p className="text-[#D4A853]/70 tracking-[0.2em] uppercase text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          A glimpse into our journey
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, zIndex: 10 }}
            className="relative aspect-[3/4] md:aspect-square rounded-xl overflow-hidden group cursor-pointer border border-[#D4A853]/20 hover:border-[#D4A853]/60 transition-all shadow-lg"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Hover overlay with cinematic border */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-[12px] border-transparent group-hover:border-[#D4A853]/30" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
