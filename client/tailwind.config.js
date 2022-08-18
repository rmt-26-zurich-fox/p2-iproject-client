/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Dancing Script", "cursive"],
        isi: ['Indie Flower', "cursive"]
    },
  }
  },
  plugins: [],
}
