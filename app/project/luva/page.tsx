import ProjectPageLayout from '@/components/ProjectPageLayout';
import EmbedFrame from '@/components/EmbedFrame';
import LuvaCharacter from '@/components/LuvaCharacter';
import Image from 'next/image';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'luva')!;

export default function LuvaPage() {
  return (
    <ProjectPageLayout title={p.title} subtitle={p.subtitle} meta={p.meta}>
      <LuvaCharacter />

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>What is LUVA?</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
          Architects and construction professionals currently spend months conversing and comparing louver products. Fameline APSG is a local supplier of performance louvers, and are seeking for an innovative solution to this inefficiency. LUVA is an intelligent web platform that simplifies the selection and specification of louvers through an AI-powered recommendation engine and an intuitive UI tailored to industry professionals.
        </p>
      </div>

      <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
        We presented our project at Google Headquarters (Singapore), where we received insightful feedback from current Google employees and angel investors. Read more about this in the Luva Documentation site below.
      </p>

      <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
        Our project was also featured on the Singapore University of Technology and Design website:{' '}
        <a
          href="https://www.sutd.edu.sg/dai/student-project-listing/fameline-luva/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#144A91', textDecoration: 'underline' }}
        >
          View Article
        </a>
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <a
            href="https://sites.google.com/view/famelineluva/home?authuser=0"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '18px 32px',
              borderRadius: '10px',
              background: 'rgb(195, 244, 229)',
              color: '#000',
              fontWeight: 500,
              fontFamily: 'inherit',
              fontSize: '16px',
              textDecoration: 'none',
            }}
          >
            The Story Behind Luva
          </a>
        </div>
      </div>

      <EmbedFrame src="https://www.youtube.com/embed/wN5BDG33sRw" height={450} title="LUVA Demo Video" />

      {/* Fameline images */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
        {[1, 2, 3].map((i) => (
          <Image
            key={i}
            src={`/images/fameline${i}.png`}
            alt={`LUVA showcase ${i}`}
            width={300}
            height={200}
            style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }}
          />
        ))}
      </div>
    </ProjectPageLayout>
  );
}
