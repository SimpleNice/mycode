<template>
  <div>
      <h2>{{ msg }}</h2>
      <hr>
      <h2>{{ count }}</h2>
      <hr>
      <button @click="add(10)">加</button>
      <button @click="reduce">减</button>
      <button @click="addActions()">actions加</button>
      <button @click="reduceActions">actions加减</button>
  </div>
</template>
<script>
import store from '@/vuex/store'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      msg: '落花浅忆 Vuex'
    }
  },
  computed: {
    ...mapState(['count']),
    count () {
      return this.$store.getters.count
    }
  },
  methods: {
    ...mapMutations({
      add: 'add',
      reduce: 'reduce'
    }),
    ...mapActions(['addActions', 'reduceActions'])
  },
  store
}
</script>