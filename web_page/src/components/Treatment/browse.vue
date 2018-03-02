<template>
    <section class="content_tabs">
        browse页面
    </section> 
</template>
<script>
    export default{
        name:"treatBrowse",
        props:{
            searchCondition:{
                type:String,
                default:''
            }
        },
        methods:{
            reload(val){
                console.log(val)
            }
        },
        created(){
            this.$emit('searchTabs',1) //改变选中TABS状态标识
            this.$emit('showPage',true) //改变父组件showPage状态,控制页面(搜索,浏览列表,概观)
            this.reload(this.searchCondition)
        },
        watch:{
                searchCondition(){
                    this.reload(this.searchCondition)
                }
            }
    }
</script>