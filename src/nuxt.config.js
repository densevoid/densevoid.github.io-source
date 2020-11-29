export default {
  target: 'static',

  generate: {
    dir: 'docs',
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      }
    }
  }

}
