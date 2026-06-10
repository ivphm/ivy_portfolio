'use client';
import { motion } from 'framer-motion';

interface PathProps {
  d: string;
  delay?: number;
  inView: boolean;
  strokeWidth?: number;
}

function AnimPath({ d, delay = 0, inView, strokeWidth = 1.2 }: PathProps) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="#144A91"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: inView ? 1 : 0 }}
      transition={{ duration: 1.8, delay, ease: [0.4, 0, 0.2, 1] }}
    />
  );
}

function AnimDot({ cx, cy, delay, inView }: { cx: number; cy: number; delay: number; inView: boolean }) {
  return (
    <motion.circle
      cx={cx} cy={cy} r={1.8} fill="#144A91"
      initial={{ scale: 0 }}
      animate={{ scale: inView ? 1 : 0 }}
      transition={{ duration: 0.3, delay }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    />
  );
}

interface FloralOverlayProps {
  side: 'left' | 'right';
  inView: boolean;
}

// Right-side composition: SVG 160×340, flower at (80,185), stem runs top→bottom
// Left-side: same SVG with scaleX(-1) mirror
export default function FloralOverlay({ side, inView }: FloralOverlayProps) {
  const d = side === 'left' ? 0.15 : 0;

  return (
    <svg
      aria-hidden
      viewBox="0 0 160 340"
      width="160"
      height="340"
      style={{
        display: 'block',
        overflow: 'visible',
        pointerEvents: 'none',
        transform: side === 'left' ? 'scaleX(-1)' : undefined,
        transformOrigin: 'center',
        width: '100%',
        height: 'auto',
      }}
    >
      {/* ── Main stem: sweeps from upper-right down to lower-left ── */}
      <AnimPath inView={inView} delay={d + 0}   d="M 148 8 C 132 55 110 110 84 175 C 68 220 72 270 80 310" />

      {/* ── Upper branch + bud ── */}
      <AnimPath inView={inView} delay={d + 0.5} d="M 126 55 C 138 42 146 25 144 10" />
      <AnimPath inView={inView} delay={d + 0.7} d="M 144 10 C 142 2 142 -6 145 -9 C 148 -6 149 2 147 10" />
      <AnimPath inView={inView} delay={d + 0.85} d="M 145 -9 C 141 -15 138 -13 138 -8" />
      <AnimPath inView={inView} delay={d + 0.9}  d="M 145 -9 C 149 -15 152 -13 152 -8" />

      {/* ── Leaf 1 mid-upper stem ── */}
      <AnimPath inView={inView} delay={d + 0.3} d="M 114 68 C 128 54 136 36 132 16 C 116 26 110 48 114 68" />

      {/* ── Leaf 2 approaching flower ── */}
      <AnimPath inView={inView} delay={d + 0.45} d="M 97 132 C 87 118 85 100 91 84" />

      {/* ── Lily flower — 6 petals centred at (84, 185) ── */}
      {/* 12 o'clock */}
      <AnimPath inView={inView} delay={d + 1.0}  d="M 84 185 C 76 174 74 160 84 149 C 94 160 92 174 84 185" />
      {/* 2 o'clock */}
      <AnimPath inView={inView} delay={d + 1.05} d="M 84 185 C 92 174 101 167 115 167 C 111 178 100 181 84 185" />
      {/* 4 o'clock */}
      <AnimPath inView={inView} delay={d + 1.1}  d="M 84 185 C 94 186 104 184 114 202 C 101 205 91 197 84 185" />
      {/* 6 o'clock */}
      <AnimPath inView={inView} delay={d + 1.15} d="M 84 185 C 76 196 74 210 84 221 C 94 210 92 196 84 185" />
      {/* 8 o'clock */}
      <AnimPath inView={inView} delay={d + 1.2}  d="M 84 185 C 74 196 64 204 53 202 C 65 189 75 185 84 185" />
      {/* 10 o'clock */}
      <AnimPath inView={inView} delay={d + 1.25} d="M 84 185 C 76 174 67 167 53 167 C 57 178 68 181 84 185" />

      {/* ── Stamens ── */}
      <AnimPath inView={inView} delay={d + 1.5}  d="M 84 185 L 84 172" />
      <AnimPath inView={inView} delay={d + 1.55} d="M 84 185 L 93 177" />
      <AnimPath inView={inView} delay={d + 1.6}  d="M 84 185 L 75 177" />
      <AnimDot inView={inView} cx={84} cy={171} delay={d + 1.8} />
      <AnimDot inView={inView} cx={94} cy={176} delay={d + 1.85} />
      <AnimDot inView={inView} cx={74} cy={176} delay={d + 1.9} />

      {/* ── Leaf 3 on lower stem ── */}
      <AnimPath inView={inView} delay={d + 0.55} d="M 86 245 C 100 230 108 210 102 190" />

      {/* ── Small bud near base ── */}
      <AnimPath inView={inView} delay={d + 0.65} d="M 80 310 C 77 300 77 290 80 284 C 83 290 83 300 82 310" />
      <AnimPath inView={inView} delay={d + 0.75} d="M 80 284 C 76 279 73 281 73 286" />
      <AnimPath inView={inView} delay={d + 0.8}  d="M 80 284 C 84 279 87 281 87 286" />
    </svg>
  );
}
