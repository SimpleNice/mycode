<template>
  <section class="recommend_box box_show">
      <header>同病相怜<n3-tooltip content="查看其他用户" placement="top" trigger="hover"><span class="ref" @click="refresh"><n3-icon type ="refresh"></n3-icon></span></n3-tooltip></header>
      <div class="row">
          <div class="columns" v-for="(item,index) in list" :key="item.userId">
              <div class="avatar min-avatar">
                  <img :src="item.avatarSrc" alt="" srcset="">
              </div>
              <div class="userInfo">
                  <router-link to="#" class="sign">{{item.userName}}</router-link>
                  <span class="text text_1"><n3-icon type="mars" title="先生" class="male" v-if="item.sex == '1'"></n3-icon><n3-icon type="venus" class="female" title="女士" v-else></n3-icon></span>
                  <span class="text text_1">{{item.age}}岁</span></br>
                  <n3-icon type="map-marker" class="text"></n3-icon><span class="text">{{item.address}}</span> <span class="text">病情:{{item.disease}}</span>
              </div>
              <div class="attention">
                  <n3-button type="info" @click.native="attention(index)" v-if="item.status==0">关注</n3-button>
                  <span class="text" v-else>已关注</span>
              </div>
          </div>
      </div>
  </section>
</template>
<script>
    export default{
        name:"recommendedAttention",
        data(){
            return{
                list:[
                    {userId:"111",userName:"寒梅落雪",avatarSrc:"../../../static/img/head.jpg",sex:"1",age:"20",address:"广东深圳",disease:"心机梗塞,肾结石,脑瘤",status:0},
                    {userId:"112",userName:"寒梅落雪",avatarSrc:"../../../static/img/head.jpg",sex:"1",age:"20",address:"广东深圳",disease:"心机梗塞,肾结石,脑瘤",status:0},
                    {userId:"113",userName:"寒梅落雪",avatarSrc:"../../../static/img/head.jpg",sex:"1",age:"20",address:"广东深圳",disease:"心机梗塞,肾结石,脑瘤",status:0},
                    {userId:"114",userName:"寒梅落雪",avatarSrc:"../../../static/img/head.jpg",sex:"1",age:"20",address:"广东深圳",disease:"心机梗塞,肾结石,脑瘤",status:0},
                    {userId:"115",userName:"寒梅落雪",avatarSrc:"../../../static/img/head.jpg",sex:"1",age:"20",address:"广东深圳",disease:"心机梗塞,肾结石,脑瘤",status:0}
                ]
            }
        },
        methods: {
            attention(index){
                this.list[index].status = 1
            },
            refresh(){
                //加载新的数据
            }
        }
    }
</script>
<style lang="scss" scoped>
    .recommend_box{
        margin-bottom: 20px;
        background-color: #ffffff;
        padding: 20px;
        header{
            font-size: 20px;
            font-weight: 600;
            padding-bottom: 10px;
            border-bottom: 1px solid #cfcfcf;
        }
        .columns{
            margin-top: 10px;
            padding: 10px 0;
            display: flex;
            border-bottom: 1px solid #f6f6f6;
            .avatar{
                width: 35px;
            }
            .userInfo{
                font-size: 14px;
                width: calc(100% - 90px);
                .sign{
                    padding-right: 10px;
                }
                .text{
                    padding-right: 10px;
                    font-size: 12px;
                }
            }
            .attention{
                a{
                    font-size: 11px;
                    padding: 2px 10px;
                    border-radius: 0;
                }
            }
        }
    }
</style>
