<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
        <router-link to="/">hellow</router-link>|
        <router-link to="/Hi">hi</router-link>|
        <!-- 参数传递 2 -->
        <router-link :to="{name:'Hi1',params:{userName:'落花浅忆',ID:888}}" >hi1</router-link>| 
        <router-link to="/Hi/Hi2">hi2</router-link>|
        <router-link to="/Page">Page</router-link>|
        <router-link to="/artive/3333/落花浅忆流年逝">arrtives</router-link>|
        <router-link to="/goHellow">goHellow</router-link>|
        <router-link to="/goArtive/666/落花浅忆流年逝">goArtive</router-link>|
        <router-link to="/lhqy">alias</router-link>|
    </div>
    <!-- 编程式导航 -->
    <p>
      <button @click="goBack">后退</button> 
      <button @click="goPrev">前进</button> 
      <button @click="goHome">回到首页</button> 
    </p>
    <p>
      <!-- 参数传递 1 -->
      {{ $route.name }}
      </p>
      <!-- 动画 -->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>  
    <router-view name="left"/>
    <router-view name="right"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    goPrev () {
      this.$router.go(1)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 1s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity 1s;
}
.fade-leave-to{
  opacity: 0;
}
</style>
