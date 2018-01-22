<template>
	<div>
		<left-menu></left-menu>
		<div class="right" :style="{ minHeight:screenHeight }">
      <right-top></right-top>
		  <router-view></router-view>
		</div> 
	</div>
</template>

<script>
import LeftMenu from "@/components/LeftMenu"
import RightTop from "@/components/RightTop";
export default {
  name: "Userlist",
  data() {
    return {};
  },
  computed: {
    screenHeight() {
      return window.innerHeight + "px";
    }
  },
  components: {
    leftMenu:LeftMenu,
    rightTop: RightTop
  }
};
</script>

<style>

</style>