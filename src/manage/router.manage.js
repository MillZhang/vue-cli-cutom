import Vue from 'vue'
import VueRouter from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

//components
const Index = r => require.ensure([], () => r(require('components/Hello')), 'index')
//routes
const BasePath = '';
const routeArray = [{
  path: BasePath + '/',
  name: '首页',
  component: Index
}];

const router = new VueRouter({
  hashbang: true,
  history: true,
  base: __dirname,
  routes: routeArray
});


router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
});

router.afterEach(transition => {
  if (transition.name) {
    document.title = transition.name;
  }
  NProgress.done()
});

export default router
