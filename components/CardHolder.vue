<template>
  <div class="card-holder">
    <Card
      v-for="(card, index) in cardsData"
      :key="index"
      :cardData="card"
    ></Card>
  </div>
</template>

<style scoped>
.card-holder {
  display: flex;
  gap: 10px;
  
}
</style>

<script>
export default {
  components: true,
  props: {
    cardsData: Object,
  },
};
</script>
