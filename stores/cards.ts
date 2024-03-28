export const useCardsStore = defineStore("cardsStore", {
  state: () => ({
    _cards: null as any,
  }),
  actions: {
    setCards(cards: any) {
      this._cards = cards;
    },
  },
  getters: {
    getAll(): any {
      console.log("get all");
      return this._cards;
    },
    getAllFlat(): any[] {
      return Object.values(this._cards).flat();
    },
  },
});
