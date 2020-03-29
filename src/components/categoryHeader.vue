<template>
  <div class="category-header">
    <header>
      <div class="title">{{ categoryName }}</div>
      <router-link
        class="more"
        v-show="isMore"
        :to="moreLink"
      >
        <div style="display: flex; justify-content: flex-start; align-items: center">
          <span>更多</span>
          <Icon type="ios-arrow-forward" />
        </div>
      </router-link>
    </header>

  </div>
</template>
<script>

export default {
  name: 'categoryHeader',
  props: {
    categoryName: String,
    isMore: {
      type: Boolean,
      default: false
    },
    moreLink: String
  },
  data: function () {
    return {
    };
  },
  components: {
  },
  computed: {
  },
  created: function () {
  },
  methods: {
  }
};
</script>

<style scoped lang="stylus">
.category-header {
  // border: 1px solid red;
  margin-top: 1rem;
  margin-bottom: 1rem;

  & > header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  & > header > .title {
    // background-color: #FFDC0A;
    background-color: #F76E1E;
    font-size: 1.8rem;
    font-weight: 500;
    color: #ffffff;
    min-width: 10rem;
    max-width: 15rem;
    padding: 8px 10px;
    border-radius: 1px;
    text-align: center;
  }

  & > header > .more {
    font-size: 1em;
    font-weight: 500;
    color: #515a6e;
  }
}
</style>
