import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        game: {
          bg: '#f7fbff',
          card: '#ffffff',
          primary: '#4460ff',
          accent: '#ffba2d',
          success: '#10b981',
          warning: '#f97316'
        }
      }
    }
  },
  plugins: []
};

export default config;
