import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Reveal from './Reveal';
import { specialties } from '../data/content';
import { site, whatsappLink } from '../config';

const field =
  'w-full rounded-2xl border border-petrol-900/10 bg-white/80 px-4 py-3.5 text-[0.95rem] text-charcoal outline-none transition focus:border-petrol-500 focus:bg-white focus:ring-4 focus:ring-petrol-100';

/**
 * Pré-agendamento: o formulário monta uma mensagem completa e abre o WhatsApp.
 * Não precisa de backend — e a Camila já recebe o contato qualificado.
 */
export default function Booking() {
  const [form, setForm] = useState({ name: '', forWhom: 'Para mim', need: specialties[0].title, city: '', period: 'Manhã' });
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = [
      `Olá, gostaria de agendar uma avaliação com a ${site.professional}.`,
      '',
      `Nome: ${form.name}`,
      `Atendimento: ${form.forWhom}`,
      `Necessidade: ${form.need}`,
      `Cidade/bairro: ${form.city}`,
      `Melhor período: ${form.period}`,
    ].join('\n');
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendar" className="py-24 lg:py-32">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sage-200 via-ivory-100 to-gold-300/40 p-8 sm:p-12 lg:p-16">
          <div aria-hidden="true" className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/50 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="flex flex-col gap-5">
              <span className="eyebrow">Agende sua avaliação</span>
              <h2 className="text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
                O primeiro passo da sua recuperação começa aqui.
              </h2>
              <p className="text-base leading-relaxed text-charcoal-soft">
                Preencha os dados ao lado e envie direto pelo WhatsApp. Respondemos o quanto antes para combinar dia e
                horário da sua avaliação domiciliar.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <form onSubmit={handleSubmit} className="glass grid gap-4 rounded-3xl p-6 shadow-soft sm:grid-cols-2 sm:p-8">
                <label className="sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-medium text-charcoal-soft">Seu nome</span>
                  <input required value={form.name} onChange={update('name')} className={field} placeholder="Como podemos te chamar?" autoComplete="name" />
                </label>
                <label>
                  <span className="mb-1.5 block text-sm font-medium text-charcoal-soft">O atendimento é</span>
                  <select value={form.forWhom} onChange={update('forWhom')} className={field}>
                    <option>Para mim</option>
                    <option>Para um familiar</option>
                    <option>Para meu bebê/criança</option>
                  </select>
                </label>
                <label>
                  <span className="mb-1.5 block text-sm font-medium text-charcoal-soft">Melhor período</span>
                  <select value={form.period} onChange={update('period')} className={field}>
                    <option>Manhã</option>
                    <option>Tarde</option>
                    <option>Noite</option>
                  </select>
                </label>
                <label className="sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-medium text-charcoal-soft">Necessidade</span>
                  <select value={form.need} onChange={update('need')} className={field}>
                    {specialties.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                    <option>Não sei, quero uma orientação</option>
                  </select>
                </label>
                <label className="sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-medium text-charcoal-soft">Cidade / bairro</span>
                  <input required value={form.city} onChange={update('city')} className={field} placeholder="Ex.: Caieiras – Centro" />
                </label>
                <button type="submit" className="btn-whatsapp mt-2 w-full sm:col-span-2">
                  <FaWhatsapp className="h-5 w-5" />
                  Enviar pelo WhatsApp
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
