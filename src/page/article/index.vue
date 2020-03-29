<template>
  <div id="article">
    <header>
      <span class="title">{{ article.title }}</span>
      <span class="time">
        <Icon
          type="ios-timer"
          class="icon"
        />
        <span>发布时间：</span>
        {{ article.time }}</span>
    </header>
    <Divider
      class="common-divider"
      style="background-color: #888888cc !important"
    />
    <main>
      {{ article.content }}
    </main>
    <footer>
      <span class="author" />
      <span class="view-count" />

      <div class="tags">
        <div class="title">
          <Icon
            type="md-pricetag"
            class="icon"
          />
          <span>标签：</span>
          <Tag
            size="default"
            checked="false"
            v-for="tagItem in article.tag"
            color="primary"
            :key="tagItem"
            style="color: #2E8CF0 !important"
          >
            {{ tagItem }}
          </Tag>
        </div>
      </div>

      <div class="source">
        <div class="title">
          <Icon
            type="md-albums"
            class="icon"
          />
          <span>來源：</span>
        </div>
        <div
          v-for="source in article.sources"
          :key="source"
          class="source-item"
        >
          <Icon
            type="md-attach"
            class="icon"
          />
          <span>{{ source }}</span>
        </div>
      </div>
    </footer>
    <div class="see-more">
      <categoryHeader
        category-name="推荐文章"
        :is-more="false"
      />
      <div style="background-color: #f76e1e; width: 100%; height: 5px; border-radius: 1px;" />
      <main class="content-list">
        <div
          v-for="item in recommendList"
          :key="item.id"
          class="list-item"
        >
          <router-link
            :to="'/article?id=' + item.id + '&articleType=推荐文章' "
            style="color: black; width: 100%; height: 8.5rem;"
          >
            <div class="wrapper">
              <div style="display: flex;">
                <div
                  class="prefix"
                  style="height: 100%;width: 15px;background-color: #F76E1E;"
                />
                <img
                  :src="publicPath+item.img"
                  style="width: 12rem; height: 8rem;"
                >
              </div>
              <span style="padding: 5px; overflow: hidden;">{{ item.title }}</span>
            </div>
          </router-link>
          <!-- <Divider
            class="common-divider item-margin"
            style="background-color: black !important"
          /> -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { getArticle } from '@/api/article';
import categoryHeader from '@/components/categoryHeader';
import { getArticleList } from '@/api/article.js';

export default {
  name: 'Layout',
  components: {
    categoryHeader
  },
  props: {},
  data: function () {
    return {
      recommendList: [],
      article: {},
      articleId: undefined,
      articleType: undefined
    };
  },
  computed: {
  },
  created: function () {
    this.articleId = this.$route.query.id;
    this.articleType = this.$route.query.articleType;
    this.refresh(this.articleType, this.articleId);
    this.getRecommendList();
  },
  beforeRouteUpdate (to, from, next) {
    this.articleId = this.$route.query.id;
    this.articleType = this.$route.query.articleType;
    this.refresh(this.articleType, this.articleId);
    this.getRecommendList();
    next();
  },
  methods: {
    refresh (articleType, articleId) {
      let _self = this;
      getArticle(articleType, articleId).then((res) => {
        if (res && res.success) {
          _self.article = res.data;
        } else {
          _self.$router.push({ path: '/404' });
        }
      });
    },
    getRecommendList () {
      const _self = this;
      getArticleList('推荐文章', 4, 1).then(res => {
        if (res && res.success) {
          _self.recommendList = res.data.list;
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
#article {
  text-align: left;
  padding: 0px 3rem;

  .icon {
    margin-right: 5px;
  }

  & > header {
    margin-bottom: 2rem;

    & > .title {
      display: block;
      font-size: 2.3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 3.2rem;
    }

    .time {
      display: block;
      color: #2E8CF0 !important;
    }
  }

  main {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 4rem;
    overflow-wrap: break-word;
    overflow: auto;
  }

  footer {
    & > * {
      margin-top: 1rem;
    }

    .tags {
      .title {
        color: #2E8CF0 !important;
      }
    }

    .source {
      color: #2E8CF0 !important;

      .title {
        font-size: 1.4rem;
        line-height: 2rem;
        font-weight: 400;
        margin-bottom: 2px;
        margin-top: 4px;
      }

      .source-item {
        text-indent: 10px;
      }
    }
  }

  .see-more {
    margin-top: 3rem;

    & > header {
      margin-bottom: 1rem;
    }

    & > main {
      margin-top: 1rem;
    }

    .content-list {
      width: 100%;
      height: 40rem;
      background-color: #ffffff;
      margin-bottom: 10px;

      .wrapper {
        // border: 1px solid green;
        width: 100%;
        height: 8rem;
        margin-bottom: 4px;
        margin-top: 4px;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;

        span {
        }
      }
    }
  }
}
</style>
