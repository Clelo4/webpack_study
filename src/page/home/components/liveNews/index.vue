<template>
  <div id="live-news">
    <categoryHeader
      category-name="动态新闻"
      more-link="/home"
      :is-more="false"
    />
    <main>
      <Carousel
        v-model="value2"
        autoplay
        loop
        dots="none"
        autoplay-speed="2000"
        trigger="hover"
        arrow="none"
        class="carousel-medium"
      >
        <CarouselItem
          v-for="item in articleList"
          :key="item.title"
          class="item"
        >
          <router-link
            :to="'/article?id=' + item.id + '&articleType=动态新闻' "
            style="color: black; width: 100%; height: 8.5rem;"
          >
            <img
              class="pic"
              :src="publicPath+item.img"
            >
            <span class="title">{{ item.title }}</span>
            <div class="detail">
              <div class="time">
                <span class="title">时间：{{ item.time }}</span>
              </div>
            </div>
          </router-link>
        </CarouselItem>
      </Carousel>
    </main>
  </div>
</template>
<script>
import { getArticleList } from '@/api/article.js';
import categoryHeader from '@/components/categoryHeader';

export default {
  name: 'LiveNews',
  components: {
    categoryHeader
  },
  props: {},
  data: function () {
    return {
      articleList: []
    };
  },
  computed: {
  },
  created: function () {
    this.refresh();
  },
  methods: {
    refresh () {
      const _self = this;
      getArticleList('动态新闻', 4, 1).then(res => {
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

#live-news {
  margin-top: 8rem;
  margin-bottom: 8rem;

  main {
    .carousel-medium {
      width: 100%;

      // border: 1px solid yellow;
      .item {
        .pic {
          display: block;
          width: 100%;
          height: 20rem;
        }

        .title {
          display: block;
          background-color: #2E8CF0;
          width: 100%;
          padding: 1rem;
          min-height: 5rem;
          color: #ffffff;
          text-align: left;
        }

        .detail {
          display: block;
          text-align: left;
          color: #ffffff;

          div {
            margin-top: 10px;

            .title {
              // color: #221715;
              font-weight: 500;
              background-color: transparent;
            }

            .content {
            }
          }
        }
      }
    }
  }
}
</style>
