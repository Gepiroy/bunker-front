<script setup>

</script>

<template>
</template>

<style scoped>

</style>
<script>
export default {
  props: {
    player: null //player data
  },
  data() {
    return {
      game: useGameStore()
    }
  },
  methods: {
    votes(){
      return this.game.gameStage.votes //user_id -> user_id pairs
    }
  }
}
</script>