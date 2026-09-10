import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroParticles from '@/components/HeroParticles';
import FadeUp from '@/components/FadeUp';
import T from '@/components/T';
import AboutPhoto from '@/components/AboutPhoto';

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero" id="hero">
        <HeroParticles />
        <div
          className="hero-bg"
          style={{ backgroundImage: "url('/Images/hero-industrial.jpg')", backgroundColor: '#1e3a55' }}
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Silas Seve<span style={{ color: '#bd0016' }}>7</span>n
              <br />
              <span className="accent">Holdings Corp</span>
            </h1>

            <T as="p" className="hero-desc" k="hero.desc" />

            <div className="hero-actions">
              <Link href="/servicios" className="btn btn-red btn-lg">
                <T k="hero.btn-services" />
              </Link>
              <Link href="/contacto" className="btn btn-outline-white btn-lg">
                <T k="hero.btn-proposal" />
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-cert-card">
              <T as="span" className="cert-badge-pill red" k="hero.cert1-badge" />
              <T as="h4" k="hero.cert1-title" />
              <T as="p" k="hero.cert1-desc" />
            </div>
            <div className="hero-cert-card">
              <T as="span" className="cert-badge-pill blue" k="hero.cert2-badge" />
              <T as="h4" k="hero.cert2-title" />
              <T as="p" k="hero.cert2-desc" />
            </div>
            <div className="hero-cert-card">
              <T as="span" className="cert-badge-pill red" k="hero.cert3-badge" />
              <T as="h4" k="hero.cert3-title" />
              <T as="p" k="hero.cert3-desc" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section section" id="servicios">
        <div className="container">
          <div className="section-header">
            <T as="div" className="section-label" k="idx-svc.label" />
            <T as="h2" className="section-title on-dark" k="idx-svc.title" />
            <T as="p" className="section-desc on-dark" k="idx-svc.desc" />
          </div>

          <div className="services-grid">
            <FadeUp className="service-card" delay={0.12}>
              <div
                className="service-card-img"
                style={{
                  background: 'var(--navy)',
                  backgroundImage: "url('/Images/quimica/analisis-rapidos.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="service-card-body">
                <div className="service-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3M3 9a9 9 0 0 0 9 9" />
                  </svg>
                </div>
                <T as="h3" k="idx-svc.chem.title" />
                <T as="p" k="idx-svc.chem.desc" />
                <Link href="/servicios#chemical" className="service-link">
                  <T as="span" k="idx-svc.chem.link" />
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </FadeUp>

            <FadeUp className="service-card">
              <div
                className="service-card-img"
                style={{
                  background: 'var(--navy-mid)',
                  backgroundImage: "url('/Images/trabajadores/2.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="service-card-body">
                <div className="service-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <T as="h3" k="idx-svc.metal.title" />
                <T as="p" k="idx-svc.metal.desc" />
                <Link href="/servicios#metalworking" className="service-link">
                  <T as="span" k="idx-svc.metal.link" />
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </FadeUp>

            <FadeUp className="service-card" delay={0.24}>
              <div
                className="service-card-img"
                style={{
                  background: 'var(--dark-surface)',
                  backgroundImage: "url('/Images/electricidad/1.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="service-card-body">
                <div className="service-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <T as="h3" k="idx-svc.elec.title" />
                <T as="p" k="idx-svc.elec.desc" />
                <Link href="/servicios#electrical" className="service-link">
                  <T as="span" k="idx-svc.elec.link" />
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="about-section section">
        <div className="container">
          <div className="about-grid">
            <FadeUp className="about-image-col">
              <AboutPhoto src="/Images/trabajadores/gm1.png" alt="Silas Seve7n Holdings Corp — Industrial Engineering" />
            </FadeUp>

            <FadeUp className="about-content" delay={0.15}>
              <T as="div" className="section-label" style={{ color: 'var(--red)' }} k="about.label" />
              <T as="h2" k="about.title" />
              <T as="p" className="lead" k="about.lead" />

              <div className="about-highlights">
                <div className="about-highlight-item">
                  <div className="about-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <T as="strong" k="about.hl1-title" />
                    <T as="p" k="about.hl1-desc" />
                  </div>
                </div>
                <div className="about-highlight-item">
                  <div className="about-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <T as="strong" k="about.hl2-title" />
                    <T as="p" k="about.hl2-desc" />
                  </div>
                </div>
                <div className="about-highlight-item">
                  <div className="about-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <T as="strong" k="about.hl3-title" />
                    <T as="p" k="about.hl3-desc" />
                  </div>
                </div>
              </div>

              <Link href="/nosotros" className="btn btn-navy">
                <T k="about.btn" />
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <T as="h2" k="cta.index.title" />
            <T as="p" k="cta.index.desc" />
            <div className="cta-actions">
              <Link href="/contacto" className="btn btn-red btn-lg">
                <T k="cta.btn-proposal" />
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
