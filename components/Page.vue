<template>
  <main v-if="gameState">
    <h1>Page!</h1>
    <Card :cardData="gameState.game_state.apocalypse"></Card>
    <p>{{ gameState.game_state.bunker_modificators }}</p>
    <card-holder :cardsData="gameState.game_state.bunker_modificators"></card-holder>

  </main>
</template>

<style>
</style>

<script>
export default {
  data(){
    return {
      gameState: null
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({
    })
    /* Listen for events: */
    this.socket
    .on('game-state', (msg, cb) => {
      /* Handle event */
      console.log(msg)
      this.gameState = msg
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