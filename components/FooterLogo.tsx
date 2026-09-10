'use client';

export default function FooterLogo() {
  return (
    <img
      src="/Images/Logo-recortado.png"
      alt="Silas Seve7n Holdings Corp"
      className="footer-logo"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  );
}
