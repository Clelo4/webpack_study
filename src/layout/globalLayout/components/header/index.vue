<template>
  <div id="layout-header">
    <div class="top">
      <button
        class="wrapper"
        @click="clickGlobalMenuButton"
      >
        <Icon
          type="md-menu"
          class="menu-button-icon"
        />
      </button>
      <div class="logo">
        <span class="text">科普平台</span>
      </div>
      <button
        class="wrapper"
        style="opacity: 0"
      >
      </button>
    </div>
    <div
      @click="clickGlobalMenuWrapper"
      v-show="showGlobalMenu"
      id="global-menu-wrapper"
      :style="{'background-color': showGlobalMenu ? 'rgba(41, 41, 41, 0.43)' : 'rgba(41, 41, 41, 0)'}"
    >
      <div @click="clickGlobalMenu">
        <ul class="navbar-nav">
          <li>
            <router-link
              to="/home"
              class="li-item"
            >首页</router-link>
          </li>
          <li>
            <router-link
              to="/hot"
              class="li-item"
            >热点专题</router-link>
          </li>
          <li>
            <div
              class="drop-down"
              v-bind:class="{ opened: showMenu1 }"
            >
              <router-link
                to="/news"
                class="li-item"
              >动态新闻</router-link>
              <div
                class="dropdown-open icon"
                @click="showMenu1=!showMenu1"
              >
                <Icon
                  type="md-arrow-dropdown"
                  v-show="!showMenu1"
                />
                <Icon
                  type="md-arrow-dropup"
                  v-show="showMenu1"
                />
              </div>
            </div>
            <ul
              class="dropdown-menu navdown"
              v-show="showMenu1"
            >
              <li>
                <router-link to="/news/tech">科技新闻</router-link>
              </li>
              <li>
                <router-link to="/news/politics">政策速递</router-link>
              </li>
              <li>
                <router-link to="/news/academic">学术资讯</router-link>
              </li>
            </ul>
          </li>
          <li>
            <div
              class="drop-down"
              v-bind:class="{ opened: showMenu2 }"
            >
              <router-link
                to="/knowledge"
                class="li-item"
              >科普知识</router-link>
              <div
                class="dropdown-open icon"
                @click="showMenu2=!showMenu2"
              >
                <Icon
                  type="md-arrow-dropdown"
                  v-show="!showMenu2"
                />
                <Icon
                  type="md-arrow-dropup"
                  v-show="showMenu2"
                />
              </div>

            </div>
            <ul
              class="dropdown-menu navdown"
              v-show="showMenu2"
            >
              <li>
                <router-link to="/knowledge/live">生活</router-link>
              </li>
              <li>
                <router-link to="/knowledge/anima">生命</router-link>
              </li>
              <li>
                <router-link to="/knowledge/natural">自然</router-link>
              </li>
              <li>
                <router-link to="/knowledge/technology">科技</router-link>
              </li>
              <li>
                <router-link to="/knowledge/humanities">人文</router-link>
              </li>
              <li>
                <router-link to="/knowledge/universe">宇宙</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link
              to="/everyone"
              class="li-item"
            >科普大家</router-link>
          </li>
          <li>

            <div
              class="drop-down"
              v-bind:class="{ opened: showMenu3 }"
            >
              <router-link
                to="/resources"
                class="li-item"
              >数字资源</router-link>
              <div
                class="dropdown-open icon"
                @click="showMenu3=!showMenu3"
              >
                <Icon
                  type="md-arrow-dropdown"
                  v-show="!showMenu3"
                />
                <Icon
                  type="md-arrow-dropup"
                  v-show="showMenu3"
                />
              </div>

            </div>
            <ul
              class="dropdown-menu navdown"
              v-show="showMenu3"
            >
              <li>
                <router-link to="/resources/vedio">科普视频</router-link>
              </li>
              <li>
                <router-link to="/resources/image">百科图集</router-link>
              </li>
              <li>
                <router-link to="/resources/book">科普书籍</router-link>
              </li>
              <li>
                <router-link to="/resources/view">科普视界</router-link>
              </li>
              <li>
                <router-link to="/resources/3D">3D虚拟</router-link>
              </li>
              <li>
                <router-link to="/resources/game">互动游戏</router-link>
              </li>
              <li>
                <router-link to="/resources/site">相关网站</router-link>
              </li>
            </ul>
          </li>
          <li>

            <div
              class="drop-down"
              v-bind:class="{ opened: showMenu4 }"
            >
              <router-link
                to="/student"
                class="li-item"
              >学生专区</router-link>

              <div
                class="dropdown-open icon"
                @click="showMenu4=!showMenu4"
              >
                <Icon
                  type="md-arrow-dropdown"
                  v-show="!showMenu4"
                />
                <Icon
                  type="md-arrow-dropup"
                  v-show="showMenu4"
                />
              </div>

            </div>
            <ul
              class="dropdown-menu navdown"
              v-show="showMenu4"
            >
              <li>
                <router-link to="/student/classroom">课外充电站</router-link>
              </li>
              <li>
                <router-link to="/student/competitionInfo">比赛资讯</router-link>
              </li>
              <li>
                <router-link to="/student/creativeCommunication">创意互动</router-link>
              </li>
              <li>
                <router-link to="/student/note">笔记分享</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link
              to="/question"
              class="li-item"
            >问答专区</router-link>
          </li>
          <li>
            <div class="li-item">
              <router-link to="/login">登录</router-link>
              <span>/</span>
              <router-link to="/signup">注册</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'layoutHeader',
  props: {},
  data: function () {
    return {
      showMenu: false,
      showMenu1: false,
      showMenu2: false,
      showMenu3: false,
      showMenu4: false
    };
  },
  components: {
  },
  computed: {
    ...mapGetters(['showGlobalMenu'])
  },
  watch: {
    showGlobalMenu () {
      if (this.showGlobalMenu === false) {
        this.showMenu1 = false;
        this.showMenu2 = false;
        this.showMenu3 = false;
        this.showMenu4 = false;
      }
    }
  },
  created: function () {
  },
  methods: {
    clickGlobalMenuButton () {
      this.$store.commit('globalSetting/setGlobalMenu', !this.showGlobalMenu);
    },
    clickGlobalMenuWrapper (event) {
      // console.log(event);
      this.$store.commit('globalSetting/setGlobalMenu', false);
    },
    clickGlobalMenu (event) {
      event.stopPropagation();
    }
  }
};
</script>

