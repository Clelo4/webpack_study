<template>
  <div class="wrapper-background">
    <div
      id="home"
      class="global_container_1"
    >
      <!-- 首页顶部轮播图 -->

      <Carousel
        v-model="value2"
        autoplay
        loop
        autoplay-speed="3000"
        class="home-carousel-top"
        dots="inside"
        trigger="hover"
        arrow="hover"
      >
        <CarouselItem
          v-for="item in homeCarouselTop"
          :key="item"
        >
          <router-link
            :to="item.src"
            :alt="item.text"
          >
            <img
              :src="publicPath+item.pic"
              style="width: 100%; height: 25rem; object-fit: cover; border-radius: 2px;"
            >
          </router-link>
        </CarouselItem>
      </Carousel>
      <!-- 热点专题 -->
      <hot />
      <!-- 精选文章 -->
      <concentrationArticle />
      <!-- 动态新闻 -->
      <liveNews />
      <!-- 辟谣 -->
      <denyRumor />
    </div>
    <!-- <div style="position: absolute; width: 100%;"> -->
    <!-- <div class="background-mask-before"></div> -->
    <div class="background-mask" />
    <!-- <div class="background-mask-after"></div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { hot, liveNews, denyRumor, concentrationArticle } from './components';

export default {
  name: 'Layout',
  components: { hot, liveNews, denyRumor, concentrationArticle
  },
  props: {},
  data: function () {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'homeCarouselTop'
    ])
  },
  created: function () {
  },
  methods: {
  }
};
</script>

<style scoped lang="stylus">
.wrapper-background {
  position: relative;
  width: 100%;
}

.background-mask {
  background: border-box url('../../assets/img/home-background.jpg') border-box no-repeat local;
  background-size: auto 100%;
  background-position: 0px 0px;
  position: absolute;
  z-index: -10;
  top: 1028px;
  left: 0px;
  width: 100%;
  height: 400px;
}

.background-mask-before {
  background: border-box border-box no-repeat local;
  // background-size: auto 850px;
  // background-position: -100px 1000px;
  background-color: red;
  height: 130px;
  // position: absolute;
  top: 970px;
  left: -50px;
  width: 110%;
  z-index: -9;
  transform: rotate(-10deg);
  transform-origin: center;
  overflow: hidden;
}

.background-mask-after {
  background: border-box border-box no-repeat local;
  // background-size: auto 850px;
  // background-position: -100px 1000px;
  background-color: red;
  height: 150px;
  // position: absolute;
  top: 1750px;
  left: -50px;
  width: 110%;
  z-index: -9;
  transform: rotate(-10deg);
  transform-origin: center;
  overflow: hidden;
}

.home-carousel-top {
  width: 100%;
  height: 25rem;
  // border: 1px solid red;
  border-radius: 2px;
}
</style>
