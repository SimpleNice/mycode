<template>
    <section class="content">
        <section class="content_text">
            <div class="member-home columns ">
                <div class="member-home-col">
                    <div class="box box_show" >
                        <div class="avatar">
                            <img src="../../static/img/head.jpg" alt="" srcset="">
                        </div>
                        <div class="box_content">
                            <div class="show_text_img">
                                <div class="insert_text">
                                    <textarea name="" id="" class="my_status_insert" v-model="model.text"></textarea>
                                </div>
                                <hr v-if="model.img!=='' ||ie9"/>
                                <div class="show_img" v-if="model.img!==''">
                                    <div class="img_box">
                                        <img :src="model.img" alt="" srcset="">
                                        <span class="del_img but_span" @click="removeImg" >
                                            <n3-icon type="trash-o"></n3-icon>
                                        </span>
                                    </div>
                                </div>
                                <div class="show_img" v-if="ie9">
                                    <div class="img_box">
                                         <img :src="model.img" alt="" srcset="" id ="ie9Img">
                                        <span class="del_img but_span" @click="removeImg" >
                                            <n3-icon type="trash-o"></n3-icon>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="line">
                                <n3-radio-group v-model="model.radioValue" type="primary">
                                    <n3-radio-btn label="varygood">非常好</n3-radio-btn>
                                    <n3-radio-btn label="good">很好</n3-radio-btn>
                                    <n3-radio-btn label="neutral">平常</n3-radio-btn>
                                    <n3-radio-btn label="bad">不好</n3-radio-btn>
                                    <n3-radio-btn label="varybad">很糟糕</n3-radio-btn>
                                </n3-radio-group>
                                <input type="file" @change="tirggerFile($event)" ref="uploadFile" style="display:none;" id="uploadFile">
                                <span :class="[model.img!==''? 'but_span but_span_border dis_span' :'but_span but_span_border']" style="padding: 6px 12px 8px;" @click="openUpFile" ref="butSpan"><n3-icon type="picture-o" ></n3-icon></span>
                                <n3-button type="primary" size="sm" style="float:right;" @click.native="submit">发布动态</n3-button>
                                <n3-button size="sm" style="float:right;margin-right:10px;" @click.native="cache">取消</n3-button>
                            </div>
                        </div>
                    </div>
                    <div class="box_title">
                        来自其他会员动态
                        <n3-tabs @change="switching" :value="tabsVal" class="box_show">
                            <n3-tab header="我的所有条件"></n3-tab>
                            <n3-tab header="我关注的人" ></n3-tab>
                        </n3-tabs>
                    </div>
                    <div class="">
                        <dynamic-panel v-for="(item,index) in childList" :fatherList="item" :key="item.ID"/>
                    </div>
                </div>
                <div class="member-home-col">
                    <recommended-attention/>
                    <community/>
                </div>
            </div>
        </section>  
    </section>    