<style scoped lang="stylus">
#layout-header {
  color: #ffffff;
  position: relative;
  width: 100%;

  .top {
    position: fixed;
    left: 0;
    top: 0;
    height: 6rem;
    width: 100%;
    background-color: #013459;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    box-shadow: 0 0 10px #01000F;
    z-index: 100;

    button.wrapper {
      border: 2px solid #ffffff;
      background-color: transparent;
      border-radius: 5px;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    button.wrapper:focus {
      background-color: transparent;
      outline-color: #013459;
      // outline-radius: 5px;
    }
  }

  .logo {
    font-size: 2rem;
  }

  .menu-button-icon {
    color: #ffffff;
    font-size: 3rem;
  }

  .navbar-nav {
    float: none;
    padding: 10px 20px;
    // background: rgba(0, 139, 207, 1);
    background: #023E6A;
    list-style: none;
    position: absolute;
    z-index: 90;
    left: 0;
    top: 60px;
    width: 100%;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);

    // box-shadow: 0 6px 12px red;
    li {
      margin: 0;
      padding: 0;
      position: relative;

      & > .drop-down {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        // border: 2px solid red;
        &.opened {
          background-color: rgba(0, 52, 88, 0.9);
          background-clip: content-box;
        }
      }

      .li-item {
        padding: 10px 2%;
        line-height: 40px;
        width: fit-content;
        display: block;
        color: #ffffff;
        font-size: 1.8rem;
        text-align: left;

        * {
          color: #ffffff;
          font-size: 1.8rem;
          text-align: left;
          line-height: 40px;
        }
      }

      .dropdown-open {
        color: #fff;
        display: block;
        padding: 0 2%;
        height: 60px;
        line-height: 60px;
        text-align: right;
        font-size: 2.3em;
        flex-grow: 1;
      }

      .dropdown-menu {
        width: 100%;
        text-align: center;
        padding: 10px;
        background: #fff !important;
        display: flex;
        flex-wrap: wrap;
        margin: 0 0%;
        border-radius: 1px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);

        li {
          display: block !important;
          width: 33%;
          padding: 8px 0;
          font-size: 1.8rem;
          line-height: 4rem;

          a {
            color: black;
          }
        }
      }
    }
  }

  #global-menu-wrapper {
    min-height: 100vh;
    width: 100%;
    outline: 2px solid red;
    position: fixed;
    z-index: 95;
    overflow: auto;
  }
}
</style>
