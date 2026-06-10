import type { MetaItem } from '@/data/projects';

interface MetaGridProps {
  items: MetaItem[];
}

export default function MetaGrid({ items }: MetaGridProps) {
  if (!items.length) return null;
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '24px 32px',
      }}
    >
      {items.map((item) => (
        <div key={item.label}>
          <p style={{ fontWeight: 600, marginBottom: '4px' }}>{item.label}:</p>
          <p style={{ fontSize: '14px', lineHeight: '1.5' }}>{item.value}</p>
        </div>
      ))}
    </div>
  );
}
