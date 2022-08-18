/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineClamp: {
        8: "8"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
