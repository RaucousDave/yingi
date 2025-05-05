/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF1DE',
        burnt: '#E5884D',
        sage: '#799F8A',
        highlight: '#FFD58A',
      },
      fontFamily:{
        heading: "DM Serif Display",
        body: "Inter",
      }
    },
  },
  plugins: [],
}

