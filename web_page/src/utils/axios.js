import axios from 'axios'
import Vue from 'vue'
import { IP , MSG } from './api.js'
import Storage from './storage.js'
import NProgress from 'nprogress'

let http = axios.create({
    baseURL:IP,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      withCredentials: false
})

http.interceptors.request.use((config)=>{
  if(config.appendToken===false){
      return config
  }
  const Token=Storage.getItem('token')
  if (config.method === 'get') {
    config.params ? (config.params.session = Token) : (config.params = {
      session: Token
    })
  } else {
    if (config.data) {
      config.data = config.data + `&session=${Token}`
    } else {
      config.data = `session=${Token}`
    }
  }
  NProgress.start()
  return config
}, (error) => {
  return Promise.reject(error)
})

http.interceptors.response.use(res => {
  NProgress.done()
  /**
   * 响应状态判断
   *
   * 通过 state 进行服务状态的判断
   * 通过 error_message 提取后端提供的错误信息
   * ！实际情况请根据前后端的API规范进行定义
   */
  let data = res.data
  if (!data) {
    return Promise.reject(data.ret_msg || MSG.SERVICE_FAIL)
  }
  return data
}, error => {
  NProgress.done()
  if (error.response) {
    console.error('Response: ', error.response.data)
    console.error('Status: ', error.response.status)
    console.error('Headers: ', error.response.headers)
  } else {
    console.error('Error: ', error.message)
  }
  console.error('Config:', error.config)
  return Promise.reject(error)
})

export default {
  install () {
    Vue.prototype.$http = http
    Vue.http = http
  }
}
