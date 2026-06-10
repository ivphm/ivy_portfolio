import NextImage, { ImageProps } from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function AppImage({ src, ...props }: ImageProps) {
  const resolvedSrc =
    typeof src === 'string' && src.startsWith('/')
      ? `${basePath}${src}`
      : src;
  return <NextImage src={resolvedSrc} {...props} />;
}
