"use client";

import { useMemo } from "react";
import "../bg-animations.css";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export default function PinkBackground() {
  // Generate particles once, no re-render needed
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 14 + 10,
        duration: Math.random() * 14 + 12,
        delay: Math.random() * 10,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Static ambient pink radials — no animation */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(255,107,157,0.1) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 70%, rgba(255,64,129,0.08) 0%, transparent 50%)",
        }}
      />

      {/* Floating hearts — reduced count */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="heart-particle"
          style={{
            left: `${p.x}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
}
