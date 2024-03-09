<template>
  <h1>Page! {{ pageTitle }}</h1>
</template>

<style scoped></style>

<script>
export default {
  mounted() {
    this.socket = this.$nuxtSocket({
    })
    /* Listen for events: */
    this.socket
    .on('game-state', (msg, cb) => {
      /* Handle event */
      console.log(msg)
    })
  },
  methods: {
    method1() {
      /* Emit events */
      this.socket.emit('message', {
        hello: 'world' 
      }, (resp) => {
        /* Handle response, if any */
      })
    }
  }
}
</script>