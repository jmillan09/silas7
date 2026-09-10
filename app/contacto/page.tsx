import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeUp from '@/components/FadeUp';
import T from '@/components/T';

const TITLE = 'Contacto';
const FULL_TITLE = 'Contacto — Silas Seve7n Holdings Corp';
const DESCRIPTION =
  'Contacto — Silas Seve7n Holdings Corp (SSHC). Comuníquese con nuestro equipo técnico especializado para asesoramiento y propuestas de proyectos industriales. Sede en Casper, Wyoming, EE. UU.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: FULL_TITLE, description: DESCRIPTION, url: '/contacto' },
  twitter: { title: FULL_TITLE, description: DESCRIPTION },
};

export default function ContactoPage() {
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
            <T as="span" k="ctc.breadcrumb" />
          </div>
          <T as="h1" k="ctc.ph-title" />
          <T as="p" k="ctc.ph-desc" />
        </div>
      </section>

      {/* Contact section */}
      <section className="contact-section">
        <div className="container">
          {/* Info cards row */}
          <FadeUp className="contact-cards-row">
            <div className="contact-info-card">
              <div className="contact-info-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <T as="div" className="contact-info-card-label" k="ctc.card1-label" />
              <T as="div" className="contact-info-card-value" k="ctc.card1-value" />
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <T as="div" className="contact-info-card-label" k="ctc.card2-label" />
              <div className="contact-info-card-value">
                <a href="mailto:info@silas7.com">
                  <T k="ctc.card2-value" />
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <T as="div" className="contact-info-card-label" k="ctc.card3-label" />
              <div className="contact-info-card-value">
                <a href="https://silas7.com">
                  <T k="ctc.card3-value" />
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Info column */}
          <FadeUp className="contact-grid">
            <div className="contact-info-col">
              <T as="div" className="section-label" style={{ color: 'var(--red)' }} k="ctc.info-label" />
              <T as="h2" k="ctc.info-title" />
              <T as="p" className="contact-info-lead" k="ctc.info-lead" />

              <div className="contact-detail-cards">
                <div className="contact-detail-card">
                  <div className="contact-detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <T as="strong" k="ctc.card-addr-lbl" />
                    <T as="span" k="ctc.card-addr-val" />
                  </div>
                </div>
                <div className="contact-detail-card">
                  <div className="contact-detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <T as="strong" k="ctc.card-email-lbl" />
                    <a href="mailto:info@silas7.com">
                      <T k="ctc.card-email-val" />
                    </a>
                  </div>
                </div>
                <div className="contact-detail-card">
                  <div className="contact-detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div>
                    <T as="strong" k="ctc.card-web-lbl" />
                    <a href="https://silas7.com">
                      <T k="ctc.card-web-val" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-response-box">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: 20, height: 20, color: 'var(--blue)', flexShrink: 0 }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <T as="strong" k="ctc.response-title" />
                  <T as="p" k="ctc.response-desc" />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
