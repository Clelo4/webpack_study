<template>
  <div class="article-panel">
    <router-link :to="articleUrl">
      <img :src="publicPath+imgPic">
      <header>
        <span class="title">{{ title }}</span>
        <span class="time">{{ time }}</span>
      </header>
      <main class="detail">
        <span class="text">{{ text }}</span>
      </main>
    </router-link>
  </div>
</template>
<script>

export default {
  name: 'ArticlePanel',
  components: {
  },
  props: {
    imgPic: String,
    title: String,
    time: String,
    text: String,
    tag: String,
    src: String,
    articleType: String
  },
  data: function () {
    return {
    };
  },
  computed: {
    articleUrl () {
      return '/article?id=' + this.src + '&articleType=' + this.articleType;
    }
  },
  created: function () {
  },
  methods: {
  }
};
</script>

<style scoped lang="stylus">
.article-panel {
  background-color: #F2F2F2;
  text-align: left;
  color: #666666;
  margin-bottom: 15px;
  position: relative;
  border-radius: 1 px;
  overflow: hidden;

  img {
    width: 100%;
    height: 20rem;
  }

  header {
    padding-left: 10px;
    padding-right: 10px;
  }

  header .title {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 1.7rem;
    line-height: 1.8rem;
    font-weight: 600;
    display: block;
    color: #2E8CF0;
  }

  header .time {
    font-size: 1.3rem;
    line-height: 1.8rem;
    display: block;
    padding-bottom: 5px;
    color: #828690;
  }

  .detail {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;

    .text {
      font-size: 1.4rem;
      line-height: 1.7rem;
      max-height: 5rem;
      overflow: hidden;
      display: inline-block;
      color: #515a6e;
    }
  }

  .tag {
    position: absolute;
    top: 0;
    right: 0;
    font-weight: 500;

    .ivu-tag {
      margin: 0 !important;

      .ivu-tag-text {
        font;
      }
    }
  }
}
</style>
