<script setup>
import socketHandler from '~/services/socketHandler';
</script>

<template>
  <main v-if="game.game_state">
    <Card :cardData="game.game_state.apocalypse"></Card>
    <h1>Бункер:</h1>
    <card-holder :cardsData="game.game_state.bunker_modificators" />
    <h1>Факты:</h1>
    <card-holder :cardsData="game.game_state.facts" />
    <h1>Игроки:</h1>
    <div v-for="(player, index) in game.others" :key="index">
      <h2>{{ player.name + (player.id==game.you.id?' (ты)':'') + (player.isCandidate?'':' (изгнан)') }}</h2>
      <card-holder :cardsData="player.cards" :glow="game.gameStage.type=='turns' && game.gameStage.currentPlayer.id==player.id" />
      <voting-element v-if="game.gameStage.type=='voting'" :player="player"></voting-element>
    </div>
    <h1>Ты (<change-name :current_name="game.you.name" />):</h1>
    <card-holder
      :cardsData="game.you.cards"
      yourCards="true"
      :glow="game.gameStage.type=='turns' && game.gameStage.currentPlayer.id==game.you.id"
    />
    <admin-panel v-if="game.you.id == Object.keys(game.others)[0]" />
    <overlay-card-shown></overlay-card-shown>
    <alerts-layout></alerts-layout>
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
      game: useGameStore(),
    };
  },
  mounted() {
    this.socket = this.$nuxtSocket({ persist: "main" });
    socketHandler(this.socket);
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
