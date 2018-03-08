<template>
    <section class="content_tabs">
       <section class="row box_show">
           <header>
               <h4>什么是{{treatment.name}}</h4>
           </header>
           <p>
                <strong>类别:</strong> <router-link to="#">处方药</router-link> <br/>
                <strong>最受欢迎类型:</strong>
                <router-link :to="'#'+item.id" v-for="item in likeType.list" :key="item.id">{{item.name}} , </router-link>
                <n3-icon :type="!likeType.status?'caret-right':'caret-down'"></n3-icon><strong class="show_strong" @click="showLikeType">{{!likeType.status?'显示全部':'显示前8个'}}</strong><n3-loading color="primary" v-show="likeType.load"></n3-loading>
            </p>
            <p>
                沙丁胺醇可以放松肺部的平滑肌并扩张气道以改善呼吸。它用于治疗哮喘，慢性支气管炎和肺气肿。吸入器可使药物深入肺部以获得最大益处。国际通用名称是沙丁胺醇。
            </p>
       </section> 
       <section class="row box_show">
           <header>
               <h4>有效性</h4>
           </header>
           <div class="lang-columns">
               <table>
                   <thead>
                    <th class="align-left general">目的</th>
                    <th class="align-right short">耐心</th>
                    <th class="align-right short">评估</th>
                    <th class="align-left long">感知有效性</th>   
                    <thead/>
                    <tr v-for="item in effectiveness.list">
                        <td class="align-left"><router-link to='#'>{{item.name}}</router-link></td>
                        <td class="align-right"><router-link to='#'>{{item.patient}}</router-link></td>
                        <td class="align-right"><router-link to='#'>{{item.evaluations}}</router-link></td>
                        <td class="align-left">
                            <div class="schedule">
                                <n3-tooltip :content="item.important" placement="top" trigger="hover">
                                    <div class="schedule_child important" :style="{width:(item.important/item.effectiveness)*100+'%'}"></div>
                                </n3-tooltip>
                                <n3-tooltip :content="item.moderate" placement="top" trigger="hover">
                                    <div class="schedule_child moderate" :style="{width:(item.moderate/item.effectiveness)*100+'%'}"></div>
                                </n3-tooltip>
                                <n3-tooltip :content="item.slight" placement="top" trigger="hover">
                                    <div class="schedule_child slight" :style="{width:(item.slight/item.effectiveness)*100+'%'}"></div>
                                </n3-tooltip> 
                                <n3-tooltip :content="item.none" placement="top" trigger="hover">
                                    <div class="schedule_child none" :style="{width:(item.none/item.effectiveness)*100+'%'}"></div>
                                </n3-tooltip> 
                                <n3-tooltip :content="item.notell" placement="top" trigger="hover"> 
                                    <div class="schedule_child notell" :style="{width:(item.notell/item.effectiveness)*100+'%'}"></div>
                                </n3-tooltip> 
                            </div>
                        </td>
                    </tr>
               </table>
               <p class="show">
                   <n3-icon :type="!effectiveness.status?'caret-right':'caret-down'"></n3-icon><strong class="show_strong" @click="showEffectiveness">{{!effectiveness.status?'显示全部16个原因':'显示前6个原因'}}</strong><n3-loading color="primary" v-show="effectiveness.load"></n3-loading>
               </p>
               <hr/>
           </div>
           <footer class="explain">
               <n3-icon type="circle" class="important_f"></n3-icon>重要
               <n3-icon type="circle" class="moderate_f"></n3-icon>中等
               <n3-icon type="circle" class="slight_f"></n3-icon>轻微
               <n3-icon type="circle" class="none_f"></n3-icon>没有
               <n3-icon type="circle" class="notell_f"></n3-icon>无法感知
           </footer>
       </section>
       <section class="row box_show ">
           <header><h4>副作用</h4></header>
           <div class="columns no_padding_l">
               <table>
                   <caption>副作用总体信息</caption>
                   <thead>
                       <th class="align-left">严重</th>
                       <th class="align-right">评估</th>
                       <th class="align-left"></th>
                   </thead>
                   <tr>
                       <td class="align-left general">严重</td>
                       <td class="align-right short"><router-link to="#">{{sideEffect.degree.important}}</router-link></td>
                       <td class="align-left explain_td">
                           <div class="schedule">
                               <div class="schedule_child danger" :style="{width:(sideEffect.degree.important/sideEffect.degree.count)*100+'%'}"></div>
                           </div>
                        </td>
                   </tr>
                   <tr>
                       <td class="align-left general">中等</td>
                       <td class="align-right short"><router-link to="#">{{sideEffect.degree.moderate}}</router-link></td>
                       <td class="align-left explain_td">
                           <div class="schedule">
                               <div class="schedule_child danger" :style="{width:(sideEffect.degree.moderate/sideEffect.degree.count)*100+'%'}"></div>
                           </div>
                        </td>
                   </tr>
                   <tr>
                       <td class="align-left general">温和</td>
                       <td class="align-right short"><router-link to="#">{{sideEffect.degree.slight}}</router-link></td>
                       <td class="align-left explain_td">
                           <div class="schedule">
                               <div class="schedule_child danger" :style="{width:(sideEffect.degree.slight/sideEffect.degree.count)*100+'%'}"></div>
                           </div>
                        </td>
                   </tr>
                   <tr>
                       <td class="align-left general">没有</td>
                       <td class="align-right short"><router-link to="#">{{sideEffect.degree.none}}</router-link></td>
                       <td class="align-left explain_td">
                           <div class="schedule">
                               <div class="schedule_child danger" :style="{width:(sideEffect.degree.none/sideEffect.degree.count)*100+'%'}"></div>
                           </div>
                        </td>
                   </tr>
               </table>
           </div>
            <div class="columns">
               <table>
                   <caption>与{{treatment.name}}的副作用相关的症状</caption>
                   <thead>
                       <th class="align-left">副作用</th>
                       <th class="align-right">耐心</th>
                       <th class="align-left"></th>
                   </thead>
                   <tr v-for="item in sideEffect.relatedSymptoms.list">
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
                   <n3-icon :type="!sideEffect.relatedSymptoms.status?'caret-right':'caret-down'"></n3-icon><strong class="show_strong" @click="showRelatedSymptoms">{{!sideEffect.relatedSymptoms.status?'显示全部'+sideEffect.relatedSymptoms.count+'个原因':'显示前6个原因'}}</strong><n3-loading color="primary" v-show="sideEffect.relatedSymptoms.load"></n3-loading>
               </p>
           </div>
       </section>
        <section class="row box_show ">
           <header><h4>剂量</h4></header>
            <div class="columns">
               <table>
                   <caption>基于目前服用{{treatment.name}}的患者</caption>
                   <thead>
                       <th class="align-left">剂量</th>
                       <th class="align-right">耐心</th>
                       <th class="align-left"></th>
                   </thead>
                   <tr v-for="item in dose.list">
                       <td class="align-left general">{{item.dosage}}</td>
                       <td class="align-right short">{{item.patient}}</td>
                       <td class="align-left explain_td">
                           <div class="schedule">
                               <div class="schedule_child common" :style="{width:item.evaluations}"></div>
                           </div>
                        </td>
                   </tr>
               </table>
               <p class="show">
                   <n3-icon :type="!dose.status?'caret-right':'caret-down'"></n3-icon><strong class="show_strong" @click="showDose">{{!dose.status?'显示全部'+dose.count+'剂量':'显示前10个剂量'}}</strong><n3-loading color="primary" v-show="dose.load"></n3-loading>
               </p>
           </div>
           <div class="columns no_padding_l">
               <table>
                   <caption>负担</caption>
                   <thead>
                       <th class="align-left">负担</th>
                       <th class="align-right">评估</th>
                       <th class="align-left"></th>
                   </thead>
                   <tr v-for="item in duration.burden">
                       <td class="align-left general">{{item.name}}</td>
                       <td class="align-right short"><router-link to="#">{{item.evaluations}}</router-link></td>
                       <td class="align-left explain_td">
                           <div class="schedule">
                               <n3-tooltip :content="item.evaluations" placement="top" trigger="hover"> 
                                <div class="schedule_child common" :style="{width:(item.evaluations/duration.burdenCount)*100+'%'}"></div>
                               </n3-tooltip>
                           </div>
                        </td>
                   </tr>
               </table>
           </div>
           <div class="columns no_padding_l">
               <table>
                   <caption>每月费用</caption>
                   <thead>
                       <th class="align-left">每月费用</th>
                       <th class="align-right">评估</th>
                       <th class="align-left"></th>
                   </thead>
                   <tr v-for="item in duration.monthlyFee">
                       <td class="align-left general">{{item.cost}}</td>
                       <td class="align-right short"><router-link to="#">{{item.evaluations}}</router-link></td>
                       <td class="align-left explain_td">
                           <div class="schedule">
                               <n3-tooltip :content="item.evaluations" placement="top" trigger="hover"> 
                                <div class="schedule_child common" :style="{width:(item.evaluations/duration.monthlyFeeCount)*100+'%'}"></div>
                               </n3-tooltip>
                           </div>
                        </td>
                   </tr>
               </table>
           </div>
       </section>
       <section class="row box_show ">
           <header><h4>持续时间</h4></header>
           <div class="columns no_padding_l">
               <table>
                   <caption>目前服用{{treatment.name}}的患者</caption>
                   <thead>
                       <th class="align-left">持续时间</th>
                       <th class="align-right">耐心</th>
                       <th class="align-left"></th>
                   </thead>
                   <tr v-for="item in duration.current">
                       <td class="align-left general">{{item.duration}}</td>
                       <td class="align-right short"><router-link to="#">{{item.patients}}</router-link></td>
                       <td class="align-left explain_td">
                           <div class="schedule">
                               <n3-tooltip :content="item.patients" placement="top" trigger="hover"> 
                                <div class="schedule_child common" :style="{width:(item.patients/duration.dcurrentCount)*100+'%'}"></div>
                               </n3-tooltip>
                           </div>
                        </td>
                   </tr>
               </table>
           </div>
           <div class="columns no_padding_l">
               <table>
                   <caption>治疗频率</caption>
                   <thead>
                       <th class="align-left">频率</th>
                       <th class="align-right">评估</th>
                       <th class="align-left"></th>
                   </thead>
                   <tr v-for="item in duration.frequency">
                       <td class="align-left general">{{item.name}}</td>
                       <td class="align-right short"><router-link to="#">{{item.evaluations}}</router-link></td>
                       <td class="align-left explain_td">
                           <div class="schedule">
                               <n3-tooltip :content="item.evaluations" placement="top" trigger="hover"> 
                                <div class="schedule_child common" :style="{width:(item.evaluations/duration.frequencyCount)*100+'%'}"></div>
                               </n3-tooltip>
                           </div>
                        </td>
                   </tr>
               </table>
           </div>
       </section>
    </section> 
