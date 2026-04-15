'use client';

interface EmbedFrameProps {
  src: string;
  height?: number;
  title?: string;
}

export default function EmbedFrame({ src, height = 600, title = 'embed' }: EmbedFrameProps) {
  return (
    <div className="w-full rounded-xl overflow-hidden" style={{ height }}>
      <iframe
        src={src}
        title={title}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        allowFullScreen
      />
    </div>
  );
}
