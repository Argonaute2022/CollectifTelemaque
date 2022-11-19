/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/pages/**/*.tsx`],
  theme: {
    extend: {
      colors: {
        red: {
          400: `#ff6464`,
        },
        green: {
          200: `#e0ffec`,
          400: `#00fa9a`,
        },
      },
      screens: {
        xs: `420px`,
      },
    },
    fontFamily: {
      sans: [`Oswald`, `sans-serif`],
    },
  },
  plugins: [],
};
