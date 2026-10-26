import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { instagramLink, whatsappLink } from '../config';

/** Botões flutuantes fixos: Instagram (acima) e WhatsApp (com pulsação) */
export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3 sm:bottom-8 sm:right-8">
      <a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir o Instagram da Dra. Camila Morais"
        title="Instagram"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
      >
        <FaInstagram className="h-6 w-6" />
      </a>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar avaliação pelo WhatsApp"
        title="WhatsApp"
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
      >
        {/* anel de pulsação */}
        <span aria-hidden="true" className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
        <FaWhatsapp className="relative h-8 w-8" />
      </a>
    </div>
  );
}
