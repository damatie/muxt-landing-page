import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A154b',
        primaryLight:'#902694',
        secondary: '#5bb381',
        tertiary: '#e3b34c',
        bluePrimary: '#64c3eb',
        offWhite: '#F8F8FA',
        offBlue: '#F4F7FE',
        bodyText: '#383A47',
        danger:'#F87171',
      },
      keyframes: {
        'zoom-in': {
          '0%': {
            transform: 'scale(.7)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'zoom-in': 'zoom-in .3s ease-in-out',
        'zoom-out': 'zoom-in .3s ease-in-out reverse',
        'fade-up': 'fade-up .5s ease-in-out',
        'fade-in': 'fade-in .5s ease-in-out',
      }
    },
  },
  plugins: [],
}
export default config
