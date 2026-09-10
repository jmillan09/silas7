'use client';

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react';

interface FadeUpProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Stagger delay in seconds, applied once the element becomes visible. */
  delay?: number;
  id?: string;
}

/** Client-side port of the original IntersectionObserver-driven .animate-fade-up behaviour. */
export default function FadeUp({ as: Tag = 'div', children, className = '', style, delay, id }: FadeUpProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`animate-fade-up${visible ? ' visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ ...style, transitionDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </Tag>
  );
}
