"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Bird {
  id: number;
  x: number;
  y: number;
  scale: number;
  duration: number;
  delay: number;
}

export default function Birds({ count = 5 }: { count?: number }) {
  const [birds, setBirds] = useState<Bird[]>([]);

  useEffect(() => {
    setBirds(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: -10 - Math.random() * 20, // Start off-screen left
        y: 10 + Math.random() * 40, // Top half of screen
        scale: 0.3 + Math.random() * 0.4,
        duration: 15 + Math.random() * 20, // Slow flying
        delay: Math.random() * 10,
      }))
    );
  }, [count]);

  return (
    <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">
      {birds.map((b) => (
        <motion.div
          key={b.id}
          className="absolute"
          style={{ top: `${b.y}%` }}
          initial={{ left: `${b.x}vw`, y: 0 }}
          animate={{
            left: "110vw",
            y: [0, -20, 10, -10, 0], // Gentle bobbing
          }}
          transition={{
            left: { duration: b.duration, repeat: Infinity, delay: b.delay, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {/* Simple SVG Bird Silhouette */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `scale(${b.scale})`, opacity: 0.6 }}
          >
            <path
              d="M2.3999 13.2C4.7999 11.6 8.3999 10.8 11.9999 12.4C15.5999 10.8 19.1999 11.6 21.5999 13.2C21.5999 13.2 18.7999 7.60001 11.9999 7.60001C5.1999 7.60001 2.3999 13.2 2.3999 13.2Z"
              fill="#2d4a22"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
