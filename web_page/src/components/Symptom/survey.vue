<template>
<section class="content_text">
    <section class="content_right patient_right">
        <header class="search">
            <div class="line" v-if="$store.state.loginStatus">
                按患者筛选：<n3-select v-model="defaultVal" :options="list" @change="check">
                </n3-select> <br>
            </div> 
            <h3>
              {{name}}的报告  
            </h3>
        </header>
        <div class="content_right_box">
             <section class="row">
                <p>
                   {{desc}}
                </p>
            </section>
            <section class="row box_show ">
                <div class="columns no_padding_l">
                    <table>
                        <caption>症状严重程度</caption>
                        <thead>
                            <th class="align-left bold">严重程度</th>
                            <th class="align-right">病人</th>
                            <th class="align-left"></th>
                        </thead>
                        <tr>
                            <td class="align-left general">严重</td>
                            <td class="align-right short"><router-link to="#">{{degree.important}}</router-link></td>
                            <td class="align-left explain_td">
                                <div class="schedule">
                                    <div class="schedule_child danger" :style="{width:(degree.important/degree.count)*100+'%'}"></div>
                                </div>
                                </td>
                        </tr>
                        <tr>
                            <td class="align-left general">中等</td>
                            <td class="align-right short"><router-link to="#">{{degree.moderate}}</router-link></td>
                            <td class="align-left explain_td">
                                <div class="schedule">
                                    <div class="schedule_child danger" :style="{width:(degree.moderate/degree.count)*100+'%'}"></div>
                                </div>
                                </td>
                        </tr>
                        <tr>
                            <td class="align-left general">温和</td>
                            <td class="align-right short"><router-link to="#">{{degree.slight}}</router-link></td>
                            <td class="align-left explain_td">
                                <div class="schedule">
                                    <div class="schedule_child danger" :style="{width:(degree.slight/degree.count)*100+'%'}"></div>
                                </div>
                                </td>
                        </tr>
                        <tr>
                            <td class="align-left general">没有</td>
                            <td class="align-right short"><router-link to="#">{{degree.none}}</router-link></td>
                            <td class="align-left explain_td">
                                <div class="schedule">
                                    <div class="schedule_child danger" :style="{width:(degree.none/degree.count)*100+'%'}"></div>
                                </div>
                                </td>
                        </tr>
                    </table>
                </div>
            </section> 
            <section class="row box_show " v-if="$store.state.loginStatus">
                <div class="columns no_padding_l">
                    <table>
                        <caption>{{defaultVal}}患者接受{{name}}的治疗</caption>
                        <thead>
                            <th class="align-left bold">治疗</th>
                            <th class="align-right">病人数</th>
                            <th class="align-left"></th>
                        </thead>
                        <tr v-for="item in relatedSymptoms.list">
                            <td class="align-left general"><router-link to="#">{{item.name}}</router-link></td>
                            <td class="align-right short">{{item.patient}}</td>
                            <td class="align-left explain_td">
                                <div class="schedule">
                                    <div class="schedule_child common" :style="{width:item.evaluations}"></div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <p class="show">
                        <n3-icon :type="!relatedSymptoms.status?'caret-right':'caret-down'"></n3-icon><strong class="show_strong" @click="showRelatedSymptoms">{{!relatedSymptoms.status?'显示全部'+relatedSymptoms.count+'个治疗':'显示前10个治疗'}}</strong><n3-loading color="primary" v-show="relatedSymptoms.load"></n3-loading>
                    </p>
                </div>
            </section> 
        </div>
    </section>
    <section class="content_left symptom_left">
        <header>
            <h4>有{{name}}的患者</h4>
            <hr>
        </header>
        <div class="hear" v-for="item in source" :key="item.id">
            <div class="hear_portrait">
                <img :src="item.headPortrait" >
            </div>
            <div class="user">
                <span><router-link :to="'/homepage/'+item.id" class="sign">{{item.name}}</router-link></span>
                <span class="text text_1"><n3-icon type="mars" title="先生" class="male" v-if="item.sex == '1'"></n3-icon><n3-icon type="venus" class="female" title="女士" v-else></n3-icon></span></br>
                <span class="text text_1"><n3-icon :type="item.star >=1? 'star':'star-o'" class="star"></n3-icon><n3-icon :type="item.star >=2? 'star':'star-o'" class="star"></n3-icon><n3-icon :type="item.star >=3? 'star':'star-o'" class="star"></n3-icon></span><span class="text text_1 nobold">{{item.age}}岁</span>
            </div>
        </div>
        <div style="padding:20px 20px 10px;">
             <router-link to="/login" class="sign">查看更多{{name}}患者</router-link>
        </div>
    </section>    
