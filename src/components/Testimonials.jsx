import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { testimonials } from '../data/content';

/** Carrossel nativo (scroll-snap): leve, acessível e funciona com swipe no celular */
export default function Testimonials() {
  const track = useRef(null);

  const scroll = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector('li');
    const step = card ? card.offsetWidth + 24 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section id="depoimentos" className="overflow-hidden bg-sage-100 py-24 lg:py-32">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Depoimentos"
            title="Histórias de quem voltou a se movimentar"
          />
          <Reveal className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Depoimento anterior"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-petrol-800/20 bg-white/60 text-petrol-800 transition-all hover:-translate-y-0.5 hover:bg-petrol-800 hover:text-ivory"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Próximo depoimento"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-petrol-800/20 bg-white/60 text-petrol-800 transition-all hover:-translate-y-0.5 hover:bg-petrol-800 hover:text-ivory"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <ul
            ref={track}
            className="-mx-5 mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-6 [scrollbar-width:none] sm:-mx-8 sm:px-8 [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map(({ name, context, text, isExample }, i) => (
              <li
                key={i}
                className="glass flex w-[85%] shrink-0 snap-start flex-col justify-between gap-8 rounded-3xl p-8 shadow-soft sm:w-[26rem]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-gold-500" strokeWidth={1.25} />
                    {isExample && (
                      <span className="rounded-full bg-gold-300/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-600">
                        Exemplo ilustrativo
                      </span>
                    )}
                  </div>
                  <blockquote className="mt-5 font-serif text-lg leading-relaxed text-petrol-900">“{text}”</blockquote>
                </div>
                <footer className="border-t border-petrol-900/10 pt-5">
                  <p className="font-semibold text-charcoal">{name}</p>
                  <p className="text-sm text-charcoal-muted">{context}</p>
                </footer>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
