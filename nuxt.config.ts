// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        baseURL: "/Portfolio/", // baseURL: '/<repository>/'
    },
    // extends: "../UITemplates",

    css: ["@/assets/sass/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "~/assets/sass/_variables.scss"',
                },
            },
        },
    },
});
