import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeUp from '@/components/FadeUp';
import T from '@/components/T';
import MineralCards from '@/components/MineralCards';

const TITLE = 'Servicios';
const FULL_TITLE = 'Servicios — Silas Seve7n Holdings Corp';
const DESCRIPTION =
  'Servicios — Silas Seve7n Holdings Corp (SSHC). Suministro y transporte de minerales críticos y tierras raras: coltán, tantalio y niobio, desde productores venezolanos verificados hasta la industria de EE. UU., con trazabilidad y cumplimiento normativo.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: FULL_TITLE, description: DESCRIPTION, url: '/servicios' },
  twitter: { title: FULL_TITLE, description: DESCRIPTION },
};

const bannerStyle = { margin: '24px 0 36px', borderRadius: 12, overflow: 'hidden', height: 300 } as const;
const bannerImgStyle = { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' } as const;

export default function ServiciosPage() {
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
            <T as="span" k="svc.breadcrumb" />
          </div>
          <T as="h1" k="svc.ph-title" />
          <T as="p" k="svc.ph-desc" />
        </div>
      </section>

      {/* Critical Minerals & Rare Earths (core service) */}
      <section className="service-section-block section alt-bg" id="minerals" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-header-left">
            <T as="div" className="section-label" k="svc.minerals.label" />
            <T as="h2" className="section-title on-light" k="svc.minerals.title" />
            <T as="p" className="section-desc on-light" k="svc.minerals.sub" />
          </div>

          <FadeUp className="section-banner-img" style={bannerStyle}>
            <img
              src="/Images/mineria/web/excavadora.jpg"
              alt="Suministro y transporte de minerales críticos y tierras raras"
              style={{ ...bannerImgStyle, objectPosition: 'center 78%' }}
            />
          </FadeUp>

          <FadeUp as="div" className="hex-grid hex-grid-3col">
            <div className="hex-card">
              <div className="hex-num">01</div>
              <div>
                <T as="h4" k="svc.minerals.s1-title" />
                <T as="p" k="svc.minerals.s1-desc" />
              </div>
            </div>
            <div className="hex-card">
              <div className="hex-num">02</div>
              <div>
                <T as="h4" k="svc.minerals.s2-title" />
                <T as="p" k="svc.minerals.s2-desc" />
              </div>
            </div>
            <div className="hex-card">
              <div className="hex-num">03</div>
              <div>
                <T as="h4" k="svc.minerals.s3-title" />
                <T as="p" k="svc.minerals.s3-desc" />
              </div>
            </div>
          </FadeUp>

          <MineralCards />

          <Link href="/operaciones" className="service-link">
            <T as="span" k="svc.minerals.ops-link" />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <T as="h2" k="cta.svc.title" />
            <T as="p" k="cta.svc.desc" />
            <div className="cta-actions">
              <Link href="/contacto" className="btn btn-red btn-lg">
                <T k="cta.svc.btn1" />
              </Link>
              <a href="mailto:info@silas7.com" className="btn btn-outline-white btn-lg">
                info@silas7.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
