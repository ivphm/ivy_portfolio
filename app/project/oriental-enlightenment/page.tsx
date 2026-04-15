import ProjectPageLayout from '@/components/ProjectPageLayout';
import EmbedFrame from '@/components/EmbedFrame';
import Image from 'next/image';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'oriental-enlightenment')!;

export default function OrientalEnlightenmentPage() {
  return (
    <ProjectPageLayout title="Oriental Enlightenment: Smart Lighting System" subtitle={p.subtitle} meta={p.meta}>
      <p className="text-base leading-relaxed">
        This project reimagines traditional lighting through the lens of cultural storytelling and smart sensing. Our team developed a context-aware lighting prototype that adapts to motion, ambient brightness, and proximity—wrapped in a symbolic lantern design rooted in oriental aesthetics. The system includes smart sensors, Arduino-based logic, and a focus on ambient user experience, crafted to evoke emotion and mindfulness in daily routines.
      </p>

      <div>
        <h2 className="text-xl mb-4">Project Demo Video:</h2>
        <EmbedFrame src="https://www.youtube.com/embed/S5VPaoTUohI" height={500} title="Oriental Enlightenment Demo" />
      </div>

      <div>
        <h2 className="text-xl mb-4">Supporting Documents:</h2>
        <Image src="/images/orientalposter.png" alt="Oriental Poster" width={900} height={500} className="w-full object-contain mb-6" />
        <EmbedFrame src="https://heyzine.com/flip-book/d05c4fc6e9.html" title="Flipbook 1" />
        <div className="mt-6">
          <EmbedFrame src="https://heyzine.com/flip-book/768f29dd10.html" title="Flipbook 2" />
        </div>
      </div>

      <div className="flex gap-4">
        <Image src="/images/oriental1.png" alt="Oriental 1" width={450} height={400} className="rounded-xl object-cover flex-1" />
        <Image src="/images/oriental2.png" alt="Oriental 2" width={450} height={400} className="rounded-xl object-cover flex-1" />
      </div>
    </ProjectPageLayout>
  );
}
