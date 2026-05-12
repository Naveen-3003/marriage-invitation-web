"use client";

import { motion } from "framer-motion";
import { CalendarHeart, MapPin, Clock } from "lucide-react";

export default function EventDetails() {
  const events = [
    {
      title: "நிச்சயதார்த்தம் | Engagement",
      date: "Sunday, 20th August 2026",
      time: "10:00 AM - 12:00 PM",
      location: "Sri Krishna Mahal, Chennai",
      icon: <CalendarHeart className="w-8 h-8 text-[#D4A853]" />,
      delay: 0.2,
    },
    {
      title: "முகூர்த்தம் | Muhurtham",
      date: "Monday, 21st August 2026",
      time: "07:30 AM - 09:00 AM",
      location: "Sri Krishna Mahal, Chennai",
      icon: <Clock className="w-8 h-8 text-[#D4A853]" />,
      delay: 0.4,
      highlight: true,
    },
    {
      title: "வரவேற்பு | Reception",
      date: "Monday, 21st August 2026",
      time: "07:00 PM Onwards",
      location: "Sri Krishna Mahal, Chennai",
      icon: <MapPin className="w-8 h-8 text-[#D4A853]" />,
      delay: 0.6,
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 bg-[#0A0505] overflow-hidden">
      {/* Decorative Top/Bottom dividers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4A853]/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4A853]/50 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl gradient-text mb-4" style={{ fontFamily: "'Great Vibes', cursive" }}>
          Ceremonies
        </h2>
        <p className="text-[#D4A853]/70 tracking-[0.2em] uppercase text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Join us in our celebrations
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: event.delay, ease: "easeOut" }}
            whileHover={{ y: -10 }}
            className={`relative p-8 rounded-2xl backdrop-blur-md border ${
              event.highlight 
                ? "bg-gradient-to-b from-[#1a1208]/90 to-[#0A0505]/95 border-[#D4A853]/50 shadow-[0_0_30px_rgba(212,168,83,0.15)]" 
                : "bg-black/40 border-[#D4A853]/20 hover:border-[#D4A853]/40"
            } transition-all duration-500 group overflow-hidden`}
          >
            {/* Subtle inner glow for highlight */}
            {event.highlight && (
              <div className="absolute inset-0 bg-gradient-to-b from-[#D4A853]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}

            <div className="flex flex-col items-center text-center space-y-4 relative z-10">
              <div className="w-16 h-16 rounded-full bg-[#1A0A0A] border border-[#D4A853]/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
                {event.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl text-[#F0D68A] font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {event.title.split(' | ')[0]}
                <span className="block text-sm text-[#D4A853]/80 mt-1 uppercase tracking-widest">{event.title.split(' | ')[1]}</span>
              </h3>
              
              <div className="w-12 h-[1px] bg-[#D4A853]/30 mx-auto my-2" />
              
              <div className="space-y-2 text-[#D4A853]/70 text-sm md:text-base">
                <p className="font-medium text-[#D4A853]">{event.date}</p>
                <p>{event.time}</p>
                <p className="text-white/60 mt-2 text-sm">{event.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
