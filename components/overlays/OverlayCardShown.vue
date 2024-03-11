<script setup>
import PageOverlay from '../PageOverlay.vue'

</script>

<template>
  <page-overlay>
    <h1>{{ by }} показывает карту:</h1>
    <Card :cardData="cardData"></Card>
  </page-overlay>
</template>

<style scoped>

</style>
<script>
export default {
  components: { PageOverlay },
  props: {
    by: string,
    cardData: String
  },
  mounted(){
    
  }
}
</script>