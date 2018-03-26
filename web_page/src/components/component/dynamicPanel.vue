<template>
  <section class="stream-event box_show">
    <header class="media-object stream-event-header">
        <div class="avatar "><img :src="fatherList.avatarSrc" alt="" srcset=""></div>
        <div class="media-content">
            <div class="media-text"><router-link to="#" class="sign">{{fatherList.ueserName}}</router-link> {{fatherList.status}}<br>{{fatherList.time}}</div>
            <!-- <div class="media-oper"><n3-icon type="ellipsis-h"></n3-icon></div> --><!--后期需要增加-->
        </div>
    </header>
    <div class="media-object">
        <div class="media-content">
            {{fatherList.context}}
        </div>
        <div class="media-img" v-show="fatherList.imgSrc!==''">
            <img :src="fatherList.imgSrc" alt="" srcset="">
        </div>
        <div class="button-group">
            <span class="button-span"><n3-icon type="heart" class="button-c active"></n3-icon>({{fatherList.standBy}})支持</span>
            <span class="button-span"><n3-icon type="thumbs-up" class="button-c"></n3-icon>({{fatherList.helpful}})有帮助</span>
        </div>
        <hr/>
    </div>
    <div class="media-object stream-event-header min-media-object" v-for="item in fatherList.reply">
        <div class="avatar min-avatar"><img :src="item.avatarSrc" alt="" srcset=""></div>
        <div class="media-content min">
            <div class="media-text"><router-link to="#" class="sign">{{item.ueserName}}</router-link> <br>{{item.time}}</div>
            <!-- <div class="media-oper"><n3-icon type="ellipsis-h"></n3-icon></div> --><!--后期需要增加-->
        </div>
        <div class="button-group">
            <span class="button-span"><n3-icon type="heart" class="button-c active"></n3-icon>({{item.standBy}})支持</span>
        </div>
    </div>
    <div class="media-object stream-event-header min-media-object interactive">
        <div class="avatar min-avatar"><img :src="fatherList.userAvatar" alt="" srcset=""></div>
        <div class="media-content min">
            <n3-input icon="comments-o" width="100%" v-model="replyText" @focus="showBut = true" @blur="check" ref="replyText" class="reply_text"></n3-input>
        </div>
        <div class="button-group" v-if="showBut">
            <n3-button size="sm" style="margin-right:10px;" @click.native="cache">取消</n3-button>
            <n3-button type="warning" size="sm" @click.native="submit(fatherList.id)">回复</n3-button>
        </div>
    </div>
  </section>
</template>
<script>
    export default{
        name:'dynamicPanel',
        props:{
            fatherList:{
                type:Object,
                default:{
                        ID:"",
                        userID:"",
                        avatarSrc:"",ueserName:"",time:"",status:"",context:"",imgSrc:"",standBy:"",helpful:"",
                        userAvatar:"",
                        reply:[
                            {
                                ID:"",
                                userID:"",
                                avatarSrc:"",
                                ueserName:"",
                                time:"",
                                context:"",
                                standBy:""
                            }
                        ]                            
                }
            }
        },
        data(){
            return{
                replyText:'',
                showBut:false
            }
        },
        methods:{
            submit(){

            },
            cache(){
                this.showBut=false
                this.$refs.replyText.clean()
            },
            check(){
                this.replyText == '' ? this.showBut = false : ''
            }
        }
    }    
</script>