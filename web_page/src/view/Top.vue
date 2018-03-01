<template>
  <section class="top">
      <div class="top-head">
        <div class="logo">
          <a href="/">
            <img src="../assets/logo.png" alt="" srcset="">
          </a>
        </div>
        <div class="oper" v-if="$store.state.loginStatus==false">
          <span class="btn general_btn">登录</span>
          <span class="btn mark_btn">注册账号</span>
        </div>
       <div class="oper text" v-else>
          <a class="mark_a" href="#">落花浅忆</a> |
          <a href="#">常见问题</a> |
          <a href="#">退出</a>
        </div>
      </div>
      <div class="top-menu">
        <ul>
          <li v-for="item in list" 
            v-show="item.show && ($store.state.loginStatus==item.logshow || item.logshow==false)" 
            :class="{active:$store.state.checkMenu == item.name}">
            <router-link :to="item.link">{{item.label}}</router-link>
          </li>
        </ul>
      </div>
  </section>
</template>

<script>
import routers from "@/router/routers"
import store from '@/vuex/store'
export default {
  naem: "top",
  data() {
    return {
      list: routers
    }
  },
  store,
  created() {
  }
};
</script>
