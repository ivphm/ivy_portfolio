import ProjectPageLayout from '@/components/ProjectPageLayout';
import HorizontalScroller from '@/components/HorizontalScroller';
import Image from 'next/image';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'midwhere')!;

const images = Array.from({ length: 13 }, (_, i) => `/images/midwhere${i + 1}.png`);

export default function MidWherePage() {
  return (
    <ProjectPageLayout title="MidWhereAh: Smart Meetup Coordination for Singapore" subtitle={p.subtitle} meta={p.meta}>
      <p className="text-base leading-relaxed whitespace-pre-line">{`Coordinating meetups across Singapore is stressful and inefficient. People struggle to find locations that are fair and convenient, and group planners often deal with fragmented tools and overwhelming feelings of trying to accommodate everyone.
MidWhereAh is a smart mobile app that makes meetup planning fair and intuitive. It uses Singapore-specific APIs to provide equitable suggestions based on group travel time and preferences.

*Note: This project is still ongoing and in development.`}</p>

      <div>
        <h2 className="text-xl font-bold mb-3">Key Features</h2>
        <p className="text-base leading-relaxed whitespace-pre-line">{`• Group planning with home location, transportation mode and availability input
• Smart venue suggestions using filtering system, and rating/distance data
• Swipe voting interface for collaborative decision-making
• Real-time updates to midpoint calculation and venues suggested`}</p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Prototype Screens</h2>
        <div className="max-w-md mx-auto">
          <HorizontalScroller images={images} height={600} aspectRatio="9/19.5" dotNav />
        </div>
      </div>

      <Image src="/images/midwhereposter.png" alt="MidWhereAh Poster" width={900} height={600} className="rounded-2xl object-cover w-full" />
    </ProjectPageLayout>
  );
}
