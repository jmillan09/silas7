'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import T from './T';

const NAV_LINKS = [
  { href: '/', key: 'nav.home' as const },
  { href: '/nosotros', key: 'nav.about' as const },
  { href: '/servicios', key: 'nav.services' as const },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { lang, toggle } = useLanguage();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const navClassName = ['navbar', !isHome ? 'solid' : '', isHome && scrolled ? 'scrolled' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={navClassName} id="navbar" ref={navRef}>
      <div className="nav-container">
        <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <img
            src="/Images/Logo-recortado.png"
            alt="Silas Seve7n Holdings Corp"
            className="logo-img"
            onError={(e) => {
              const img = e.currentTarget;
              img.style.display = 'none';
              const fallback = img.nextElementSibling as HTMLElement | null;
              if (fallback) fallback.style.display = 'block';
            }}
          />
          <span className="logo-text-fallback" style={{ display: 'none' }}>
            SILAS SEVE7N
          </span>
        </Link>

        <button
          className={`nav-toggle${menuOpen ? ' active' : ''}`}
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu${menuOpen ? ' open' : ''}`} id="navMenu">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link${pathname === link.href ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                <T k={link.key} />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contacto"
              className={`nav-link btn-red${pathname === '/contacto' ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <T k="nav.contact" />
            </Link>
          </li>
        </ul>

        <button className="lang-toggle" aria-label="Switch language / Cambiar idioma" onClick={toggle}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span>{lang === 'es' ? 'EN' : 'ES'}</span>
        </button>
      </div>
    </nav>
  );
}
