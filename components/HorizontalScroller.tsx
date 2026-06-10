'use client';

import { useRef, useState } from 'react';
import Image from '@/components/AppImage';

interface HorizontalScrollerProps {
  images: string[];
  height?: number;
  aspectRatio?: string;
  dotNav?: boolean;
  fit?: 'cover' | 'contain';
}

export default function HorizontalScroller({
  images,
  height = 500,
  aspectRatio,
  dotNav = false,
  fit = 'cover',
}: HorizontalScrollerProps) {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    if (index < 0 || index >= images.length) return;
    setCurrent(index);
    const container = containerRef.current;
    if (!container) return;
    const slide = container.children[index] as HTMLElement;
    if (slide) slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-center rounded-2xl overflow-hidden"
            style={{
              position: 'relative',
              width: aspectRatio ? undefined : '85%',
              height: `${height}px`,
              aspectRatio: aspectRatio ?? undefined,
            }}
          >
            <Image
              src={src}
              alt={`slide ${i + 1}`}
              fill
              className={fit === 'contain' ? 'object-contain' : 'object-cover'}
              sizes="(max-width: 768px) 90vw, 800px"
            />
          </div>
        ))}
      </div>

      {dotNav && (
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="w-2 h-2 rounded-full transition-colors"
              style={{ background: current === i ? '#000' : 'rgba(0,0,0,0.25)' }}
            />
          ))}
        </div>
      )}

      <div className="flex justify-center gap-4 mt-3">
        <button
          onClick={() => scrollTo(current - 1)}
          disabled={current === 0}
          className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm disabled:opacity-30 hover:shadow-md transition-shadow"
        >
          ←
        </button>
        <button
          onClick={() => scrollTo(current + 1)}
          disabled={current === images.length - 1}
          className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm disabled:opacity-30 hover:shadow-md transition-shadow"
        >
          →
        </button>
      </div>
    </div>
  );
}
