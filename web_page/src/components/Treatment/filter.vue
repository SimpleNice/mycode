<template>
  <section class="search">
      <div class="line">
          按患者筛选：<n3-select v-model="defaultVal" :options="list" @change="check">
          </n3-select> <br>
          <n3-typeahead 
            async
            v-model="padient"
            placeholder="输入一个条件"
            @change="getResult"
            :items="items"
            :add-format="getValue"
            width="100%"
            class="typeahead"
            >
          </n3-typeahead>
      </div> 
  </section>
</template>
<script>
    export default{
        name:'treatmentFilter',
        props:{
            list:{
                type:Array,
                default:[{value:0,label:'全部'}]
            }
        }, 
        data(){
            return{
                defaultVal:0,
                padient:'',
                items:[]
            }
        },
        methods: {
            check(val){
                this.$emit('change',val)
            },
            getResult(val){
                this.$emit('inputchange',val)
            },
            getValue(val){
                console.log(val)
            }
        }
    }
</script>
<style scope>
    .search{    
        background-color: #bfe5fd;
        width: 100%;
        display: block;
        margin: 0 auto;
        border-bottom: 1px solid #e6e6e6;;
    }
    .line{
        width: 100%;
        max-width: 1366px;
        margin: 0 auto;
        padding: 20px 40px;
    }
    .typeahead{
        margin-top: 10px;
        width: 40%;
    }
</style>
