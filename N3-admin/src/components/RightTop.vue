<template>
	<div class="right-top">
		<span v-for="(list,index) in lists" v-if="index > 0 && index < lists.length-1">
			<span class="symbol">{{symbol}}</span> <a :href="list.href" >{{list.name}}</a>
		</span>
		<span v-else-if="index == 0">
			{{list.name}}
		</span>
		<span v-else-if="index+1 == lists.length">
			<span class="symbol">{{symbol}}</span><span class="last-title">{{list.name}}</span>
		</span>
	</div>
</template>

<script>
	export default{
		name:"RightTop",
		data(){
			return {
				lists:[
					{name:"用户管理",href:""},
					{name:"用户列表",href:""},
					{name:"用户列表",href:""},
					{name:"用户列表",href:""}
				],
				symbol:'/'
			}
		},
	}
</script>

<style>
</style>