<template>
  <div
    id="concentration-article"
    class="subject"
  >
    <categoryHeader
      categoryName="精选文章"
      moreLink='/home'
      :isMore=false
    ></categoryHeader>
    <main>
      <Carousel
        autoplay
        v-model="value2"
        loop
        dots='inside'
        autoplay-speed='5000'
        trigger='hover'
        arrow='hover'
        class='carousel-medium'
      >
        <CarouselItem
          v-for="item in articleList"
          v-bind:key="item.id"
          class="item"
        >
          <router-link
            :to="'/article?id=' + item.id +  '&articleType=精选文章' "
            style="color: black; width: 100%; height: 8.5rem;"
          >
            <img
              class="pic"
              :src="publicPath+item.img"
            >
            <span class="title">{{item.title}}</span>
          </router-link>
        </CarouselItem>
      </Carousel>
    </main>
  </div>
</template>
<script>
import categoryHeader from '@/components/categoryHeader';
import { getArticleList } from '@/api/article.js';

export default {
  name: 'concentrationArticle',
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
      getArticleList('精选文章', 4, 1).then(res => {
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

#concentration-article {
  .carousel-medium {
    width: 100%;
    height: 20rem;
    margin: 0 auto;

    .item {
      .pic {
        display: block;
        width: 100%;
        height: 20rem;
        object-fit: cover;
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
</style>
