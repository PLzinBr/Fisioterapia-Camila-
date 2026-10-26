# Camila Morais Fisioterapia — Site

Landing page da **Dra. Camila Morais** (CREFITO-3 425916-F): fisioterapia neurofuncional, ortopédica e domiciliar em São Paulo e Caieiras.

**Stack:** React 18 + Vite 5 + Tailwind CSS 3 · ícones `lucide-react` e `react-icons` · sem backend.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist
```

## Deploy na Vercel

1. Em vercel.com → **Add New → Project** → importar este repositório.
2. A Vercel detecta **Vite** sozinha (Build: `npm run build`, Output: `dist`). Só clicar em **Deploy**.
3. Cada push na branch principal publica uma nova versão automaticamente.

## ✅ Checklist ANTES de divulgar o site

Tudo isso fica em `src/config.js` e `src/data/content.js`:

- [ ] **WhatsApp real** em `site.whatsapp` (formato `5511999999999`). Hoje está um número fictício — os botões não funcionam até trocar.
- [ ] **E-mail e horários** reais em `site.email` / `site.hours`.
- [ ] **Fotos**: colocar em `public/images/` e preencher `site.images.hero` e `site.images.about`.
- [ ] **Depoimentos reais** em `testimonials` (com autorização por escrito do paciente) e remover `isExample: true`. Os atuais são ilustrativos e aparecem com o selo "Exemplo ilustrativo".
- [ ] **Formação / cursos** da Camila na seção Sobre (`src/components/About.jsx`).
- [ ] Confirmar se ela atende **neuropediatria** (card "Desenvolvimento Motor Infantil").
- [ ] Imagem de compartilhamento `public/og-image.jpg` (1200×630) e descomentar a tag no `index.html`.

## Estrutura

```
src/
  config.js            ← dados de contato, links, fotos
  data/content.js      ← textos: especialidades, diferenciais, passos, depoimentos
  components/
    Header.jsx         ← navegação + CTA fixo + menu mobile
    Hero.jsx
    Specialties.jsx    ← grid com hover; cada card abre WhatsApp com mensagem do serviço
    About.jsx
    Differentials.jsx  ← diferenciais + "Como funciona"
    Testimonials.jsx   ← carrossel (scroll-snap, swipe no celular)
    Booking.jsx        ← formulário que monta a mensagem e abre o WhatsApp
    Footer.jsx
    FloatingButtons.jsx← Instagram + WhatsApp flutuantes
    Reveal.jsx         ← animação fade-in/slide-up no scroll (IntersectionObserver)
    ImageSlot.jsx      ← foto ou placeholder elegante
```
