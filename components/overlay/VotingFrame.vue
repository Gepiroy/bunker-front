<script setup>
import PageOverlay from "../PageOverlay.vue";
</script>

<template>
  <page-overlay dem_key="vote">
    <h1 class="vote-header">ГОЛОСОВАНИЕ</h1>
    
  </page-overlay>
</template>

<style scoped>
.vote-header {
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
