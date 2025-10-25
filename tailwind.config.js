/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Suas pastas de projeto
    "node_modules/flowbite-react/lib/esm/**/*.js" // <-- ADICIONE ESTA LINHA
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  corePlugins: {
    preflight: false,
  }
}
