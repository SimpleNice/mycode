<template>
  <section class="search">
      <div class="line">
           转到&nbsp;&nbsp;<n3-select v-model="defaultVal" :options="list" @change="check" width="360px"></n3-select>
           <router-link to="/community/manage" class="btn">管理我的社区和话题</router-link>
           <router-link to="/community/codeOfConduct" class="btn">行为守则</router-link>
      </div> 
  </section>
</template>
<script>
export default{
    name:'conmmunityTop',
    props:{
        list:{
            type:Array,
            default:[{value:1,label:'中医助乐'}]
        }
    }, 
    data(){
        return{
            defaultVal:1
        }
    },
    methods: {
        check(val){
            this.$emit('change',val)
        }
    }
}
</script>
<style scoped>
    .search{    
        background-color: #ececec;
        width: 100%;
        display: block;
        margin: 0 auto;
        border-bottom: 1px solid #e6e6e6;;
    }
    .line{
        width: 100%;
        max-width: 1366px;
        margin: 0 auto;
        padding: 25px;
    }
    .btn{
        margin-left: 30px;
        color: #616161;
        font-weight: 600;
    }
    .btn:hover{
        background-color: rgba(219, 253, 240, 0.774);
    }
</style>
