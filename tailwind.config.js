/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'principal': '#c4dbe0',
      },
      fontSize: {
        'responsive': ['clamp(8rem, 25vw, 24.6vw)'],
        'screenX': ['clamp(6rem, 32vw,  31vw)'],
        'subtitle': ['clamp(24px, 2.5vw,  3vw)'],
        'h4responsive': ['clamp(24px, 1.8vw, 2vw)'],
        'time': ['clamp(15px, 1.2vw,  2vw)']
      },
    },
  },
  plugins: [],
}

