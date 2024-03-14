export const useGameStore = defineStore("gameStore", {
  state: () => ({
    _game_state: null as any,
    _game_stage: null as any,
    _others: null as any,
    _you: null as any,
  }),
  actions: {
    update(gameState: any) {
      this._game_state = gameState.game_state;
      this._game_stage = gameState.game_stage;
      this._others = gameState.others;
      this._you = gameState.you;
    },
    updateStage(gameStage: any) {
      this._game_stage = gameStage;
    },
    updateDemonstration(dem: any) {
      this._game_state!.demonstration = dem;
    },
  },
  getters: {
    getPlayerById: (state) => {
      return (id: string) => {
        if (state._you.id === id) return state._you;
        return state._others[id];
      };
    },
    game_state(): any {
      return this._game_state;
    },
    gameStage(): any {
      return this._game_stage;
    },
    you(): any {
      return this._you;
    },
    others(): any {
      return this._others;
    },
  },
});
