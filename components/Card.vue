<script setup>

</script>

<template>
  <article class="card">
    <h3>{{ cardData.title }}</h3>
    <p>{{ cardData.lore }}</p>
  </article>
</template>

<style scoped>
  .card{
    background: transparent;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
  }
</style>
<script>
export default {
  components: true,
  props: {
    cardData: null
  }
}
</script>