<script setup>
import PageOverlay from "../PageOverlay.vue";
</script>

<template>
  <page-overlay dem_key="show-card">
    <h1 v-if="demonstration.by=='server'" class="who-is-showing">Новый модификатор бункера:</h1>
    <h1 v-else class="who-is-showing">{{ by.name }} показывает карту:</h1>
    <Card :cardData="cardData"></Card>
    <button v-if="demonstration.by!='server'&&by.id === gameState.you.id" v-bind:onClick="endShow">Завершить показ</button>
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
      gameState: useGameStore()
    };
  },
  computed: {
    demonstration(){
      return this.gameState.game_state.demonstration
    },
    by(){
      let id = this.demonstration.by
      console.log('by = ',id,'; ret by =',this.gameState.others[id]);
      console.log('others=',this.gameState.others);
      return this.gameState.others[this.demonstration.by]
    },
    cardData(){
      return this.demonstration.extra.cardData
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({ persist: "main" });
  },
  methods: {
    endShow() {
      this.socket.emit('demonstration', null)
    },
  },
};
</script>
