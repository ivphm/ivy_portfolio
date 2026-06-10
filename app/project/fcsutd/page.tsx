import ProjectPageLayout from '@/components/ProjectPageLayout';
import HorizontalScroller from '@/components/HorizontalScroller';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'fcsutd')!;
const images = Array.from({ length: 10 }, (_, i) => `/images/fcsutd${i + 1}.png`);

export default function FcsutdPage() {
  return (
    <ProjectPageLayout title={p.title} subtitle={p.subtitle} meta={p.meta}>
      <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
        This project focused on establishing a clear and modern visual identity for the SUTD Football Club. The scope involved designing the club logo, digital and physical collateral (including jerseys and posters), and ensuring consistency across all platforms. The design combines bold visual elements with strong type to convey both team unity and energy.
      </p>

      <HorizontalScroller images={images} height={600} aspectRatio="1/1" />
    </ProjectPageLayout>
  );
}
