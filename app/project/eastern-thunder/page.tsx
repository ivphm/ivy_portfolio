import ProjectPageLayout from '@/components/ProjectPageLayout';
import HorizontalScroller from '@/components/HorizontalScroller';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'eastern-thunder')!;
const images = Array.from({ length: 14 }, (_, i) => `/images/etfc${i + 1}.jpg`);

export default function EasternThunderPage() {
  return (
    <ProjectPageLayout title={p.title} subtitle={p.subtitle} meta={p.meta}>
      <p className="text-base leading-relaxed">
        This design project centered around developing visually cohesive and engaging Instagram post templates for Eastern Thunder FC. The content included player highlights, match day countdowns, score updates, and recruitment campaigns. The goal was to maintain brand consistency, increase fan engagement, and visually amplify the club&apos;s identity across digital platforms.
      </p>

      <HorizontalScroller images={images} height={700} aspectRatio="4/3" />
    </ProjectPageLayout>
  );
}
