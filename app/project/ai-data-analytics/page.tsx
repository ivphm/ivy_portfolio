import ProjectPageLayout from '@/components/ProjectPageLayout';
import EmbedFrame from '@/components/EmbedFrame';
import { projects } from '@/data/projects';

const p = projects.find((x) => x.slug === 'ai-data-analytics')!;

export default function AiDataAnalyticsPage() {
  return (
    <ProjectPageLayout title="AI Data Analytics for Design Opportunities" subtitle={p.subtitle} meta={p.meta}>
      <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
        This project investigated online reviews of gaming chairs using AI-based data analytics to uncover latent user needs and design opportunities. By clustering user sentiments and tagging recurring pain points, we translated insights into tangible design suggestions for improving comfort, support, and functionality.
      </p>

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Project Report:</h2>
        <EmbedFrame src="https://drive.google.com/file/d/1oAj3sCltl3ZjaT5Ls9ZXM-DpKvzraGV8/preview" title="AI Data Analytics Report" />
      </div>
    </ProjectPageLayout>
  );
}
