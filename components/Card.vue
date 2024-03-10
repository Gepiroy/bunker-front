<script setup>

</script>

<template>
  <article class="card" :class="{'shown':cardData.show}">
    <h3>{{ cardData.scheme.title }}</h3>
    <p>{{ cardData.scheme.lore }}</p>
    <button v-if="yourCard&&!cardData.show" class="card-button" v-on:click="showCard">Показать</button>
  </article>
</template>

<style scoped>
  .card{
    background: transparent;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    width: 300px;
  }
  .shown{
    border-color: #b33f11;
  }
  .card:hover{
    box-shadow: 0 0 5px 1px #000;
    cursor: pointer;
  }
  .card-button{
    padding: 6px;
    border-radius: 10px;
    cursor: pointer;
  }
</style>
<script>
export default {
  components: true,
  mounted(){
    this.socket = this.$nuxtSocket({persist:'main'});
  },
  props: {
    cardData: null,
    yourCard: false
  },
  methods:{
    showCard: function(){
      this.socket.emit(
        "shownCard",
        {
          card_id: this.cardData.id,
        },
        (resp) => {
          /* Handle response, if any */
        }
      );
    }
  }
}
</script>