<template>
  <section class="community box_show">
      <header>圈子<n3-tooltip content="查看其他圈子" placement="top" trigger="hover"><span class="ref" @click="refresh"><n3-icon type ="refresh"></n3-icon></span></n3-tooltip></header>
      <div class="row">
          <div class="columns" v-for="(item,index) in list" :key="item.communityId">
              <div class="heading">
                  <router-link to="#" class="sign">{{item.heading}}</router-link> 
              </div>
              <div class="join">
                  <n3-button @click.native="join(index)" v-if="item.status==0">加入</n3-button>
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
                    {communityId:"111",heading:"寒梅落雪",status:0},
                    {communityId:"112",heading:"寒梅落雪",status:0},
                    {communityId:"113",heading:"寒梅落雪",status:0},
                    {communityId:"114",heading:"寒梅落雪",status:0},
                    {communityId:"115",heading:"寒梅落雪",status:0}
                ]
            }
        },
        methods: {
            join(index){
                this.list[index].status = 1
            },
            refresh(){
                //加载新的数据
            }
        }
    }
</script>
<style lang="scss" scoped>
    .community{
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
            display: flex;
            padding: 10px 0;
            border-bottom: 1px solid #f6f6f6;
            .heading{
                width: calc(100% - 50px);
            }
            .join{
                a{
                    font-size: 11px;
                    padding: 2px 10px;
                    border-radius: 0;
                }
            }
        }
    }
</style>
