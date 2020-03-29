<template>
  <div id="bread-crumb">
    <Breadcrumb style="font-size: 1.5rem; weight: 400; line-height: 3.6rem">
      <BreadcrumbItem
        v-for="item in breadcrumbList"
        :key="item.url"
        :to="item.url"
      >
        {{ item.name }}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'NavBreadcrumb',
  components: {
  },
  props: {},
  data: function () {
    return {
    };
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'breadcrumbList'
      // ...
    ])
  },
  created: function () {
  },
  methods: {
  }
};
</script>

<style scoped lang="stylus">
#bread-crumb {
}
</style>
