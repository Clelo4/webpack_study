const state = {
  homeCarouselTop: [{
    pic: '/static/img/CampFunstonKS-InfluenzaHospital.jpg',
    src: '/home',
    text: '西班牙大流感'
  },
  {
    pic: '/static/img/ai-kp.jpg',
    src: '',
    text: ''
  },
  {
    pic: '/static/img/work.jpg',
    src: '',
    text: ''
  },
  {
    pic: '/static/img/panda.jpg',
    src: '',
    text: ''
  }
  ] // 当前路径
};

const mutations = {
  SET_HomeCarouselTop: (state, homeCarouselTop) => {
    state.homeCarouselTop = homeCarouselTop;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
