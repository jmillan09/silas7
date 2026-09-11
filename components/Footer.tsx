import Link from 'next/link';
import T from './T';
import FooterLogo from './FooterLogo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <FooterLogo />
            <T as="p" k="footer.desc" />
            <div className="footer-social">
              <a href="mailto:info@silas7.com" className="social-link" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <T as="h4" k="footer.nav-heading" />
            <ul>
              <li>
                <Link href="/">
                  <T k="nav.home" />
                </Link>
              </li>
              <li>
                <Link href="/nosotros">
                  <T k="nav.about" />
                </Link>
              </li>
              <li>
                <Link href="/servicios">
                  <T k="nav.services" />
                </Link>
              </li>
              <li>
                <Link href="/contacto">
                  <T k="nav.contact" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <T as="h4" k="footer.svc-heading" />
            <ul>
              <li>
                <Link href="/servicios#minerals">
                  <T k="footer.svc.minerals" />
                </Link>
              </li>
              <li>
                <Link href="/servicios#metalworking">
                  <T k="footer.svc.metal" />
                </Link>
              </li>
              <li>
                <Link href="/servicios#chemical">
                  <T k="footer.svc.chem" />
                </Link>
              </li>
              <li>
                <Link href="/servicios#electrical">
                  <T k="footer.svc.elec" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <T as="h4" k="footer.contact-heading" />
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a href="mailto:info@silas7.com">info@silas7.com</a>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <address>E 2nd St, Ste 7000, Casper, WY, United States</address>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.9 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
              </svg>
              <a href="https://silas7.com">silas7.com</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <T as="p" k="footer.copyright" />
          <span className="footer-cert">
            <span className="cert-dot">&#9679;</span> ASME &amp; ASTM Certified &nbsp;|&nbsp; EIN: 99-2086051
          </span>
        </div>
      </div>
    </footer>
  );
}