</template>
<script>
import {TREATMENT} from '@/utils/api'
export default{
    name:"treatBrowse",
    data(){
        return{
            treatment:{
                name:'沙丁胺醇',
                id:'1'
                },
            //受欢迎类型    
            likeType:{
                list:[
                    {name:'Synthroid',id:'1'},
                    {name:'Levoxyl',id:'2'},
                    {name:'Levothroid',id:'3'},
                    {name:'Thyroxine',id:'4'},
                    {name:'L-Thyroxine',id:'5'},
                    {name:'Eltroxin',id:'6'},
                    {name:'Euthyrox',id:'7'}
                ],
                listNew:[
                    {name:'Synthroid',id:'8'},
                    {name:'Levoxyl',id:'9'},
                    {name:'Levothroid',id:'10'},
                    {name:'Thyroxine',id:'11'},
                    {name:'L-Thyroxine',id:'12'},
                    {name:'Eltroxin',id:'13'},
                    {name:'Euthyrox',id:'14'}
                ],
                status:false,
                load:false
            },
            //副作用
            effectiveness:{
                load:false,
                status:false,
                list:[
                    {id:'1',name:'支气管炎',patient:'1400',evaluations:'30',effectiveness:'2000',important:'570',moderate:'450',slight:'340',none:'280',notell:'360'},
                    {id:'2',name:'支气管炎',patient:'1400',evaluations:'30',effectiveness:'2000',important:'570',moderate:'450',slight:'340',none:'280',notell:'360'},
                    {id:'3',name:'支气管炎',patient:'1400',evaluations:'30',effectiveness:'2000',important:'570',moderate:'450',slight:'340',none:'280',notell:'360'},
                    {id:'4',name:'支气管炎',patient:'1400',evaluations:'30',effectiveness:'2000',important:'570',moderate:'450',slight:'340',none:'280',notell:'360'},
                    {id:'5',name:'支气管炎',patient:'1400',evaluations:'30',effectiveness:'2000',important:'570',moderate:'450',slight:'340',none:'280',notell:'360'}
                ],
                listNew:[
                    {id:'6',name:'支气管炎',patient:'1400',evaluations:'30',effectiveness:'2000',important:'570',moderate:'450',slight:'340',none:'280',notell:'360'},
                    {id:'7',name:'支气管炎',patient:'1400',evaluations:'30',effectiveness:'2000',important:'570',moderate:'450',slight:'340',none:'280',notell:'360'},
                    {id:'8',name:'支气管炎',patient:'1400',evaluations:'30',effectiveness:'2000',important:'570',moderate:'450',slight:'340',none:'280',notell:'360'},
                    {id:'9',name:'支气管炎',patient:'1400',evaluations:'30',effectiveness:'2000',important:'570',moderate:'450',slight:'340',none:'280',notell:'360'},
                    {id:'10',name:'支气管炎',patient:'1400',evaluations:'30',effectiveness:'2000',important:'570',moderate:'450',slight:'340',none:'280',notell:'360'}
                ]
            },
            sideEffect:{
                degree:{
                    count:'3690',
                    important:'476',
                    moderate:'799',
                    slight:'971',
                    none:'1444'
                } ,
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
                }
            },
            dose:{
                count:'260',
                load:false,
                status:false,
                list:[
                    {id:'1',dosage:'每日100毫克',patient:'10',evaluations:'30%'},
                    {id:'2',dosage:'每日100毫克',patient:'10',evaluations:'30%'},
                    {id:'3',dosage:'每日100毫克',patient:'10',evaluations:'30%'},
                    {id:'4',dosage:'每日100毫克',patient:'10',evaluations:'30%'},
                    {id:'5',dosage:'每日100毫克',patient:'10',evaluations:'30%'},
                    {id:'6',dosage:'每日100毫克',patient:'10',evaluations:'30%'}
                ],
                listNew:[
                    {id:'15',dosage:'每日100毫克',patient:'10',evaluations:'30%'},
                    {id:'16',dosage:'每日100毫克',patient:'10',evaluations:'30%'},
                    {id:'17',dosage:'每日100毫克',patient:'10',evaluations:'30%'},
                    {id:'18',dosage:'每日100毫克',patient:'10',evaluations:'30%'},
                    {id:'19',dosage:'每日100毫克',patient:'10',evaluations:'30%'},
                    {id:'12',dosage:'每日100毫克',patient:'10',evaluations:'30%'}
                ]
            },
            duration:{
                dcurrentCount:'200',
                current:[
                    {duration:'6个月 - 1年',patients:'20'},
                    {duration:'6个月 - 1年',patients:'50'},
                    {duration:'6个月 - 1年',patients:'20'},
                    {duration:'6个月 - 1年',patients:'10'},
                    {duration:'6个月 - 1年',patients:'5'},
                    {duration:'6个月 - 1年',patients:'20'},
                    {duration:'6个月 - 1年',patients:'15'},
                    {duration:'6个月 - 1年',patients:'20'},
                    {duration:'6个月 - 1年',patients:'20'},
                    {duration:'6个月 - 1年',patients:'20'},
                ],
                frequencyCount:'50',
                frequency:[
                    {name:'总是',evaluations:'20'},
                    {name:'平时',evaluations:'15'},
                    {name:'有时',evaluations:'10'},
                    {name:'从未采取规定',evaluations:'5'}
                ],
                burdenCount:'40',
                burden:[
                    {name:'很难采取',evaluations:'5'},
                    {name:'有点难于采取平时',evaluations:'5'},
                    {name:'有点难于接受',evaluations:'10'},
                    {name:'一点都不难',evaluations:'20'}
                ],
                monthlyFeeCount:'90',
                monthlyFee:[
                    {cost:'200+',evaluations:'0'},
                    {cost:'100-199',evaluations:'5'},
                    {cost:'50-99',evaluations:'10'},
                    {cost:'25-49',evaluations:'25'},
                    {cost:'<25',evaluations:'20'},
                    {cost:'未标明',evaluations:'30'},
                ]
            }
        }
    },
    created(){
        this.$emit('searchTabs',0)
        this.$emit('showPage',false) //改变父组件showPage状态,控制页面(搜索,浏览列表,概观)
        this.$emit('setTitle',this.treatment.name+'治疗报告') //设置显示标题
    },
    methods:{
        showLikeType(){
            this.likeType.load=true
            this.likeType.status=!this.likeType.status
            //查看是否已经请求过全部数据,没有先请求
            if(this.likeType.listNew.length==0){
                this.$http.post(TREATMENT.OVERVIEW_LIKETYPE,{id:this.treatment.id}).
                then(data=>{
                        this.likeType.listNew=data.res
                        this.likeType.status?this.likeType.list=this.likeType.list.concat(this.likeType.listNew):this.likeType.list.splice(8,this.likeType.list.length)
                        this.likeType.load=false
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
                    this.likeType.load=false
                })     
            }else{
                this.likeType.status?this.likeType.list=this.likeType.list.concat(this.likeType.listNew):this.likeType.list.splice(8,this.likeType.list.length)
                this.likeType.load=false
            }
        },
        showEffectiveness(){
            this.effectiveness.load=true
            this.effectiveness.status=!this.effectiveness.status
            //查看是否已经请求过全部数据,没有先请求
            if(this.effectiveness.listNew.length==0){
                this.$http.post(OVERVIEW_EFFECTIVENESS,{id:this.treatment.id}).
                then(data=>{
                        this.effectiveness.listNew=data.res
                        this.effectiveness.status?this.effectiveness.list=this.effectiveness.list.concat(this.effectiveness.listNew):this.effectiveness.list.splice(8,this.effectiveness.list.length)
                        this.effectiveness.load=false
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
                    this.effectiveness.load=false
                })     
            }else{
                this.effectiveness.status?this.effectiveness.list=this.effectiveness.list.concat(this.effectiveness.listNew):this.effectiveness.list.splice(6,this.effectiveness.list.length)
                this.effectiveness.load=false
            }
        },
        showRelatedSymptoms(){
            this.sideEffect.relatedSymptoms.load=true
            this.sideEffect.relatedSymptoms.status=!this.sideEffect.relatedSymptoms.status
            //查看是否已经请求过全部数据,没有先请求
            if(this.sideEffect.relatedSymptoms.listNew.length==0){
                this.$http.post(OVERVIEW_SIDEEFFECT_SYMPTOM,{id:this.treatment.id}).
                then(data=>{
                        this.sideEffect.relatedSymptoms.listNew=data.res
                        this.sideEffect.relatedSymptoms.status?this.sideEffect.relatedSymptoms.list=this.sideEffect.relatedSymptoms.list.concat(this.sideEffect.relatedSymptoms.listNew):this.sideEffect.relatedSymptoms.list.splice(8,this.sideEffect.relatedSymptoms.list.length)
                        this.sideEffect.relatedSymptoms.load=false
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
                    this.sideEffect.relatedSymptoms.load=false
                })     
            }else{
                this.sideEffect.relatedSymptoms.status?this.sideEffect.relatedSymptoms.list=this.sideEffect.relatedSymptoms.list.concat(this.sideEffect.relatedSymptoms.listNew):this.sideEffect.relatedSymptoms.list.splice(6,this.sideEffect.relatedSymptoms.list.length)
                this.sideEffect.relatedSymptoms.load=false
            }
        },
        showDose(){
            this.dose.load=true
            this.dose.status=!this.dose.status
            //查看是否已经请求过全部数据,没有先请求
            if(this.dose.listNew.length==0){
                this.$http.post(OVERVIEW_DOSE,{id:this.treatment.id}).
                then(data=>{
                        this.dose.listNew=data.res
                        this.dose.status?this.dose.list=this.dose.list.concat(this.dose.listNew):this.dose.list.splice(6,this.dose.list.length)
                        this.dose.load=false
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
                    this.dose.load=false
                })     
            }else{
                this.dose.status?this.dose.list=this.dose.list.concat(this.dose.listNew):this.dose.list.splice(6,this.dose.list.length)
                this.dose.load=false
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .content_tabs{
        margin-bottom: 40px;
    }
    .row{
        overflow: hidden;
        padding-bottom: 20px;
        padding: 20px;
        a, a:active, a:hover{
            color: #1C8BCF;
        }
        .lang-columns{
            width: 100%;
        }
        .columns{
            width: 33.3333333333%;
            float: left;
            padding-right: 20px;
            padding-left: 20px;
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
    .row:first-child{   
        margin-top: 5px;
    }
</style>
