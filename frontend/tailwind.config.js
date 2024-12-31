/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yap-yellow-dark': '#fda209',
        'yap-yellow-bright': '#fde60e',
        'yap-red': '#e41d25',
      },
    },
  },
  plugins: [],
}

