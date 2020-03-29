const state = {
  origin: '' // 当前域名
};

const mutations = {
  SET_ORIGIN: (state, origin) => {
    state.origin = origin;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
