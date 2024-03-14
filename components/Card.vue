<script setup></script>

<template>
  <article
    class="card"
    :class="{ shown: cardData.show, apocard: cardData.scheme.type == 9 }"
    :style="'border-color: ' + cardType.color + ';'"
    v-on:click="showCard"
  >
    <div class="card-header">
      <h3>{{ cardType.title }}</h3>
      <div v-if="yourCard">
        <img
          v-if="cardData.show"
          src="~/assets/img/card_icons/status_shown.svg"
          class="card-header__status-icon"
        />
        <img
          v-else
          src="~/assets/img/card_icons/status_unshown.svg"
          class="card-header__status-icon"
        />
      </div>
    </div>
    <div class="card-content">
      <p style="white-space: pre-wrap">{{ cardContent }}</p>
    </div>
    <div class="card-footer">
      <h3>{{ cardData.scheme.title }}</h3>
    </div>
  </article>
</template>

<style scoped>
.card {
  position: relative;
  display: grid;
  grid-template-rows: min-content auto min-content;
  background: transparent;
  border: 8px solid;
  border-radius: 20px;
  width: 200px;
  min-height: 300px;
  overflow: hidden;
  box-shadow: 1px 2px 4px 0px #000;
  user-select: none;
}
.apocard {
  width: 250px;
  min-height: 375px;
  align-self: center;
}
.apocard .card-content {
  font-size: 12px;
  padding: 12px 2px;
}
.card-header {
  display: flex;
  padding: 10px;
  color: #ec0;
  background: #000;
  justify-content: center;
}
.card-header__status-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
}
.card-content {
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
  text-align: center;
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
  data() {
    return {
      game: useGameStore(),
    };
  },
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
    canShowCards() {
      let stage = this.game.gameStage;
      return (
        stage.type == "turns" && stage.currentPlayer.id == this.game.you.id
      );
    },
    cardContent() {
      let cardData = this.cardData;
      if (cardData.scheme.type === 0) {
        let age = cardData.extra.age;
        let gender = cardData.extra.gender;
        let orientation = cardData.extra.orientation;
        let nationality = cardData.extra.nationality;

        let displayGender =
          age <= 20
            ? gender === "male"
              ? "Парень"
              : "Девушка"
            : age <= 60
            ? gender === "male"
              ? "Мужчина"
              : "Женщина"
            : gender === "male"
            ? "Дед"
            : "Бабуля";

        let ret = displayGender + "\n";
        let postfix = "лет";
        if (age > 20 && age % 10 == 1) postfix = "год";
        if (age > 20 && age % 10 > 1 && age % 10 < 5) postfix = "года";
        ret += age + " " + postfix + "\n";
        ret += orientation + "\n";
        ret += nationality;
        return ret;
      }
      return cardData.scheme.lore;
    },
  },
  methods: {
    showCard: function () {
      if (!this.yourCard) return;
      if (!this.canShowCards) return;
      if (this.cardData.show) return;

      this.socket.emit("demonstration", {
        type: "show-card",
        card_id: this.cardData.id,
      });
    },
  },
};
</script>
