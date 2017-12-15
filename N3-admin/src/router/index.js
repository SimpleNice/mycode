import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Userlist from '@/views/Userlist'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Index',
			component: Index
		},{
			path: '/userlist',
			name: 'Userlist',
			component: Userlist
		}
	]
})