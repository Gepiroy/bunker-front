<script setup>

</script>

<template>
  <article class="card">
    <h3>{{ title }}</h3>
    <p>{{ lore }}</p>
  </article>
</template>

<style scoped>
  .card{
    background: transparent;
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
  }
</style>
<script>
export default {
  props: {
    title: String,
    lore: String
  }
}
</script>