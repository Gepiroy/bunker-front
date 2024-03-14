<template>
  <section
    class="player-section"
    :class="{
      banished: !player.isCandidate,
    }"
  >
    <h2>
      {{
        player.name +
        (player.id == game.you.id ? " (ты)" : "") +
        (player.isCandidate ? "" : " (изгнан)")
      }}
    </h2>
    <card-holder
      :cardsData="player.cards"
      :glow="
        game.gameStage.type == 'turns' &&
        game.gameStage.currentPlayer.id == player.id
      "
    />
    <voting-element v-if="game.gameStage.type == 'voting'" :player="player" />
  </section>
</template>

<style scoped>
.player-section {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.banished {
  opacity: 0.5;
}
</style>

<script>
const num = ref(1);
export default {
  components: true,
  data() {
    return {
      game: useGameStore(),
    };
  },
  props: {
    player: null,
  },
  beforeMount() {
    console.log("beforeMount CardHolder with data:", this.cardsData);
  },
  mounted() {
    console.log("mounted CardHolder with data:", this.cardsData);
  },
};
</script>
