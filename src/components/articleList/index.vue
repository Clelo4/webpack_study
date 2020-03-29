<template>
  <div class="global_container_1">
    <categoryHeader
      :category-name="categoryName"
      :more-link="moreLink"
      :is-more="true"
    />
    <main class="article-list">
      <articlePanel
        v-for="item in articleList"
        class="list-item"
        :key="item"
        :img-pic="item.img"
        :title="item.title"
        :time="item.time"
        :text="item.content"
        :tag="item.tag"
        :src="item.id"
        :article-type="articleType"
      />
    </main>
    <footer
      v-show="showFooterPage"
      class="page-footer"
    >
      <Page
        :total="articleTotal"
        show-total
        :page-size="pageSize"
        @on-change="changePageNumber"
        :simple="true"
      />
    </footer>
  </div>
</template>
<script>
import articlePanel from '@/components/articlePanel';
import categoryHeader from '@/components/categoryHeader';
import { getArticleList } from '@/api/article.js';

export default {
  name: 'ArticleList',
  components: {
    articlePanel,
    categoryHeader
  },
  props: {
    isMore: {
      type: Boolean,
      default: false
    },
    moreLink: String,
    articleType: String, // 文章类型
    pageSize: {// 每页数量
      type: Number,
      default: 10
    },
    showFooterPage: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      articleTotal: 100, // 文章总数,
      pageNumber: 1, // 页码,
      categoryName: '', // 文章类别名称
      articleList: []
    };
  },
  computed: {
  },
  created: function () {
    this.refresh();
  },
  methods: {
    changePageNumber (number) {
      this.pageNumber = number;
      this.refresh();
    },
    refresh () {
      const _self = this;
      getArticleList(_self.articleType, _self.pageSize, _self.pageNumber).then(res => {
        
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
#category {
}
</style>
