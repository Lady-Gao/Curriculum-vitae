// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import * as store from './utils';
import components from "./components";
import directive from "./directives"


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(components)
Vue.use(directive)
Vue.prototype.store = store

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
