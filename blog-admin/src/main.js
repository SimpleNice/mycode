// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import atui from 'atui'
import 'atui/dist/greater-blue.css'
import '@/assets/css/public.css'
import 'font-awesome/css/font-awesome.css'
Vue.use(atui)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App,
/*	    vButton: atui.Button,
	    vDatePicker: atui.DatePicker,
	    vBadge: atui.Badge,
	    vTooltip:atui.Tooltip*/
  	}
})