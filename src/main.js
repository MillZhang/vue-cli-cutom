// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Loading from 'components/Loading'
import router from './manage/router.manage'

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

let loading = new Vue({
  el: '#help',
  template: '<loading v-show="showLoading"></loading>',
  data: {
    showLoading: false
  },
  components: {
    Loading
  }
});

//拦截器
Vue.http.interceptors.push(function (request, next) {
  loading.showLoading = true
  next(function (response) {
    loading.showLoading = false
    return response
  })
});
