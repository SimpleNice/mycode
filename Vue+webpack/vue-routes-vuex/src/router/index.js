import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/hi.vue'
import Hi1 from '@/components/hi1.vue'
import Hi2 from '@/components/hi2.vue'
import left from '@/components/left.vue'
import right from '@/components/right.vue'
import artives from '@/components/artive.vue'
import Error from '@/components/404.vue'
import CountView from '@/components/Count.vue'
import CountView1 from '@/components/Count1.vue'
Vue.use(Router)

export default new Router({
    // mode 参数 默认: hasc 带有连接"#"
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
    // 配置子路由
  {
    path: '/Hi',
    component: Hi,
    children: [{
      path: '/',
      name: 'Hi',
      component: Hi
    },
    {
      path: 'Hi1',
      name: 'Hi1',
      component: Hi1
    },
    {
      path: 'Hi2',
      name: 'Hi2',
      component: Hi2
    }]
  },
    // 单页面多路由区域操作
    // 路由钩子函数
  {
    path: '/Page',
    name: 'page',
    components: {
      defaule: HelloWorld,
      left: left,
      right: right
    },
    beforeEnter: (to, from, next) => {
      console.log(to)
      console.log(from)
      // next() 相当于开关
      next()
    }
  },
// Url传第参数
  {
    path: '/artive/:newID(\\d+)/:title',
    component: artives
  },
// 重定向
  {
    path: '/goHellow',
    redirect: '/'
  },
  {
    path: '/goArtive/:newID(\\d+)/:title',
    redirect: '/artive/:newID(\\d+)/:title'
  },
// 别名
  {
    path: '/lhqy',
    component: Hi,
    alias: '/Hi'
  },
  {
    path: '/counts',
    component: CountView
  },
  {
    path: '/counts1',
    component: CountView1
  },
  {
    path: '*',
    component: Error
  }
  ]
})
