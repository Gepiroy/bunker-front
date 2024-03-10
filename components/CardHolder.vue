<template>
  <div class="card-holder">
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
  border: 1px dotted black;
  padding: 4px;
}
</style>

<script>
export default {
  components: true,
  props: {
    cardsData: Object,
    yourCards: false
  },
};
</script>
