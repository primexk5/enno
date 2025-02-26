 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 7s infinite',
      },
    },
  },
  plugins: [],
}