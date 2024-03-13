<script setup></script>

<template>
  <div class="alerts-layout">

  </div>
</template>

<style scoped>
.alerts-layout {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  top: 0px;
  pointer-events: none;
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
};
</script>
