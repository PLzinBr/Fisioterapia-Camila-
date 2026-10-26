/**
 * Configuração central do site.
 * Tudo que a Camila precisa trocar (telefone, horários, fotos) está aqui —
 * nenhum componente precisa ser editado para isso.
 */
export const site = {
  name: 'Camila Morais',
  tagline: 'Fisioterapia',
  professional: 'Dra. Camila Morais',
  crefito: 'CREFITO-3 425916-F',
  region: 'São Paulo e Caieiras',

  // WhatsApp (formato: 55 + DDD + número, só dígitos)
  whatsapp: '5511984826852',
  phoneDisplay: '(11) 98482-6852',
  whatsappMessage: 'Olá, gostaria de agendar uma avaliação com a Dra. Camila Morais.',

  instagram: 'fisio_camilamorais',

  // TODO: confirmar e-mail real
  email: 'contato@camilamoraisfisio.com.br',
  // Conforme o perfil do WhatsApp Business: atendimento somente com hora marcada
  hours: [{ days: 'Atendimento', time: 'Somente com hora marcada' }],

  /**
   * Fotos: coloque os arquivos em /public/images e preencha os caminhos
   * (ex.: '/images/camila-hero.jpg'). Enquanto vazio, o site mostra
   * um placeholder elegante no lugar.
   */
  images: {
    hero: '',
    about: '',
  },
};

/** Link do WhatsApp com mensagem pronta (opcionalmente personalizada) */
export const whatsappLink = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const instagramLink = `https://www.instagram.com/${site.instagram}/`;

export const navLinks = [
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
];
