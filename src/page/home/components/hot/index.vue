<template>
  <div
    id="hot"
    class="subject"
  >
    <categoryHeader
      categoryName="热点专题"
      moreLink='/hot'
      :isMore=false
    ></categoryHeader>
    <main>
      <div
        class="hot-item list-item"
        v-for="item in articleList"
        v-bind:key='item.title'
      >
        <router-link
          :to="'/article?id=' + item.id +  '&articleType=热点专题' "
          style="color: black; width: 100%; height: 8.5rem;"
        >
          <div class='wrapper'>
            <img
              :src="publicPath+item.img"
              style="flex-basis: 12rem; width: 12rem; height: 8rem; flex-shrink: 0; object-fit: cover;"
            >
            <div class="detail">
              <span class="title">{{item.title}}</span>
              <span class="time">{{item.time}}</span>
            </div>
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
import categoryHeader from '@/components/categoryHeader';
import { getArticleList } from '@/api/article.js';

export default {
  name: 'hot',
  props: {},
  data: function () {
    return {
      articleList: []
    };
  },
  components: {
    categoryHeader
  },
  computed: {
  },
  created: function () {
    this.refresh();
  },
  methods: {
    refresh () {
      const _self = this;
      getArticleList('热点专题', 4, 1).then(res => {
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

.list-item {
  .wrapper {
    // border: 1px solid green;
    width: 100%;
    height: 8rem;
    margin-bottom: 4px;
    margin-top: 4px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;

    img {
      width: 12rem;
      height: 8rem;
      display: block;
      object-fit: cover;
    }

    .detail {
      text-align: left;
      padding: 5px;
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      & > * {
        display: block;
      }

      .title {
        flex-grow: 1;
        max-height: 45px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
      }

      .time {
        font-size: 1rem;
      }
    }

    .time {
    }
  }
}
</style>
