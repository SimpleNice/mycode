<template>
  <section class="content_tabs">
     <section class="tabs_search box_show">
        <n3-typeahead 
            async
            v-model="padient"
            placeholder="开始输入查看建议"
            @change="getResult"
            :items="items"
            :add-format="getValue"
            width="100%"
            class="search_long_input"
            @keyup.entry="getResult"
            >
        </n3-typeahead>
     </section>
     <section class="tabs_content">
        <header>
            <h2><font class="h2_font">治疗报告</font></h2>
            <p>点击治疗以查看患者对副作用，感知有效性，建议，负担，剂量和成本的评价。</p>
        </header>
        <div class="row" v-for="(itemList,index) in dataList">
            <hr/>
            <div class="columns" v-for="item in itemList">
                <table>
                    <caption>{{item.className}}</caption>
                    <thead><th class="align-left">治疗</th><th class="align-right">使用</th></thead>
                    <tbody v-for="list in item.list">
                        <tr><td class="align-left"><router-link :to="'./survey/'+list.id">{{list.name}}</router-link> </td><td class="align-right">{{list.num}}</td></tr>
                    </tbody>
                </table>
                <p>
                    <a @click="getSelID(item.id)" href="javascript:void(0)">查看全部{{item.countNum}}种{{item.className}}</a> 
                    <!--点击事件切换到浏览列表,并修改浏览列表里面的值 -->
                </p>
            </div>
        </div>   
     </section>
     <section class="content-panel">
        <p>最近更新时间： 2018年2月28日</p>
     </section>
  </section>
</template>
<script>
export default{
    name:"treatSearch",
    props:{
        searchCondition:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            padient:'',
            items:[],
            dataList:[
                [
                    {
                        className:"处方药",
                        countNum:"1578",
                        id:"1",
                        list:[
                            {name:"加巴喷丁",num:"7950",id:"6"},
                            {name:"度洛西汀",num:"7614",id:"7"},
                            {name:"普瑞巴林",num:"5376",id:"8"},
                            {name:"氯硝西泮",num:"5121",id:"9"},
                            {name:"加巴喷丁",num:"4805",id:"10"}
                        ]
                    },
                    {
                        className:"非处方药物",
                        countNum:"405",
                        id:"2",
                        list:[
                            {name:"布洛芬",num:"3027",id:"11111111"},
                            {name:"阿司匹林",num:"2625",id:"12"},
                            {name:"对乙酰氨基酚（扑热息痛）",num:"1612",id:"13"},
                            {name:"萘普生OTC",num:"969",id:"14"},
                            {name:"西替利嗪",num:"840",id:"15"}
                        ]
                    },
                    {
                        className:"拾遗",
                        countNum:"1741",
                        id:"3",
                        list:[
                            {name:"维生素D",num:"4756",id:"1"},
                            {name:"多种维生素",num:"3550",id:"2"},
                            {name:"欧米茄3鱼油",num:"2739",id:"4"},
                            {name:"维生素D3(但钙化醇)",num:"1813",id:"3"},
                            {name:"CoQ10（辅酶Q10）",num:"1605",id:"5"}
                        ]
                    }
                ],
                [
                    {
                        className:"处方药",
                        countNum:"1578",
                        id:"1",
                        list:[
                            {name:"加巴喷丁",num:"7950",id:"6"},
                            {name:"度洛西汀",num:"7614",id:"7"},
                            {name:"普瑞巴林",num:"5376",id:"8"},
                            {name:"氯硝西泮",num:"5121",id:"9"},
                            {name:"加巴喷丁",num:"4805",id:"10"}
                        ]
                    },
                    {
                        className:"非处方药物",
                        countNum:"405",
                        id:"2",
                        list:[
                            {name:"布洛芬",num:"3027",id:"11"},
                            {name:"阿司匹林",num:"2625",id:"12"},
                            {name:"对乙酰氨基酚（扑热息痛）",num:"1612",id:"13"},
                            {name:"萘普生OTC",num:"969",id:"14"},
                            {name:"西替利嗪",num:"840",id:"15"}
                        ]
                    },
                    {
                        className:"拾遗",
                        countNum:"1741",
                        id:"3",
                        list:[
                            {name:"维生素D",num:"4756",id:"1"},
                            {name:"多种维生素",num:"3550",id:"2"},
                            {name:"欧米茄3鱼油",num:"2739",id:"4"},
                            {name:"维生素D3(但钙化醇)",num:"1813",id:"3"},
                            {name:"CoQ10（辅酶Q10）",num:"1605",id:"5"}
                        ]
                    }
                ],
                [
                    {
                        className:"处方药",
                        countNum:"1578",
                        id:"1",
                        list:[
                            {name:"加巴喷丁",num:"7950",id:"6"},
                            {name:"度洛西汀",num:"7614",id:"7"},
                            {name:"普瑞巴林",num:"5376",id:"8"},
                            {name:"氯硝西泮",num:"5121",id:"9"},
                            {name:"加巴喷丁",num:"4805",id:"10"}
                        ]
                    },
                    {
                        className:"非处方药物",
                        countNum:"405",
                        id:"2",
                        list:[
                            {name:"布洛芬",num:"3027",id:"11"},
                            {name:"阿司匹林",num:"2625",id:"12"},
                            {name:"对乙酰氨基酚（扑热息痛）",num:"1612",id:"13"},
                            {name:"萘普生OTC",num:"969",id:"14"},
                            {name:"西替利嗪",num:"840",id:"15"}
                        ]
                    }
                ]
            ],
        }
    },
    methods:{
        getValue(val){
            console.log(val)
        },
        getResult(val){
            this.$emit('searchChange',val)
        },
        reload(val){
            console.log(val)
        }
    },
    created(){
        this.$emit('searchTabs',0)
        this.$emit('showPage',true) //改变父组件showPage状态,控制页面(搜索,浏览列表,概观)
        this.$emit('setTitle','治疗') //设置显示标题
        this.reload(this.searchCondition)
    },
    watch:{
        searchCondition(){
            this.reload(this.searchCondition)
        }
    }
}
</script>
<style lang="scss" scoped>
    .tabs_search{
        margin-top: 5px;
        padding: 0px 20px 10px;
    }
    .tabs_content{
        // display: grid;
        overflow: hidden;
        padding-bottom: 20px;
        h2{
            margin-top: 0px;
        }
        .row{
            width: auto;
            margin-top: 0;
            margin-bottom: 0;
            margin-left: -20px;
            margin-right: -20px;
            max-width: none;
            hr{
                margin-left: 20px;
                margin-right: 20px;
                border-top: 1px solid #cccccc;
            }
            .columns{
                width: 33.3333333333%;
                padding-right: 20px;
                padding-left: 20px;
                float: left;
                a, a:active, a:hover{
                    color: #1C8BCF;
                }
            }
            table{
                width: 100%;
                caption{
                    font-size: 18px;
                    font-weight: bold;
                    color: #000;
                }
                th{
                    padding-top:5px; 
                    color: #000;
                    font-size: 12px;
                }
                td{
                    padding: 10px 0;
                    color: #1C8BCF;
                }
                th,td{
                    border-bottom: 1px solid #cccccc;
                }
            }
            p{
                margin-top: 20px;
                color: #1C8BCF;
            }
        }
    }
    .content-panel{
        border-top: 1px solid #efefef;
        padding: 20px 20px 10px;
        margin-bottom: 40px;
        color: #888888;
    }
</style>
