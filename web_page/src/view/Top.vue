<template>
  <section class="top">
      <div class="top-head">
        <div class="logo">
          <a href="/">
            <img src="../assets/logo.png" alt="" srcset="">
          </a>
        </div>
        <div class="oper" v-if="$store.state.loginStatus==false">
          <span class="btn general_btn" @click="login">登录</span>
          <span class="btn mark_btn" @click="reg">注册账号</span>
        </div>
       <div class="oper text" v-else>
          <router-link to="/PersonalCenter/" class="mark_a">落花浅忆</router-link>|
          <a href="#">常见问题</a> |
          <a href="javascript:void(0)" @click="logout">退出</a>
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
import {STORAGE_KEY ,ADDRESSLIST } from "@/utils/const"
import storage from "@/utils/storage"
export default {
  naem: "top",
  data() {
    return {
      list: routers,  
    }
  },
  created() {
  },
  methods: {
    login(){
      this.$router.push({name:'login'})
    },
    reg(){
      this.$router.push({name:'reg'})
    },
    logout(){
      storage.removeItem(STORAGE_KEY.TOKEN)
      storage.removeItem(STORAGE_KEY.LAST_LOGIN_TIME)
      this.$store.dispatch('setLoginStatus',false)
      this.$router.push({name:'Index'})
    }
  }
};
</script>
