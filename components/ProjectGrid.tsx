'use client';

import { useState } from 'react';
import { projects, type Category } from '@/data/projects';
import ProjectCard from './ProjectCard';

const FILTERS: (Category | 'All')[] = ['All', 'Graphic', 'Product', 'Software', 'Illustration'];

export default function ProjectGrid() {
  const [active, setActive] = useState<Category | 'All'>('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.categories.includes(active));

  return (
    <div>
      {/* Filter chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', padding: '24px 0' }}>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              padding: '8px 24px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 500,
              fontFamily: 'inherit',
              backgroundColor: active === f ? '#144A91' : '#d1d5db',
              color: active === f ? '#fff' : '#000',
              transition: 'background-color 150ms ease',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* 2-column grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
          marginTop: '24px',
        }}
      >
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
