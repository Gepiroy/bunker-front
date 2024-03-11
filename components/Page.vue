<template>
  <main v-if="gameState">
    <h1>Апокалипсис:</h1>
    <Card :cardData="gameState.game_state.apocalypse"></Card>
    <h1>Бункер:</h1>
    <card-holder
      :cardsData="gameState.game_state.bunker_modificators"
    />
    <h1>Игроки:</h1>
    <div v-for="(player, index) in gameState.others" :key="index">
      <h2>{{ player.name }}</h2>
      <card-holder
        :cardsData="rawCards(collectCards(player.cards))"
      />
    </div>
    <h1>Ты (<change-name :current_name="gameState.you.name" />):</h1>
    <card-holder
      :cardsData="rawCards(collectCards(gameState.you.cards))"
      yourCards="true"
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
    this.socket = this.$nuxtSocket({persist: 'main'});
    /* Listen for events: */
    this.socket.on("game-state", (msg, cb) => {
      /* Handle event */
      console.log(msg);
      this.gameState = msg;
    });
  },
  methods: {
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
        ret.push(card)
      });
      return ret;
    }
  },
};
</script>
