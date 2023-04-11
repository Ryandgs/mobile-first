import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: Object,
    types: Object,
  },
  mutations: {
    setCards(state, newState) {
      state.cards = newState;
    },
    setSeen(state, id) {
      state.cards.find((item, i) => {
        if (item.id === id) {
          state.cards[i].seen = true;

          const lsCard = JSON.parse(localStorage.getItem('cardsLs'));
          lsCard[i].seen = true;
          localStorage.setItem('cardsLs', JSON.stringify(lsCard));
        }

        return 0;
      });
    },
    setTypes(state, newState) {
      state.types = newState;
    },
  },
});
