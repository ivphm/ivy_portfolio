'use client';

import { useState } from 'react';
import Image from '@/components/AppImage';
import ProjectPageLayout from '@/components/ProjectPageLayout';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'eyevpham')!;

export default function EyevphamPage() {
  const [hovered, setHovered] = useState(false);

  return (
    <ProjectPageLayout title={p.title} subtitle={p.subtitle} meta={p.meta}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', marginTop: '30px' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div></div>
          {/* Animated SVG doodles on hover */}
          {hovered && (
            <svg
              style={{
                position: 'absolute',
                top: '-60px',
                left: '-60px',
                width: '420px',
                height: '420px',
                pointerEvents: 'none',
                marginTop: '30px',
                zIndex: 10,
              }}
              viewBox="0 0 420 420"
              
            >
              {/* Squiggly line top left */}
              <motion.path
                d="M 80 80 Q 100 70 120 80 T 160 80"
                stroke="#144A91"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
              {/* Wavy line top right */}
              <motion.path
                d="M 340 60 Q 350 75 360 65 Q 370 55 380 70"
                stroke="#144A91"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }}
              />
              {/* Circle doodle bottom left */}
              <motion.circle
                cx="70"
                cy="340"
                r="20"
                stroke="#144A91"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.1, duration: 0.8, ease: 'easeInOut' }}
              />
              {/* Star-like line bottom right */}
              <motion.path
                d="M 360 360 L 370 345 L 380 360 L 390 350 L 380 365"
                stroke="#144A91"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
              />
            </svg>
          )}
          <a
            href="https://www.instagram.com/eyevpham/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              position: 'relative',
              display: 'block',
              borderRadius: '16px',
              overflow: 'hidden',
              cursor: 'pointer',
              width: 300,
              height: 300,
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 300ms cubic-bezier(0.45, 0, 0.55, 1)',
              boxShadow: hovered ? '0 20px 40px rgba(78,78,80,0.3)' : 'none',
            }}
          >
            <Image src="/images/eyevpham.png" alt="@eyevpham" fill style={{ objectFit: 'cover' }} />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '16px',
                transition: 'opacity 300ms',
                opacity: hovered ? 0.25 : 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.87), transparent)',
              }}
            />
          </a>
        </div>
      </div>
    </ProjectPageLayout>
  );
}
