<template>
  <div>
    <articleCategory categoryType=""></articleCategory>
  </div>
</template>
<script>
import category from '@/components/category';

export default {
  name: '',
  props: {},
  data: function () {
    return {
      categoryType: ''
    };
  },
  components: {
    articleCategory: category
  },
  computed: {
  },
  created: function () {
  },
  methods: {
  }
};
</script>

<style scoped lang="stylus"></style>
