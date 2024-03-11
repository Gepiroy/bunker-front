<script setup></script>

<template>
  <div v-if="alive" class="overlay shadow">
    <slot></slot>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0px;
}
.shadow {
  background: rgba(0, 0, 0, 0.5);
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
  props: {
    dem_key: {
      type: String
    },
  },
  computed: {
    alive() {
      return this.gameState.game_state.demonstration.type == this.dem_key
    }
  },
};
</script>
