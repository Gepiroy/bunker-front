<script setup>
import CardTypes from "~/game/CardTypes";
</script>

<template>
  <article
    class="lite printable-card"
    :class="{ apocard: cardScheme.type == 9 }"
    :style="'border-color: ' + cardType.color + ';'"
  >
    <div class="card-header">
      <h3>{{ cardType.title }}</h3>
    </div>
    <div class="printable-card-content">
      <p style="white-space: pre-wrap">{{ cardContent }}</p>
    </div>
    <div class="card-footer">
      <h3>{{ cardScheme.title }}</h3>
    </div>
  </article>
</template>

<style scoped>
.printable-card {
  position: relative;
  display: grid;
  grid-template-rows: min-content auto min-content;
  background: transparent;
  border: 8px solid;
  border-radius: 20px;
  width: 200px;
  min-height: 300px;
  overflow: hidden;
  user-select: none;
  page-break-inside: avoid;
}
.lite {
  width: 150px;
  min-height: 225px;
  font-size: 12px;
}
.lite .card-header {
  font-size: 14px;
  padding: 5px;
}
.lite .card-footer {
  font-size: 12px;
  padding: 5px;
}
.card-header {
  display: flex;
  padding: 10px;
  color: #000;
  background: #eee;
  border: solid black;
  border-width: 0 0 1px 0;
  justify-content: center;
}
.printable-card-content {
  display: flex;
  padding: 10px;
  background: #fff;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.apocard {
  width: 250px;
  min-height: 375px;
}
.apocard .printable-card-content {
  font-size: 12px;
  padding: 12px 2px;
}
.card-footer {
  display: flex;
  padding: 10px;
  color: #000;
  background: #eee;
  border: solid black;
  border-width: 1px 0 0 0;
  justify-content: center;
  text-align: center;
}
</style>
<script>
export default {
  components: true,
  mounted() {
    this.socket = this.$nuxtSocket({ persist: "main" });
  },
  props: {
    cardScheme: null,
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
