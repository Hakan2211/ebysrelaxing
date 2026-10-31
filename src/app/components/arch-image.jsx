import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * Photo in an arch frame (rounded top), optionally with an offset outline arch
 * behind it for depth.
 */
function ArchImage({
  src,
  alt,
  sizes,
  priority = false,
  outline = true,
  outlineClassName = 'border-[var(--bg-background-color-6)]',
  aspect = 'aspect-[3/4]',
  className,
  imageClassName,
}) {
  return (
    <div className={cn('relative', className)}>
      {outline && (
        <div
          aria-hidden="true"
          className={cn(
            'absolute inset-0 translate-x-3 translate-y-3 rounded-t-full border md:translate-x-4 md:translate-y-4',
            outlineClassName
          )}
        />
      )}
      <div
        className={cn(
          'relative overflow-hidden rounded-t-full ring-1 ring-[rgb(169_147_106_/_0.35)] shadow-[0_20px_50px_-20px_rgb(106_96_77_/_0.45)]',
          aspect
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn('object-cover', imageClassName)}
        />
      </div>
    </div>
  );
}

export default ArchImage;
