export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    port: 8000,
  },
  modules: ["nuxt-socket-io"],
  io: {
    // module options
    sockets: [
      {
        name: "main",
        url: "http://26.215.229.91:81",
        default: true,
      },
    ],
  },
});
