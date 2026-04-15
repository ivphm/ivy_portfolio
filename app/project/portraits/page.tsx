import ProjectPageLayout from '@/components/ProjectPageLayout';
import EmbedFrame from '@/components/EmbedFrame';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'portraits')!;

export default function PortraitsPage() {
  return (
    <ProjectPageLayout title={p.title} subtitle={p.subtitle} meta={p.meta}>
      <p className="text-base leading-relaxed">
        This series pays tribute to youth activists around the world who have stood up for climate justice, equity, education, and political reform. Through hand-drawn digital portraits, I sought to capture not only their likeness but the essence of their courage and conviction. Each piece is paired with research on their impact, creating a visual journal that celebrates their stories while inviting critical reflection.
      </p>

      <div>
        <h2 className="text-xl mb-4">Interactive Flipbook:</h2>
        <EmbedFrame src="https://heyzine.com/flip-book/85f18576b8.html#page/1" title="Portraits Flipbook" />
      </div>
    </ProjectPageLayout>
  );
}
