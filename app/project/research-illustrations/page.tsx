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
      <p className="text-base leading-relaxed whitespace-pre-line">{`This project features a collaboration with SUTD professors and researchers in illustrating various complex scientific concepts in an easily digestible format.

*Note this project is ongoing.`}</p>

      <div>
        <h2 className="text-xl mb-3">Ballistic Electrons in Graphene:</h2>
        <p className="text-base leading-relaxed mb-6">
          The study led by researchers from the National University of Singapore (NUS) and Singapore University of Technology and Design (SUTD), explores how ballistic electrons in bilayer graphene (electrons that move through a medium with minimal scattering) generate strong nonlinear optical effects at terahertz frequencies. By leveraging Fabry–Pérot–like electron resonances and custom-fabricated antenna structures, the researchers observed second- and third-harmonic generation, marking a milestone in high-speed, low-power THz device engineering.
        </p>
        <a href="https://www.asiaresearchnews.com/content/ballistic-electrons-chart-new-course-next-gen-terahertz-devices" target="_blank" rel="noopener noreferrer" className="block cursor-pointer rounded-2xl overflow-hidden mb-3">
          <Image src="/images/project11.png" alt="Research Illustration" width={900} height={500} className="w-full object-cover rounded-2xl hover:opacity-90 transition-opacity" />
        </a>
        <div className="text-center">
          <a href="https://www.asiaresearchnews.com/content/ballistic-electrons-chart-new-course-next-gen-terahertz-devices" target="_blank" rel="noopener noreferrer" className="text-[#144A91] underline text-base">
            Read the article on Asia Research News
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-xl mb-4">Other Quantum-Nano Photonic Illustrations:</h2>
        <HorizontalScroller images={researchImages} height={500} aspectRatio="4/3" />
        <div className="mt-3 text-center">
          <a href="https://www.eurekalert.org/news-releases/1114142" target="_blank" rel="noopener noreferrer" className="text-[#144A91] underline text-base">
            Read the article on EurekAlert!
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-xl mb-4">Logo Design for W.Labs</h2>
        <HorizontalScroller images={logoImages} height={500} aspectRatio="4/3" />
      </div>
    </ProjectPageLayout>
  );
}
