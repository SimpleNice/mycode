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
			 <n3-nav  :default-active="$route.path"  theme="dark" mode="vertical" router>
				 	<n3-sub-nav v-for="(item, index) in list" :index="item.path" :key="item.id">
        		<template slot="title">{{item.label}}</template>
        	<n3-nav-item v-for="(i, subIndex) in item.list" :index="i.path" :key="i.path">{{i.label}}</n3-nav-item>
      	</n3-sub-nav>
			</n3-nav>
		</div>
	</div>
</template>

<script>
import routes from "../router/routes";
export default {
  name: "LeftMenu",
  data() {
    return {
      name: "落花浅忆曲水流觞",
      list: []
    };
  },
  methods: {
    initMenu() {
      let list = [];
      routes.forEach(item => {
        if (item.menu === false || !item.name || item.show===false) {
          return;
        }
        let children = item.children || [];
        let childList = [];

        children.forEach(child => {
          if (!child.name || child.menu === false  || child.show === false) {
            return;
          }
          childList.push({
            label: (child.meta && child.meta.label) || child.name,
            value: child.name,
            path: child.path,
            icon: child.icon || ""
          });
        });

        let menuItem = {
          show: true,
          label: (item.meta && item.meta.label) || item.name,
          icon: item.icon,
          path: item.path,
          list: childList
        };

        list.push(menuItem);
      });
      this.list = list;
    }
  },
  created() {
    this.initMenu();
  }
};
</script>

<style>

</style>