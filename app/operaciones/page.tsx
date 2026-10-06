import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeUp from '@/components/FadeUp';
import T from '@/components/T';

const TITLE = 'Operaciones';
const FULL_TITLE = 'Operaciones — Silas Seve7n Holdings Corp';
const DESCRIPTION =
  'Operaciones — Silas Seve7n Holdings Corp (SSHC). Cadena de valor integral para minerales críticos, de productores venezolanos verificados a la industria de EE. UU., en pleno cumplimiento de OFAC, FCPA y regulaciones aduaneras.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: FULL_TITLE, description: DESCRIPTION, url: '/operaciones' },
  twitter: { title: FULL_TITLE, description: DESCRIPTION },
};

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

const STEPS = [
  {
    key: 'ops.step1',
    icon: (
      <svg {...iconProps}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    key: 'ops.step2',
    icon: (
      <svg {...iconProps}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M16 13H8M16 17H8" />
      </svg>
    ),
  },
  {
    key: 'ops.step4',
    icon: (
      <svg {...iconProps}>
        <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
        <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
        <path d="M12 10v4M12 2v3" />
      </svg>
    ),
  },
  {
    key: 'ops.step5',
    icon: (
      <svg {...iconProps}>
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M17 18h1M12 18h1M7 18h1" />
      </svg>
    ),
  },
] as const;

const COMPLIANCE = [
  {
    key: 'ops.c1',
    icon: (
      <svg {...iconProps}>
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
      </svg>
    ),
  },
  {
    key: 'ops.c2',
    icon: (
      <svg {...iconProps}>
        <rect x={2} y={7} width={20} height={14} rx={2} />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    key: 'ops.c4',
    icon: (
      <svg {...iconProps}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
] as const;

export default function OperacionesPage() {
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
            <T as="span" k="ops.breadcrumb" />
          </div>
          <T as="h1" k="ops.ph-title" />
          <T as="p" k="ops.ph-desc" />
        </div>
      </section>

      {/* End-to-end value chain */}
      <section className="section chain-section" id="value-chain">
        <div className="container">
          <div className="section-header">
            <T as="div" className="section-label" k="ops.chain-label" />
            <T as="h2" className="section-title on-dark" k="ops.chain-title" />
            <T as="p" className="section-desc on-dark" k="ops.chain-desc" />
          </div>

          <div className="chain-grid">
            {STEPS.map((step, i) => (
              <FadeUp className="chain-step" delay={i * 0.08} key={step.key}>
                <div className="chain-icon">{step.icon}</div>
                <div className="chain-num">{String(i + 1).padStart(2, '0')}</div>
                <T as="h4" k={`${step.key}-title`} />
                <T as="p" k={`${step.key}-desc`} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & standards */}
      <section className="section" id="compliance" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-header">
            <T as="div" className="section-label" k="ops.comp-label" />
            <T as="h2" className="section-title on-light" k="ops.comp-title" />
          </div>

          <FadeUp className="compliance-intro">
            <div className="compliance-intro-icon">
              <svg {...iconProps}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <T as="p" k="ops.comp-intro" />
          </FadeUp>

          <FadeUp className="diff-grid diff-grid-3">
            {COMPLIANCE.map((item) => (
              <div className="diff-card" key={item.key}>
                <div className="diff-card-icon">{item.icon}</div>
                <T as="h4" k={`${item.key}-title`} />
                <T as="p" k={`${item.key}-desc`} />
              </div>
            ))}
          </FadeUp>
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
              <Link href="/servicios" className="btn btn-outline-white btn-lg">
                <T k="nav.services" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
