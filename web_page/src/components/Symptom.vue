<template>
  <section class="content">
      <section class="content_text">
        <section class="content_right patient_right">
                <header><h3>症状</h3></header>
                <div class="content_right_box content_padding">
                    <div class="list">
                        <div class="line">
                             <span class="sign">600,000+ </span>患者  <span class="sign">2,800+ </span>条件分享有关他们的症状以及如何管理它们。看看他们在说什么 
                        </div>
                        <div class="line">
                            <n3-input v-model="value" ref="input" icon="search" width="100%"></n3-input>
                        </div>
                    </div>
                    <div class="list">
                        <h4>最近一周热门查找:</h4>
                        <div class="line mark_a">
                            <router-link :to="'/'+item.id" class="mark_a" v-for="(item,index) in popular" :key="item.id"  v-if="index ==popular.length-1">{{item.name}}</router-link>
                            <router-link :to="'/'+item.id" class="mark_a" v-else>{{item.name}},</router-link>
                        </div>
                    </div>
                    <div class="list">
                        <h4>常用症状:</h4>
                        <div class="line mark_a">
                             <router-link :to="'/'+item.id" class="mark_a" v-for="(item,index) in commonUse" :key="item.id"  v-if="index ==popular.length-1">{{item.name}},</router-link>
                             <router-link :to="'/'+item.id" class="mark_a" v-else>{{item.name}},</router-link>
                        </div>
                    </div>
                    <div class="list">
                        <div class="line head ">
                            <div class="hear_portrait">
                                <img src="../../static/img/head.jpg" >
                            </div>
                            <span style="padding-top: 30px;display: inline-block;">“ 我会更新我的症状报告，看看我的状况如何变化，它让你了解这种疾病随着时间的推移有许多症状的变化。”
                                </br><router-link to="/login" class="sign">中医联助乐网 </router-link></font>成员<router-link to="/user/id" class="mark_a"> 落花追忆 </router-link>
                                </span>
                        </div>
                    </div>
                    <div class="list">
                        <h4>与其他人联系并从他们的经验中学习:</h4>
                        <div class="line but-line">
                            <n3-button type="primary" class="btn mark_btn">现在免费加入</n3-button>
                        </div>
                    </div>
                </div>
        </section>
        <section class="content_left symptom_left">
           <hr class="bold_hr">
           <b>病人评价:</b> 
           <p>通过同病相怜平台,我找到很多与我有相同症状的朋友,通过彼此交流经验,使我恢复健康速度提升,感谢有这个平台.</p>
           <hr>
           <p>你的症状数据可以帮助更多的人,如果你愿意,请把你的数据捐赠给我们,或许可以挽救生命</p>
           <p><b>把你的数据捐赠给我们</b></p>
           <p><router-link to="/login" class="sign">现在加入我们</router-link></p>
        </section>    
      </section>    
  </section>
</template>
<script>
    export default{
        name:"symptom",
        data(){
            return {
                value:'',
                popular:[
                    {id:1,name:"纤维肌痛"},
                    {id:2,name:"纤维肌痛"},
                    {id:3,name:"纤维肌痛"},
                    {id:4,name:"纤维肌痛"},
                    {id:5,name:"纤维肌痛"},
                    {id:6,name:"纤维肌痛"}
                ],
                commonUse:[
                    {id:1,name:"流鼻涕"},
                    {id:2,name:"流鼻涕"},
                    {id:3,name:"流鼻涕"},
                    {id:4,name:"流鼻涕"},
                    {id:5,name:"流鼻涕"},
                    {id:6,name:"流鼻涕"}
                ]
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
            }
        },
        created () {
            this.reload()
        }
    }
</script>