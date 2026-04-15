'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  onScrollTo?: (section: string) => void;
}

function NavItem({ label, onClick }: { label: string; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center cursor-pointer bg-transparent border-none"
    >
      <span className="text-base text-black">{label}</span>
      <span
        className="block h-0.5 bg-[#144A91] transition-all duration-200"
        style={{ width: hovered ? '24px' : '0px' }}
      />
    </button>
  );
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center justify-between px-8 h-16 border-b border-white">
      <Link href="/">
        <Image src="/images/logo.svg" alt="Logo" width={120} height={50} className="cursor-pointer" />
      </Link>
      <div className="flex items-center gap-6">
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
    </nav>
  );
}
