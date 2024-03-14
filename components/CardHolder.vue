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
const num = ref(1)
export default {
  components: true,
  props: {
    cardsData: null,
    yourCards: false,
    glow: false,
  },
  beforeMount(){
    console.log('beforeMount CardHolder with data:',this.cardsData)
  },
  mounted(){
    console.log('mounted CardHolder with data:',this.cardsData)
  }
};
</script>
