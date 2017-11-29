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
				<v-tooltip content="用户首页" placement="bottom">
					<a href="/" class="badge-count-example fa fa-home first"></a>
				</v-tooltip>
				<v-tooltip content="未读信息" placement="bottom">
					<v-badge :count="1000"><a href="javascript:;" class="badge-count-example fa fa-envelope-o"></a></v-badge>				
				</v-tooltip>
				<v-tooltip content="退出" placement="bottom">
					<a href="javascript:;" class="badge-count-example fa fa-sign-out"></a>
				</v-tooltip>
			</div>
		</div>
		<div class="left-menu">
			<v-menu v-model="menuData" open-one @click.native="click"></v-menu>
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