<template>
	<section class="right-top">
    <h4 class="router-name fl">{{ label }}</h4>
		<n3-breadcrumb class="fr router-label">
			<n3-breadcrumb-item  v-for="(item,index) in list" :key="item.id" :active="index == list.length-1">
        <router-link :to="item.path" v-if="item.name!=='System'">
          {{item.meta && item.meta.label || item.name}}
        </router-link>
        <label  v-else>
          {{item.meta && item.meta.label || item.name}}
        </label>
      </n3-breadcrumb-item>
		</n3-breadcrumb>
	</section>
</template>

<script>
import routes from "../router/routes";
export default {
  name: "RightTop",
  data () {
    return {
      list: []
    };
  },
  computed: {
    label:function(){
      return this.$route.meta && this.$route.meta.label || this.$route.name
    }
  },
  methods: {
    getList () {
      this.list = this.$route.matched;
    }
  },
  watch: {
    '$route'(to, from){
      this.getList()
    }
  },
  created () {
    this.getList()
  }
};
</script>

<style>
.n3-breadcrumb .n3-breadcrumb-active a {
    color: #41cac0;
}
</style>