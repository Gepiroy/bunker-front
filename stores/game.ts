export const useGameStore = defineStore("gameStore", {
  state: () => ({
    game_state: null as any,
    game_stage: null as any,
    others: null as any,
    you: null as any,
  }),
  actions: {
    update(gameState: any) {
      this.game_state = gameState.game_state;
      this.game_stage = gameState.game_stage;
      this.others = gameState.others;
      this.you = gameState.you;
    },
    updateDemonstration(dem: any){
      this.game_state!.demonstration = dem;
    }
  },
  getters: {
    getPlayerById: (state) => {
      return (id: string) => {
        if (state.you.id === id) return state.you;
        return state.others[id];
      }
    },
    gameStage(): any{
      return this.game_stage;
    }
  },
});
