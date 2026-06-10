import Image from '@/components/AppImage';

interface ImageHeaderProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export default function ImageHeader({ src, alt = '', width = 400, height = 200 }: ImageHeaderProps) {
  return (
    <div className="flex justify-center">
      <Image src={src} alt={alt} width={width} height={height} className="object-contain" />
    </div>
  );
}
