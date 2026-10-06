import type { Metadata } from 'next';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import SmoothScrollAnchors from '@/components/SmoothScrollAnchors';
import './globals.css';

const SITE_URL = 'https://silas7.com';
const SITE_NAME = 'Silas Seve7n Holdings Corp';
const DEFAULT_TITLE = 'Silas Seve7n Holdings Corp — Connecting Critical Resources. Powering the Future';
const DEFAULT_DESCRIPTION =
  'Silas Seve7n Holdings Corp (SSHC) — Connecting Critical Resources. Powering the Future. U.S. company connecting qualified Venezuelan producers of critical minerals and rare earths with U.S. manufacturers through secure, transparent, and compliant supply chains.';
const OG_IMAGE = '/Images/Logo-recortado.png';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: '/Images/Logo-recortado.png',
  },
  openGraph: {
    siteName: SITE_NAME,
    type: 'website',
    locale: 'es_US',
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: 'summary',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
          <SmoothScrollAnchors />
        </LanguageProvider>
      </body>
    </html>
  );
}
