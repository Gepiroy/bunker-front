<template>
  <div class="card-holder" :class="{glow: glow}">
    <Card
      v-for="(card, index) in cardsData"
      :key="index"
      :cardData="card"
      :yourCard="yourCards"
    ></Card>
  </div>
</template>

<style scoped>
.card-holder {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  border: 2px dashed black;
  padding: 4px;
  min-height: 300px;
}
.glow {
  background: rgba(255, 255, 0, 0.2);
}
</style>

<script>
export default {
  components: true,
  props: {
    cardsData: Object,
    yourCards: false,
    glow: false
  },
};
</script>
