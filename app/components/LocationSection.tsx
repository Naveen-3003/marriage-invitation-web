"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-t from-[#0A0505] to-[#120808]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl gradient-text mb-4" style={{ fontFamily: "'Great Vibes', cursive" }}>
          Venue Details
        </h2>
        <p className="text-[#D4A853]/70 tracking-[0.2em] uppercase text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Where our story continues
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center bg-[#1A0A0A] rounded-2xl border border-[#D4A853]/20 shadow-[0_10px_40px_rgba(212,168,83,0.1)] p-4 md:p-8 relative overflow-hidden group">
        
        {/* Subtle hover glow on the card */}
        <div className="absolute inset-0 bg-[#D4A853]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Map side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-[#D4A853]/30 relative z-10"
        >
          {/* Replacing with an actual google map embed pointing to a generic Chennai location for demo */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8270529984924!2d80.24587731536768!3d13.046714090805903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52664e525143a5%3A0xe9685ed5dfd5c9d3!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1684496226065!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(80%) contrast(120%)" }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Details side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left px-4 md:px-8 relative z-10"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 text-[#F0D68A]">
            <MapPin className="w-6 h-6 text-[#D4A853]" />
            <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Sri Krishna Mahal
            </h3>
          </div>
          
          <div className="space-y-2 text-[#D4A853]/80">
            <p>123, Temple Road,</p>
            <p>Mylapore, Chennai,</p>
            <p>Tamil Nadu - 600004</p>
          </div>

          <div className="pt-4 flex justify-center md:justify-start">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4A853]/10 border border-[#D4A853]/50 text-[#F0D68A] rounded-full hover:bg-[#D4A853]/20 hover:scale-105 transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span className="text-sm tracking-wider uppercase">Get Directions</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
