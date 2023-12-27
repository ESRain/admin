import Vue from 'vue';
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import VueRouter from 'vue-router'
import router from './router/';
import App from './App.vue';
import store from './store';
import './api/mock'


Vue.use(ElementUI, { locale })
Vue.use(VueRouter)
// Vue.use(vueResource)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
});