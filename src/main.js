import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

var globalMixin = {
  created: () => {},
  computed: {},
  data: function () {
    return {};
  }
};

Vue.mixin(globalMixin);

var vm = new Vue({
  render: h => h(App),
  store: store,
  router: router
}).$mount('#app');

/**
 * Defer the callback to be executed after the next DOM update cycle.
 * Use it immediately after you’ve changed some data to wait for the DOM update.
 * See more https://vuejs.org/v2/api/#Vue-nextTick
 */
Vue.nextTick(function () {});
const env = Object.assign({}, process.env);
console.log(env);
