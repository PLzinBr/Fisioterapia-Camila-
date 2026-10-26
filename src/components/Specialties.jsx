import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { specialties } from '../data/content';
import { whatsappLink } from '../config';

export default function Specialties() {
  return (
    <section id="especialidades" className="relative bg-ivory-100 py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Especialidades"
          title="Tratamentos pensados para cada fase da vida"
          text="Do bebê que está aprendendo a andar ao idoso que quer voltar a caminhar com segurança: cada plano é construído a partir das suas necessidades reais."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 100}>
              <a
                href={whatsappLink(`Olá, gostaria de saber mais sobre ${title} com a Dra. Camila Morais.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-petrol-900/[0.07] bg-white/70 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/50 hover:bg-white hover:shadow-lift"
              >
                {/* brilho que surge no hover */}
                <span
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sage-200 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-petrol-50 text-petrol-700 transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-petrol-800 group-hover:text-gold-300">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="relative text-xl">{title}</h3>
                <p className="relative flex-1 text-[0.95rem] leading-relaxed text-charcoal-soft">{text}</p>
                <span className="relative inline-flex items-center gap-1.5 text-sm font-semibold text-petrol-700">
                  Saiba mais
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
