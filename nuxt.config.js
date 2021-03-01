// require('dotenv').config()
const isDev = process.env.NODE_ENV !== 'production'

export default {
  // target: 'static',
  // server: {
  //   host: 'https://shkapovka.ru', // default: localhost
  // },
  mode: 'universal',
  ...(!isDev && {
    modern: 'client',
  }),
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    title: 'Шкаповка - база отдыха',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'База для семейного и корпоративного отдыха в Азнакаевском районе',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  rootDir: __dirname,
  router: {
    prefetchLinks: false,
  },

  serverMiddleware: [
    '@/api/index',
    '@/api/rest',
    '@/api/rest-vk',
    '@/api/rest-tg',
  ],

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/vee-validate',
    '@/plugins/vue-screen',
    '@/plugins/silent-box',
    { src: '@/plugins/vue-js-modal.js', mode: 'client' },
    { src: '@/plugins/vue-lazy-load.js' },
    '@/plugins/fslightbox-vue',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  loading: {
    color: '#7D4A48',
    height: '5px',
  },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    [
      'nuxt-mail',
      {
        smtp: {
          host: 'http://localhost',
          port: 1025,
        },
      },
    ],
  ],

  webfontloader: {
    events: false,
    custom: {
      families: ['Theater'],
      urls: ['@/assets/fonts/_fonts.scss'],
    },
    google: {
      families: ['PT+Sans:400,700:cyrillic&display=swap'],
    },
    timeout: 5000,
  },
  styleResources: {
    // your settings here
    scss: ['@/assets/scss/*.scss'], // alternative: scss
    less: [],
    stylus: [],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    credentials: false,
    baseURL: 'https://shkapovka.ru',
  },
  ...(!isDev && {
    axios: {
      credentials: false,
      baseURL: '/',
    },
  }),

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  render: {
    // http2: {
    //     push: true,
    //     pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
    //     .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    //   },
    // compressor: true,
    resourceHints: false,
    // etag: false,
    // static: {
    //   etag: true,
    // },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    optimizeCss: false,
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : 'css/[contenthash].css'),
      img: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
    },
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true,
        },
      },
    }),
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
    optimization: {
      minimize: !isDev,
    },
    ...(!isDev && {
      extractCSS: {
        ignoreOrder: true,
      },
    }),
    transpile: [
      'vee-validate',
      'vue-lazy-hydration',
      'intersection-observer',
      'vee-validate/dist/rules',
    ],
    postcss: {
      plugins: {
        ...(!isDev && {
          cssnano: {
            preset: [
              'advanced',
              {
                autoprefixer: false,
                cssDeclarationSorter: false,
                zindex: false,
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          },
        }),
      },
      ...(!isDev && {
        preset: {
          browsers: 'cover 99.5%',
          autoprefixer: true,
        },
      }),

      order: 'cssnanoLast',
    },
    extend: (config) => {
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
      })
    },
  },
}
