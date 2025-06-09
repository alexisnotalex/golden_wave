/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          'golden-primary': '#A14F69',
          'golden-dark': '#1C1821',
          'golden-accent': '#B49341',
          'golden-light': '#FEFEF9',
          'golden-primary-light': '#C97D96',
          'golden-primary-dark': '#7A3B4F',
        },
        fontFamily: {
          'serif': ['Playfair Display', 'serif'],
          'sans': ['Inter', 'sans-serif'],
        },
        animation: {
          'fade-in': 'fadeIn 0.8s ease-in-out',
          'slide-up': 'slideUp 0.6s ease-out',
          'float': 'float 3s ease-in-out infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          slideUp: {
            '0%': { opacity: '0', transform: 'translateY(40px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        },
      },
    },
    plugins: [],
  };