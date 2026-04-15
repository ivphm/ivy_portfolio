import type { MetaItem } from '@/data/projects';

interface MetaGridProps {
  items: MetaItem[];
}

export default function MetaGrid({ items }: MetaGridProps) {
  if (!items.length) return null;
  return (
    <div className="flex flex-wrap gap-8">
      {items.map((item) => (
        <div key={item.label} className="w-48">
          <p className="font-bold">{item.label}:</p>
          <p className="mt-1 text-sm leading-relaxed">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
