export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    port: 8000,
  },
  modules: ["nuxt-socket-io", "@pinia/nuxt"],
  io: {
    // module options
    sockets: [
      {
        name: "main",
        url: "http://26.215.229.91:81",
        //url: "https://search-anime-subcommittee-ghana.trycloudflare.com",
        default: true,
      },
    ],
  },
  css: ["~/assets/styles/global.css"],
});
