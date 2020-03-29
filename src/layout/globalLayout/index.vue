<template>
  <div
    id="global-wrapper"
    :style="{overflow: showGlobalMenu ? 'hidden' : 'visible' }"
  >
    <div class="layout">
      <layoutHeader class="header"></layoutHeader>
      <navBreadcrumb class="bread-crumb"></navBreadcrumb>
      <div class="main">
        <keep-alive :include="cachedViews">
          <router-view />
        </keep-alive>
      </div>
      <layoutFooter class="footer"></layoutFooter>
      <BackTop
        :bottom="80"
        :right="20"
      >
        <goTop></goTop>
      </BackTop>
    </div>
  </div>
</template>

<script>
import { layoutHeader, layoutMain, layoutFooter, goTop, navBreadcrumb } from './components';
import { mapGetters } from 'vuex';
export default {
  name: 'globalLayout',
  props: {},
  data: function () {
    return {
    };
  },
  components: {
    layoutHeader,
    layoutFooter,
    goTop,
    navBreadcrumb
  },
  computed: {
    ...mapGetters(['showGlobalMenu']),
    cachedViews () {
      return this.$store.state.tagsView.cachedViews;
    }
  },
  methods: {
  }
};
</script>

<style scoped lang="stylus">
#global-wrapper {
  height: 100vh;
  width: 100vw;
}

.layout {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .header {
    position: fixed;
    width: 100%;
    z-index: 100;
  }

  .bread-crumb {
    margin-top: 8rem;
    margin-bottom: 3rem;
    text-align: left;
    padding: 0px 3rem;
    font-weight: 400;
  }

  .main {
    flex-grow: 1;
  }
}
</style>
