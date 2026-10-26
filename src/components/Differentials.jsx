import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { differentials, steps } from '../data/content';

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative overflow-hidden bg-petrol-900 py-24 text-ivory lg:py-32">
      {/* textura de fundo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-petrol-600/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-[24rem] w-[24rem] rounded-full bg-gold-500/15 blur-3xl" />
      </div>

      <div className="container-site relative">
        <SectionHeading
          light
          eyebrow="Diferenciais"
          title="Uma fisioterapia que cabe na sua vida"
          text="Abordagem personalizada, técnica atualizada e o cuidado de quem enxerga a pessoa por trás do diagnóstico."
        />

        {/* Cards em vidro fosco sobre fundo escuro */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:bg-white/[0.1]">
                <Icon className="h-8 w-8 text-gold-300 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.25} />
                <h3 className="mt-6 text-xl text-ivory">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Como funciona */}
        <div className="mt-24 grid gap-10 border-t border-white/10 pt-16 lg:grid-cols-[0.8fr_2fr]">
          <Reveal>
            <span className="eyebrow">Como funciona</span>
            <h3 className="mt-4 text-3xl leading-tight text-ivory">Três passos para começar</h3>
          </Reveal>
          <ol className="grid gap-8 sm:grid-cols-3">
            {steps.map(({ n, title, text }, i) => (
              <Reveal as="li" key={n} delay={i * 120} className="relative">
                <span className="font-serif text-5xl text-gold-400/80">{n}</span>
                <h4 className="mt-3 text-lg font-semibold text-ivory">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ivory/70">{text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
