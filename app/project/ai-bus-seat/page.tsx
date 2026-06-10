import ProjectPageLayout from '@/components/ProjectPageLayout';
import EmbedFrame from '@/components/EmbedFrame';
import Image from '@/components/AppImage';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'ai-bus-seat')!;
const images = Array.from({ length: 6 }, (_, i) => `/images/aigen${i + 1}.png`);

export default function AiBusSeatPage() {
  return (
    <ProjectPageLayout title="Generative AI Engineered Bus Seat" subtitle="CAD Optimisation & AI Generative Design" meta={p.meta}>
      <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
        This project explores how generative AI and simulation can be applied to redesign a bus seat frame that balances optimising durability, safety, cost, and material reduction. Using AI tools and 3D modeling, we tested multiple load conditions and design constraints to produce efficient yet manufacturable outputs.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {images.map((src, i) => (
          <div key={i} style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/9' }}>
            <Image src={src} alt={`AI Bus Seat ${i + 1}`} fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Project Report:</h2>
        <EmbedFrame src="https://drive.google.com/file/d/1KyecKydFMcjDE3NzOe4T0LCA2swDrNa7/preview" title="Bus Seat Report" />
      </div>
    </ProjectPageLayout>
  );
}
