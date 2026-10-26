import {
  Accessibility,
  Baby,
  Bone,
  Brain,
  ClipboardList,
  HeartHandshake,
  House,
  ShieldCheck,
  Users,
} from 'lucide-react';

/**
 * Especialidades — baseadas no que a Camila de fato atende
 * (bio e posts do Instagram: neurofuncional, ortopedia, desenvolvimento
 * infantil, prevenção de quedas, órteses, cadeira de rodas, moradia adaptada).
 */
export const specialties = [
  {
    icon: Brain,
    title: 'Fisioterapia Neurofuncional',
    text: 'Reabilitação após AVC, Parkinson, lesões medulares e outras condições neurológicas, com foco em recuperar autonomia nas atividades do dia a dia.',
  },
  {
    icon: Bone,
    title: 'Fisioterapia Ortopédica',
    text: 'Tratamento de dores, pós-operatórios, fraturas e lesões musculoesqueléticas, devolvendo força, mobilidade e confiança no movimento.',
  },
  {
    icon: Baby,
    title: 'Desenvolvimento Motor Infantil',
    text: 'Avaliação e estimulação de bebês e crianças com atraso motor — sentar, engatinhar, ficar em pé e andar — sempre com a família junto.',
  },
  {
    icon: ShieldCheck,
    title: 'Prevenção de Quedas',
    text: 'Treino de equilíbrio, marcha e força para idosos, reduzindo o risco de quedas e de idas ao hospital.',
  },
  {
    icon: Accessibility,
    title: 'Tecnologia Assistiva',
    text: 'Prescrição de cadeira de rodas, órteses e dispositivos auxiliares, além de orientação para adaptar a moradia com segurança.',
  },
  {
    icon: House,
    title: 'Fisio a Caminho',
    text: 'Atendimento domiciliar em São Paulo e Caieiras: o tratamento acontece onde a vida acontece, sem deslocamentos difíceis.',
  },
];

export const differentials = [
  {
    icon: HeartHandshake,
    title: 'Atendimento humanizado',
    text: 'Cada sessão é conduzida com escuta, paciência e respeito ao seu ritmo. Você é tratado como pessoa, não como diagnóstico.',
  },
  {
    icon: ClipboardList,
    title: 'Plano 100% individualizado',
    text: 'Avaliação completa e metas funcionais concretas — como voltar a calçar a meia ou caminhar até a padaria — revisadas a cada etapa.',
  },
  {
    icon: House,
    title: 'No conforto da sua casa',
    text: 'Treinamos no ambiente real do paciente: escadas, banheiro, cama. O que se aprende em casa se mantém em casa.',
  },
  {
    icon: Users,
    title: 'Família e cuidadores juntos',
    text: 'Orientamos quem convive com o paciente para que o cuidado continue entre uma sessão e outra.',
  },
];

export const steps = [
  {
    n: '01',
    title: 'Primeiro contato',
    text: 'Você conta pelo WhatsApp o que está acontecendo. Respondemos dúvidas e combinamos o melhor horário.',
  },
  {
    n: '02',
    title: 'Avaliação completa',
    text: 'Na sua casa, avaliamos movimento, força, equilíbrio e rotina para entender a causa — não só o sintoma.',
  },
  {
    n: '03',
    title: 'Plano e evolução',
    text: 'Você recebe um plano com metas claras e acompanhamos cada conquista, ajustando o tratamento quando necessário.',
  },
];

/**
 * DEPOIMENTOS — ATENÇÃO
 * Os textos abaixo são ILUSTRATIVOS (isExample: true) e aparecem no site
 * com o selo "Exemplo ilustrativo". Publicar depoimentos inventados como se
 * fossem reais engana pacientes e pode violar o Código de Ética do COFFITO.
 *
 * Substitua por depoimentos reais, com autorização por escrito do paciente
 * (TCLE), e remova o `isExample` — o selo some automaticamente.
 */
export const testimonials = [
  {
    isExample: true,
    name: 'Familiar de paciente',
    context: 'Reabilitação pós-AVC',
    text: 'Depois do AVC, meu pai não conseguia nem calçar a meia sozinho. Com paciência e muito carinho, a Camila devolveu a ele a independência que achávamos perdida.',
  },
  {
    isExample: true,
    name: 'Mãe de paciente',
    context: 'Desenvolvimento motor infantil',
    text: 'Estávamos aflitos com o atraso do nosso filho para andar. Ela nos ensinou a estimular em casa e acompanhou cada conquista com a gente.',
  },
  {
    isExample: true,
    name: 'Paciente',
    context: 'Prevenção de quedas',
    text: 'Eu vivia com medo de cair. Hoje ando pela casa e pela rua com muito mais segurança. O atendimento em casa fez toda a diferença.',
  },
  {
    isExample: true,
    name: 'Paciente',
    context: 'Pós-operatório ortopédico',
    text: 'Profissional atenciosa, pontual e muito técnica. Explicou cada exercício e o porquê de cada etapa da minha recuperação.',
  },
];
