<script setup>
import PageOverlay from "../PageOverlay.vue";
</script>

<template>
  <page-overlay v-if="cardData">
    <h1 class="who-is-showing">{{ by.name }} показывает карту:</h1>
    <Card :cardData="cardData"></Card>
    <button v-if="by.id === gameState.you.id" v-bind:onClick="endShow">Завершить показ</button>
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
    this.socket.on("card-shown", (msg, cb) => {
      console.log("recieved card-shown message on socket:");
      console.log(msg);
      this.by = getPlayerById(msg.by);
      this.cardData = msg.cardData;
      console.log("done.");
    });
    this.socket.on("card-show-ended", (msg, cb) => {
      this.by = null;
      this.cardData = null;
    });
  },
  methods: {
    endShow() {
      this.socket.emit('end-show-card', '')
    },
  },
};
</script>
