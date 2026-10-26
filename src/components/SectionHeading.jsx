import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, text, align = 'center', light = false }) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start';
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${light ? 'text-ivory' : ''}`}>{title}</h2>
      {text && <p className={`text-base leading-relaxed ${light ? 'text-ivory/75' : 'text-charcoal-soft'}`}>{text}</p>}
    </Reveal>
  );
}
