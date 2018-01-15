import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  count: 1
}
const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count --
  }
}
const getters = {
  // 代码块 ES6()
  count: state => (state.count += 100)
}
const actions = {
  // context 上下文
  addActions (context) {
    context.commit('add', 10)
    setTimeout(() => { context.commit('reduce') }, 5000)
    console.log('我比reduce先执行')
  },
  reduceActions ({commit}) {
    commit('reduce')
  }
}
const moduleA = {
  state,
  mutations,
  getters,
  actions
}
// 暴露state,mutations,getters对象
export default new Vuex.Store({
  // state,
  // mutations,
  // getters,
  // actions
  modules: {a: moduleA}
})
