import ProjectPageLayout from '@/components/ProjectPageLayout';
import EmbedFrame from '@/components/EmbedFrame';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'luva')!;

export default function LuvaPage() {
  return (
    <ProjectPageLayout title={p.title} subtitle={p.subtitle} meta={p.meta}>
      <div>
        <h2 className="text-xl font-bold mb-3">What is LUVA?</h2>
        <p className="text-base leading-relaxed">
          Architects and construction professionals currently spend months conversing and comparing louver products. Fameline APSG is a local supplier of performance louvers, and are seeking for an innovative solution to this inefficiency. LUVA is an intelligent web platform that simplifies the selection and specification of louvers through an AI-powered recommendation engine and an intuitive UI tailored to industry professionals.
        </p>
      </div>

      <p className="text-base leading-relaxed">
        We presented our project at Google Headquarters (Singapore), where we received insightful feedback from current Google employees and angel investors. Read more about this in the Luva Documentation site below.
      </p>

      <p className="text-base leading-relaxed">
        Our project was also featured on the Singapore University of Technology and Design website:{' '}
        <a href="https://www.sutd.edu.sg/dai/student-project-listing/fameline-luva/" target="_blank" rel="noopener noreferrer" className="text-[#144A91] underline">
          View Article
        </a>
      </p>

      <EmbedFrame src="https://www.youtube.com/embed/wN5BDG33sRw" height={450} title="LUVA Demo Video" />

      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <p className="font-medium text-base">LUVA Documentation Site</p>
          <a
            href="https://sites.google.com/view/famelineluva/home?authuser=0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-xl text-black font-medium hover:opacity-80 transition-opacity"
            style={{ background: 'rgba(16, 231, 159, 0.8)' }}
          >
            📄 View Site
          </a>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="font-medium text-base">LUVA Web App</p>
          <a
            href="https://luva.fameline-apsg.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-xl text-black font-medium hover:opacity-80 transition-opacity"
            style={{ background: 'rgba(16, 231, 159, 0.8)' }}
          >
            🚀 Launch App
          </a>
        </div>
      </div>
    </ProjectPageLayout>
  );
}
