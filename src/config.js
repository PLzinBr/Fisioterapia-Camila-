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

  // TODO: substituir pelo WhatsApp real (formato: 55 + DDD + número, só dígitos)
  whatsapp: '5511900000000',
  whatsappMessage: 'Olá, gostaria de agendar uma avaliação com a Dra. Camila Morais.',

  instagram: 'fisio_camilamorais',

  // TODO: confirmar e-mail e horários reais
  email: 'contato@camilamoraisfisio.com.br',
  hours: [
    { days: 'Segunda a sexta', time: '8h às 19h' },
    { days: 'Sábado', time: '8h às 12h' },
  ],

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
