import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Collapsible "Weiterlesen" block built on native <details> –
 * accessible, works without JS, and the text stays in the HTML for SEO.
 */
function ReadMore({ children, className }) {
  return (
    <details className={cn('group', className)}>
      <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-full py-1 font-medium text-[var(--bg-background-color-7)] transition-colors hover:text-slate-900 [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">Weiterlesen</span>
        <span className="hidden group-open:inline">Weniger anzeigen</span>
        <ChevronDown
          className="h-4 w-4 transition-transform duration-300 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="mt-4 space-y-4 motion-safe:animate-fade-up">
        {children}
      </div>
    </details>
  );
}

export default ReadMore;
