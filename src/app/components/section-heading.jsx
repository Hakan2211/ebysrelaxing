import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Ornament({ className }) {
  return (
    <div
      aria-hidden="true"
      className={cn('flex items-center gap-3', className)}
    >
      <span className="h-px w-10 bg-[var(--bg-background-color-6)]" />
      <Image
        src="/transitionflower.jpg"
        alt=""
        width={24}
        height={24}
        className="rounded-full"
      />
      <span className="h-px w-10 bg-[var(--bg-background-color-6)]" />
    </div>
  );
}

/**
 * Eyebrow label + serif title (+ optional intro text), used for every section
 * and page header so typography stays consistent.
 */
function SectionHeading({
  eyebrow,
  title,
  as: Tag = 'h2',
  align = 'center',
  ornament = false,
  id,
  className,
  children,
}) {
  const center = align === 'center';
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        center ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {ornament && <Ornament />}
      {eyebrow && (
        <p className="font-eyebrow text-sm uppercase tracking-[0.25em] text-[var(--bg-background-color-7)] md:text-base">
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className={cn(
          'text-balance font-display font-light leading-tight text-slate-900',
          Tag === 'h1'
            ? 'text-4xl md:text-5xl lg:text-6xl'
            : 'text-3xl md:text-4xl lg:text-5xl',
          center && 'mx-auto max-w-3xl'
        )}
      >
        {title}
      </Tag>
      {children && (
        <div
          className={cn(
            'max-w-prose text-lg leading-relaxed text-slate-700 md:text-xl',
            center && 'mx-auto'
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default SectionHeading;
