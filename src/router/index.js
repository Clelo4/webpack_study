import Vue from 'vue';
import Router from 'vue-router';

const home = () => import('@/page/home');
const login = () => import('@/page/login');
const signup = () => import('@/page/signup');
const globalLayout = () => import('@/layout/globalLayout');
const page401 = () => import('@/page/error-page/401.vue');
const page403 = () => import('@/page/error-page/403.vue');
const page404 = () => import('@/page/error-page/404.vue');
const article = () => import('@/page/article');

const hot = () => import('@/page/hot');
const everyone = () => import('@/page/everyone');

// knowledge
const knowledge = () => import('@/page/knowledge');
const anima = () => import('@/page/knowledge/anima');
const humanities = () => import('@/page/knowledge/humanities');
const live = () => import('@/page/knowledge/live');
const natural = () => import('@/page/knowledge/natural');
const technology = () => import('@/page/knowledge/technology');
const universe = () => import('@/page/knowledge/universe');

// news
const news = () => import('@/page/news');
const academic = () => import('@/page/news/academic');
const politics = () => import('@/page/news/politics');
const tech = () => import('@/page/news/tech');

const question = () => import('@/page/question');

// student
const student = () => import('@/page/student');
const classroom = () => import('@/page/student/classroom');
const competitionInfo = () => import('@/page/student/competitionInfo');
const creativeCommunication = () => import('@/page/student/creativeCommunication');
const note = () => import('@/page/student/note');

// resources
const resources = () => import('@/page/resources');
const threeD = () => import('@/page/resources/3D');
const book = () => import('@/page/resources/book');
const game = () => import('@/page/resources/game');
const image = () => import('@/page/resources/image');
const site = () => import('@/page/resources/site');
const vedio = () => import('@/page/resources/vedio');
// const view = () => import('@/page/resources/view');
const view = () => import('@/page/resources/view');

