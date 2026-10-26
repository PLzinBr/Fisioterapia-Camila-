import { site } from '../config';

/** Logo minimalista: monograma + nome */
export default function Logo({ light = false }) {
  return (
    <a href="#inicio" className="group flex items-center gap-3" aria-label={`${site.name} ${site.tagline} — início`}>
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full border font-serif text-base transition-colors duration-300 ${
          light
            ? 'border-gold-300/50 text-gold-300'
            : 'border-petrol-800/25 text-petrol-800 group-hover:border-gold-500 group-hover:text-gold-600'
        }`}
      >
        CM
      </span>
      <span className="leading-tight">
        <span className={`block font-serif text-lg ${light ? 'text-ivory' : 'text-petrol-900'}`}>{site.name}</span>
        <span
          className={`block text-[10px] font-semibold uppercase tracking-[0.3em] ${
            light ? 'text-gold-300' : 'text-gold-600'
          }`}
        >
          {site.tagline}
        </span>
      </span>
    </a>
  );
}
