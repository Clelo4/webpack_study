import Vue from 'vue';
import Router from 'vue-router';

const home = () => import('@/page/home.vue');

Vue.use(Router);

const constantRoutes = [{
  path: '/',
  component: home
}];

const createRouter = () => {
  return new Router({
    mode: 'hash',
    // scrollBehavior: () => {
    //     y: 0
    // },
    routes: constantRoutes
  });
};

const router = createRouter();

export default router;
