import ProjectPageLayout from '@/components/ProjectPageLayout';
import EmbedFrame from '@/components/EmbedFrame';
import HorizontalScroller from '@/components/HorizontalScroller';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'ib-art')!;
const artImages = Array.from({ length: 9 }, (_, i) => `/images/ex${i + 1}.png`);

export default function IbArtPage() {
  return (
    <ProjectPageLayout title={p.title} subtitle={p.subtitle} meta={p.meta}>
      <p className="text-base leading-relaxed">
        My body of work revolves around my interpretation and personal experience of childhood through an innocent and imaginative lens. Through the subthemes of nature, family, femininity and my Vietnamese culture, I explored how childhood has not only shaped my identity, but my perspective of my future, knowing that my childhood days are over...
      </p>

      <div>
        <h2 className="text-xl mb-4">Selected Artworks Gallery:</h2>
        <HorizontalScroller images={artImages} height={700} />
      </div>

      <div>
        <h2 className="text-xl mb-4">Comparative Analysis Flipbook:</h2>
        <EmbedFrame src="https://heyzine.com/flip-book/6bc16db300.html" title="Comparative Analysis" />
      </div>

      <div>
        <h2 className="text-xl mb-4">Visual Process Book Flipbook:</h2>
        <EmbedFrame src="https://heyzine.com/flip-book/7318e93e43.html" title="Visual Process Book" />
      </div>
    </ProjectPageLayout>
  );
}
