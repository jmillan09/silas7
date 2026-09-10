'use client';

export default function AboutPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="about-image-wrapper" style={{ background: 'var(--gray-light)' }}>
      <img
        src={src}
        alt={alt}
        onError={(e) => {
          const wrapper = e.currentTarget.parentElement;
          if (wrapper) wrapper.style.background = 'var(--gray-100)';
        }}
      />
    </div>
  );
}
