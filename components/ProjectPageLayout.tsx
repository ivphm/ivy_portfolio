import Navbar from './Navbar';
import MetaGrid from './MetaGrid';
import type { MetaItem } from '@/data/projects';

interface ProjectPageLayoutProps {
  title: string;
  subtitle: string;
  meta: MetaItem[];
  children: React.ReactNode;
}

export default function ProjectPageLayout({ title, subtitle, meta, children }: ProjectPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-1 text-lg font-light">{subtitle}</p>
          <div className="mt-8">
            <MetaGrid items={meta} />
          </div>
          <div className="mt-10 flex flex-col gap-10">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
