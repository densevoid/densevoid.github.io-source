export default {
  target: 'static',
  buildModules: ['@nuxtjs/tailwindcss'],
  generate: {
    dir: 'docs',
  },

  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap",      
      },   
    ],
    bodyAttrs: {
      class: 'bg-gray-800 font-comfortaa'
    }
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
