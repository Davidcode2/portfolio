/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        vrGame1: "url('/assets/View.PNG')",
        vrGame2: "url('/assets/ScenePlane.PNG')",
        vrGame3: "url('/assets/Watergun.PNG')",
        vrGame4: "url('/assets/HandMovements.PNG')",
      },
    },
  },
  plugins: [],
};
