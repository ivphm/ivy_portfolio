import ProjectPageLayout from '@/components/ProjectPageLayout';
import HorizontalScroller from '@/components/HorizontalScroller';
import MidwhereCharacter from '@/components/MidwhereCharacter';
import Image from 'next/image';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'midwhere')!;

const images = Array.from({ length: 13 }, (_, i) => `/images/midwhere${i + 1}.png`);

export default function MidWherePage() {
  return (
    <ProjectPageLayout title="MidWhereAh: Smart Meetup Coordination for Singapore" subtitle={p.subtitle} meta={p.meta}>
      <MidwhereCharacter />

      <p style={{ fontSize: '16px', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{`Coordinating meetups across Singapore is stressful and inefficient. People struggle to find locations that are fair and convenient, and group planners often deal with fragmented tools and overwhelming feelings of trying to accommodate everyone.
MidWhereAh is a smart mobile app that makes meetup planning fair and intuitive. It uses Singapore-specific APIs to provide equitable suggestions based on group travel time and preferences.

*Note: This project is still ongoing and in development.`}</p>

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>Key Features</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{`• Group planning with home location, transportation mode and availability input
• Smart venue suggestions using filtering system, and rating/distance data
• Swipe voting interface for collaborative decision-making
• Real-time updates to midpoint calculation and venues suggested`}</p>
      </div>

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>Prototype Screens</h2>
        <div style={{ maxWidth: '448px', margin: '0 auto' }}>
          <HorizontalScroller images={images} height={600} aspectRatio="9/19.5" dotNav />
        </div>
      </div>

      <Image src="/images/midwhereposter.png" alt="MidWhereAh Poster" width={900} height={600} style={{ borderRadius: '16px', objectFit: 'cover', width: '100%' }} />
    </ProjectPageLayout>
  );
}
