export default defineNuxtConfig({
    ssr: false,
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            title: 'Website title',
            htmlAttrs: {
                lang: 'en'
            },
            charset: 'utf-16',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'A good website description' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/placeholder.ico' },
            ]
        }
    },
})
