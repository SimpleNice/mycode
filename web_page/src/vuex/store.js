import Vue from 'vue'
import Vuex from 'vuex'
import qs from 'qs'
import storage from '@/utils/storage'
import {
    STORAGE_KEY
} from '@/utils/const'
import {LOGIN} from '@/utils/api'
Vue.use(Vuex)
const state={
    loginStatus:false,
    checkMenu:''
}
const SET_USERINFO = 'SET_USERINFO'
const SET_TOKEN = 'SET_TOKEN'
const mutations = {
    setLoginStatus(state,status){
        state.loginStatus=status
    },
    setmenu (state,path) {
        state.checkMenu=path;
    },
    [SET_TOKEN] (state, token) {
        if (token) {
            storage.setItem(STORAGE_KEY.TOKEN, token)
        } else {
            storage.removeItem(STORAGE_KEY.TOKEN)
        }
        storage.setItem(STORAGE_KEY.LAST_LOGIN_TIME, Date.now())
        state.token = token || ''
    }
}
const actions = {
    setmenu (context,path){
        context.commit('setmenu',path)
    },
    login ({ commit }, form){
        return Vue.http.post(LOGIN, qs.stringify(form)).then(data => {
            if(data.ret_code==0){
                commit(SET_TOKEN, data.data.token)
                commit('setLoginStatus',true)
            }
            return data.data
        })
    },
    setLoginStatus (context,status){
        context.commit('setLoginStatus',status)
    },
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})