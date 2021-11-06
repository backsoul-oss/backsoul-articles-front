export default {
    target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Backsoul articles',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/styles/main',
        'boxicons/css/boxicons.min.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/vue-iconsvg.js', mode: 'client' },
        { src: '~/plugins/vuesax.js', mode: 'client' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/apollo',
    ],

    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: 'https://backsoul-articles-back.herokuapp.com/graphql',
                // httpEndpoint: 'http://localhost:8000/graphql',
            }
        }
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: "http://127.0.0.1:8000/",
        credentials: false,
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}