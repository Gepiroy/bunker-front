<script setup>
import PageOverlay from "../PageOverlay.vue";
</script>

<template>
  <page-overlay dem_key="show-card">
    <span v-if="cardData">
      <h1 class="who-is-showing">{{ by.name }} показывает карту:</h1>
      <Card :cardData="cardData"></Card>
      <button v-if="by.id === gameState.you.id" v-bind:onClick="endShow">Завершить показ</button>
    </span>
  </page-overlay>
</template>

<style scoped>
.who-is-showing {
  color: #fff;
}
</style>
<script>
export default {
  components: true,
  data() {
    return {
      gameState: useGameStore(),
      by: null,
      cardData: null,
    };
  },
  mounted() {
    console.log("overlay-card-shown component mounted.");
    const { getPlayerById } = this.gameState;
    this.socket = this.$nuxtSocket({ persist: "main" });
  },
  methods: {
    endShow() {
      this.socket.emit('demonstration', null)
    },
  },
};
</script>
