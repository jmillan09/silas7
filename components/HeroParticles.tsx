'use client';

import { useEffect, useState } from 'react';

interface Particle {
  left: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

const COLORS = ['rgba(189,0,22,0.5)', 'rgba(255,255,255,0.3)', 'rgba(64,107,150,0.6)'];
const COUNT = 28;

/** Port of the original createParticles() — floating hero background dots. */
export default function HeroParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: COUNT }, () => ({
        left: Math.random() * 100,
        size: Math.random() * 4 + 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        duration: Math.random() * 15 + 10,
        delay: Math.random() * -18,
      }))
    );
  }, []);

  return (
    <div className="hero-particles" id="particles-js">
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
