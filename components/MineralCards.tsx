import FadeUp from './FadeUp';
import T from './T';

const MINERALS = [
  { key: 'coltan', img: '/Images/mineria/web/coltan.jpg' },
  { key: 'tantalum', img: '/Images/mineria/web/tantalio.jpg' },
  { key: 'niobium', img: '/Images/mineria/web/niobio.jpg' },
] as const;

/** Coltan / Tantalum / Niobium cards, shared by the index and servicios pages. */
export default function MineralCards() {
  return (
    <div className="feature-grid">
      {MINERALS.map((m, i) => (
        <FadeUp className="feature-card mineral-card" delay={i * 0.1} key={m.key}>
          <div className="mineral-card-media">
            <img src={m.img} alt="" loading="lazy" />
          </div>
          <div className="mineral-card-body">
            <T as="h4" k={`min.${m.key}-title`} />
            <T as="p" k={`min.${m.key}-desc`} />
          </div>
        </FadeUp>
      ))}
    </div>
  );
}
