// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  target: 'static',
  router: {
    base: '/KF75-Quiz/'
  },
  generate: {
    dir: 'docs', // 出力先フォルダを 'dist' から 'docs' に変更
    fallback: true, // SPAモード用に404.htmlを生成
  },
});
