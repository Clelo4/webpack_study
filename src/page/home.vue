<template>
  <div id="home">
    <span>Hello world!!</span>
    <button @click="click">
      Click Button
    </button>
  </div>
</template>

<script>
// import { a1, fn1 } from '@/utils/a.mjs';
// import { fn1 as Func } from './m1';

export default {
  name: 'Home',
  components: {
  },
  created() {
    // console.log('Apple: ', a1);
    // console.log('fn1: ', fn1());
  },
  methods: {
    click() {
      const { func } = require('./m1');
      func();
    }
  }
};
</script>

<style lang="stylus">
#home {
  font-size: 20px;
  color: red;
  display: block;
  width: 100vw;
  height: 400px;
  background: url('/static/bg.jpg');
}
</style>