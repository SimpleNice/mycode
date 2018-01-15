<template>
  <div>
      <h1>{{msg}}</h1>
      <router-view/>
  </div>
</template>
<script>
export default{
  name: 'Hi',
  data () {
    return {
      msg: 'Hi 落花浅忆'
    }
  },
  created: function () {
    console.log('创建Hi')
  }
}
</script>