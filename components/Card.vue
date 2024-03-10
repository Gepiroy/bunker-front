<script setup></script>

<template>
  <article
    class="card"
    :class="{ shown: cardData.show }"
    :style="'border-color: ' + cardType.color + ';'"
    v-on:click="showCard"
  >
    <div class="card-header">
      <h3>{{ cardType.title }}</h3>
    </div>
    <div class="card-content">
      <p>{{ cardData.scheme.lore }}</p>
    </div>
    <div class="card-footer">
      <h3>{{ cardData.scheme.title }}</h3>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: grid;
  grid-template-rows: min-content auto min-content;
  background: transparent;
  border: 8px solid;
  border-radius: 20px;
  width: 200px;
  height: 300px;
  overflow: hidden;
  box-shadow: 1px 2px 4px 0px #000;
}
.card-header {
  display: flex;
  padding: 10px;
  color: #ec0;
  background: #000;
  justify-content: center;
}
.card-content{
  display: flex;
  padding: 10px;
  background: #ec0;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.card-footer {
  display: flex;
  padding: 10px;
  color: #fff;
  background: #000;
  justify-content: center;
}
.shown {
  border-color: #b33f11;
}
.card:hover {
  box-shadow: 0 0 5px 1px #000;
  cursor: pointer;
}
.card-button {
  padding: 6px;
  border-radius: 10px;
  cursor: pointer;
}
</style>
<script>
import CardTypes from "~/game/CardTypes";
export default {
  components: true,
  mounted() {
    this.socket = this.$nuxtSocket({ persist: "main" });
  },
  props: {
    cardData: null,
    yourCard: false,
  },
  computed: {
    cardType() {
      return CardTypes[this.cardData.scheme.type];
    },
  },
  methods: {
    showCard: function () {
      this.socket.emit(
        "shownCard",
        {
          card_id: this.cardData.id,
        },
        (resp) => {
          /* Handle response, if any */
        }
      );
    },
  },
};
</script>
