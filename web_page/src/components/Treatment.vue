<template>
    <section class="content">
        <treat-filter :list="list" @change="changeSick" @inputChange="inputChange"/>
        <section class="content_text box_show"  v-show="showPage">
            <n3-tabs @change="change" :value="tabsVal">
                <n3-tab header="搜索">
                    <treat-search  @searchChange="searchChange" @searchTabs="searchTabs"></treat-search>
                </n3-tab>
                <n3-tab header="浏览列表">
                    <treat-browse></treat-browse>
                </n3-tab>
            </n3-tabs>
        </section>
         <section class="content_text box_show" v-show="!showPage">
            <n3-tabs @change="change" :value="0">
                <n3-tab header="概观">
                    <treat-search></treat-search>
                </n3-tab>
                <n3-tab header="个别患者评估">
                    <treat-browse></treat-browse>
                </n3-tab>
            </n3-tabs>
        </section>
    </section>
</template>
<script>
import treatFilter from '@/components/Treatment/filter'
import treatBrowse from '@/components/Treatment/browse'
import treatSearch from '@/components/Treatment/search'
export default{
    name:'Treatment',
    data(){
        return {
            showPage:true,
            tabsVal:0,
            list:[
                {value:0,label:'全部'},
                {value:1,label:'胃癌'},
                {value:2,label:'肝癌'},
                {value:3,label:'脑瘫'},
                {value:4,label:'脑溢血'},
                {value:5,label:'心脏病'},
                {value:6,label:'角膜炎'},
            ]
        }
    },
    components:{
        treatFilter:treatFilter,
        treatBrowse:treatBrowse,
        treatSearch:treatSearch
    },
    methods: {
        change(){
            this.tabsVal==0?this.tabsVal=1:this.tabsVal=0;
        },
        changeSick(val){
            console.log(val);
        },
        inputChange(val){
            console.log(val)
        },
        searchChange(val){
            console.log(val)
        },
        searchTabs(val){
            this.tabsVal=1
            console.log(val)
        }    
    },
    created () {
        console.log(this.$route.params.id)
        this.$route.params.id!=='' ? this.showPage=false : this.showPage=true;
    },
    watch:{
        $route(){
            this.$route.params.id!='' ? this.showPage=false : this.showPage=true;
        }
    }
}
</script>