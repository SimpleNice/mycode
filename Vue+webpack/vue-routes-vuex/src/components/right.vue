<template>
  <div class="right">
      {{msg}}
  </div>
</template>
<script>
export default{
  name: 'right',
  data () {
    return {
      msg: 'right'
    }
  }
}
</script>
<style scoped>
.right{
    height: 300px;
    background-color: blueviolet;
    float: left;
    color: #ffffff;
    width: 600px;
}
</style>
