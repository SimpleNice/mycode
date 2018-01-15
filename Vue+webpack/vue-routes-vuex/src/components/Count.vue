<template>
  <div>
      <h2>{{ msg }}</h2>
      <hr>
      <h2>{{ $store.state.count }}</h2>
      <hr>
      <button @click="$store.commit('add')">加</button>
      <button @click="$store.commit('reduce')">减</button>
  </div>
</template>
<script>
import store from '@/vuex/store'
export default {
  data () {
    return {
      msg: '落花浅忆 Vuex'
    }
  },
  store
}
</script>