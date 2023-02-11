/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#5711c6",

          "secondary": "#4761ef",

          "accent": "#c309f7",

          "neutral": "#29223A",

          "base-100": "#FAF8FB",

          "info": "#589CDF",

          "success": "#42D18E",

          "warning": "#A26510",

          "error": "#E52A36",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
