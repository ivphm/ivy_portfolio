'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface NavbarProps {
  onScrollTo?: (section: string) => void;
  centerLogo?: boolean;
}

function NavItem({ label, onClick }: { label: string; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
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
      <span style={{ fontSize: '16px', fontWeight: 400, color: '#000', fontFamily: 'inherit' }}>
        {label}
      </span>
      <span
        style={{
          display: 'block',
          height: '2px',
          background: '#144A91',
          marginTop: '4px',
          width: hovered ? '24px' : '0px',
          transition: 'width 200ms ease',
        }}
      />
    </button>
  );
}

export default function Navbar({ onScrollTo, centerLogo }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';
  const isProject = pathname.startsWith('/project/');

  return (
    <nav
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
        padding: '0 32px',
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
            style={{ cursor: 'pointer', objectFit: 'contain' }}
          />
        </Link>
      </div>

      {/* Right: nav links (hidden on project pages) */}
      {!centerLogo && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
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
    </nav>
  );
}
