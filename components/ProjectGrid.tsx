'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, type Category } from '@/data/projects';
import ProjectCard from './ProjectCard';

const FILTERS: (Category | 'All')[] = ['All', 'Graphic', 'Product', 'Software', 'Illustration'];

function pillPath(w: number, h: number): string {
  const r = h / 2;
  // Start at top-center, trace clockwise
  return [
    `M ${w / 2} 0`,
    `L ${w - r} 0`,
    `A ${r} ${r} 0 0 1 ${w - r} ${h}`,
    `L ${r} ${h}`,
    `A ${r} ${r} 0 0 1 ${r} 0`,
    'Z',
  ].join(' ');
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const measure = () => {
      if (!ref.current) return;
      const { width, height } = ref.current.getBoundingClientRect();
      if (width > 0) setSize({ w: width, h: height });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      className="filter-btn"
      style={{
        position: 'relative',
        padding: '8px 24px',
        borderRadius: '999px',
        border: active ? 'none' : '0.5px solid rgba(20, 74, 145, 0.25)',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 500,
        fontFamily: 'inherit',
        backgroundColor: active ? '#144A91' : '#fff',
        color: active ? '#fff' : '#144A91',
        transition: 'background-color 200ms ease, color 200ms ease',
      }}
    >
      {/* Traced outline — only on inactive buttons */}
      {!active && size.w > 0 && (
        <svg
          aria-hidden
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: size.w,
            height: size.h,
            overflow: 'visible',
            pointerEvents: 'none',
          }}
          viewBox={`0 0 ${size.w} ${size.h}`}
        >
          <motion.path
            d={pillPath(size.w, size.h)}
            fill="none"
            stroke="#144A91"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: hovered ? 1 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </svg>
      )}
      {label}
    </motion.button>
  );
}

export default function ProjectGrid() {
  const [active, setActive] = useState<Category | 'All'>('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.categories.includes(active));

  return (
    <div>
      {/* Filter chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', padding: '24px 0 48px' }}>
        {FILTERS.map((f) => (
          <FilterButton
            key={f}
            label={f}
            active={active === f}
            onClick={() => setActive(f)}
          />
        ))}
      </div>

      {/* 2-column grid */}
      <div className="project-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: (i % 2) * 0.12 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
