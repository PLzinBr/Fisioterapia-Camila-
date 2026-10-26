import { useEffect, useState } from 'react';
import { CalendarCheck, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { navLinks, whatsappLink } from '../config';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Header ganha fundo de vidro fosco ao rolar a página
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Trava o scroll do body com o menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open ? 'glass border-x-0 border-t-0 py-3 shadow-soft' : 'py-5'
      }`}
    >
      <nav className="container-site flex items-center justify-between gap-6" aria-label="Navegação principal">
        <Logo />

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-charcoal-soft transition-colors hover:text-petrol-800 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary hidden !px-5 !py-3 sm:inline-flex">
            <CalendarCheck className="h-4 w-4" />
            Agendar Avaliação
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-petrol-800/15 text-petrol-900 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-site flex flex-col gap-1 pb-4 pt-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 font-serif text-xl text-petrol-900 transition-colors hover:bg-petrol-50"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
              <CalendarCheck className="h-4 w-4" />
              Agendar Avaliação
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
