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
  'Nosotros — Silas Seve7n Holdings Corp (SSHC). Empresa con sede en EE. UU. comprometida con la excelencia en ingeniería industrial, soluciones químicas de alto rendimiento y componentes de potencia eléctrica. Certificada ASME y ASTM.';

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

      {/* Quality Policy */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-header">
            <T as="div" className="section-label" k="qual.label" />
            <T as="h2" className="section-title on-light" k="qual.title" />
            <T as="p" className="section-desc on-light" k="qual.desc" />
          </div>

          <FadeUp className="quality-grid">
            {(['qual.item1', 'qual.item2', 'qual.item3', 'qual.item4', 'qual.item5', 'qual.item6'] as const).map((key) => (
              <div className="quality-item" key={key}>
                <div className="quality-check">{CHECK_ICON}</div>
                <T as="p" k={key} />
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section diff-dark-section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="section-header">
            <T as="div" className="section-label" k="diff.label" />
            <T as="h2" className="section-title on-dark" k="diff.title" />
            <T as="p" className="section-desc on-dark" k="diff.desc" />
          </div>

          <FadeUp className="diff-grid">
            <div className="diff-card">
              <div className="diff-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <T as="h4" k="diff.cert-title" />
              <T as="p" k="diff.cert-desc" />
            </div>

            <div className="diff-card">
              <div className="diff-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <T as="h4" k="diff.intl-title" />
              <T as="p" k="diff.intl-desc" />
            </div>

            <div className="diff-card">
              <div className="diff-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x={2} y={3} width={20} height={14} rx={2} />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <T as="h4" k="diff.intgr-title" />
              <T as="p" k="diff.intgr-desc" />
            </div>

            <div className="diff-card">
              <div className="diff-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <T as="h4" k="diff.elec-title" />
              <T as="p" k="diff.elec-desc" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Certifications */}
      <section className="certs-grid-section">
        <div className="container">
          <div className="section-header">
            <T as="div" className="section-label" k="cert.label" />
            <T as="h2" className="section-title on-light" k="cert.title" />
            <T as="p" className="section-desc on-light" k="cert.desc" />
          </div>
          <FadeUp className="certs-grid">
            <div className="cert-box">
              <T as="div" className="cert-box-name" k="cert.asme-name" />
              <T as="p" className="cert-box-desc" k="cert.asme-desc" />
            </div>
            <div className="cert-box">
              <T as="div" className="cert-box-name" k="cert.astm-name" />
              <T as="p" className="cert-box-desc" k="cert.astm-desc" />
            </div>
            <div className="cert-box">
              <T as="div" className="cert-box-name" k="cert.cov-name" />
              <T as="p" className="cert-box-desc" k="cert.cov-desc" />
            </div>
            <div className="cert-box">
              <T as="div" className="cert-box-name" k="cert.fon-name" />
              <T as="p" className="cert-box-desc" k="cert.fon-desc" />
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
