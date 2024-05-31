/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: { 
      colors: { 
          'color-bg': '#94d7682d', 
          'color-h': '#609966', 
          'color-icon': '#344D67', 
      }, 
  },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}