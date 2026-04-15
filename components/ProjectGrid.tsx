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
      <div className="flex flex-wrap justify-center gap-3 py-6">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className="px-6 py-2 rounded-full text-base font-medium transition-colors duration-150"
            style={{
              background: active === f ? '#144A91' : '#d1d5db',
              color: active === f ? '#fff' : '#000',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
