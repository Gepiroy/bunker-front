<script setup>
import CardTypes from "~/game/CardTypes";
</script>

<template>
  <article class="person-card" :style="'border-color: ' + color + ';'">
    <p>{{ text }}</p>
  </article>
</template>

<style scoped>
.person-card {
  display: flex;
  background: transparent;
  border: 6px solid;
  border-radius: 10px;
  width: 120px;
  height: 30px;
  font-size: 18px;
  overflow: hidden;
  user-select: none;
  page-break-inside: avoid;
  justify-content: center;
  align-items: center;
}
</style>
<script>
export default {
  components: true,
  mounted() {
    this.socket = this.$nuxtSocket({ persist: "main" });
  },
  props: {
    text: null,
    color: null,
  },
  computed: {
    cardType() {
      return CardTypes[this.cardScheme.type];
    },
    cardContent() {
      return this.cardScheme.lore;
    },
  },
};
</script>
