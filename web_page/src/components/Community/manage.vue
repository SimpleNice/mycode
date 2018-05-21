<template>
    <section class="content_tabs community">
        <header>
           <h3>管理我的社区和话题</h3> 
        </header>
        <n3-tabs @change="change" :value="tabsVal">
            <n3-tab header="我的社区"></n3-tab>
            <n3-tab header="我的话题" ></n3-tab>
        </n3-tabs>
        <div class="content_text">
             <router-view @searchTabs="searchTabs"></router-view>
        </div>
    </section> 
</template>
<script>
export default {
  name:'',
  data(){
      return{
          tabsVal:0,
      }
  },
  methods: {
    change(val){
        switch (val) {
            case 0:
                this.$router.push({name:'CommunityMyCommunity'})
                break;
            default:
                this.$router.push({name:'CommunityMyTopic'})
                break;
        }
    },
    searchTabs(val){
        this.tabsVal=val
    },
  }
}
</script>

<style lang="scss" scoped>
.content_text{
    margin-top: 10px;
}
</style>

