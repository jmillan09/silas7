import FadeUp from './FadeUp';
import T from './T';

const MINERALS = ['coltan', 'tantalum', 'niobium'] as const;

/** Coltan / Tantalum / Niobium cards, shared by the index and servicios pages. */
export default function MineralCards() {
  return (
    <div className="feature-grid">
      {MINERALS.map((m, i) => (
        <FadeUp className="feature-card" delay={i * 0.1} key={m}>
          <div className="feature-card-icon mineral-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3h12l4 6-10 13L2 9Z" />
              <path d="M11 3 8 9l4 13 4-13-3-6" />
              <path d="M2 9h20" />
            </svg>
          </div>
          <T as="h4" k={`min.${m}-title`} />
          <T as="p" k={`min.${m}-desc`} />
        </FadeUp>
      ))}
    </div>
  );
}
