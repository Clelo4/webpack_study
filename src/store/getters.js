const getters = {
  // token: state => state.user.token
  homeCarouselTop: state => state.carousel.homeCarouselTop,
  cachedViews: state => state.tagsView.cachedViews,
  showGlobalMenu: state => state.globalSetting.showGlobalMenu,
  breadcrumbList: state => state.globalSetting.breadcrumbList
};
export default getters;
