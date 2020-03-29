<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
};
</script>

<style lang="stylus">
@import './assets/common.stylus';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  min-height: 100%;
}

* {
  overflow-wrap: break-word;
}

ul {
  list-style: none;
}
</style>
