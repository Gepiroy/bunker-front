<script setup></script>

<template>
  <div class="alert-box">
    <p>Some text here.</p>
  </div>
</template>

<style scoped>
.alert-box {
  background: #ddd;
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
