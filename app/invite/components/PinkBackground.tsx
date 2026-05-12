"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export default function PinkBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 18 + 12,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 8,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient pink radials */}
      <motion.div
        className="absolute inset-0 opacity-15 mix-blend-screen"
        style={{ background: "radial-gradient(circle at 50% 30%, #ff6b9d 0%, transparent 60%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 opacity-15 mix-blend-screen"
        style={{ background: "radial-gradient(circle at 80% 70%, #ff4081 0%, transparent 50%)" }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 opacity-10 mix-blend-screen"
        style={{ background: "radial-gradient(circle at 20% 80%, #ff85a2 0%, transparent 50%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating hearts */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          initial={{ left: `${p.x}%`, bottom: "-5%", opacity: 0 }}
          animate={{ bottom: "105%", opacity: [0, 0.6, 0.6, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
            opacity: { times: [0, 0.1, 0.85, 1], duration: p.duration, repeat: Infinity, delay: p.delay },
          }}
          style={{ fontSize: `${p.size}px` }}
        >
          💕
        </motion.div>
      ))}
    </div>
  );
}
