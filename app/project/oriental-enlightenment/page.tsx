import ProjectPageLayout from '@/components/ProjectPageLayout';
import EmbedFrame from '@/components/EmbedFrame';
import Image from 'next/image';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'oriental-enlightenment')!;

export default function OrientalEnlightenmentPage() {
  return (
    <ProjectPageLayout title="Oriental Enlightenment: Smart Lighting System" subtitle={p.subtitle} meta={p.meta}>
      <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
        This project reimagines traditional lighting through the lens of cultural storytelling and smart sensing. Our team developed a context-aware lighting prototype that adapts to motion, ambient brightness, and proximity—wrapped in a symbolic lantern design rooted in oriental aesthetics. The system includes smart sensors, Arduino-based logic, and a focus on ambient user experience, crafted to evoke emotion and mindfulness in daily routines.
      </p>

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Project Demo Video:</h2>
        <EmbedFrame src="https://www.youtube.com/embed/S5VPaoTUohI" height={500} title="Oriental Enlightenment Demo" />
      </div>

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Supporting Documents:</h2>
        <Image src="/images/orientalposter.png" alt="Oriental Poster" width={900} height={500} style={{ width: '100%', objectFit: 'contain', marginBottom: '24px' }} />
        <EmbedFrame src="https://heyzine.com/flip-book/d05c4fc6e9.html" title="Flipbook 1" />
        <div style={{ marginTop: '24px' }}>
          <EmbedFrame src="https://heyzine.com/flip-book/768f29dd10.html" title="Flipbook 2" />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '16px' }}>
        <Image src="/images/oriental1.png" alt="Oriental 1" width={450} height={400} style={{ borderRadius: '12px', objectFit: 'cover', flex: 1 }} />
        <Image src="/images/oriental2.png" alt="Oriental 2" width={450} height={400} style={{ borderRadius: '12px', objectFit: 'cover', flex: 1 }} />
      </div>
    </ProjectPageLayout>
  );
}