Vue.use(Router);

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/',
    component: globalLayout,
    redirect: '/home',
    children: [{
      path: 'home',
      component: home,
      name: 'home'
      // meta: {
      //   title: 'Dashboard',
      //   icon: 'dashboard',
      //   affix: true
      // }
    }]
  },
  {
    path: '/article',
    component: globalLayout,
    redirect: '/article/index',
    children: [{
      path: 'index',
      component: article,
      name: 'article'
    }]
  },
  {
    component: login,
    path: '/login',
    name: 'login'
  },
  {
    component: signup,
    path: '/signup',
    name: 'signup'
  },
  {
    component: page401,
    path: '/401',
    name: 'page401'
  },
  {
    component: page403,
    path: '/403',
    name: 'page403'
  },
  {
    component: page404,
    path: '/404',
    name: 'page404'
  },
  {
    path: '/hot',
    component: globalLayout,
    redirect: '/hot/index',
    children: [{
      path: 'index',
      component: hot,
      name: 'hot',
      meta: [{
        name: '热点专题',
        url: '/hot'
      }]
    }]
  },
  {
    path: '/everyone',
    component: globalLayout,
    redirect: '/everyone/index',
    children: [{
      path: 'index',
      component: everyone,
      name: 'everyone',
      meta: [{
        name: '科普大家',
        url: '/everyone'
      }]
    }]
  },
  {
    path: '/knowledge',
    component: globalLayout,
    redirect: '/knowledge/index',
    children: [{
      path: 'index',
      component: knowledge,
      name: 'knowledge',
      meta: [{
        name: '科普知识',
        url: '/knowledge'
      }]
    }, {
      path: 'anima',
      component: anima,
      name: 'anima',
      meta: [{
        name: '科普知识',
        url: '/knowledge'
      }, {
        name: '生命',
        url: '/knowledge/anima'
      }]
    }, {
      path: 'humanities',
      component: humanities,
      name: 'humanities',
      meta: [{
        name: '科普知识',
        url: '/knowledge'
      }, {
        name: '人文',
        url: '/knowledge/humanities'
      }]
    }, {
      path: 'live',
      component: live,
      name: 'live',
      meta: [{
        name: '科普知识',
        url: '/knowledge'
      }, {
        name: '生活',
        url: '/knowledge/live'
      }]
    }, {
      path: 'natural',
      component: natural,
      name: 'natural',
      meta: [{
        name: '科普知识',
        url: '/knowledge'
      }, {
        name: '自然',
        url: '/knowledge/natural'
      }]
    }, {
      path: 'technology',
      component: technology,
      name: 'technology',
      meta: [{
        name: '科普知识',
        url: '/knowledge'
      }, {
        name: '科技',
        url: '/knowledge/technology'
      }]
    }, {
      path: 'universe',
      component: universe,
      name: 'universess',
      meta: [{
        name: '科普知识',
        url: '/knowledge'
      }, {
        name: '宇宙',
        url: '/knowledge/universe'
      }]
    }]
  },
  {
    path: '/news',
    component: globalLayout,
    redirect: '/news/index',
    children: [{
        path: 'index',
        component: news,
        name: 'news',
        meta: [{
          name: '动态新闻',
          url: '/news'
        }]
      }, {
        path: 'academic',
        component: academic,
        name: 'academic',
        meta: [{
          name: '动态新闻',
          url: '/news'
        }, {
          name: '学术资讯',
          url: '/news/academic'
        }]
      },
      {
        path: 'politics',
        component: politics,
        name: 'politics',
        meta: [{
          name: '动态新闻',
          url: '/news'
        }, {
          name: '政策速递',
          url: '/news/politics'
        }]
      },
      {
        path: 'tech',
        component: tech,
        name: 'tech',
        meta: [{
          name: '动态新闻',
          url: '/news'
        }, {
          name: '科技新闻',
          url: '/news/tech'
        }]
      }
    ]
  },
  {
    path: '/question',
    component: globalLayout,
    redirect: '/question/index',
    children: [{
      path: 'index',
      component: question,
      name: 'question',
      meta: [{
        name: '问答专区',
        url: '/question'
      }]
    }]
  },
  {
    path: '/resources',
    component: globalLayout,
    redirect: '/resources/index',
    children: [{
      path: 'index',
      component: resources,
      name: 'resources',
      meta: [{
        name: '数字资源',
        url: '/resources'
      }]
    }, {
      path: '3D',
      component: threeD,
      name: '3D',
      meta: [{
        name: '数字资源',
        url: '/resources'
      }, {
        name: '3D虚拟',
        url: '/resources/3D'
      }]
    }, {
      path: 'book',
      component: book,
      name: 'book',
      meta: [{
        name: '数字资源',
        url: '/resources'
      }, {
        name: '科普书籍',
        url: '/resources/book'
      }]
    }, {
      path: 'game',
      component: game,
      name: 'game',
      meta: [{
        name: '数字资源',
        url: '/resources'
      }, {
        name: '互动游戏',
        url: '/resources/game'
      }]
    }, {
      path: 'image',
      component: image,
      name: 'image',
      meta: [{
        name: '数字资源',
        url: '/resources'
      }, {
        name: '百科图集',
        url: '/resources/image'
      }]
    }, {
      path: 'site',
      component: site,
      name: 'site',
      meta: [{
        name: '数字资源',
        url: '/resources'
      }, {
        name: '相关网站',
        url: '/resources/site'
      }]
    }, {
      path: 'vedio',
      component: vedio,
      name: 'vedio',
      meta: [{
        name: '数字资源',
        url: '/resources'
      }, {
        name: '科普视频',
        url: '/resources/vedio'
      }]
    }, {
      path: 'view',
      component: view,
      name: 'view',
      meta: [{
        name: '数字资源',
        url: '/resources'
      }, {
        name: '科普视界',
        url: '/resources/view'
      }]
    }]
  },
  {
    path: '/student',
    component: globalLayout,
    redirect: '/student/index',
    children: [{
      path: 'index',
      component: student,
      name: 'student',
      meta: [{
        name: '学生专区',
        url: '/student'
      }]
    }, {
      path: 'classroom',
      component: classroom,
      name: 'classroom',
      meta: [{
        name: '学生专区',
        url: '/student'
      }, {
        name: '课外充电站',
        url: '/student/classroom'
      }]
    }, {
      path: 'competitionInfo',
      component: competitionInfo,
      name: 'competitionInfo',
      meta: [{
        name: '学生专区',
        url: '/student'
      }, {
        name: '比赛资讯',
        url: '/student/competitionInfo'
      }]
    }, {
      path: 'creativeCommunication',
      component: creativeCommunication,
      name: 'creativeCommunication',
      meta: [{
        name: '学生专区',
        url: '/student'
      }, {
        name: '创意互动',
        url: '/student/creativeCommunication'
      }]
    }, {
      path: 'note',
      component: note,
      name: 'note',
      meta: [{
        name: '学生专区',
        url: '/student'
      }, {
        name: '笔记分享',
        url: '/student/note'
      }]
    }]
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
