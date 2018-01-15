<template>
  <div class="left">
      {{ msg }}
  </div>
</template>
<script>
    export default{
      name: 'left',
      data () {
        return {
          msg: 'left'
        }
      }
    }
</script>
<style scoped>
    .left{
        background-color: #191f29;
        width: 300px;
        height: 300px;
        color: aliceblue;
        float: left;
    }
</style>
