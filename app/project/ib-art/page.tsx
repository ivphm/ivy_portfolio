import ProjectPageLayout from '@/components/ProjectPageLayout';
import EmbedFrame from '@/components/EmbedFrame';
import HorizontalScroller from '@/components/HorizontalScroller';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'ib-art')!;
const artImages = Array.from({ length: 9 }, (_, i) => `/images/ex${i + 1}.png`);

export default function IbArtPage() {
  return (
    <ProjectPageLayout title={p.title} subtitle={p.subtitle} meta={p.meta}>
      <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
        My body of work revolves around my interpretation and personal experience of childhood through an innocent and imaginative lens. Through the subthemes of nature, family, femininity and my Vietnamese culture, I explored how childhood has not only shaped my identity, but my perspective of my future, knowing that my childhood days are over...
      </p>

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Selected Artworks Gallery:</h2>
        <HorizontalScroller images={artImages} height={600} aspectRatio="1/1" />
      </div>

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Comparative Analysis Flipbook:</h2>
        <EmbedFrame src="https://heyzine.com/flip-book/6bc16db300.html" title="Comparative Analysis" />
      </div>

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Visual Process Book Flipbook:</h2>
        <EmbedFrame src="https://heyzine.com/flip-book/7318e93e43.html" title="Visual Process Book" />
      </div>
    </ProjectPageLayout>
  );
}
