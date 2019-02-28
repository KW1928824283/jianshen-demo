// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSwiper from 'vue-awesome-swiper'
import Slick from 'vue-slick'
import './assets/iconfont/iconfont.css'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(VueSwiper)
Vue.use(Slick)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
