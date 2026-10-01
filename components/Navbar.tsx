'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import T from './T';

const COMPANY_LINKS = [
  { href: '/nosotros', key: 'nav.who' as const },
  { href: '/gerencia', key: 'nav.management' as const },
];

const NAV_LINKS = [
  { href: '/operaciones', key: 'nav.operations' as const },
  { href: '/servicios', key: 'nav.services' as const },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { lang, toggle } = useLanguage();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const isCompanyActive = COMPANY_LINKS.some((link) => pathname === link.href);

  const closeMenus = () => {
    setMenuOpen(false);
    setCompanyOpen(false);
  };

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) closeMenus();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCompanyOpen(false);
    };
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const navClassName = ['navbar', !isHome ? 'solid' : '', isHome && scrolled ? 'scrolled' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={navClassName} id="navbar" ref={navRef}>
      <div className="nav-container">
        <Link href="/" className="nav-logo" onClick={closeMenus}>
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
          <li className={`nav-dropdown${companyOpen ? ' open' : ''}`}>
            <button
              type="button"
              className={`nav-link nav-dropdown-toggle${isCompanyActive ? ' active' : ''}`}
              aria-haspopup="true"
              aria-expanded={companyOpen}
              aria-controls="companyMenu"
              onClick={() => setCompanyOpen((v) => !v)}
            >
              <T k="nav.company" />
              <svg className="nav-dropdown-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <ul className="nav-dropdown-menu" id="companyMenu">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-dropdown-link${pathname === link.href ? ' active' : ''}`}
                    onClick={closeMenus}
                  >
                    <T k={link.key} />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link${pathname === link.href ? ' active' : ''}`}
                onClick={closeMenus}
              >
                <T k={link.key} />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contacto"
              className={`nav-link btn-red${pathname === '/contacto' ? ' active' : ''}`}
              onClick={closeMenus}
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
