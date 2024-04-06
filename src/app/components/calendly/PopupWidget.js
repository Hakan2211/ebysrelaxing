'use client';

import React, { useEffect } from 'react';

const CalendlyEmbed = ({ url, children }) => {
  useEffect(() => {
    // Dynamically load the Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Dynamically load the Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    // link.backgroundColor = '#e1d5bf';
    // link.textColor = '#6a604d';
    // link.primaryColor = '#fff7f2';
    // link.type = 'text/css';
    link.rel = 'stylesheet';

    document.head.appendChild(link);

    return () => {
      // Cleanup the script and style
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const handleCalendlyPopup = () => {
    // Ensure Calendly is loaded
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: url,
      });
    }
  };

  return (
    <div
      className="text-black group-hover:text-white text-xl duration-300 transition-colors"
      onClick={handleCalendlyPopup}
      style={{ cursor: 'pointer' }}
    >
      {children || 'Termin buchen'}
    </div>
  );
};

export default CalendlyEmbed;

// <!-- Calendly Inline-Widget Beginn -->
// <div class="calendly-inline-widget" data-url="https://calendly.com/ebysrelaxing/business-yoga?background_color=e1d5bf&text_color=6a604d&primary_color=fff7f2" style="min-width:320px;height:700px;"></div>
// <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
// <!-- Calendly Inline-Widget Ende -->
