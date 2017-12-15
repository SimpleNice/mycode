<template>
	<div class="left">
		<div class="left-top">
			<div class="img">
				<img src="../assets/img/weimei_de_fengye-001.jpg"/>
			</div>
			<div class="title">
				<span class="stress">{{name}}</span>
			</div>
			<div class="title" style="margin-top: 20px;">
				<n3-tooltip content="用户首页" placement="bottom" trigger="hover">
 					<a href="/" class="fa fa-home first"></a>
				</n3-tooltip>
				<n3-tooltip content="未读信息" placement="bottom" trigger="hover">
					<a href="javascript:;"><n3-button badge="2" class="fa fa-envelope-o"></n3-button></a>
				</n3-tooltip>
				<n3-tooltip content="退出" placement="bottom" trigger="hover">
 					<a href="javascript:;" class="fa fa-sign-out last"></a>
				</n3-tooltip>
			</div>
		</div>
		<div class="left-menu">
			<n3-nav  :default-active="2"  theme="dark" mode="vertical" @select="handleSelect">
				<n3-nav-item index="1">用户列表</n3-nav-item>
				<n3-sub-nav index="2">
				<template slot="title">导航二</template>
				<n3-nav-item index="2-1">选项1</n3-nav-item>
				<n3-nav-item index="2-2">选项2</n3-nav-item>
				<n3-nav-item index="2-3">选项3</n3-nav-item>
				</n3-sub-nav>
				<n3-nav-item index="3"><a href="#" target="_blank">导航三</a></n3-nav-item>
			</n3-nav>
		</div>
	</div>
</template>

<script>
export default {
  name: 'LeftMenu',
  data () {
    return {
      name:"落花浅忆曲水流觞",
      menuData:[
		  {
		    type: 'SubMenu',
		    title: '用户管理',
		    uuid: 'sub2',
		    children: [
		      {
		        type: 'MenuItem',
		        uuid: '5',
		        content: '<a href="#/userlist">用户列表</a>'
		      },
		      {
		        type: 'MenuItem',
		        uuid: '6',
		        content: '新增用户'
		      },
		      {
		        type: 'MenuItem',
		        uuid: '7',
		        content: '角色管理'
		      }]
		  },
		  {
		    type: 'SubMenu',
		    title: '订单管理',
		    uuid: 'sub3',
		    children: [
		      {
		        type: 'MenuItem',
		        uuid: '8',
		        content: '订单列表'
		      },
		      {
		        type: 'MenuItem',
		        uuid: '9',
		        content: '订单统计'
		      },
		      {
		        type: 'MenuItem',
		        uuid: '10',
		        content: '图表信息'
		      }]
		  }
		]
    }
  },
  methods:{
  	click(e,d) {
      console.log('menu-click',e,d)
    }
  }
}
</script>

<style>
</style>