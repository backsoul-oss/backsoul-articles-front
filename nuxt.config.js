export default {
    target: 'static',
    ssr: true,
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Backsoul articles',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Articulos creados por @backsoul en github pasando por nuxtjs,django,graphql,aws,docker,etc...', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'copyright', content: 'backsoul' },
            { name: 'keywords', content: 'backsoul, backsoul articles,backsoul github' },
            { name: 'author', content: 'Daniel Steven Sarmiento, danielsarmientoenterprise@gmail.com' },
            {
                hid: 'og:title',
                name: 'og:title',
                content: 'Backsoul Articles',
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://avatars.githubusercontent.com/u/65988584?v=4',
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'Articulos creados por @backsoul en github pasando por nuxtjs,django,graphql,aws,docker,etc...',
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: 'https://backsoul.github.io',
            },
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'article',
            },
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
