import { ArrowRight, BadgeCheck, HeartHandshake, House } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Reveal from './Reveal';
import ImageSlot from './ImageSlot';
import { site, whatsappLink } from '../config';

// Selos de confiança — apenas fatos verificáveis (sem números inventados)
const badges = [
  { icon: BadgeCheck, label: site.crefito },
  { icon: House, label: 'Atendimento domiciliar' },
  { icon: HeartHandshake, label: 'Cuidado humanizado' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
      {/* Fundo: gradientes orgânicos suaves */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-sage-200/70 blur-3xl" />
        <div className="absolute -left-32 top-1/2 h-[26rem] w-[26rem] rounded-full bg-gold-300/30 blur-3xl" />
      </div>

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Texto */}
        <div className="flex flex-col items-start gap-7">
          <Reveal>
            <span className="eyebrow">Fisioterapia Neurofuncional e Ortopédica</span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-[2.6rem] leading-[1.08] sm:text-5xl lg:text-[4rem]">
              Recupere seu movimento,{' '}
              <em className="font-medium italic text-petrol-600">redefina</em> sua qualidade de vida.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="max-w-xl text-lg leading-relaxed text-charcoal-soft">
              Reabilitação personalizada para quem precisa voltar a fazer o que ama — com acolhimento, técnica e no
              conforto da sua casa, em {site.region}.
            </p>
          </Reveal>

          <Reveal delay={300} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <FaWhatsapp className="h-5 w-5" />
              Falar no WhatsApp
            </a>
            <a href="#agendar" className="btn-ghost group">
              Agendar avaliação
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal delay={400}>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
              {badges.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-charcoal-soft">
                  <Icon className="h-4 w-4 text-gold-600" strokeWidth={1.75} />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Imagem + card flutuante em vidro */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <ImageSlot
            src={site.images.hero}
            alt={`${site.professional} em atendimento`}
            label="Foto da Dra. Camila em atendimento"
            className="aspect-[4/5] rounded-[2rem] rounded-tr-[7rem] shadow-lift"
          />
          <div className="absolute -bottom-6 left-3 max-w-[16rem] animate-float rounded-2xl border border-white/70 bg-white/85 p-5 shadow-lift backdrop-blur-xl sm:-left-10">
            <p className="font-serif text-lg leading-snug text-petrol-900">“Eu amo ser fisio.”</p>
            <p className="mt-2 text-xs text-charcoal-soft">
              {site.professional} · {site.crefito}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
