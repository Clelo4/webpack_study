<template>
  <div class="">
    <articleList
      v-for="item in categoryList"
      :key="item.name"
      :show-footer-page="false"
      :page-size="3"
      :article-type="item.name"
      :more-link="currentPath + '/' + item.eng"
      :is-more="true"
      style="margin-bottom: 50px;"
    />
  </div>
</template>
<script>
import articleList from '@/components/articleList';
import { getCategory } from '@/api/article.js';

export default {
  name: 'Category',
  components: {
    articleList
  },
  // props: {
  //   // 一级类别
  //   categoryType: String
  // },
  data: function () {
    return {
      categoryList: [],
      categoryType: undefined,
      currentPath: undefined
    };
  },
  computed: {
  },
  created: function () {
    this.categoryType = this.$route.meta[this.$route.meta.length - 1].name;
    this.currentPath = '/' + this.$route.name;
    this.refresh();
  },
  beforeRouteUpdate (to, from, next) {
    if (this) { this.categoryType = this.$route.meta[this.$route.meta.length - 1].name; }
    this.refresh();
    next();
  },
  methods: {
    refresh () {
      const _self = this;
      getCategory(_self.categoryType).then(res => {
        if (res && res.success) {
          _self.categoryList = res.data.categoryList;
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
