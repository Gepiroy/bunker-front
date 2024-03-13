<script setup></script>

<template>
  <article class="vote-line">
    <button @click="doVote">Проголосовать</button>
    <span v-for="(voter, index) in votes" :key="index">{{ voter }}</span>
  </article>
</template>

<style scoped>
.vote-line {
  display: flex;
  gap: 10px;
  padding: 5px;
  background: rgba(0, 0, 255, 0.25);
  align-items: center;
}
.vote-line span{
  padding: 4px;
  background: rgba(0, 255, 255, 0.25);
  user-select: none;
  border-radius: 4px;
  border: 1px solid #007777;
}
</style>
<script>
export default {
  components: true,
  props: {
    player: null, //player data
  },
  data() {
    return {
      game: useGameStore(),
    };
  },
  computed: {
    votes() {
      let ret = [];
      let votes = this.game.gameStage.votes; //user_id -> user_id pairs
      for (let key in votes) {
        if (votes[key] == this.player.id) ret.push(this.game.others[key].name);
      }
      console.log("votes: ", votes, "ret: ", ret);
      return ret;
    },
  },
  mounted(){
    this.socket = this.$nuxtSocket({ persist: "main" });
  },
  methods: {
    doVote(){
      this.socket.emit('vote', {id: this.player.id})
    }
  }
};
</script>
