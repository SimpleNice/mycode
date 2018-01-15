<template>
  <div>
      <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default{
  name: 'Hi2',
  data () {
    return {
      msg: 'Hi2 落花浅忆'
    }
  },
  created: function () {
    console.log('创建Hi2')
  },
  beforeRouteEnter: (to, from, next) => {
    console.log('进入路由页面')
    console.log(to)
    console.log(from)
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('离开路由页面')
    console.log(to)
    console.log(from)
    next()
  }
}
</script>