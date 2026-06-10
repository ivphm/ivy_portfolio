import ProjectPageLayout from '@/components/ProjectPageLayout';
import HorizontalScroller from '@/components/HorizontalScroller';
import Image from 'next/image';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'research-illustrations')!;

const researchImages = Array.from({ length: 4 }, (_, i) => `/images/research_${i + 1}.png`);
const logoImages = ['/images/researchlogo1.png', '/images/researchlogo2.png'];

export default function ResearchIllustrationsPage() {
  return (
    <ProjectPageLayout title={p.title} subtitle={p.subtitle} meta={p.meta}>
      <p style={{ fontSize: '16px', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{`This project features a collaboration with SUTD professors and researchers in illustrating various complex scientific concepts in an easily digestible format.`}</p>

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>Ballistic Electrons in Graphene:</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
          The study led by researchers from the National University of Singapore (NUS) and Singapore University of Technology and Design (SUTD), explores how ballistic electrons in bilayer graphene (electrons that move through a medium with minimal scattering) generate strong nonlinear optical effects at terahertz frequencies. By leveraging Fabry–Pérot–like electron resonances and custom-fabricated antenna structures, the researchers observed second- and third-harmonic generation, marking a milestone in high-speed, low-power THz device engineering.
        </p>
        <a href="https://www.asiaresearchnews.com/content/ballistic-electrons-chart-new-course-next-gen-terahertz-devices" target="_blank" rel="noopener noreferrer" style={{ display: 'block', cursor: 'pointer', borderRadius: '16px', overflow: 'hidden', marginBottom: '12px' }}>
          <Image src="/images/project11.png" alt="Research Illustration" width={900} height={500} style={{ width: '100%', objectFit: 'cover', borderRadius: '16px' }} />
        </a>
        <div style={{ textAlign: 'center' }}>
          <a href="https://www.asiaresearchnews.com/content/ballistic-electrons-chart-new-course-next-gen-terahertz-devices" target="_blank" rel="noopener noreferrer" style={{ color: '#144A91', textDecoration: 'underline', fontSize: '16px' }}>
            Read the article on Asia Research News
          </a>
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Other Quantum-Nano Photonic Illustrations:</h2>
        <HorizontalScroller images={researchImages} height={500} aspectRatio="4/3" />
        <div style={{ marginTop: '12px', textAlign: 'center' }}>
          <a href="https://www.eurekalert.org/news-releases/1114142" target="_blank" rel="noopener noreferrer" style={{ color: '#144A91', textDecoration: 'underline', fontSize: '16px' }}>
            Read the article on EurekAlert!
          </a>
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Logo Design for W.Labs</h2>
        <HorizontalScroller images={logoImages} height={500} aspectRatio="4/3" fit="contain" />
      </div>
    </ProjectPageLayout>
  );
}
