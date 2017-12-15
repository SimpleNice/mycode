// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import N3Components from 'N3-components'
import 'N3-components/dist/index.min.css'
import '@/assets/css/public.css'
import 'font-awesome/css/font-awesome.css'

// install N3
Vue.use(N3Components)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
