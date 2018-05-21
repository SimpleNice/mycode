<template>
    <section class="content">
        <section class="content_text">
             <div class="member-home columns">
               <div class="personal_information">
                    <header>个人信息</header>
                    <div class="line">
                        <div class="line_left">
                            <img :src="source.avatvr" alt="" srcset=""><br>
                            {{source.username}}&nbsp;&nbsp;<n3-icon type="venus" class="female"></n3-icon><br>
                            <span class="text">{{source.birthday}}</span> <br>
                            <span class="text">{{source.address}}</span><br>
                            <n3-icon :type="source.star >=1? 'star':'star-o'" class="star"></n3-icon><n3-icon :type="source.star >=2? 'star':'star-o'" class="star"></n3-icon><n3-icon :type="source.star >=3? 'star':'star-o'" class="star"></n3-icon><br>
                            <label class="btn_s mark_btn" style="margin-top:5px;" @click="attention">{{source.attentionstatus == 0 ?'关注':'已关注'}}</label>
                        </div>
                        <div class="line_right">
                            <div class="mbox">
                                <p><span >条件</span>:&nbsp;
                                    <router-link :to="'/'+item.id" class="sign" v-for="(item,index) in source.conditions" :key="item.id" v-if="index ==source.conditions.length-1">{{item.name}}</router-link>
                                    <router-link :to="'/'+item.id" class="sign" v-else>{{item.name}},</router-link>
                                </p>
                                <p><span >症状</span>:&nbsp;
                                    <router-link :to="'/'+item.id" class="sign" v-for="(item,index) in source.symptom" :key="item.id" v-if="index ==source.symptom.length-1">{{item.name}}</router-link>
                                    <router-link :to="'/'+item.id" class="sign" v-else>{{item.name}},</router-link>
                                </p>
                                <p><span >治疗</span>:&nbsp;
                                    <router-link :to="'/'+item.id" class="sign" v-for="(item,index) in source.treatment" :key="item.id" v-if="index ==source.treatment.length-1">{{item.name}}</router-link>
                                    <router-link :to="'/'+item.id" class="sign" v-else>{{item.name}},</router-link>
                                </p>
                                <hr>
                                <p><span>兴趣爱好</span>:&nbsp;
                                    {{source.interest}}
                                </p>
                            </div>
                        </div>
                    </div>
               </div>
               <div class="interest">
                    <header>个人简介</header>
                    <div class="line">
                        <p class="big">
                            {{source.personalProfile}}
                        </p>
                    </div>
               </div>
               <div class="interest">
                    <header>活动</header>
                    <div class="line">
                        <p v-for="item in source.activity">{{item}}</p>
                    </div>
               </div>
               <div class="interest">
                    <header>说出你的故事</header>
                    <div class="line">
                        <p class="big">
                            {{source.story}}
                        </p>
                    </div>
               </div>
             </div>
        </section>
    </section>
</template>
<script>
export default{
    data(){
        return{
            source:{
                avatvr:'../../static/img/head.jpg',
                username:'红颜落雪',
                userId:1,
                birthday:'2018年4月4',
                address:'广东省深圳市福田区',
                star:2,
                attentionstatus:0,
                conditions:[
                   {id:'1',name:'脑溢血'},
                   {id:'2',name:'脑溢血'},
                   {id:'3',name:'脑溢血'},
                   {id:'4',name:'脑溢血'},
                   {id:'5',name:'脑溢血'},
                ],
                symptom:[
                    {id:'1',name:'纤维肌痛'},
                    {id:'2',name:'纤维肌痛'},
                    {id:'3',name:'纤维肌痛'},
                    {id:'4',name:'纤维肌痛'},
                    {id:'5',name:'纤维肌痛'},
                ],
                treatment:[
                    {id:'1',name:'加巴喷丁'},
                    {id:'2',name:'加巴喷丁'},
                    {id:'3',name:'加巴喷丁'},
                    {id:'4',name:'加巴喷丁'},
                    {id:'5',name:'加巴喷丁'},
                ],
                interest:'喜欢语言学习;爱运动，乒乓和网球;性格外向，乐于交朋友。',
                personalProfile:"我是一名68岁的男性，2006年12月被迫退休。我得到了我的局部放疗诊断，同时获得了关于手术的第二个意见。2007年7月，在我的新娘（30岁以上）和我的神经学家多次刺激后，我开始了Comal County Parkinson's Support Group。以为我会在3或4个月后退出，然后躲到某个洞里。九年后，我们从6岁增长到900多人在我们这里注册（这包括配偶，看护者和一些成年子女）。我们已经开会了一次......",
                activity:[
                    '2018-4-4成为本站会员',
                    '2018-4-4成为本站会员',
                    '2018-4-4成为本站会员',
                    '2018-4-4成为本站会员',
                    '2018-4-4成为本站会员',
                ],
                story:'自2002年以来，我被诊断为PD。我在2013年拥有DBS。在2007年成立了一个支持小组，每个月平均有40人参加。顺利康复的合格合格；啊十几个s；佛哈；公司；发货过来哈哈；个电饭锅坏了刚刚是开放端口ierthoi'
            }
        }
    },
    methods:{
        attention(){
            this.source.attentionstatus ==0 ? this.source.attentionstatus =1:this.source.attentionstatus =0
            //发送信息到后台
        },
        reload(){
            //根据id请求数据
        }
    },
    created () {
        this.userId = this.$route.params.id
    }
}
</script> 
<style lang="scss" scoped>
    .member-home{
        display: block;
        margin-top: 60px;
    }
    .personal_information{
        margin-top: 20px;
        width: 100%;
        border: 1px solid rgb(113, 193, 243);
        background-color: #ffffff;
        header{
            height: 40px;
            background:rgb(113, 193, 243); 
            font-weight: 600;
            line-height: 40px;
            color: #ffffff;
            padding-left: 20px;
        }
        .line{
            display: flex;
            padding: 20px;
        }
        .line_left{
            width: 260px;
            text-align: center;
            line-height: 22px;
            img{
                width: 80px;
                height: 80px;
                border-radius: 80px;
                margin-bottom: 10px;
            }
        }
        .line_right{
            width: calc(100% - 260px);
            height: 225px;
            .mbox{
                height: 100%;
                line-height: 22px;
                padding-left: 20px;
                border-left: 1px solid #ccc;
                hr{
                    border-color: #ececec;
                }
            }
        }
    }
    .interest{
        margin-top: 20px;
        width: 100%;
        border: 1px solid #ccc;
        background-color: #ffffff;
        header{
            height: 40px;
            background:#e4e4e4; 
            font-weight: 600;
            line-height: 40px;
            color: #616161;
            padding-left: 20px;
        }
        .line{
            padding: 20px;
        }
    }
    p.big::first-letter{
        font-size: 26px;
        padding-right: 5px;
    }
</style>
