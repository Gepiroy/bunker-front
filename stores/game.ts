export const useGameStore = defineStore("gameStore", {
  state: () => ({
    game_state: null as any,
    others: null as any,
    you: null as any,
  }),
  actions: {
    update(gameState: any) {
      this.game_state = gameState.game_state;
      this.others = gameState.others;
      this.you = gameState.you;
    },
    updateDemonstration(dem: any){
      console.log('dem before:')
      console.log(this.game_state.demonstration);
      this.game_state.demonstration = dem;
      console.log("dem after:");
      console.log(this.game_state.demonstration);
    }
  },
  getters: {
    getPlayerById: (state) => {
      return (id: string) => {
        if (state.you.id === id) return state.you;
        return state.others[id];
      }
    },
  },
});
