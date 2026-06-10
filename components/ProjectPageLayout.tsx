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
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <Navbar centerLogo={true} />
      <main style={{ paddingTop: '80px', paddingBottom: '64px' }}>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '24px 24px 0',
          }}
        >
          <h1 style={{ fontSize: '28px', fontWeight: 600, lineHeight: 1.3 }}>{title}</h1>
          <p style={{ marginTop: '4px', fontSize: '18px', fontWeight: 300 }}>{subtitle}</p>
          <div style={{ marginTop: '32px' }}>
            <MetaGrid items={meta} />
          </div>
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
