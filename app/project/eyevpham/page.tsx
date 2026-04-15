'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function EyevphamPage() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />
      <main className="pt-16 flex items-center justify-center min-h-screen">
        <a
          href="https://www.instagram.com/eyevpham/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative block rounded-2xl overflow-hidden cursor-pointer"
          style={{
            width: 300,
            height: 300,
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 300ms cubic-bezier(0.45, 0, 0.55, 1)',
            boxShadow: hovered ? '0 20px 40px rgba(78,78,80,0.3)' : 'none',
          }}
        >
          <img src="/images/eyevpham.png" alt="@eyevpham" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0 rounded-2xl transition-opacity duration-300"
            style={{
              opacity: hovered ? 0.25 : 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.87), transparent)',
            }}
          />
        </a>
      </main>
    </div>
  );
}
