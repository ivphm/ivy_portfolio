import ProjectPageLayout from '@/components/ProjectPageLayout';
import EmbedFrame from '@/components/EmbedFrame';
import Image from 'next/image';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'ai-bus-seat')!;
const images = Array.from({ length: 6 }, (_, i) => `/images/aigen${i + 1}.png`);

export default function AiBusSeatPage() {
  return (
    <ProjectPageLayout title="Generative AI Engineered Bus Seat" subtitle="CAD Optimisation & AI Generative Design" meta={p.meta}>
      <p className="text-base leading-relaxed">
        This project explores how generative AI and simulation can be applied to redesign a bus seat frame that balances optimising durability, safety, cost, and material reduction. Using AI tools and 3D modeling, we tested multiple load conditions and design constraints to produce efficient yet manufacturable outputs.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {images.map((src, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <Image src={src} alt={`AI Bus Seat ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl mb-4">Project Report:</h2>
        <EmbedFrame src="https://drive.google.com/file/d/1KyecKydFMcjDE3NzOe4T0LCA2swDrNa7/preview" title="Bus Seat Report" />
      </div>
    </ProjectPageLayout>
  );
}
