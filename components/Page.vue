<template>
  <main v-if="gameState">
    <h1>Page!</h1>
    <Card :cardData="gameState.game_state.apocalypse"></Card>
    <p>{{ collectCards(gameState.you.cards) }}</p>
    <p>{{ rawCards(collectCards(gameState.you.cards)) }}</p>
    <card-holder
      :cardsData="gameState.game_state.bunker_modificators"
    />
    <card-holder
      :cardsData="rawCards(collectCards(gameState.you.cards))"
    />
  </main>
</template>

<style>
main{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      gameState: null,
    };
  },
  mounted() {
    this.socket = this.$nuxtSocket({});
    /* Listen for events: */
    this.socket.on("game-state", (msg, cb) => {
      /* Handle event */
      console.log(msg);
      this.gameState = msg;
    });
  },
  methods: {
    method1() {
      /* Emit events */
      this.socket.emit(
        "message",
        {
          hello: "world",
        },
        (resp) => {
          /* Handle response, if any */
        }
      );
    },
    collectCards(scope) {
      let ret = [];
      for (let cardarray in scope) {
        for (let card in scope[cardarray]) {
          ret.push(scope[cardarray][card]);
        }
      }
      return ret;
    },
    rawCards(cardArray){
      let ret = [];
      cardArray.forEach(card => {
        ret.push(card.card)
      });
      return ret;
    }
  },
};
</script>
