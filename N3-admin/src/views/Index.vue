<template>
	<div>
		<left-menu></left-menu>
		<div class="right" :style="{ minHeight:screenHeight }">
		  <router-view></router-view>
		</div> 
	</div>
</template>

<script>
import LeftMenu from "@/components/LeftMenu"
import {STORAGE_KEY ,ADDRESS } from "../utils/const"
import storage from "../utils/storage"
export default {
  name: "index",
  data() {
    return {

    }
  },
  created () {
    if(storage.getItem(STORAGE_KEY.ADDRESS)==null){
      storage.setItem(STORAGE_KEY.ADDRESS,JSON.stringify(ADDRESS))
    }
  },
  computed: {
    screenHeight() {
      return window.innerHeight + "px";
    }
  },
  components: {
    leftMenu:LeftMenu
  }
}
</script>

<style>

</style>