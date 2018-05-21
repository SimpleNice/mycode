<template>
    <section class="content_tabs">
        <header>
            <div class="header_img">
                <img src="../../../static/img/u4071.png" alt="" srcset="">
            </div>
            <div class="header_content" v-if="showWelcome">
                <div class="box">
                    <h5>欢迎来到中医助乐社区</h5>
                    <p>
                        整个PatientsLikeMe社区连接在这里讨论跨越条件的一般主题.
                    </p>
                    <div class="avater text">
                        <img src="../../../static/img/head.jpg" alt="">
                        <router-link to="" class="sign">落花浅忆</router-link>,
                        社区版主
                    </div>
                </div>
                <div class="box">
                    <h5>加入对话</h5>
                    <p>阅读其他成员的经验，或考虑分享你自己的经验。</p>
                </div>
                <hr class="pos_hr"/>
            </div>
        </header>
        <div class="community_text">
            <header class="search_group">
                <h3>{{topicName}}</h3>
                <n3-input v-model="value"  icon="search" width="360px" placeholder="请输入话题关键字"></n3-input>
                <router-link to="/community/update"><n3-button type="primary" style="float:right;">发布一个新的话题</n3-button></router-link>
                <p style="margin-top:20px;">
                    排序方式:  <n3-button class="desc_btn">近期活动</n3-button><n3-button class="desc_btn">最有帮助</n3-button>
                </p>
            </header>
            <div class="community_list box_show">
                <div class="table_titel">
                    <div class="align-left topic">话题</div>
                    <div class="align-left interactive">最后回复</div>
                    <div class="statistics">回复</div>
                    <div class="statistics">有帮助</div>
                    <div class="statistics">阅读</div>
                </div>
                <div class="community_table">
                    <table>
                        <tbody>
                            <tr v-for="item in list" :key="item.topicId">
                                <td class="align-left topic">
                                    <span class="text"  v-if="item.topstatus == 1"><n3-icon type="star" class="star"></n3-icon>&nbsp;&nbsp;精品/特色主题</span><br>
                                    <router-link :to="'/community/topicContent/'+item.topicId" class="sign bold">{{item.topic}}</router-link>
                                    <p>
                                    {{item.desc}}  
                                    </p>
                                    <div class="avater">
                                        <img :src="item.authorAvater" alt="" srcset=""> 
                                        <span>{{item.author}}{{item.createTime}}</span>
                                    </div>
                                </td>
                                <td class="align-left interactive">
                                    <div class="avater">
                                        <img :src="item.replyUserAvater" alt="" srcset=""> 
                                        <span class="text_2">{{item.replyUser}} {{ getDate(item.replyTime)}}</span>
                                    </div>
                                </td>
                                <td class="statistics">
                                    <n3-icon type="comment-o"></n3-icon> {{item.reply}}
                                </td>
                                <td class="statistics">
                                    <n3-icon type="thumbs-o-up"></n3-icon> {{item.helpful}}
                                </td>
                                <td class="statistics">
                                    <n3-icon type="eye" @click.native="getDate(item.replyTime)"></n3-icon> {{item.read}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="page">
                    <n3-page :total="pagination.total" :pagesize="pagination.pagesize" v-model="pagination.current" @change="pagechange" ></n3-page>
                </div> 
            </div>
        </div>
    </section> 
</template>
<script>
export default{
    name:"treatBrowse",
    data(){
        return{
           value:'',
           tipicName:'',
           showWelcome:true,
           pagination: {
                current: 1,
                total: 100,
                pagesize:30
            },
          list:[
              {
                topic:'一个新的面貌| 辛亦范范范辛',
                topicId:'1',
                topstatus:1,
                desc:'PatientsLikeMe焕然一新！我们对PatientsLikeMe的外观和感觉进行了改变，以反映您帮助创建和提升的独特声音...',
                author:'落花浅忆',
                createTime:'2018年4月9日',
                authorAvater: '../../../static/img/head.jpg',
                replyUser:'红颜易逝',
                replyUserAvater:'../../../static/img/head.jpg',
                reply:'200',
                helpful:'100',
                replyTime:'2018年4月9日 14:59:24',
                read:'1000'
              },
              {
                topic:'一个新的面貌| 辛亦范范范辛',
                topicId:'2',
                topstatus:1,
                desc:'PatientsLikeMe焕然一新！我们对PatientsLikeMe的外观和感觉进行了改变，以反映您帮助创建和提升的独特声音...',
                author:'落花浅忆',
                createTime:'2018年4月9日',
                authorAvater: '../../../static/img/head.jpg',
                replyUser:'红颜易逝',
                replyUserAvater:'../../../static/img/head.jpg',
                reply:'200',
                helpful:'100',
                replyTime:'2018年4月9日 14:59:24',
                read:'1000'
              },
              {
                topic:'一个新的面貌| 辛亦范范范辛',
                topicId:'3',
                topstatus:0,
                desc:'PatientsLikeMe焕然一新！我们对PatientsLikeMe的外观和感觉进行了改变，以反映您帮助创建和提升的独特声音...',
                author:'落花浅忆',
                createTime:'2018年4月9日',
                authorAvater: '../../../static/img/head.jpg',
                replyUser:'红颜易逝',
                replyUserAvater:'../../../static/img/head.jpg',
                reply:'200',
                helpful:'100',
                replyTime:'2018年4月9日 14:59:24',
                read:'1000'
              },
              {
                topic:'一个新的面貌| 辛亦范范范辛',
                topicId:'4',
                topstatus:0,
                desc:'PatientsLikeMe焕然一新！我们对PatientsLikeMe的外观和感觉进行了改变，以反映您帮助创建和提升的独特声音...',
                author:'落花浅忆',
                createTime:'2018年4月9日',
                authorAvater: '../../../static/img/head.jpg',
                replyUser:'红颜易逝',
                replyUserAvater:'../../../static/img/head.jpg',
                reply:'200',
                helpful:'100',
                replyTime:'2018年4月9日 14:59:24',
                read:'1000'
              },
              {
                topic:'一个新的面貌| 辛亦范范范辛',
                topicId:'5',
                topstatus:0,
                desc:'PatientsLikeMe焕然一新！我们对PatientsLikeMe的外观和感觉进行了改变，以反映您帮助创建和提升的独特声音...',
                author:'落花浅忆',
                createTime:'2018年4月9日',
                authorAvater: '../../../static/img/head.jpg',
                replyUser:'红颜易逝',
                replyUserAvater:'../../../static/img/head.jpg',
                reply:'200',
                helpful:'100',
                replyTime:'2018年4月2日 14:59:24',
                read:'1000'
              },
          ]
        }
    },
    methods:{
        reload(val){
            console.log(val)
        },
        getDate(val){
            let t1 = val.replace(/\年|月/g,"/").replace(/\日/g,"")
            let date1 = new Date(t1)
            let date2 = Date.now()
            let date3 = parseInt(date2 - date1)
           if((date3/1000) <　60){
               return "大约"+parseInt(date3/1000)+'秒前'
           }else if((date3/1000/60) <　60){
               return "大约"+parseInt(date3/1000/60)+'分钟前'
           }else if((date3/1000/60/60) <　60){
               return "大约"+parseInt(date3/1000/60/60)+'小时前'
           }else if((date3/1000/60/60/24) <　60){
               return val.replace(/[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}/g,"")
           }
        },
        pagechange(){

        },
        reload(){
            if(this.$route.params.id!==undefined){
                this.showWelcome = false
                this.topicName = "中医助乐"
            }
        }
    },
    created () {
        this.reload()
    }
}
</script>
<style lang="scss" scoped>
.content_tabs{
    margin-top: 30px;
    background-color: inherit;
}
.header_img{
    max-width: 1366px;
    height: 200px;
    img{
        width: 100%;
        height: 200px;
    }
}
.header_content{
    width: 100%;
    display: flex;
    position: relative;
    box-shadow: 0px 2px 2px #d8d8d8;
    background-color: #ffffff;
    .box{
        width: 50%;
        padding:10px 20px;
        border-bottom: 5px solid #00ccff;
        h5{
            font-weight: 600;
        }
        .avater{
            margin-top: 20px;
            margin-bottom: 5px;
            img{
                width: 40px;
                border-radius: 40px;
            }
        }
    }
    .box:first-child{
      border-bottom: 5px solid #ff9900;  
    }
    .pos_hr{
        top: 15px;
        bottom: 10px;
        position: absolute;
        left: 50%;
        height: auto;
        color: #ccc;
        border-left: 1px solid #e8e8e8;
    }
}
</style>
