import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import T from '@/components/T';

const TITLE = 'Gerencia';
const FULL_TITLE = 'Gerencia — Silas Seve7n Holdings Corp';
const DESCRIPTION = 'Gerencia — Silas Seve7n Holdings Corp (SSHC). Conozca al equipo directivo de la compañía.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: FULL_TITLE, description: DESCRIPTION, url: '/gerencia' },
  twitter: { title: FULL_TITLE, description: DESCRIPTION },
};

export default function GerenciaPage() {
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
            <T as="span" k="mgmt.breadcrumb" />
          </div>
          <T as="h1" k="mgmt.ph-title" />
          <T as="p" k="mgmt.ph-desc" />
        </div>
      </section>

      {/* Managers — content pending */}
      <section className="section" id="managers" style={{ background: 'var(--off-white)' }}>
        <div className="container">{/* TODO: add managers' profiles here */}</div>
      </section>

      <Footer />
    </>
  );
}