</template>
<script>
import { PERSONAL  } from "@/utils/const"
import storage from "@/utils/storage"
import dynamicPanel from './component/dynamicPanel'
import recommendedAttention from './component/recommendedAttention'
import community from './component/community'
    export default{
        name:'PersonalCenter',
        data(){
            return{
                model:{
                    text:'',
                    img:'',
                    status:'',
                    radioValue:''
                },
                ie9:false,
                childList:[
                    {
                        ID:"111",avatarSrc:"../../static/img/head.jpg",ueserName:"浅忆",time:"2018年3月19日 14:45:54",status:"很好",context:"三月的柳絮不飞,你的心是小小的窗扉紧掩,我达达的马蹄是美丽的错误.",imgSrc:"../../static/img/1501556110material6340.jpg",standBy:"20",helpful:"20",userAvatar:"../../static/img/zhongyi.jpg",
                        reply:[{avatarSrc:"../../static/img/ys.jpg",ueserName:"潇湘梦",time:"2018年3月19日 14:51:30",context:"我不是归人,我是过客.",standBy:"20"}]                            
                    },
                    {
                        ID:"112",avatarSrc:"../../static/img/head.jpg",ueserName:"1浅忆",time:"2018年3月19日 14:45:54",status:"很好",context:"三月的柳絮不飞,你的心是小小的窗扉紧掩,我达达的马蹄是美丽的错误.",imgSrc:"../../static/img/1501556110material6340.jpg",standBy:"20",helpful:"20",userAvatar:"../../static/img/zhongyi.jpg",
                        reply:[{avatarSrc:"../../static/img/ys.jpg",ueserName:"潇湘梦",time:"2018年3月19日 14:51:30",context:"我不是归人,我是过客.",standBy:"20"}]                            
                    },
                    {
                        ID:"113",avatarSrc:"../../static/img/head.jpg",ueserName:"浅忆",time:"2018年3月19日 14:45:54",status:"很好",context:"三月的柳絮不飞,你的心是小小的窗扉紧掩,我达达的马蹄是美丽的错误.",imgSrc:"../../static/img/1501556110material6340.jpg",standBy:"20",helpful:"20",userAvatar:"../../static/img/zhongyi.jpg",
                        reply:[{avatarSrc:"../../static/img/ys.jpg",ueserName:"潇湘梦",time:"2018年3月19日 14:51:30",context:"我不是归人,我是过客.",standBy:"20"}]                            
                    },
                    {
                        ID:"141",avatarSrc:"../../static/img/head.jpg",ueserName:"浅忆",time:"2018年3月19日 14:45:54",status:"很好",context:"三月的柳絮不飞,你的心是小小的窗扉紧掩,我达达的马蹄是美丽的错误.",imgSrc:"../../static/img/1501556110material6340.jpg",standBy:"20",helpful:"20",userAvatar:"../../static/img/zhongyi.jpg",
                        reply:[{avatarSrc:"../../static/img/ys.jpg",ueserName:"潇湘梦",time:"2018年3月19日 14:51:30",context:"我不是归人,我是过客.",standBy:"20"}]                            
                    },
                    {
                        ID:"151",avatarSrc:"../../static/img/head.jpg",ueserName:"浅忆",time:"2018年3月19日 14:45:54",status:"很好",context:"三月的柳絮不飞,你的心是小小的窗扉紧掩,我达达的马蹄是美丽的错误.",imgSrc:"../../static/img/1501556110material6340.jpg",standBy:"20",helpful:"20",userAvatar:"../../static/img/zhongyi.jpg",
                        reply:[{avatarSrc:"../../static/img/ys.jpg",ueserName:"潇湘梦",time:"2018年3月19日 14:51:30",context:"我不是归人,我是过客.",standBy:"20"}]                            
                    },
                    {
                        ID:"161",avatarSrc:"../../static/img/head.jpg",ueserName:"浅忆",time:"2018年3月19日 14:45:54",status:"很好",context:"三月的柳絮不飞,你的心是小小的窗扉紧掩,我达达的马蹄是美丽的错误.",imgSrc:"../../static/img/1501556110material6340.jpg",standBy:"20",helpful:"20",userAvatar:"../../static/img/zhongyi.jpg",
                        reply:[{avatarSrc:"../../static/img/ys.jpg",ueserName:"潇湘梦",time:"2018年3月19日 14:51:30",context:"我不是归人,我是过客.",standBy:"20"}]                            
                    }
                ],
                tabsVal:0
            }
        },
        components:{
            DynamicPanel:dynamicPanel, //发布状态列表
            RecommendedAttention:recommendedAttention, //推荐关注
            Community:community
        },
        methods: {
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
                this.model.text=''
                this.model.img=''
                this.model.radioValue=''
            },
            submit(){
                console.log(this.model)
            },
            switching(val){
                this.tabsVal = val
                storage.setItem(PERSONAL.PANEL,val)
            }
        },
        created () {
            this.tabsVal = storage.getItem(PERSONAL.PANEL)!==null? parseInt(storage.getItem(PERSONAL.PANEL)):0
        }
    }
</script>
