<script setup>
import socketHandler from "~/services/socketHandler";
</script>

<template>
  <main v-if="game.game_state">
    <article v-if="game.game_state.apocalypse" class="apoc-block">
      <Card :cardData="game.game_state.apocalypse"></Card>
    </article>
    <div class="global-container page-gap">
      <div class="group">
        <section>
          <h1>Бункер:</h1>
          <card-holder :cardsData="game.game_state.bunker_modificators" />
        </section>
        <section>
          <h1>Факты:</h1>
          <card-holder :cardsData="game.game_state.facts" />
        </section>
      </div>
      <section>
        <h1>Игроки:</h1>
        <div class="players-wrapper">
          <player-section
            v-for="(player, index) in game.others"
            :key="index"
            :player="player"
          />
        </div>
      </section>
      <div class="group">
        <h1>Ты (<change-name :current_name="game.you.name" />):</h1>
        <card-holder
          :cardsData="game.you.cards"
          yourCards="true"
          :player="you"
          :glow="
            game.gameStage.type == 'turns' &&
            game.gameStage.currentPlayer.id == game.you.id
          "
        />
      </div>
    </div>
    <admin-panel v-if="game.you.id == Object.keys(game.others)[0]" />
    <overlay-card-shown></overlay-card-shown>
    <alerts-layout></alerts-layout>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  /*background-attachment: fixed;
  background-image: url('~/assets/img/bunker-background.jpg');
  background-size: cover;*/
}
.group {
  background: rgba(128, 128, 128, 0.2);
  border: 1px solid rgba(128, 128, 128, 0.5);
  padding: 10px;
  gap: 10px;
}
.players-wrapper {
  display: flex;
  flex-direction: column;
  padding: 0 0 0 20px;
  gap: 10px;
}
.apoc-block {
  display: flex;
  justify-content: center;
  background: black;
  padding: 60px;
}
.page-gap {
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
