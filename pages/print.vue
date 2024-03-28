<script setup>

</script>

<template>
  <div class="cards" v-if="cardsStore.getAll">
    <PrintableCard v-for="card in cards" :key="card" :cardScheme="card"></PrintableCard>
  </div>
</template>

<style scoped>
.cards{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  background: #fff;
}
</style>
<script>
export default {
  data(){
    return {
      cardsStore: useCardsStore()
    }
  },
  async mounted(){
    this.socket = this.$nuxtSocket({ persist: "main" });
    this.socket.on('all-card-schemes', (msg, cb)=>{
      console.log("got all card schemes:");
      console.log(msg);
      this.cardsStore.setCards(msg);
    });
    this.socket.emit("get-all-card-schemes");
    console.log("sent socket about card schemes?");
  },
  computed: {
    cards(){
      return this.cardsStore.getAllFlat;
    }
  }
}
</script>