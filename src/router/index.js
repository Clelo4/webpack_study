import Vue from 'vue';
import Router from 'vue-router';

const login = () => import('@/page/login');
const signup = () => import('@/page/signup');

Vue.use(Router);

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    component: login,
    path: '/login',
    name: 'login'
  },
  {
    component: signup,
    path: '/signup',
    name: 'signup'
  }
];

const createRouter = () => new Router({
  mode: 'hash',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
});

const router = createRouter();

export default router;
