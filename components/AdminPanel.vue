<script setup></script>

<template>
  <div class="admin-panel">
    <button @click="startGame">Start game</button>
    <button @click="endStage">End stage</button>
    <button @click="skipTurn">Skip turn</button>
  </div>
</template>

<style scoped>
.admin-panel {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px;
  gap: 20px;
  background: #0505;
  border: 2px solid #0205;
}
button {
  padding: 10px 15px;
}
</style>
<script>
export default {
  components: true,
  data() {
    return {
      gameState: useGameStore(),
    };
  },
  mounted() {
    this.socket = this.$nuxtSocket({ persist: "main" });
  },
  methods: {
    startGame() {
      this.socket.emit("start-game");
    },
    endStage() {
      this.socket.emit("end-stage");
    },
    skipTurn() {
      this.socket.emit("skip-turn");
    },
  },
};
</script>
