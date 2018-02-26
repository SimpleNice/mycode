<template>
  <section class="content">
      <section class="content_text">
        <section class="content_right expert_right">
                <header><h3>名医专家</h3></header>
                <div class="content_right_box content_padding expert">
                    <div class="list_box" v-for="item in expertList" :key="item.id">
                        <div class="top_img">
                            <img :src="item.img" alt="" srcset="">
                        </div>
                        <div class="bottom_text">
                            <p style="text-align: center; padding:10px;font-size:16px;font-weight:bold;">{{item.name}}</p>
                            <p>专长:{{item.specialty}}</p>
                            <p class="text_1">{{item.desc}}</p>
                        </div>
                    </div>
                    <div class="list">
                        <div class="line but-line">
                            <router-link to="/" class="sign">免费加入查看更多(1120专家)</router-link>
                        </div>
                    </div>
                </div>
        </section>
        <section class="content_left expert_left">
           <n3-input v-model="value" ref="input" icon="search" width="100%"></n3-input>
           <h4 style="margin-top:20px;border-bottom:1px solid #999999;padding-bottom:8px;font-size:16px;font-weight: bold;">专家研究小组</h4>
           <p v-for="item in groupList" :key="item.id"><router-link :to="'/'+item.id" class="mark_a">{{item.name}}</router-link></p>
           <p><router-link to="/" class="mark_a">查看更多({{countAllgroup}})</router-link></p>
           <p><router-link class="btn mark_btn" to="/login">免费加入</router-link></p>
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
                countAllgroup:"1123",
                groupList:[
                    {id:1,name:"集成式开展肝癌研究"},
                    {id:2,name:"集成式开展肝癌研究"},
                    {id:3,name:"集成式开展肝癌研究"},
                    {id:4,name:"集成式开展肝癌研究"},
                    {id:5,name:"集成式开展肝癌研究"},
                    {id:6,name:"集成式开展肝癌研究"}
                ],
                expertList:[
                    {id:1,name:"吴孟超",img:"../../static/img/ys.jpg",desc:"中国肝脏外科的开拓者和主要创始人之一，被誉为“中国肝胆外科之父”.",specialty:"肝胆外科"},
                    {id:2,name:"吴孟超",img:"../../static/img/ys.jpg",desc:"中国肝脏外科的开拓者和主要创始人之一，被誉为“中国肝胆外科之父”.",specialty:"肝胆外科"},
                    {id:3,name:"吴孟超",img:"../../static/img/ys.jpg",desc:"中国肝脏外科的开拓者和主要创始人之一，被誉为“中国肝胆外科之父”.",specialty:"肝胆外科"},
                    {id:4,name:"吴孟超",img:"../../static/img/ys.jpg",desc:"中国肝脏外科的开拓者和主要创始人之一，被誉为“中国肝胆外科之父”.",specialty:"肝胆外科"},
                    {id:5,name:"吴孟超",img:"../../static/img/ys.jpg",desc:"中国肝脏外科的开拓者和主要创始人之一，被誉为“中国肝胆外科之父”.",specialty:"肝胆外科"},
                    {id:6,name:"吴孟超",img:"../../static/img/ys.jpg",desc:"中国肝脏外科的开拓者和主要创始人之一，被誉为“中国肝胆外科之父”.",specialty:"肝胆外科"},
                    {id:7,name:"吴孟超",img:"../../static/img/ys.jpg",desc:"中国肝脏外科的开拓者和主要创始人之一，被誉为“中国肝胆外科之父”.",specialty:"肝胆外科"},
                    {id:8,name:"吴孟超",img:"../../static/img/ys.jpg",desc:"中国肝脏外科的开拓者和主要创始人之一，被誉为“中国肝胆外科之父”.",specialty:"肝胆外科"}
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
                        (this.groupList = data.result.groupList || []),
                        (this.expertList = data.result.expertList || 0);
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