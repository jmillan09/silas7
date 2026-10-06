import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeUp from '@/components/FadeUp';
import T from '@/components/T';
import AboutPhoto from '@/components/AboutPhoto';

const TITLE = 'Nosotros';
const FULL_TITLE = 'Nosotros — Silas Seve7n Holdings Corp';
const DESCRIPTION =
  'Nosotros — Silas Seve7n Holdings Corp (SSHC). Empresa estadounidense con sede en Casper, Wyoming, que conecta a productores venezolanos calificados de minerales críticos y tierras raras con fabricantes y usuarios finales en EE. UU.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: FULL_TITLE, description: DESCRIPTION, url: '/nosotros' },
  twitter: { title: FULL_TITLE, description: DESCRIPTION },
};

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function NosotrosPage() {
  return (
    <>
      <Navbar />

      {/* Page header */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">
              <T k="nav.home" />
            </Link>
            <span>/</span>
            <T as="span" k="nav.company" />
            <span>/</span>
            <T as="span" k="nos.breadcrumb" />
          </div>
          <T as="h1" k="nos.ph-title" />
          <T as="p" k="nos.ph-desc" />
        </div>
      </section>

      {/* About intro */}
      <section className="about-section section">
        <div className="container">
          <div className="about-grid">
            <FadeUp className="about-image-col">
              <AboutPhoto src="/Images/trabajadores/gm1.png" alt="Silas Seve7n Holdings Corp — Equipo industrial" />
            </FadeUp>

            <FadeUp className="about-content" delay={0.15}>
              <T as="div" className="section-label" style={{ color: 'var(--red)' }} k="nos.history-label" />
              <T as="h2" k="nos.history-title" />
              <T as="p" className="lead" k="nos.p1" />
              <T as="p" className="lead" style={{ marginTop: 16 }} k="nos.p2" />

              <div className="about-highlights" style={{ marginTop: 32 }}>
                <div className="about-highlight-item">
                  <div className="about-check">{CHECK_ICON}</div>
                  <div>
                    <T as="strong" k="nos.ic1-title" />
                    <T as="p" k="nos.ic1-desc" />
                  </div>
                </div>
                <div className="about-highlight-item">
                  <div className="about-check">{CHECK_ICON}</div>
                  <div>
                    <T as="strong" k="nos.ic2-title" />
                    <T as="p" k="nos.ic2-desc" />
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section mv-dark-section" style={{ background: 'linear-gradient(135deg,var(--dark) 0%,var(--navy) 100%)' }}>
        <div className="container">
          <div className="section-header">
            <T as="div" className="section-label" k="mv.label" />
            <T as="h2" className="section-title on-dark" k="mv.title" />
          </div>

          <div className="mv-grid">
            <FadeUp className="mv-card mv-card-vision">
              <div className="mv-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <T as="h3" k="mv.vision-title" />
              <T as="p" k="mv.vision-body" />
            </FadeUp>

            <FadeUp className="mv-card mv-card-mission" delay={0.12}>
              <div className="mv-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <T as="h3" k="mv.mission-title" />
              <T as="p" k="mv.mission-body" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why this matters for America */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-header">
            <T as="div" className="section-label" k="why.label" />
            <T as="h2" className="section-title on-light" k="why.title" />
            <T as="p" className="section-desc on-light" k="why.desc" />
          </div>

          <FadeUp className="diff-grid">
            <div className="diff-card">
              <div className="diff-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                  <path d="M17 18h1M12 18h1M7 18h1" />
                </svg>
              </div>
              <T as="h4" k="why.w1-title" />
              <T as="p" k="why.w1-desc" />
            </div>

            <div className="diff-card">
              <div className="diff-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 6l-9.5 9.5-5-5L1 18" />
                  <path d="M17 6h6v6" />
                </svg>
              </div>
              <T as="h4" k="why.w2-title" />
              <T as="p" k="why.w2-desc" />
            </div>

            <div className="diff-card">
              <div className="diff-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <T as="h4" k="why.w3-title" />
              <T as="p" k="why.w3-desc" />
            </div>

            <div className="diff-card">
              <div className="diff-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <T as="h4" k="why.w4-title" />
              <T as="p" k="why.w4-desc" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <T as="h2" k="cta.nos.title" />
            <T as="p" k="cta.nos.desc" />
            <div className="cta-actions">
              <Link href="/contacto" className="btn btn-red btn-lg">
                <T k="cta.nos.btn1" />
              </Link>
              <Link href="/servicios" className="btn btn-outline-white btn-lg">
                <T k="cta.nos.btn2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