</section>    
</template>
<script>
    export default{
        name:"symptom",
        data(){
            return {
                name:'心情焦虑症',
                id:1,
                desc:' 沙丁胺醇可以放松肺部的平滑肌并扩张气道以改善呼吸。它用于治疗哮喘，慢性支气管炎和肺气肿。吸入器可使药物深入肺部以获得最大益处。国际通用名称是沙丁胺醇。',
                loginStatus:false,
                degree:{
                    count:'3690',
                    important:'476',
                    moderate:'799',
                    slight:'971',
                    none:'1444'
                },
                relatedSymptoms:{
                    count:'260',
                    load:false,
                    status:false,
                    list:[
                        {id:'1',name:'疲劳',patient:'1400',evaluations:'30%'},
                        {id:'2',name:'疲劳',patient:'1400',evaluations:'30%'},
                        {id:'3',name:'疲劳',patient:'1400',evaluations:'30%'},
                        {id:'4',name:'疲劳',patient:'1400',evaluations:'30%'},
                        {id:'5',name:'疲劳',patient:'1400',evaluations:'30%'},
                        {id:'6',name:'疲劳',patient:'1400',evaluations:'30%'}
                    ],
                    listNew:[
                        {id:'7',name:'疲劳',patient:'1400',evaluations:'30%'},
                        {id:'8',name:'疲劳',patient:'1400',evaluations:'30%'},
                        {id:'9',name:'疲劳',patient:'1400',evaluations:'30%'},
                        {id:'10',name:'疲劳',patient:'1400',evaluations:'30%'},
                        {id:'11',name:'疲劳',patient:'1400',evaluations:'30%'},
                        {id:'12',name:'疲劳',patient:'1400',evaluations:'30%'}
                    ]
                },
                source: [
                    {
                    id: 1,
                    name: "落花浅忆",
                    headPortrait: "../../static/img/head.jpg",
                    sex: "0",
                    age: "20",
                    star:2,
                    },
                    {
                    id: 2,
                    name: "落花浅忆",
                    headPortrait: "../../static/img/head.jpg",
                    sex: "1",
                    age: "20",
                    star:1,
                    },
                    {
                    id: 3,
                    name: "落花浅忆",
                    headPortrait: "../../static/img/head.jpg",
                    sex: "1",
                    age: "20",
                    star:3,
                    },
                    {
                    id: 4,
                    name: "落花浅忆",
                    headPortrait: "../../static/img/head.jpg",
                    sex: "1",
                    age: "20",
                    star:2,
                    },
                    {
                    id: 5,
                    name: "落花浅忆",
                    headPortrait: "../../static/img/head.jpg",
                    sex: "1",
                    age: "20",
                    star:3,
                    }
                ], 
                list:[
                    {value:'胃癌',label:'胃癌'},
                    {value:'肝癌',label:'肝癌'},
                    {value:'脑瘫',label:'脑瘫'},
                    {value:'脑溢血',label:'脑溢血'},
                    {value:'心脏病',label:'心脏病'},
                    {value:'角膜炎',label:'角膜炎'},
                ],
                defaultVal:'胃癌'
            }
        },
        methods: {
            reload(){
                let params = ""
                this.$http.post("#", {
                        params
                    })
                    .then(data => 
                    {
                        (this.popular = data.result.popular || []),
                        (this.commonUse = data.result.commonUse || 0);
                    }).catch(error => {
                        this.n3Alert({
                            content: error || "加载失败，请刷新试试~",
                            type: "danger",
                            placement: "top-right",
                            duration: 2000,
                            width: "240px" // 内容不确定，建议设置width
                        })
                    })
            },
            showRelatedSymptoms(){//根据id 获取页面所需要的所有信息,切换下拉框局部刷新治疗栏目数据
                this.relatedSymptoms.load=true
                this.relatedSymptoms.status=!this.relatedSymptoms.status
                //查看是否已经请求过全部数据,没有先请求
                if(this.relatedSymptoms.listNew.length==0){
                    this.$http.post(OVERVIEW_SIDEEFFECT_SYMPTOM,{id:this.treatment.id}).
                    then(data=>{
                            this.relatedSymptoms.listNew=data.res
                            this.relatedSymptoms.status?this.relatedSymptoms.list=this.relatedSymptoms.list.concat(this.relatedSymptoms.listNew):this.relatedSymptoms.list.splice(8,this.relatedSymptoms.list.length)
                            this.relatedSymptoms.load=false
                        }
                    ).
                    cache(error => {
                        // this.loading = false;
                        NProgress.down()
                        this.n3Alert({
                            content: error || "加载失败，请刷新试试~",
                            type: "danger",
                            placement: "top-right",
                            duration: 2000,
                            width: "240px" // 内容不确定，建议设置width
                        })
                        this.relatedSymptoms.load=false
                    })     
                }else{
                    this.relatedSymptoms.status?this.relatedSymptoms.list=this.relatedSymptoms.list.concat(this.relatedSymptoms.listNew):this.relatedSymptoms.list.splice(6,this.relatedSymptoms.list.length)
                    this.relatedSymptoms.load=false
                }
            },
        },
        created () {
            // if()
            this.reload()
        }
    }
</script>
<style lang="scss" scoped>
    .row{
        overflow: hidden;
        padding: 20px;
        a, a:active, a:hover{
            color: #1C8BCF;
        }
        .lang-columns{
            width: 100%;
        }
        .columns{
            width:100%;
        }
        .no_padding_l{
            padding-left: 0px;
        }
        .no_padding_f{
            padding-right: 0px;
        }
        h4{
            color: #000;
        }
        hr{
            border-top:1px solid #cccccc;
        }
        table{
                width: 100%;
                caption{
                    font-size: 14px;
                    color: #000;
                    font-weight: 600;
                }
                th{
                   padding-top: 5px;
                   color: #000;
                   font-size: 12px;
                }
                th,td{
                    padding:10px;
                }
                th:first-child,td:first-child{
                    padding-left: 0;
                }
                th:last-child,td:last-child{
                    padding-right: 0;
                }
                thead,tr{
                    border-bottom: 1px solid #cccccc;
                }
                tr:last-child{
                     border-bottom: none;
                }
                .general{
                    width: 30%;
                }
                .long{
                    width: 40%;
                }
                .short{
                    width: 15%;
                }
            }
        .explain{
            padding-top:20px; 
            text-align: right;
        }    
    }
    .hear{
        width: 100%;
        height: auto;
        overflow: hidden;
        border-bottom: 1px solid #cfcfcf;
        .hear_portrait {
            float: left;
            width: 50px;
            margin: 10px;
        }
    }
    .user {
        margin: 10px 0px;
        float: left;
        font-weight: bold;
        span {
            padding: 0 8px;
        }
    }
</style>
