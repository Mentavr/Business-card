/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        tablet: '664px',
        desktop: '1200px',
        'hoverable': {'raw': '(hover: hover)'},
      },
      colors: {
        main: '#0a0a0a',
        gray: '#c7c7c7',
        white: '#fff',
        yellow: '#d3e97a',
        light: {
          black: '#222',
          gray: '#1a1a1a',
        },
        second: {
          gray: '#484848',
        },
        hover: {
          text: 'rgb(170, 165, 165)',
        }
      },
    },
  },
  plugins: [],
};
