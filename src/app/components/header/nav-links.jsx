'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { aboreto } from '@/app/fonts/fonts';
import Instagram from '../footer/instagram';

const navLinks = [
  { name: 'Leistungen', href: '/leistungen' },
  { name: 'About', href: '/about' },
  { name: 'Kontakt', href: '/kontakt' },
];

// Shared easing for every menu animation: fast start, soft landing.
const EASE = 'ease-out-expo';

function BurgerIcon({ open }) {
  const bar = `absolute left-0 block h-0.5 w-full rounded-full bg-slate-800 transition-all duration-500 ${EASE} motion-reduce:transition-none`;
  return (
    <span aria-hidden="true" className="relative block h-4 w-6">
      <span className={clsx(bar, open ? 'top-[7px] rotate-45' : 'top-0')} />
      <span
        className={clsx(
          bar,
          'top-[7px]',
          open ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
        )}
      />
      <span
        className={clsx(bar, open ? 'top-[7px] -rotate-45' : 'top-[14px]')}
      />
    </span>
  );
}

function MobileMenu({ open, onClose, pathname }) {
  const panelRef = useRef(null);

  // Keep the closed panel out of the tab order and away from screen readers.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    if (open) {
      panel.removeAttribute('inert');
      // Wait until the panel is no longer visibility:hidden, else focus() is ignored.
      const t = setTimeout(
        () => panel.querySelector('a')?.focus({ preventScroll: true }),
        50
      );
      return () => clearTimeout(t);
    }
    panel.setAttribute('inert', '');
  }, [open]);

  // Stagger: on open each item enters a bit later; on close all leave at once.
  const item = (i) => ({
    className: clsx(
      `transition-[opacity,transform] ${EASE} motion-reduce:transition-none`,
      open
        ? 'translate-y-0 opacity-100 duration-700'
        : 'translate-y-6 opacity-0 duration-200'
    ),
    style: { transitionDelay: open ? `${180 + i * 70}ms` : '0ms' },
  });

  return (
    <div
      ref={panelRef}
      id="mobile-menu"
      aria-label="Menü"
      className={clsx(
        `fixed inset-0 z-20 flex flex-col bg-[var(--bg-background-color-1)] pt-16 transition-[clip-path,visibility] duration-700 ${EASE} motion-reduce:transition-none md:hidden`,
        open
          ? 'visible [clip-path:inset(0_0_0_0)]'
          : 'invisible [clip-path:inset(0_0_100%_0)] delay-150'
      )}
    >
      {/* Soft decorative glow */}
      <div
        aria-hidden="true"
        className={clsx(
          `pointer-events-none absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-[var(--bg-background-color-6)] blur-3xl transition-opacity duration-1000 ${EASE}`,
          open ? 'opacity-30' : 'opacity-0'
        )}
      />

      <nav
        aria-label="Hauptnavigation mobil"
        className="relative flex flex-1 flex-col justify-center px-8"
      >
        <ul className="space-y-2">
          {navLinks.map((link, i) => {
            const active = pathname === link.href;
            return (
              <li key={link.href} {...item(i)}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  aria-current={active ? 'page' : undefined}
                  className={clsx(
                    aboreto.className,
                    'group flex items-baseline gap-4 py-3 text-4xl tracking-wider text-slate-800'
                  )}
                >
                  <span className="w-8 font-sans text-sm tabular-nums text-[var(--bg-background-color-7)]">
                    0{i + 1}
                  </span>
                  <span className="relative">
                    {link.name}
                    <span
                      className={clsx(
                        `absolute -bottom-1 left-0 h-0.5 bg-[var(--bg-background-color-6)] transition-all duration-500 ${EASE}`,
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      )}
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div {...item(navLinks.length)}>
          <Link
            href="/#preise"
            onClick={onClose}
            className="mt-10 inline-flex h-14 w-full items-center justify-center rounded-full bg-[var(--bg-background-color-6)] text-lg font-bold tracking-wide text-slate-900 shadow-sm transition-colors duration-300 hover:bg-[var(--bg-background-color-7)] hover:text-slate-100"
          >
            Termin buchen
          </Link>
        </div>
      </nav>

      <div
        style={item(navLinks.length + 1).style}
        className={clsx(
          item(navLinks.length + 1).className,
          'relative flex items-center justify-between border-t border-[var(--bg-background-color-5)] px-8 py-6 text-base text-slate-700'
        )}
      >
        <a
          href="mailto:ebysrelaxing@gmail.com"
          className="transition-colors hover:text-slate-950"
        >
          ebysrelaxing@gmail.com
        </a>
        <a
          href="https://www.instagram.com/ebysrelaxing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--bg-background-color-6)] transition-colors hover:bg-[var(--bg-background-color-6)]"
        >
          <Instagram className="h-5 w-5 fill-current" />
        </a>
      </div>
    </div>
  );
}

function NavLinks() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => setMounted(true), []);

  // Close on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // While open: Escape closes, page behind doesn't scroll, desktop resize closes.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const mq = window.matchMedia('(min-width: 768px)');
    const onResize = (e) => e.matches && setOpen(false);
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;

    html.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onResize);
    return () => {
      html.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onResize);
    };
  }, [open]);

  const linkClass = (href) =>
    clsx(
      'rounded-md px-3 py-2 font-medium text-slate-800 underline-offset-8 decoration-2 transition-colors hover:text-slate-950 hover:underline decoration-[var(--bg-background-color-6)]',
      pathname === href && 'text-slate-950 underline'
    );

  return (
    <nav aria-label="Hauptnavigation">
      {/* Desktop */}
      <ul className="hidden items-center gap-2 text-xl md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={linkClass(link.href)}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <button
        ref={buttonRef}
        type="button"
        className="-mr-2 flex h-11 w-11 items-center justify-center rounded-md md:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
        onClick={() => setOpen((v) => !v)}
      >
        <BurgerIcon open={open} />
      </button>

      {/* Portal to <body>: the header's backdrop-blur would otherwise trap
          the fixed panel inside the header box. */}
      {mounted &&
        createPortal(
          <MobileMenu
            open={open}
            onClose={() => setOpen(false)}
            pathname={pathname}
          />,
          document.body
        )}
    </nav>
  );
}

export default NavLinks;
