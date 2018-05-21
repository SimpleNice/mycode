<template>
<section class="content_tabs">
    <header>
        <h3>{{topic.communityName}}</h3>
        <n3-button @click.native="goTopicList">返回主题列表</n3-button>
        <router-link :to="'/community/update/'+topic.commeunityId" ><n3-button type="primary" style="float:right;">发布一个新的话题</n3-button></router-link>
    </header>
    <div class="topicontent">
        <div class="community_text no_top">
            <div class="community_list">
                <div class="table_titel">
                   {{topic.title}}
                </div>
                <div class="topicontent line">
                    <div class="user">
                        <div class="avater">
                            <img :src="topic.avater" alt="" srcset=""> &nbsp;&nbsp;
                            <router-link :to="'/homepage/'+topic.authorId" class="sign">{{topic.author}}</router-link>
                        </div>
                        <div class="reply">
                            <router-link :to="'../update/'+topic.id"><n3-button type="info" size="sm">编辑</n3-button></router-link>
                        </div>
                        <div class="status">
                            <n3-icon type="comment-o"></n3-icon>&nbsp;&nbsp;{{topic.reply}} &nbsp;&nbsp;
                            <n3-icon type="thumbs-o-up"></n3-icon>&nbsp;&nbsp;{{topic.helpful}} &nbsp;&nbsp;
                        </div>
                    </div>
                    <div class="detail">
                        <div class="detail_top text">
                            {{topic.createTiem}}
                        </div>
                        <div class="detail_content">
                            <p>
                                {{topic.content}}
                                <img :src="topic.img" alt="" srcset="">
                            </p>
                        </div>
                        <div class="detail_footer text">
                            <n3-icon type="thumbs-o-up" title="是否有帮助" @click.native="addHelpful" :class="[topic.helpfulStatus ? 'active':'']"></n3-icon> <span class="text">|</span> <span class="sign" @click="addHelpful">标记有帮助</span> 
                            <hr>
                            这篇文章最后由<router-link :to="'/homepage/'+topic.authorId" class="sign">{{topic.author}}</router-link>于{{topic.lastTime}}进行 编辑
                        </div>
                    </div>
                </div>
                 <div class="topicontent line" v-for="(item,index) in reply">
                    <div class="user">
                        <div class="avater">
                            <img :src="item.avater" alt="" srcset=""> &nbsp;&nbsp;
                            <router-link :to="'/homepage/'+item.authorId" class="sign">{{item.author}}</router-link>
                        </div>
                        <div class="reply">
                            <n3-button type="info" size="sm" @click.native="replys({name:item.author,id:item.authorId})">回复</n3-button>
                        </div>
                    </div>
                    <div class="detail">
                        <div class="detail_top text">
                            {{item.createTiem}}
                        </div>
                        <div class="detail_content">
                            <p>
                                {{item.content}}
                                <img :src="item.img" alt="" srcset="">
                            </p>
                        </div>
                        <!-- <div class="detail_footer text">
                            <n3-icon type="thumbs-o-up" title="是否有帮助"></n3-icon> <span class="text">|</span> <span class="sign">标记有帮助</span> 
                            <hr>
                            这篇文章最后由<span class="sign">{{topic.author}}</span>于{{topic.lastTime}}进行 编辑
                        </div> -->
                    </div>
                </div>
                <div class="page">
                    <n3-page :total="pagination.total" :pagesize="pagination.pagesize" v-model="pagination.current" @change="pagechange" ></n3-page>
                </div>
                <div class="member-home">
                    <div class="box" >
                        <div class="avatar">
                            <img src="../../../static/img/head.jpg" alt="">
                        </div>
                        <div class="box_content">
                            <div class="show_text_img">
                                <div v-if="model.replyId!==''">
                                    回复:<span class="mark_a">{{model.replyName}}</span>
                                </div>
                                <div class="insert_text">
                                    <textarea name="" id="" class="my_status_insert" v-model="model.text" ref="replyText"></textarea>
                                </div>
                                <hr v-if="model.img!==''"/>
                                <div class="show_img" v-if="model.img!==''">
                                    <div class="img_box">
                                        <img :src="model.img" alt="" srcset="">
                                        <span class="del_img but_span" @click="removeImg" >
                                            <n3-icon type="trash-o"></n3-icon>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="line">
                                <input type="file" @change="tirggerFile($event)" ref="uploadFile" style="display:none;" id="uploadFile">
                                <span :class="[model.img!==''? 'but_span but_span_border dis_span' :'but_span but_span_border']" style="padding: 6px 12px 8px;" @click="openUpFile" ref="butSpan"><n3-icon type="picture-o" ></n3-icon></span>
                                <n3-button type="primary" size="sm" style="float:right;" @click.native="submit">回复信息</n3-button>
                                <n3-button size="sm" style="float:right;margin-right:10px;" @click.native="cache">取消</n3-button>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>        
        </div>
        <div class="right_community_text">
            <div class="right_community_box box_show">
                <header>本主题中的标签</header>
                <div class="label_group">
                    <label class="mark_a bold" v-for="item in labels">{{item}}</label>
                </div>
                <hr>
                <div v-if="!addLabelStatus">                   
                    <span class="sign" @click="upLabel" >添加新标签</span>
                </div>
                <div class="oper" v-else>                   
                    <span class="bold">添加标签</span>以帮助他人理解正在讨论的内容。<br>
                    <n3-input v-model="newLabel" ref="input" style="margin-top:20px;" placeholder="创建一个标签"></n3-input>
                    <n3-button type="info" @click.native="addLabel">添加</n3-button>
                </div>
            </div>
            <div class="right_community_box  box_show">
                <header>相关的主题</header>
                <div class="right_community_line" v-for="item in related" :key="item.topicId">
                    <router-link :to="'/community/topicContent/'+item.topicId" class="sign">{{item.topic}}</router-link> <br>
                    <span class="text">{{getDate(item.lastReplyTiem)}}的最后回复</span>
                </div>
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
           newLabel:'',
           pagination: {
                current: 1,
                total: 100,
                pagesize:30
            },
            model:{
                text:'',
                img:'',
                replyName:'',
                replyId:''
            },
            topic:{
                id:'1',
                communityName:"中医助乐",
                title:"一个新的面貌| 辛亦范范范辛",
                author:"落花浅忆",
                avater:"../../../static/img/1501556110material6340.jpg",
                helpful:500,
                reply:300,
                createTiem:"2018年4月11日 17:05:55",
                lastTime:"2018年4月11日 17:06:21",
                content:"PatientsLikeMe焕然一新！我们对PatientsLikeMe的外观和感觉进行了改变，以反映您为研究人员，制药公司和医疗保健行业创造和提升的独特声音。以下是一些更改：我们的颜色 - 我们用黄色，白色和黑色替换了浅蓝色和绿色。在我们与创意合作伙伴合作的过程中，我们仔细研究了医疗保健，生命科学，制药和技术领域的其他人如何表现自己。我们看到很多蓝色，很多柔和的颜色。但是这个社区的声音 - 你的声音 - 并不柔和或者柔和。所以我们选择了一种不同的调色板，我们认为它更好地代表了社区，在行业中更加独特，并且帮助网站上的元素脱颖而出。我们的标志 - 我们有一个新的标志，包含六边形的形状，你也可以看到网站上的其他地方。“逆科学”有一句名言：“六边形和科学一样接近魔法。”但是，我们并没有因为一个很好的引用而选择这个形状。我们被六角形的力量和结构所吸引，相信它代表了PatientsLikeMe社区的力量和弹性。",
                img:"../../../static/img/1501556110material6340.jpg",
                authorId:1,
                commeunityId:1,
                helpfulStatus:false
            },
            reply:[
                {
                authorId:1,
                author:"落花浅忆",
                avater:"../../../static/img/1501556110material6340.jpg",
                createTiem:"2018年4月11日 17:05:55",
                content:"PatientsLikeMe焕然一新！我们对PatientsLikeMe的外观和感觉进行了改变，以反映您为研究人员，制药公司和医疗保健行业创造和提升的独特声音。以下是一些更改：我们的颜色 - 我们用黄色，白色和黑色替换了浅蓝色和绿色。在我们与创意合作伙伴合作的过程中，我们仔细研究了医疗保健，生命科学，制药和技术领域的其他人如何表现自己。我们看到很多蓝色，很多柔和的颜色。但是这个社区的声音 - 你的声音 - 并不柔和或者柔和。所以我们选择了一种不同的调色板，我们认为它更好地代表了社区，在行业中更加独特，并且帮助网站上的元素脱颖而出。我们的标志 - 我们有一个新的标志，包含六边形的形状，你也可以看到网站上的其他地方。“逆科学”有一句名言：“六边形和科学一样接近魔法。”但是，我们并没有因为一个很好的引用而选择这个形状。我们被六角形的力量和结构所吸引，相信它代表了PatientsLikeMe社区的力量和弹性。",
                img:"../../../static/img/1501556110material6340.jpg"
            },
            {
                authorId:2,
                author:"落花浅忆",
                avater:"../../../static/img/1501556110material6340.jpg",
                createTiem:"2018年4月11日 17:05:55",
                content:"PatientsLikeMe焕然一新！我们对PatientsLikeMe的外观和感觉进行了改变，以反映您为研究人员，制药公司和医疗保健行业创造和提升的独特声音。以下是一些更改：我们的颜色 - 我们用黄色，白色和黑色替换了浅蓝色和绿色。在我们与创意合作伙伴合作的过程中，我们仔细研究了医疗保健，生命科学，制药和技术领域的其他人如何表现自己。我们看到很多蓝色，很多柔和的颜色。但是这个社区的声音 - 你的声音 - 并不柔和或者柔和。所以我们选择了一种不同的调色板，我们认为它更好地代表了社区，在行业中更加独特，并且帮助网站上的元素脱颖而出。我们的标志 - 我们有一个新的标志，包含六边形的形状，你也可以看到网站上的其他地方。“逆科学”有一句名言：“六边形和科学一样接近魔法。”但是，我们并没有因为一个很好的引用而选择这个形状。我们被六角形的力量和结构所吸引，相信它代表了PatientsLikeMe社区的力量和弹性。",
                img:"../../../static/img/1501556110material6340.jpg"
            },
            {
                authorId:3,
                author:"落花浅忆",
                avater:"../../../static/img/1501556110material6340.jpg",
                createTiem:"2018年4月11日 17:05:55",
                content:"PatientsLikeMe焕然一新！我们对PatientsLikeMe的外观和感觉进行了改变，以反映您为研究人员，制药公司和医疗保健行业创造和提升的独特声音。以下是一些更改：我们的颜色 - 我们用黄色，白色和黑色替换了浅蓝色和绿色。在我们与创意合作伙伴合作的过程中，我们仔细研究了医疗保健，生命科学，制药和技术领域的其他人如何表现自己。我们看到很多蓝色，很多柔和的颜色。但是这个社区的声音 - 你的声音 - 并不柔和或者柔和。所以我们选择了一种不同的调色板，我们认为它更好地代表了社区，在行业中更加独特，并且帮助网站上的元素脱颖而出。我们的标志 - 我们有一个新的标志，包含六边形的形状，你也可以看到网站上的其他地方。“逆科学”有一句名言：“六边形和科学一样接近魔法。”但是，我们并没有因为一个很好的引用而选择这个形状。我们被六角形的力量和结构所吸引，相信它代表了PatientsLikeMe社区的力量和弹性。",
                img:"../../../static/img/1501556110material6340.jpg"
            },
            {
                authorId:4,
                author:"落花浅忆",
                avater:"../../../static/img/1501556110material6340.jpg",
                createTiem:"2018年4月11日 17:05:55",
                content:"PatientsLikeMe焕然一新！我们对PatientsLikeMe的外观和感觉进行了改变，以反映您为研究人员，制药公司和医疗保健行业创造和提升的独特声音。以下是一些更改：我们的颜色 - 我们用黄色，白色和黑色替换了浅蓝色和绿色。在我们与创意合作伙伴合作的过程中，我们仔细研究了医疗保健，生命科学，制药和技术领域的其他人如何表现自己。我们看到很多蓝色，很多柔和的颜色。但是这个社区的声音 - 你的声音 - 并不柔和或者柔和。所以我们选择了一种不同的调色板，我们认为它更好地代表了社区，在行业中更加独特，并且帮助网站上的元素脱颖而出。我们的标志 - 我们有一个新的标志，包含六边形的形状，你也可以看到网站上的其他地方。“逆科学”有一句名言：“六边形和科学一样接近魔法。”但是，我们并没有因为一个很好的引用而选择这个形状。我们被六角形的力量和结构所吸引，相信它代表了PatientsLikeMe社区的力量和弹性。",
                img:"../../../static/img/1501556110material6340.jpg"
            },
            {
                authorId:5,
                author:"落花浅忆",
                avater:"../../../static/img/1501556110material6340.jpg",
                createTiem:"2018年4月11日 17:05:55",
                content:"PatientsLikeMe焕然一新！我们对PatientsLikeMe的外观和感觉进行了改变，以反映您为研究人员，制药公司和医疗保健行业创造和提升的独特声音。以下是一些更改：我们的颜色 - 我们用黄色，白色和黑色替换了浅蓝色和绿色。在我们与创意合作伙伴合作的过程中，我们仔细研究了医疗保健，生命科学，制药和技术领域的其他人如何表现自己。我们看到很多蓝色，很多柔和的颜色。但是这个社区的声音 - 你的声音 - 并不柔和或者柔和。所以我们选择了一种不同的调色板，我们认为它更好地代表了社区，在行业中更加独特，并且帮助网站上的元素脱颖而出。我们的标志 - 我们有一个新的标志，包含六边形的形状，你也可以看到网站上的其他地方。“逆科学”有一句名言：“六边形和科学一样接近魔法。”但是，我们并没有因为一个很好的引用而选择这个形状。我们被六角形的力量和结构所吸引，相信它代表了PatientsLikeMe社区的力量和弹性。",
                img:"../../../static/img/1501556110material6340.jpg"
            },
            ],
            addLabelStatus:false,
            labels:[
                '新的','好玩的','乙肝','新人','会员支持'
            ],
            related:[
                {topic:'在论坛更新的外观：让我们知道你的想法！',topicId:1,lastReplyTiem:"2018年4月11日 17:50:09"},
                {topic:'在论坛更新的外观：让我们知道你的想法！',topicId:2,lastReplyTiem:"2018年4月11日 17:50:09"},
                {topic:'在论坛更新的外观：让我们知道你的想法！',topicId:3,lastReplyTiem:"2018年4月11日 17:50:09"},
                {topic:'在论坛更新的外观：让我们知道你的想法！',topicId:4,lastReplyTiem:"2018年4月11日 17:50:09"},
                {topic:'在论坛更新的外观：让我们知道你的想法！',topicId:5,lastReplyTiem:"2018年4月11日 17:50:09"},
            ]
        }
    },
    methods:{
        tirggerFile(event){
            //兼容IE9 --无效
            // if(navigator.userAgent.indexOf("MSIE 9.0")>0){
            //     this.ie9 = true
            //     let file = document.getElementById('uploadFile')
            //     let pic =  document.getElementById('ie9Img')
            //     file.select()
            //     file.blur()
            //     let reallocalpath = document.selection.createRange().text
            //     console.log(reallocalpath)
            //     pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src=\"" + reallocalpath + "\")"
            //     pic.width = "60px"
            //     pic.height = "60px"
            //     pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
            //     return true
            // }
            let file = event.target.files
            let arr=['jpg','png','bmp','jpeg','JPG','PNG']
            let str = file[0].name.split('.')[file[0].name.split('.').length-1]
            
            if(arr.indexOf(str)<0) {
                this.n3Modal.alert({
                    title: '提示消息',
                    message: '上传格式错误,允许上传'+arr.join()+'格式',
                    effect: 'fade',
                    type: 'danger'
                })
                return false
            }
            if(window.FileReader){
                let reader = new FileReader()
                reader.readAsDataURL(file[0])
                reader.onload=evn =>{
                    this.model.img=evn.target.result
                }
            }
        },
        removeImg(){
            this.model.img= ''
            this.ie9 =false
        },
        openUpFile(){
            //点击触发隐藏file框
            if(this.model.img!==''){
                return false
            }
            this.$refs.uploadFile.click()
        },
        cache(){
            this.model={
                text:'',
                img:'',
                replyName:'',
                replyId:''
            }
        },
        replys(obj){
            this.model.replyName = obj.name
            this.model.replyId = obj.id
            this.$refs.replyText.focus()
        },
        pagechange(){

        },
        submit(){

        },
        addLabel(){
            this.labels.push(this.newLabel)
        },
        upLabel(){
            this.addLabelStatus = true
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
        goTopicList(){
            this.$router.push({ name: 'CommunityIndex', params: { id: this.topic.id }})
        },
        addHelpful(){
            this.topic.helpfulStatus=!this.topic.helpfulStatus
            if(this.topic.helpfulStatus){
                this.topic.helpful+=1
            }else{
                this.topic.helpful-=1
            }
        }
    }
}    
</script>

