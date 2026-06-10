'use client';

import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface NavbarProps {
  onScrollTo?: (section: string) => void;
  centerLogo?: boolean;
}

// A smooth wavy underline that traces itself on hover
function DoodleUnderline({ visible, width }: { visible: boolean; width: number }) {
  if (width === 0) return null;

  // Sine-wave bezier: each half-wave starts & ends at the midline with a
  // horizontal tangent, so there are zero sharp points between segments.
  const h = 7;
  const mid = h / 2;
  const amplitude = (h - 2) / 2; // peak distance from midline
  const waves = Math.max(2, Math.round(width / 16));
  const halfPeriod = width / waves;

  let d = `M 0,${mid}`;
  for (let i = 0; i < waves; i++) {
    const x0 = i * halfPeriod;
    const x1 = x0 + halfPeriod;
    const cpX1 = x0 + halfPeriod / 3;
    const cpX2 = x0 + (2 * halfPeriod) / 3;
    const peakY = i % 2 === 0 ? mid - amplitude : mid + amplitude;
    d += ` C ${cpX1},${peakY} ${cpX2},${peakY} ${x1},${mid}`;
  }

  return (
    <svg
      aria-hidden
      style={{
        display: 'block',
        marginTop: '3px',
        overflow: 'visible',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.1s ease',
      }}
      width={width}
      height={h}
      viewBox={`0 0 ${width} ${h}`}
    >
      <motion.path
        d={d}
        fill="none"
        stroke="#144A91"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: visible ? 1 : 0 }}
        transition={{ duration: 0.45, ease: 'easeInOut' }}
      />
    </svg>
  );
}

function NavItem({ label, onClick }: { label: string; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  const [width, setWidth] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (spanRef.current) {
      setWidth(spanRef.current.offsetWidth);
    }
  }, []);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
        padding: 0,
      }}
    >
      <span ref={spanRef} style={{ fontSize: '16px', fontWeight: 400, color: '#000', fontFamily: 'inherit' }}>
        {label}
      </span>
      <DoodleUnderline visible={hovered} width={width} />
    </button>
  );
}

function MobileNavItem({ label, onClick }: { label: string; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  const [width, setWidth] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (spanRef.current) {
      setWidth(spanRef.current.offsetWidth);
    }
  }, []);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="mobile-menu-item"
    >
      <span ref={spanRef} style={{ fontFamily: 'inherit' }}>{label}</span>
      <DoodleUnderline visible={hovered} width={width} />
    </button>
  );
}

export default function Navbar({ onScrollTo, centerLogo }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';
  const isProject = pathname.startsWith('/project/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNav = (section: string) => {
    setMobileMenuOpen(false);
    onScrollTo?.(section);
  };

  return (
    <>
    <nav
      className="navbar-pad"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: centerLogo ? 'center' : 'space-between',
        height: '64px',
      }}
    >
      {centerLogo && isProject && (
        <button
          onClick={() => router.back()}
          style={{
            position: 'absolute',
            left: '32px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '22px',
            color: '#144A91',
            padding: '0 8px 0 0',
            lineHeight: 1,
          }}
          aria-label="Go back"
        >
          ←
        </button>
      )}
      {/* Left: back arrow on project pages, logo otherwise */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {isProject && !centerLogo && (
          <button
            onClick={() => router.back()}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '22px',
              color: '#144A91',
              padding: '0 8px 0 0',
              lineHeight: 1,
            }}
            aria-label="Go back"
          >
            ←
          </button>
        )}
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Ivy Pham"
            width={110}
            height={44}
            className="navbar-logo"
            style={{ cursor: 'pointer', objectFit: 'contain' }}
          />
        </Link>
      </div>

      {/* Right: desktop nav links */}
      {!centerLogo && (
        <div className="nav-links">
          {isHome && onScrollTo ? (
            <>
              <NavItem label="about" onClick={() => onScrollTo('about')} />
              <NavItem label="projects" onClick={() => onScrollTo('projects')} />
              <NavItem label="experience" onClick={() => onScrollTo('experience')} />
            </>
          ) : (
            <>
              <Link href="/#about"><NavItem label="about" /></Link>
              <Link href="/#projects"><NavItem label="projects" /></Link>
              <Link href="/#experience"><NavItem label="experience" /></Link>
            </>
          )}
        </div>
      )}

      {/* Hamburger button — mobile only */}
      {!centerLogo && (
        <button
          className="hamburger-btn"
          onClick={() => setMobileMenuOpen(o => !o)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            flexDirection: 'column',
            gap: '5px',
            justifyContent: 'center',
          }}
        >
          <span className={`ham-line ${mobileMenuOpen ? 'ham-open-1' : ''}`} />
          <span className={`ham-line ${mobileMenuOpen ? 'ham-open-2' : ''}`} />
          <span className={`ham-line ${mobileMenuOpen ? 'ham-open-3' : ''}`} />
        </button>
      )}
    </nav>

    {/* Mobile dropdown menu */}
    {!centerLogo && mobileMenuOpen && (
      <div className="mobile-menu">
        {isHome && onScrollTo ? (
          <>
            <MobileNavItem label="about" onClick={() => handleMobileNav('about')} />
            <MobileNavItem label="projects" onClick={() => handleMobileNav('projects')} />
            <MobileNavItem label="experience" onClick={() => handleMobileNav('experience')} />
          </>
        ) : (
          <>
            <Link href="/#about" onClick={() => setMobileMenuOpen(false)}><MobileNavItem label="about" /></Link>
            <Link href="/#projects" onClick={() => setMobileMenuOpen(false)}><MobileNavItem label="projects" /></Link>
            <Link href="/#experience" onClick={() => setMobileMenuOpen(false)}><MobileNavItem label="experience" /></Link>
          </>
        )}
      </div>
    )}
    </>
  );
}
