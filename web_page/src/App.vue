<template>
  <div id="app">
    <top-view/>
    <router-view/>
    <footer-view/>
  </div>
</template>

<script>
import top from '@/view/Top'
import footer from '@/view/Footer'
export default{
  name: 'App',
  components:{
      TopView:top,
      FooterView:footer
  }
}
</script>
<style lang="scss">
	@import "./src/assets/sass/style.scss";
</style>
