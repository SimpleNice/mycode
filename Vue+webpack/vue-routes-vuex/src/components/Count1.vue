<template>
  <div>
      <h2>{{ msg }}</h2>
      <hr>
      <h2>{{ $store.state.a.count }}--{{ count }}</h2>
      <hr>
      <!-- <button @click="add(10)">加</button>
      <button @click="reduce">减</button> -->
      <button @click="add(10)">加</button>
      <button @click="reduce">减</button>
  </div>
</template>
<script>
import store from '@/vuex/store'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      msg: '落花浅忆 Vuex'
    }
  },
  computed: {
    ...mapState({
      count: state => state.a.count
    }),
    ...mapGetters(['count'])
  },
  methods: mapMutations(['add', 'reduce']),
  store
}
</script>