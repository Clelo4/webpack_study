<template>
  <div
    id="deny-rumor"
    class="subject"
  >
    <header>
      <div class="title">谣言粉碎</div>
    </header>
    <main>
      <div
        class="student-item list-item"
        v-for="item in articleList"
        v-bind:key='item.id'
      >
        <router-link
          :to="'/article?id=' + item.id +  '&articleType=谣言粉碎' "
          style="color: black; width: 100%; height: 8.5rem;"
        >
          <div class='wrapper'>
            <img
              :src="publicPath+item.img"
              style="flex-basis: 11rem; width: 11rem; height: 8rem; flex-shrink: 0; object-fit: cover;"
            >
            <span class="title">{{item.title}}</span>
          </div>
        </router-link>
        <Divider
          class="common-divider item-margin"
          style="background-color: black !important"
        />
      </div>
    </main>
  </div>
</template>
<script>

import { getArticleList } from '@/api/article.js';
export default {
  name: 'denyRumor',
  props: {},
  data: function () {
    return {
      articleList: []
    };
  },
  components: {
  },
  computed: {
  },
  created: function () {
    this.refresh();
  },
  methods: {
    refresh () {
      const _self = this;
      getArticleList('谣言粉碎', 4, 1).then(res => {
        if (res && res.success) {
          _self.articleTotal = res.data.total;
          _self.articleList = res.data.list;
          _self.categoryName = res.data.categoryName;
        } else {
        // that.$Message.error('');
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../common.stylus';

#deny-rumor {
  background-color: #F76E1E;
  margin-bottom: 100px;
  height: 44rem;

  header > .title {
    background-color: transparent !important;
    color: #ffffff !important;
  }

  header > .more {
    color: #ffffff !important;
  }

  main {
    width: 95%;
    margin: 0 auto;
    height: 38rem;
    background-color: #ffffff;
    padding: 8px;

    .wrapper {
      // border: 1px solid green;
      width: 100%;
      height: 8rem;
      margin-bottom: 4px;
      margin-top: 4px;
      display: flex;
      justify-content: flex-start;
      flex-direction: row;

      .prefix {
        height: 100%;
        width: 2rem;
        background-color: #F76E1E;
      }

      img {
        width: 12rem;
        height: 8rem;
        object-fit: cover;
      }

      span.title {
        padding: 5px;
        text-align: left;
      }
    }
  }
}
</style>
