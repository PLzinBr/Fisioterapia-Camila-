import { Clock, Mail, MapPin } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Logo from './Logo';
import { instagramLink, navLinks, site, whatsappLink } from '../config';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-petrol-900 text-ivory/75">
      <div className="container-site grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div className="flex flex-col gap-5">
          <Logo light />
          <p className="text-sm leading-relaxed">
            Fisioterapia neurofuncional e ortopédica com atendimento humanizado e domiciliar.
          </p>
          <div className="flex gap-3">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-300"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-300"
            >
              <FaWhatsapp className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">Navegação</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-ivory">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#agendar" className="transition-colors hover:text-ivory">
                Agendar avaliação
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">Contato</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-gold-400" />
              Atendimento domiciliar em {site.region}
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition-colors hover:text-ivory">
                <FaWhatsapp className="h-4 w-4 shrink-0 text-gold-400" />
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex gap-3 break-all transition-colors hover:text-ivory">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Horários */}
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">Horários</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {site.hours.map((h) => (
              <li key={h.days} className="flex gap-3">
                <Clock className="h-4 w-4 shrink-0 text-gold-400" />
                <span>
                  <span className="block text-ivory">{h.days}</span>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Avisos legais */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.professional} · {site.crefito}. Todos os direitos reservados.
          </p>
          <p className="max-w-xl md:text-right">
            As informações deste site têm caráter informativo e não substituem uma avaliação fisioterapêutica individual.
          </p>
        </div>
      </div>
    </footer>
  );
}
