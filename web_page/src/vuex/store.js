import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state={
    loginStatus:false,
    checkMenu:''
}
const mutations = {
    setLoginStatus(state){
        state.loginStatus=!state.loginStatus;
    },
    setmenu (state,path) {
        state.checkMenu=path;
    }
}
const actions = {
    setmenu (context,path){
        context.commit('setmenu',path)
   }
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})