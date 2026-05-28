// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt 4 использует compatibilityDate для определения версии
  compatibilityDate: '2024-07-15', // Обновленная дата для Nuxt 4
  
  ssr: false,
  devtools: { enabled: true },
  
  css: ["~/assets/css/main.css"],
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  // Обновление модулей для Nuxt 4 (если доступны обновленные версии)
  modules: [
    "@nuxt/icon",
    "@nuxt/image"
  ],
  
  // Nuxt 4 изменения в app конфигурации
  app: {
    baseURL: '/',
    // buildAssetsDir теперь по умолчанию '_nuxt' в Nuxt 4, но можно изменить
    buildAssetsDir: '/_nuxt/',
    head: {
      title: 'Полиглотствуем',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    },
  },
  
  // Nuxt 4 особенности
  future: {
    compatibilityVersion: 4, // Явно указываем использование Nuxt 4
  },
  
  // Опционально: отключаем экспериментальные features, если нужно
  experimental: {
    // Некоторые настройки для совместимости с Nuxt 4
    sharedPrerenderData: false,
    viteEnvironmentApi: true,
  },
});
