import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1366px',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        move: {
          from: { transform: 'translateY(-10px)' },
          to: { transform: 'translateY(10px)' },
        },
      },
      animation: {
        move: 'move 3s infinite ease alternate;',
      }
    },
  },
  plugins: [],
};
export default config;
