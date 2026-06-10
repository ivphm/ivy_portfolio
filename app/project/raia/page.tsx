import ProjectPageLayout from '@/components/ProjectPageLayout';
import EmbedFrame from '@/components/EmbedFrame';
import Image from '@/components/AppImage';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'raia')!;

export default function RaiaPage() {
  return (
    <ProjectPageLayout title={p.title} subtitle="Automobile Design and 3D Printing" meta={p.meta}>
      
      
      <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
        RAIA is an autonomous EV charging vehicle designed for Singapore’s 2040 mobility landscape, bringing charging directly to parked EVs instead of requiring drivers to visit charging stations. Stationed in carparks, it autonomously deploys modular battery units to provide fast, seamless 24/7 charging in as little as 6 minutes, with zero additional land use and minimal user effort.
      </p>

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Final Presentation Slide Deck:</h2>
        <EmbedFrame src="https://heyzine.com/flip-book/35e6fdd963.html" title="RAIA Presentation" />
      </div>

      <div style={{ display: 'flex', gap: '24px' }}>
        <div style={{ fontSize: '16px', lineHeight: 1.6 }}>
          <p>This project was developed over 12 weeks as part of the 60.003 Product Design Studio course at SUTD, under the mentorship of Michael Reeves, Wei Lek, and Hunn Wai. Starting from a basic chassis frame, we designed the EV from the ground up—defining its purpose, concept, visual language, and functionality, culminating in a physical prototype and complete speculative ecosystem.</p>
          <p style={{ marginTop: '16px', fontWeight: 600 }}>Key features</p>
          <ul style={{ marginTop: '8px', paddingLeft: '0', listStyle: 'none' }}>
            <li>• A form inspired by manta rays and modular robotics, blending fluid geometry with functional modularity</li>
            <li>• A floorless bay system and 2-part locking mechanism for rapid PIP deployment</li>
            <li>• LiDAR, cameras, and ultrasonic sensors with AI computer vision</li>
            <li>• SolidState battery for rapid and automated charging</li>
          </ul>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '24px' }}>
        <Image src="/images/raiaposter.png" alt="RAIA Poster" width={500} height={720} style={{ borderRadius: '12px', objectFit: 'cover', flexShrink: 0 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
          {[1, 2, 3].map((i) => (
            <Image key={i} src={`/images/raiarender${i}.png`} alt={`RAIA render ${i}`} width={600} height={230} style={{ borderRadius: '12px', objectFit: 'cover', width: '100%', height: '230px' }} />
          ))}
        </div>
      </div>

      <Image src="/images/raiaapp.png" alt="RAIA App" width={900} height={500} style={{ borderRadius: '12px', objectFit: 'cover', width: '100%' }} />

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Final Report:</h2>
        <EmbedFrame src="https://heyzine.com/flip-book/5126bc22c8.html" title="RAIA Report" />
      </div>
    </ProjectPageLayout>
  );
}
