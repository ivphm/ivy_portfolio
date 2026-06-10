'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const SIZE = 44;

export default function ScrollToTop() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const r = SIZE / 2 - 1;
  const cx = SIZE / 2;
  const cy = SIZE / 2;
  const circumference = 2 * Math.PI * r;

  return (
    <motion.button
      ref={ref}
      className="scroll-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: scrolled ? 1 : 0 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        opacity: { duration: 0.3, ease: 'easeInOut' },
        scale: { type: 'spring', stiffness: 350, damping: 20 },
      }}
      style={{
        pointerEvents: scrolled ? 'auto' : 'none',
        width: SIZE,
        height: SIZE,
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 500,
        fontFamily: 'inherit',
        backgroundColor: '#144A91',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        aria-hidden
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', overflow: 'visible' }}
      >
        <motion.circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#fff"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: hovered ? 0 : circumference }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ transformOrigin: `${cx}px ${cy}px`, rotate: '-90deg' }}
        />
      </svg>
      ↑
    </motion.button>
  );
}
