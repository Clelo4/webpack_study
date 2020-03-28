const state = {
  test: '',
  count: 0
};

const mutations = {
  SET_TEST: (state, value) => {
    state.test = value;
  },
  increment(state) {
    state.count++;
  }
};

const actions = {
  increment(context) {
    context.commit('increment');
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
