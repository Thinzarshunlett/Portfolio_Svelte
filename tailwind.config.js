/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Condensed"', 'sans-serif'],
      },
    }
  },
  plugins: []
};