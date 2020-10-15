import { createSEOMeta } from './utils/seo'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static', // also could ber server
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      ...createSEOMeta({
        title: 'insert title here',
        description:
          'insert description here',
        image: '[Insert_NarutoDose_Image_URL]',
        url: process.env.HOST_NAME,
      }),
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['@/assets/scss/_all.scss'],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/test.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/firebase',
    '@nuxtjs/universal-storage'

  ],
  firebase: {
    config: {
      apiKey: process.env.FIREBASE_APIKEY,
      authDomain: process.env.FIREBASE_AUTHDOMAIN,
      databaseURL: process.env.FIREBASE_DATABASEURL,
      projectId: process.env.FIREBASE_PROJECTID,
      storageBucket: process.env.FIREBASE_STORAGEBUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
      appId: process.env.FIREBASE_APPID,
      measurementId: process.env.FIREBASE_MEASUREMENTID
    },
    services: {
      auth: {
        persistence: 'local', // default
        initialize: {
          onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          onAuthStateChangedAction: 'onAuthStateChangedAction'
        },
        ssr: false // default
      },
      firestore: true,
      functions: true,
      storage: false,
      realtimeDb: false,
      messaging: false,
      performance: true,
      analytics: true,
      remoteConfig: true
    }
  },
  storage: {
    // initialState: { userSignedIn: true }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  sitemap: {
    hostname: process.env.HOST_NAME,
    exclude: [
      '/404',
      '/error',
      // '/admin/**'
    ],
    // routes: async () => {
    // const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    // return data.map((user) => `/users/${user.username}`)
    // }
    // options
  },
  styleResources: {
    scss: [
      './assets/scss/_variables.scss', // use underscore "_" & also file extension ".scss"
      './assets/scss/_mediaquery.scss'
    ]
  },
  generate: {
    fallback: true
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: ['gsap'],
  },
}
