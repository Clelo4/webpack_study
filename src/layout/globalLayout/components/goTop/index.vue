<template>
  <div id="go-top">
    <Icon
      type="ios-arrow-up"
      class="icon"
    />
  </div>
</template>
<script>

export default {
  name: 'goTop',
  props: {},
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
#go-top {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  padding: 0px;
  z-index: 101;

  .icon {
    font-size: 2rem;
    color: #ffffff;
  }
}
</style>
