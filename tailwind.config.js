/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['PT Mono', 'monospace'],
      },

      colors: {
        dirt: '#E2E8F0',
        base: '#94A3B8',
        'midnight-blue': '#1E293B',
        lollipop: '#F472B6',
        grape: '#6366F1',
        independence: '#94A3B8',
        'ocean-blue': '#3B82F6',
        'vista-blue': '#94A3B8',
      },
      maxWidth: {
        project: '800px',
      },
    },
  },
  plugins: [],
}
