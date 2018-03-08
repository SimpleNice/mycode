<template>
    <section class="content">
        <treat-filter :list="list" @change="changeSick" @inputChange="inputChange"/>
        <h3 style="max-width: 1366px;margin: 0 auto;padding: 20px 0px 5px;color:#414141;">{{title}}</h3>
        <section class="content_text box_show">
            <n3-tabs @change="change" :value="tabsVal" v-show="showPage">
                <n3-tab header="搜索"></n3-tab>
                <n3-tab header="浏览列表" ></n3-tab>
            </n3-tabs>
            <n3-tabs :value="tabsVal" v-show="!showPage">
                <n3-tab header="概观"></n3-tab>
            </n3-tabs>
            <router-view @showPage="setShowPage" @setTitle="setTitle" :searchCondition="searchCondition" @searchTabs="searchTabs"></router-view>
        </section>
    </section>
</template>
<script>
import treatFilter from '@/components/Treatment/filter'
import Storage from '@/utils/storage'
import NProgress from 'nprogress'
export default{
    name:'Treatment',
    data(){
        return {
            loading:false,
            showPage:true,//控制显示治疗评估报告详情
            tabsVal:0,
            title:'治疗',
            list:[
                //需加上登录判断.如果登录则获取用户添加的标签,否则为空,用户输入搜索条件时,该数组选中用户输入的搜索条件
                {value:'',label:'全部'},
                {value:'胃癌',label:'胃癌'},
                {value:'肝癌',label:'肝癌'},
                {value:'脑瘫',label:'脑瘫'},
                {value:'脑溢血',label:'脑溢血'},
                {value:'心脏病',label:'心脏病'},
                {value:'角膜炎',label:'角膜炎'},
            ],
            searchCondition:''
        }
    },
    components:{
        treatFilter:treatFilter
    },
    methods: {
        change(val){
            switch (val) {
                case 0:
                    this.$router.push({name:'TreatmentSearch'})
                    break;
                default:
                    this.$router.push({name:'TreatmentList'})
                    break;
            }
        },
        setShowPage(val){ //控制显示TABs
            this.showPage=val
        },
        setTitle(val){
            this.title=val
        },
        changeSick(val){
            this.searh(val)
        },
        inputChange(val){
            this.searh(val)
        },
        searh(val){
            this.searchCondition=val
        },
        searchTabs(val){
            this.tabsVal=val
        },
        reloadReport(id){
            NProgress.start()
            this.loading = true
            this.$http.post("#",{id:id})
                .then(data => {
                //数据结构为考虑清楚暂未写
                    this.loading = false;
                    NProgress.down()
                }).cache(error => {
                    this.loading = false;
                    NProgress.down()
                    this.n3Alert({
                        content: error || "加载失败，请刷新试试~",
                        type: "danger",
                        placement: "top-right",
                        duration: 2000,
                        width: "240px" // 内容不确定，建议设置width
                });
            }) 
        }    
    },
    // created () {
    //     this.$route.params.id!=='' ? this.showPage=false : this.showPage=true;
    // },
    // watch:{
    //     '$route'(){
    //         this.tabsVal=0;
    //     }
    // }
}
</script>