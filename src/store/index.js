import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ingredients: {},
  },
  mutations: {
    MY_INGREDIENTS(state, payload) {
      state.ingredients = payload;
    },
  },
  getters: {
    getIngredient: (state) => state.ingredients,
  },
});
