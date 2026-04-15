import ProjectPageLayout from '@/components/ProjectPageLayout';
import EmbedFrame from '@/components/EmbedFrame';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'erasmuszorg')!;

export default function ErasmusZorgPage() {
  return (
    <ProjectPageLayout title={p.title} subtitle="Robotics and AI for Nursing" meta={p.meta}>
      <p className="text-base leading-relaxed">
        This project involved designing a nurse-centred human–robot interaction for on-demand ward supply delivery: a streamlined MyCo app, a hospital-friendly robot concept, and an end-to-end VR prototype that demonstrates ordering, retrieval and secure pickup. Through iterative user testing, CAD mockups and VR validation we refined UI, ergonomics and workflow to produce a pilot-ready HRI blueprint that prioritises safety, verification and minimal disruption. Hardware systems (automated storage, full SLAM/navigation, and a fabricated hand) were scoped as future work to be validated in physical prototyping and pilot trials.
      </p>

      <div>
        <h2 className="text-xl mb-4">Project Presentation:</h2>
        <EmbedFrame src="https://simplebooklet.com/appfinalpresentation" title="ErasmusZorg Presentation" />
        <div className="mt-3 text-center">
          <a href="https://simplebooklet.com/appfinalpresentation" target="_blank" rel="noopener noreferrer" className="text-[#144A91] underline text-base">
            Open presentation in new tab
          </a>
        </div>
      </div>

      <div>
        <EmbedFrame src="https://simplebooklet.com/appgroup7report" title="ErasmusZorg Report" />
        <div className="mt-3 text-center">
          <a href="https://simplebooklet.com/appgroup7report" target="_blank" rel="noopener noreferrer" className="text-[#144A91] underline text-base">
            Open report in new tab
          </a>
        </div>
      </div>
    </ProjectPageLayout>
  );
}
