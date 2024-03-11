<script setup></script>

<template>
  <main v-if="gameState.game_state">
    <h1>Апокалипсис:</h1>
    <Card :cardData="gameState.game_state.apocalypse"></Card>
    <h1>Бункер:</h1>
    <card-holder :cardsData="gameState.game_state.bunker_modificators" />
    <h1>Игроки:</h1>
    <div v-for="(player, index) in gameState.others" :key="index">
      <h2>{{ player.name }}</h2>
      <card-holder :cardsData="rawCards(collectCards(player.cards))" />
    </div>
    <h1>Ты (<change-name :current_name="gameState.you.name" />):</h1>
    <card-holder
      :cardsData="rawCards(collectCards(gameState.you.cards))"
      yourCards="true"
    />
    <overlay-card-shown :by="cardShown_by" :cardData="cardShown_card"></overlay-card-shown>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      cardShown_by: null,
      cardShown_card: null,
      gameState: useGameStore(),
    };
  },
  mounted() {
    this.socket = this.$nuxtSocket({ persist: "main" });
    this.socket.on("game-state", (msg, cb) => {
      console.log("recieved game-state message on socket:");
      console.log(msg)
      this.gameState.update(msg);
      console.log("game state updated.");
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
    rawCards(cardArray) {
      let ret = [];
      cardArray.forEach((card) => {
        ret.push(card);
      });
      return ret;
    },
  },
};
</script>
