import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { STORAGE_KEY, MAX_LOGIN_AGE, ADDRESS} from "../utils/const";
import storage from "../utils/storage";
import getprov from "../utils/getprov"
Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: routes
})
router.beforeEach((to,from,next)=>{
  NProgress.start()
  if(to.name==="login"){
    if (storage.getItem(STORAGE_KEY.ADDRESSLIST)==null){
      getprov.getProv()
    }
    return next()
  }
  let lastLogin = storage.getItem(STORAGE_KEY.LAST_LOGIN_TIME)
  if(Date.now()-lastLogin > MAX_LOGIN_AGE){
    return next({
      name: 'login',
      query: {
        back: to.fullPath
      }
    })
  }
  return next()
})
router.afterEach(transition => {
  NProgress.done()
})
export default router