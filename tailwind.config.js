module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#1f1f1f',
        secondary: '#fafafa',
        dark: '#252525'
      },
      backgroundImage: {
        hero: "url('./img/background.jpg')",
      },
    },
  },
  plugins: [],
};
