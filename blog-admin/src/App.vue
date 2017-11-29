<template>
  <div id="app">
  	<!-- <top-menu></top-menu>-->
  	<left-menu></left-menu>
    <router-view></router-view>
  </div>
</template>

<script>
	//import TopMenu from "@/components/TopMenu"
	import LeftMenu from "@/components/LeftMenu"
	export default {
	  name: 'app' ,
	  components:{
	  	//TopMenu,
	  	LeftMenu
	  },
	  methods:{
	  	onClick(){
	  		console.log(1);
	  	}
	  }
	}
</script>