<style lang="scss" scoped>
.topicontent{
    display: flex;
    .community_list{
        width: 1000px;
        margin-top: 0;
        border-right:1px solid #e6e6e6; 
        .page{
            margin-bottom: 0px;
        }
        .member-home{
            width: 600px;
            padding: 20px;
            margin: 0;
            .my_status_insert{
                height: 200px;
            }
            .line{
                border-bottom: none;
            }
            .replyUser{
                margin-bottom: 20px;
            }
        }
    }
    // .table_titel{
    //     background: #e4e4e4;
    // }
    .user{
        background: #fafafa;
        width: 300px;
        padding: 20px 40px;
        .avater{
            height: 55px;
           img{
               width: 55px;
               height: 55px;
               border-radius:55px; 
           }
        }
        .status{
            margin-top: 20px;
        }
        .reply{
            margin-top: 20px;
        }
    }
    .detail{
        padding: 20px;
        width: calc(100% - 300px);
        .detail_top{
            margin-bottom: 10px;
        }
        .detail_content{
            line-height: 22px;
            img{
                width: 100%;
            }
        }
        .detail_footer{
            margin-top: 40px;
        }
    }
}
.right_community_text{
    background-color:#f2f2f2;
    width: calc(100% - 1000px);
    .right_community_box{
        padding: 20px;
        background: #ffffff;
        margin-left: 30px;
        width: calc(100%-30px);
        margin-top: 30px;
        header{
            padding: 0;
            margin-bottom: 10px;
        }
        .oper{
            padding-bottom: 30px;
        }
        .right_community_line{
            margin-bottom: 10px;
        }
    }
}
.line{
    border-bottom: 1px solid #f4f4f4;
}
.content_tabs{
    margin-top: 60px;
    margin-bottom: 40px;
    header{
        padding: 10px 20px 20px;
    }
    .table_titel{
        font-weight: 600;
        font-size:18px; 
    }
}
.sign{
    cursor: pointer;
}
.active{
    color: #2db7f5;
}
@media screen and (max-width:1100px){
    .topicontent{
        .community_list{
            width: 750px;
        }
        .right_community_text{
            width: calc(100% - 750px);
        }
    }
}
@media screen and (max-width:1000px){
    .topicontent{
        .community_list{
            width:100%;
        }
        .right_community_text{
            display: none;
            width: calc(100% - 750px);
        }
    }
}
</style>
