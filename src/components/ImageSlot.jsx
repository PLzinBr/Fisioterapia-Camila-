import { Camera } from 'lucide-react';

/**
 * Mostra a foto quando `src` existir; caso contrário, um placeholder
 * sofisticado indicando qual foto deve entrar ali.
 */
export default function ImageSlot({ src, alt, label, className = '' }) {
  if (src) {
    return (
      <div className={`group overflow-hidden ${className}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`group relative overflow-hidden bg-gradient-to-br from-petrol-700 via-petrol-800 to-petrol-900 ${className}`}
    >
      {/* formas orgânicas decorativas */}
      <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-petrol-500/40 blur-3xl transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-gold-500/25 blur-3xl transition-transform duration-700 group-hover:scale-110" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden="true">
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="#fff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      <div className="relative flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-300/40 bg-white/10 text-gold-300 backdrop-blur">
          <Camera className="h-6 w-6" strokeWidth={1.5} />
        </span>
        <span className="font-serif text-lg italic text-ivory/90">{label}</span>
      </div>
    </div>
  );
}
