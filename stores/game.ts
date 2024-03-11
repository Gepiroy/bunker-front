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
