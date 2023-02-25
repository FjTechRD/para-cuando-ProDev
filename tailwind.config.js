/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        appBlue: '#1B4DB1',
        appYellow: '#F3F234',
        appPink: '#FF64BC',
        appBlack: '#000000',
        appBlackLight: '#1A1E2E',
        appGrayDark: '#6E6A6C',
        appGray: '#A7A6A7',
        appGrayLight: '#D9D9D9',
        appGrayLighter: '#F8F7FA',
        appred: '#EF3F47 ',
      },
      screens: {
        xs: '375px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
    },
  },
  plugins: [],
};
