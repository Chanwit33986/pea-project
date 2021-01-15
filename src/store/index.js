import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: ""
  },
  getters: {
    getUsername(state) {
      return state.username;
    }
  },
  mutations: {
    setUsername(state, value) {
      state.username = value;
    }
  },
  actions: {
    loginSystem(context, inputUsername) {
      context.commit("setUsername", inputUsername);
    },
    logoutSystem(context) {
      context.commit("setUsername", "");
    }
  },
  modules: {}
});
