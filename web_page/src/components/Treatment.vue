<template>
    <section class="content">
        <treat-filter :list="list" @change="changeSick" @inputchange="inputchange"/>
        <section class="content_text">
            
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
            changeSick(val){
                console.log(val);
            },
            inputchange(val){
                console.log(val)
            }
        }
    }
</script>