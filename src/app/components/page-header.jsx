import SectionHeading from './section-heading';

/** Soft, glowing title band at the top of every sub page. */
function PageHeader({ eyebrow, title, children }) {
  return (
    <div className="soft-glow relative">
      {/* Fade the glow into the page background instead of a hard edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--bg-background-color-4)]"
      />
      <div className="relative mx-auto max-w-3xl px-4 pb-12 pt-14 motion-safe:animate-fade-up md:pb-16 md:pt-20">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} align="left" />
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
}

export default PageHeader;
