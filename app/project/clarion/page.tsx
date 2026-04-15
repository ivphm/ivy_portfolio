import ProjectPageLayout from '@/components/ProjectPageLayout';
import EmbedFrame from '@/components/EmbedFrame';
import Image from 'next/image';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'clarion')!;

export default function ClarionPage() {
  return (
    <ProjectPageLayout title={p.title} subtitle={p.subtitle} meta={p.meta}>
      <p className="text-base leading-relaxed">
        This project explores a subtle, jewelry-inspired neck microphone and speaker designed to help soft-spoken individuals—like myself—amplify their voice with confidence. Rooted in personal experience, the design blends wearable aesthetics with assistive technology to create a non-stigmatising, everyday object. Through iterative prototyping in PLA, TPU, and resin, along with parametric modelling in Rhino and Grasshopper, the project investigates comfort, fit, and materiality at wearable scale. The outcome demonstrates how human-centred, empathy-driven design can reframe assistive devices as elegant and empowering products.
      </p>

      <div className="flex gap-4">
        <Image src="/images/clarion1.png" alt="Clarion 1" width={450} height={600} className="rounded-xl object-cover flex-1" style={{ height: '600px' }} />
        <Image src="/images/clarion2.png" alt="Clarion 2" width={450} height={600} className="rounded-xl object-cover flex-1" style={{ height: '600px' }} />
      </div>

      <div>
        <h2 className="text-xl mb-4">Project Booklet:</h2>
        <EmbedFrame src="https://simplebooklet.com/clarion" title="Clarion Booklet" />
        <div className="mt-3 text-center">
          <a href="https://simplebooklet.com/clarion" target="_blank" rel="noopener noreferrer" className="text-[#144A91] underline text-base">
            Open booklet in new tab
          </a>
        </div>
      </div>
    </ProjectPageLayout>
  );
}
