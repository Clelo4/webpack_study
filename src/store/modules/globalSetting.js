const state = {
  showGlobalMenu: false, // 控制全局菜单显示
  breadcrumbList: [{
    name: '首页',
    url: '/home'
  }]
};

const mutations = {
  setGlobalMenu (state, isShow) {
    state.showGlobalMenu = isShow;
  },
  setbreadcrumbList (state, list) {
    state.breadcrumbList = list;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
