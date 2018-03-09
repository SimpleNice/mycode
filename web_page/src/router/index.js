import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { STORAGE_KEY, MAX_LOGIN_AGE, ADDRESS} from "../utils/const";
import storage from "../utils/storage";
import store from '@/vuex/store'
import NoLogin from '@/utils/noLogin'
Vue.use(Router)

const router= new Router({
  mode: 'history',
  routes:routers
})
router.beforeEach((to,from,next)=>{
  NProgress.start()
  store.dispatch('setmenu',to.matched[0].name) //将路由根目录传入vuex
  if(NoLogin.indexOf(to.matched[0].name)>-1){ //放行登录页面
    return next()
  }
  let lastLogin = storage.getItem(STORAGE_KEY.LAST_LOGIN_TIME) == '' ? 631123200 : storage.getItem(STORAGE_KEY.LAST_LOGIN_TIME)
  if((Date.now()-lastLogin) > MAX_LOGIN_AGE ){
    return next({
      name: 'login'
    })
  }
  store.dispatch('setLoginStatus',true)
  return next()
})
router.afterEach(transition => {
  NProgress.done()
})
export default router