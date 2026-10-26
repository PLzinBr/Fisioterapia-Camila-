/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Fundo off-white / gelo
        ivory: { DEFAULT: '#F7F5F0', 100: '#FBFAF7', 200: '#EFEBE3', 300: '#E4DED2' },
        // Azul-petróleo (cor principal, alinhada ao Instagram da Camila)
        petrol: {
          50: '#EEF6F5',
          100: '#D6EAE8',
          200: '#AED4D0',
          300: '#7DB8B3',
          400: '#4C9893',
          500: '#2A7F7A',
          600: '#1C6966',
          700: '#155553',
          800: '#0F4342',
          900: '#0A3130',
        },
        // Verde menta suave (tom de apoio dos posts)
        sage: { 100: '#EAF3EE', 200: '#D3E7DC', 300: '#B5D6C4' },
        // Dourado suave para detalhes
        gold: { 300: '#E6D5AE', 400: '#D4BB85', 500: '#C1A060', 600: '#A6854A' },
        charcoal: { DEFAULT: '#2A2D2E', soft: '#4A4F51', muted: '#6E7476' },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(10, 49, 48, 0.18)',
        lift: '0 24px 60px -18px rgba(10, 49, 48, 0.30)',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.55' },
          '80%, 100%': { transform: 'scale(1.7)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2.2s cubic-bezier(0.2, 0.6, 0.4, 1) infinite',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
