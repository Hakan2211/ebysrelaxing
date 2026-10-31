'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const SCRIPT_ID = 'calendly-widget-script';
const STYLE_ID = 'calendly-widget-style';

function ensureCalendlyAssets() {
  if (typeof document === 'undefined') return;

  if (!document.getElementById(STYLE_ID)) {
    const link = document.createElement('link');
    link.id = STYLE_ID;
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);
  }

  if (!document.getElementById(SCRIPT_ID)) {
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }
}

const CalendlyEmbed = ({ url, children, className, size = 'xl' }) => {
  // Load the Calendly assets once per page, shared by all buttons.
  useEffect(() => {
    ensureCalendlyAssets();
  }, []);

  const handleClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      // Script not ready yet (slow network) – fall back to opening Calendly directly.
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Button
      type="button"
      variant="brand"
      size={size}
      className={cn(className)}
      onClick={handleClick}
    >
      {children || 'Termin buchen'}
    </Button>
  );
};

export default CalendlyEmbed;
