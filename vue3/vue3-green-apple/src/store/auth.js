export default {
  state: {
    user: null,
    token: null,
  },

  getters: {
    user: (state) => state.user,
    token: (state) => state.token,
    check: (state) => state.user !== null,
  },

  mutations: {
    setToken(state, { token, remember }) {
      state.token = token;
    },
  },

  actions: {
    saveToken({ commit, dispatch }, payload) {
      commit("setToken", payload);
    },
  },
};
