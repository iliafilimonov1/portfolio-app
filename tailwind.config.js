/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({addComponents}){
      addComponents({
        /** Базовые стили свитчера */
        '.switcher': require('./src/components/ui/Switcher/switcher.config'),
        '.input': require('./src/components/ui/Input/input.config'),
        '.button': require('./src/components/ui/Input/input.config'),
      })
    })
  ],
}