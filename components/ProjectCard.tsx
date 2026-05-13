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
    <Link href={`/project/${project.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            width: '100%',
            transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
            boxShadow: hovered ? '0 12px 28px rgba(0,0,0,0.15)' : 'none',
            transition: 'transform 300ms ease, box-shadow 300ms ease',
          }}
        >
          <div style={{ position: 'relative', width: '100%', paddingTop: '66.67%' }}>
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div style={{ marginTop: '12px', textAlign: 'center', padding: '0 8px' }}>
          <p style={{ fontWeight: 600, fontSize: '16px', lineHeight: 1.3 }}>{project.title}</p>
          <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.55)', marginTop: '4px', lineHeight: 1.3 }}>{project.subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
