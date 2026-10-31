import { cn } from '@/lib/utils';

/**
 * Soft wave between two sections.
 * `from` = colour of the section above, `to` = colour of the section below.
 */
function Wave({ from, to, flip = false, className }) {
  return (
    <div
      aria-hidden="true"
      className={cn('-mb-px leading-[0]', className)}
      style={{ background: from }}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={cn('block h-10 w-full md:h-20', flip && '-scale-x-100')}
      >
        <path
          fill={to}
          d="M0,52 C180,92 360,92 560,62 C760,32 900,10 1100,30 C1260,46 1360,70 1440,58 L1440,90 L0,90 Z"
        />
      </svg>
    </div>
  );
}

export default Wave;
