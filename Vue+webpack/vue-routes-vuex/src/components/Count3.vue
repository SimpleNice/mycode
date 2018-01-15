<template>
  <div>
      <h2>{{ msg }}</h2>
      <hr> 
      <h2>{{ count }}</h2>
      <hr>
      <button @click="$store.commit('add',10)">加</button>
      <!-- $store.commit({type:'add',n:10}) -->
      <button @click="$store.commit({type:'reduce'})">减</button>
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
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  store
}
</script>