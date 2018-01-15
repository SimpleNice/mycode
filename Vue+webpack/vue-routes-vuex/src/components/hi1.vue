<template>
  <div>
      <h1>{{msg}}>>>>{{ $route.params.userName }}>>>{{ $route.params.ID }}</h1>
  </div>
</template>
<script>
    export default{
      name: 'Hi1',
      data () {
        return {
          msg: 'Hi1 落花浅忆'
        }
      },
      created: function () {
        console.log('创建Hi1')
      }
    }
</script>