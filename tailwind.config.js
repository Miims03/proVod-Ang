/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}", // Modifiez ce chemin selon la structure de votre projet
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('daisyui'),
    ],
  }
  