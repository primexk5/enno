 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'bounce-custom': 'bounce-custom 3s infinite ease-in-out',
      },
      keyframes: {
        'bounce-custom': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
    },
  },
  plugins: [],
}}