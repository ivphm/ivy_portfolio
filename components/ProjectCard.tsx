'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/project/${project.slug}`} className="block">
      <div
        className="flex flex-col items-center cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="rounded-xl overflow-hidden transition-all duration-300 w-full"
          style={{
            transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
            boxShadow: hovered ? '0 12px 28px rgba(0,0,0,0.15)' : 'none',
          }}
        >
          <div className="relative w-full" style={{ paddingTop: '66.67%' }}>
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="mt-3 text-center px-2">
          <p className="font-semibold text-base leading-snug">{project.title}</p>
          <p className="text-sm text-black/55 mt-1 leading-snug">{project.subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
