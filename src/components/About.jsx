import { Check } from 'lucide-react';
import Reveal from './Reveal';
import ImageSlot from './ImageSlot';
import { site } from '../config';

// TODO: Camila — revisar e incluir formação, pós-graduações e cursos reais.
const highlights = [
  'Atuação em fisioterapia neurofuncional e ortopédica',
  'Atendimento de bebês, adultos e idosos',
  'Prescrição de órteses, cadeiras de rodas e dispositivos auxiliares',
  'Orientação para adaptação da casa e rotina do paciente',
];

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative isolate order-last lg:order-first">
          <ImageSlot
            src={site.images.about}
            alt={`Retrato de ${site.professional}`}
            label="Retrato da Dra. Camila"
            className="aspect-[4/5] rounded-[2rem] rounded-bl-[7rem] shadow-lift"
          />
          {/* moldura dourada deslocada */}
          <div aria-hidden="true" className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-[2rem] rounded-bl-[7rem] border border-gold-400/60" />
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal>
            <span className="eyebrow">Sobre</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
              Olá, sou a <em className="italic text-petrol-600">{site.professional}</em>
            </h2>
          </Reveal>
          <Reveal delay={200} className="space-y-4 text-base leading-relaxed text-charcoal-soft">
            <p>
              Sou fisioterapeuta e acredito que reabilitar é muito mais do que fazer exercícios: é devolver a alguém a
              capacidade de fazer, sozinho, aquilo que dá sentido ao seu dia — caminhar até a cozinha, brincar com os
              filhos, colocar a meia depois de anos sem conseguir.
            </p>
            <p>
              Por isso levo a fisioterapia até você. Tratando no seu ambiente, consigo enxergar as barreiras reais da
              sua rotina e construir, junto com você e sua família, um caminho seguro para a independência.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <ul className="grid gap-3 pt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.95rem] text-charcoal">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-petrol-800 text-gold-300">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={400}>
            <p className="pt-2 font-serif text-sm italic text-gold-600">{site.crefito}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
