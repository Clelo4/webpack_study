<template>
  <div id="home">
    <span>Hello world!!</span>
    <button @click="click">
      Click Button
    </button>
  </div>
</template>

<script>
import service from '@/utils/request';

export default {
  name: 'Home',
  components: {
  },
  created() {
  },
  methods: {
    click() {
      service.get('/api').then(() => {}).catch((error) => {console.log(error);});
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
}
</style>