export default {
  // Target: https://go.nuxtjs.dev/config-target

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Мир красоты",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap-grid.min.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/normalize.css",
    "~/assets/main.scss",
    "~/assets/_media.scss",
    "~/assets/_forms.scss",
    "~/assets/_navs.scss",
    "~/assets/_tabs.scss",
    "~/assets/_socials.scss",
    "~/assets/_brands.scss",
    "~/assets/_header.scss",
    "~/assets/_about.scss",
    "~/assets/_masters.scss",
    "~/assets/_advantages.scss",
    "~/assets/_prices.scss",
    "~/assets/fancybox.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/tabs.js", mode: "client" },
    { src: "~/plugins/contactForm.js", mode: "client" },
    { src: '~plugins/vue-carousel', ssr: false },
    '~/plugins/jquery-fancybox.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@bazzite/nuxt-optimized-images",
  ],

  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ["jpeg", "png", "svg", "webp", "gif"],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: "img-loader",
    mozjpeg: {
      quality: 85,
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8],
    },
    webp: {
      quality: 85,
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "ru",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ["data-src", "src"];
        vue.transformAssetUrls.source = ["data-srcset", "srcset"];
      }
    },
  },
};
