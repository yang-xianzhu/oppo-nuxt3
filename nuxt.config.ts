// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 初始化css
  css: ["normalize.css", "@/assets/css/theme.css", "@/assets/css/global.scss"],
  app: {
    head: {
      title: "OPPO商城-yxz-nuxt3",
      meta: [
        {
          name: "description",
          content:
            "OPPO专区，官方正品，最新最全的OPPO手机产品以及配件在线抢购！",
        },
        {
          name: "keywords",
          content:
            "OPPO专区，官方正品，最新最全的OPPO手机产品以及配件在线抢购！",
        },
      ],
      noscript: [
        {
          children: "您当前的浏览器不支持javascript脚本~",
        },
      ],
    },
  },
  vite: {
    css: {
      // 自动导入variables变量scss
      preprocessorOptions: {
        scss: {
          additionalData: "@use '@/assets/css/variables.scss' as *;",
        },
      },
    },
  },
  modules: ["@pinia/nuxt"],
});
