import ProjectPageLayout from '@/components/ProjectPageLayout';
import EmbedFrame from '@/components/EmbedFrame';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'erasmuszorg')!;

export default function ErasmusZorgPage() {
  return (
    <ProjectPageLayout title={p.title} subtitle="Robotics and AI for Nursing" meta={p.meta}>
      <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
        This project involved designing a nurse-centred human–robot interaction for on-demand ward supply delivery: a streamlined MyCo app, a hospital-friendly robot concept, and an end-to-end VR prototype that demonstrates ordering, retrieval and secure pickup. Through iterative user testing, CAD mockups and VR validation we refined UI, ergonomics and workflow to produce a pilot-ready HRI blueprint that prioritises safety, verification and minimal disruption. Hardware systems (automated storage, full SLAM/navigation, and a fabricated hand) were scoped as future work to be validated in physical prototyping and pilot trials.
      </p>

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Project Presentation:</h2>
        <EmbedFrame src="https://heyzine.com/flip-book/5d0989de8f.html" title="ErasmusZorg Presentation" />
        <div style={{ marginTop: '12px', textAlign: 'center' }}>
          <a href="https://heyzine.com/flip-book/5d0989de8f.html" target="_blank" rel="noopener noreferrer" style={{ color: '#144A91', textDecoration: 'underline', fontSize: '16px' }}>
            Open presentation in new tab
          </a>
        </div>
      </div>

      <div>
        <EmbedFrame src="https://heyzine.com/flip-book/b5bd863afd.html" title="ErasmusZorg Report" />
        <div style={{ marginTop: '12px', textAlign: 'center' }}>
          <a href="https://heyzine.com/flip-book/b5bd863afd.html" target="_blank" rel="noopener noreferrer" style={{ color: '#144A91', textDecoration: 'underline', fontSize: '16px' }}>
            Open report in new tab
          </a>
        </div>
      </div>
    </ProjectPageLayout>
  );
}
