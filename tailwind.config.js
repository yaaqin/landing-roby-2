/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(172deg, rgba(118,64,231,1) 26%, rgba(164,143,246,1) 100%)',
      },
    },
  },
  plugins: [],
}

