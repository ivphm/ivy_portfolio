import ProjectPageLayout from '@/components/ProjectPageLayout';
import EmbedFrame from '@/components/EmbedFrame';
import Image from '@/components/AppImage';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'clarion')!;

export default function ClarionPage() {
  return (
    <ProjectPageLayout title={p.title} subtitle={p.subtitle} meta={p.meta}>
      <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
        This project explores a subtle, jewelry-inspired neck microphone and speaker designed to help soft-spoken individuals—like myself—amplify their voice with confidence. Rooted in personal experience, the design blends wearable aesthetics with assistive technology to create a non-stigmatising, everyday object. Through iterative prototyping in PLA, TPU, and resin, along with parametric modelling in Rhino and Grasshopper, the project investigates comfort, fit, and materiality at wearable scale. The outcome demonstrates how human-centred, empathy-driven design can reframe assistive devices as elegant and empowering products.
      </p>

      <div style={{ display: 'flex', gap: '16px' }}>
        <Image src="/images/clarion1.png" alt="Clarion 1" width={450} height={600} style={{ borderRadius: '12px', objectFit: 'cover', flex: 1, height: '600px' }} />
        <Image src="/images/clarion2.png" alt="Clarion 2" width={450} height={600} style={{ borderRadius: '12px', objectFit: 'cover', flex: 1, height: '600px' }} />
      </div>

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Project Booklet:</h2>
        <EmbedFrame src="https://simplebooklet.com/clarion" title="Clarion Booklet" />
        <div style={{ marginTop: '12px', textAlign: 'center' }}>
          <a href="https://simplebooklet.com/clarion" target="_blank" rel="noopener noreferrer" style={{ color: '#144A91', textDecoration: 'underline', fontSize: '16px' }}>
            Open booklet in new tab
          </a>
        </div>
      </div>
    </ProjectPageLayout>
  );
}
