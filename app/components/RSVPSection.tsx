"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", guests: "1", message: "" });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section className="relative py-24 px-6 md:px-12 bg-black/40 border-t border-[#D4A853]/10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl gradient-text mb-4" style={{ fontFamily: "'Great Vibes', cursive" }}>
            RSVP
          </h2>
          <p className="text-[#D4A853]/70 tracking-[0.2em] uppercase text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Kindly let us know if you can make it
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-[#1A0A0A]/80 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-[#D4A853]/20 shadow-[0_0_30px_rgba(212,168,83,0.05)]"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#D4A853] mb-2 text-sm uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-[#D4A853]/30 focus:border-[#D4A853] px-0 py-2 text-[#F0D68A] outline-none transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="guests" className="block text-[#D4A853] mb-2 text-sm uppercase tracking-wider">
                Number of Guests
              </label>
              <select
                id="guests"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full bg-transparent border-b border-[#D4A853]/30 focus:border-[#D4A853] px-0 py-2 text-[#F0D68A] outline-none transition-colors [&>option]:bg-[#1A0A0A] [&>option]:text-[#F0D68A]"
              >
                {[1, 2, 3, 4, 5, "6+"].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-[#D4A853] mb-2 text-sm uppercase tracking-wider">
                Wishes for the Couple (Optional)
              </label>
              <textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-[#D4A853]/30 focus:border-[#D4A853] px-0 py-2 text-[#F0D68A] outline-none transition-colors resize-none"
                placeholder="Leave a message..."
              />
            </div>

            <div className="pt-4 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm uppercase tracking-widest transition-all ${
                  isSuccess 
                    ? "bg-green-600/20 text-green-400 border border-green-500/50" 
                    : "bg-[#D4A853] text-[#1A0A0A] font-semibold hover:bg-[#F0D68A] shadow-[0_0_20px_rgba(212,168,83,0.3)]"
                }`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-[#1A0A0A] border-t-transparent rounded-full animate-spin" />
                ) : isSuccess ? (
                  "Sent Successfully!"
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit RSVP
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
