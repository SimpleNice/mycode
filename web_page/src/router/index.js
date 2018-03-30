import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { STORAGE_KEY, MAX_LOGIN_AGE, ADDRESSLIST} from "../utils/const";
import storage from "../utils/storage";
import store from '@/vuex/store'
import NoLogin from '@/utils/noLogin'
import getprov from "@/utils/getprov"
Vue.use(Router)

const router= new Router({
  mode: 'history',
  routes:routers
})
router.beforeEach((to,from,next)=>{
  NProgress.start()
  store.dispatch('setmenu',to.matched[0].name) //将路由根目录传入vuex
  let lastLogin = storage.getItem(STORAGE_KEY.LAST_LOGIN_TIME) == '' ? 631123200 : storage.getItem(STORAGE_KEY.LAST_LOGIN_TIME)
  if(ADDRESSLIST.length==0 && storage.getItem(STORAGE_KEY.ADDRESSLIST)==null){
    getprov.getProv()
  }else if(storage.getItem(STORAGE_KEY.ADDRESSLIST)==null){
    storage.setItem(STORAGE_KEY.ADDRESSLIST,JSON.stringify(ADDRESSLIST))
  }
  if((Date.now()-lastLogin) <= MAX_LOGIN_AGE){
    store.dispatch('setLoginStatus',true)
    return next()
  }else{
    if(NoLogin.indexOf(to.matched[0].name)>-1){
      return next()
    }else{
      store.dispatch('setLoginStatus',false)
      return next({
        name: 'login'
      })
    } 
  }
  return next()
})
router.afterEach(transition => {
  NProgress.done()
})
export default router