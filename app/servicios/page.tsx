import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeUp from '@/components/FadeUp';
import T from '@/components/T';

const TITLE = 'Servicios';
const FULL_TITLE = 'Servicios — Silas Seve7n Holdings Corp';
const DESCRIPTION =
  'Servicios — Silas Seve7n Holdings Corp (SSHC). Suministro y Transporte de Minerales Críticos y Tierras Raras, Metalmecánica ASME, Tratamiento Químico Industrial, y Componentes para Transformadores de Potencia. Soluciones integrales para el sector industrial y energético.';

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

      {/* Service tabs */}
      <section style={{ background: 'var(--navy)', padding: 0 }}>
        <div className="container">
          <div className="svc-tabs">
            <a href="#minerals" className="svc-tab">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h12l4 6-10 13L2 9Z" />
                <path d="M11 3 8 9l4 13 4-13-3-6" />
                <path d="M2 9h20" />
              </svg>
              <T k="svc.tab.minerals" />
            </a>
            <a href="#metalworking" className="svc-tab">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              <T k="svc.tab.metal" />
            </a>
            <a href="#chemical" className="svc-tab">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
              </svg>
              <T k="svc.tab.chem" />
            </a>
            <a href="#electrical" className="svc-tab">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <T k="svc.tab.elec" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: Critical Minerals & Rare Earths (flagship service) */}
      <section className="service-section-block section alt-bg" id="minerals" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-header-left">
            <T as="div" className="section-label" k="svc.minerals.label" />
            <T as="h2" className="section-title on-light" k="svc.minerals.title" />
            <T as="p" className="section-desc on-light" k="svc.minerals.sub" />
          </div>

          <FadeUp className="section-banner-img" style={bannerStyle}>
            <img
              src="/Images/industrias/oil-industry.jpg"
              alt="Suministro y transporte de minerales críticos y tierras raras"
              style={bannerImgStyle}
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
        </div>
      </section>

      {/* Section 2: Metalworking */}
      <section className="service-section-block section" id="metalworking">
        <div className="container">
          <div className="section-header-left">
            <T as="div" className="section-label" k="svc.metal.label" />
            <T as="h2" className="section-title on-dark" k="svc.metal.title" />
            <T as="p" className="section-desc on-dark" k="svc.metal.sub" />
          </div>

          <FadeUp className="section-banner-img" style={bannerStyle}>
            <img src="/Images/quimica/unidad-industrial.png" alt="Metalmecánica industrial" style={bannerImgStyle} />
          </FadeUp>

          <FadeUp as="div" className="feature-grid">
            <div className="feature-card">
              <div className="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <T as="h4" k="svc.metal.s1-title" />
              <T as="p" k="svc.metal.s1-desc" />
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x={3} y={3} width={18} height={18} rx={2} />
                  <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
                </svg>
              </div>
              <T as="h4" k="svc.metal.s2-title" />
              <T as="p" k="svc.metal.s2-desc" />
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <T as="h4" k="svc.metal.s3-title" />
              <T as="p" k="svc.metal.s3-desc" />
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <T as="h4" k="svc.metal.s4-title" />
              <T as="p" k="svc.metal.s4-desc" />
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <T as="h4" k="svc.metal.s5-title" />
              <T as="p" k="svc.metal.s5-desc" />
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <T as="h4" k="svc.metal.s6-title" />
              <T as="p" k="svc.metal.s6-desc" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 3: Chemical */}
      <section className="service-section-block section alt-bg" id="chemical" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-header-left">
            <T as="div" className="section-label" k="svc.chem.label" />
            <T as="h2" className="section-title on-light" k="svc.chem.title" />
            <T as="p" className="section-desc on-light" k="svc.chem.sub" />
          </div>

          <FadeUp className="section-banner-img" style={bannerStyle}>
            <img src="/Images/quimica/unidad-industrial.png" alt="Servicios químicos industriales" style={bannerImgStyle} />
          </FadeUp>

          <FadeUp as="div" className="hex-grid">
            <div className="hex-card">
              <div className="hex-num">01</div>
              <div>
                <T as="h4" k="svc.chem.s1-title" />
                <T as="p" k="svc.chem.s1-desc" />
              </div>
            </div>
            <div className="hex-card">
              <div className="hex-num">02</div>
              <div>
                <T as="h4" k="svc.chem.s2-title" />
                <T as="p" k="svc.chem.s2-desc" />
              </div>
            </div>
            <div className="hex-card">
              <div className="hex-num">03</div>
              <div>
                <T as="h4" k="svc.chem.s3-title" />
                <T as="p" k="svc.chem.s3-desc" />
              </div>
            </div>
            <div className="hex-card">
              <div className="hex-num">04</div>
              <div>
                <T as="h4" k="svc.chem.s4-title" />
                <T as="p" k="svc.chem.s4-desc" />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 4: Electrical */}
      <section className="service-section-block section" id="electrical">
        <div className="container">
          <div className="section-header-left">
            <T as="div" className="section-label" k="svc.elec.label" />
            <T as="h2" className="section-title on-dark" k="svc.elec.title" />
            <T as="p" className="section-desc on-dark" k="svc.elec.sub" />
          </div>

          <FadeUp className="section-banner-img" style={bannerStyle}>
            <img src="/Images/electricidad/2.jpg" alt="Transformadores y componentes eléctricos" style={bannerImgStyle} />
          </FadeUp>

          <FadeUp as="div" className="feature-grid">
            <div className="feature-card feature-card-elec">
              <div className="feature-card-icon feature-card-icon-elec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <T as="h4" k="svc.elec.s1-title" />
              <T as="p" k="svc.elec.s1-desc" />
            </div>

            <div className="feature-card feature-card-elec">
              <div className="feature-card-icon feature-card-icon-elec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
              </div>
              <T as="h4" k="svc.elec.s2-title" />
              <T as="p" k="svc.elec.s2-desc" />
            </div>

            <div className="feature-card feature-card-elec">
              <div className="feature-card-icon feature-card-icon-elec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x={2} y={3} width={20} height={14} rx={2} />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <T as="h4" k="svc.elec.s3-title" />
              <T as="p" k="svc.elec.s3-desc" />
            </div>

            <div className="feature-card feature-card-elec">
              <div className="feature-card-icon feature-card-icon-elec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              </div>
              <T as="h4" k="svc.elec.s4-title" />
              <T as="p" k="svc.elec.s4-desc" />
            </div>

            <div className="feature-card feature-card-elec">
              <div className="feature-card-icon feature-card-icon-elec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <T as="h4" k="svc.elec.s5-title" />
              <T as="p" k="svc.elec.s5-desc" />
            </div>

            <div className="feature-card feature-card-elec">
              <div className="feature-card-icon feature-card-icon-elec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <T as="h4" k="svc.elec.s6-title" />
              <T as="p" k="svc.elec.s6-desc" />
            </div>
          </FadeUp>
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
