const colors = require('tailwindcss/colors')

module.exports = {
    purge: ["./out/**/*.html"],
    theme: {
        colors: {
          gray: colors.blueGray,
          green: colors.green,
        },
        fontFamily: {
          comfortaa: ['Comfortaa', 'sans-serif'],
        },
    },
    variants: {},
    plugins: [],
};