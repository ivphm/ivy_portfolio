'use client';

import { useState } from 'react';
import Image from '@/components/AppImage';
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
            transform: hovered ? 'translateY(-18px)' : 'translateY(0)',
            boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.15)' : 'none',
            transition: 'transform 500ms ease, box-shadow 500ms ease',
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
        <div style={{ marginTop: '20px', textAlign: 'left', padding: '0 4px', width: '100%' }}>
          <p className="project-card-title" style={{ fontWeight: 600, fontSize: '20px', lineHeight: 1.5, marginTop: '5px',color: '#000' }}>{project.title}</p>
          <p className="project-card-subtitle" style={{ fontSize: '14px', color: '#000', marginTop: '10px', lineHeight: 1.5 }}>{project.subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
