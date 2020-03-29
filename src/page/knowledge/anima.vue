<template>
  <div>
    <articleList
      :articleType="articleType"
      :isMore=false
    ></articleList>
  </div>
</template>
<script>
import articleList from '@/components/articleList';

export default {
  name: '',
  props: {},
  data: function () {
    return {
      articleType: ''
    };
  },
  components: {
    articleList
  },
  computed: {
  },
  created: function () {
    this.articleType = this.$route.meta[this.$route.meta.length - 1].name;
  },
  beforeRouteUpdate (to, from, next) {
    if (this) { this.articleType = this.$route.meta[this.$route.meta.length - 1].name; }
    next();
  },

  methods: {
  }
};
</script>

<style scoped lang="stylus"></style>
