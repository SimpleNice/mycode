<template>
  <section class="community_text">
     <div style="position: relative;">
          <n3-select v-model="search.defaultVal" :options="communityList" @change="search" width="150px"></n3-select>
          <n3-input v-model="search.value" ref="input" width="360px" placeholder="输入话题名称查找" @keyup.enter.native="search"></n3-input>
          <n3-icon type="search" @click.native="search" class="text" style="position:absolute;left: 490px;top: 8px;font-size: 16px;cursor: pointer;"></n3-icon>
     </div>
    <div class="community_list box_show">
        <div class="table_titel">
            <div class="align-left interactive">社区</div>
            <div class="align-left topic">话题</div>
            <div class="statistics">回复</div>
            <div class="statistics">有帮助</div>
            <div class="statistics">阅读</div>
            <div class="statistics"></div>
        </div>
        <div class="community_table">
            <table>
                <tbody>
                    <tr v-for="item in list" :key="item.topicId">
                        <td class="align-left interactive">
                            <router-link to="" class="sign bold">{{item.communityName}}</router-link>
                        </td>
                        <td class="align-left topic">
                            <router-link to="" class="sign bold">{{item.topic}}</router-link>
                        </td>
                        <td class="statistics">
                            <n3-icon type="comment-o"></n3-icon> {{toThousands(item.reply)}}
                        </td>
                        <td class="statistics">
                            <n3-icon type="thumbs-o-up"></n3-icon> {{toThousands(item.helpful)}}
                        </td>
                        <td class="statistics">
                            <n3-icon type="eye"></n3-icon> {{toThousands(item.read)}}
                        </td>
                        <td class="statistics">
                            <n3-button type="danger" @click.native="del">删除</n3-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="page">
            <n3-page :total="pagination.total" :pagesize="pagination.pagesize" v-model="pagination.current" @change="pagechange" ></n3-page>
        </div> 
    </div>
  </section>
</template>
<script>
export default {
    name:"CommunityMyTopic",
    data(){
        return{
            search:{
                value:'',
                defaultVal:''
            }, 
            pagination: {
                current: 1,
                total: 100,
                pagesize:30
            },
          list:[
              {
                communityName:'肝癌',
                communityID:'1', 
                topic:'一个新的面貌| 辛亦范范范辛',
                topicId:'1',
                reply:'200',
                helpful:'100',
                read:'1000'
              },
              {
                communityName:'肝癌',
                communityID:'2', 
                topic:'一个新的面貌| 辛亦范范范辛',
                topicId:'2',
                reply:'200',
                helpful:'100',
                read:'1000'
              },
              {
                communityName:'肝癌',
                communityID:'3', 
                topic:'一个新的面貌| 辛亦范范范辛',
                topicId:'3',
                reply:'200',
                helpful:'100',
                read:'1000'
              },
              {
                communityName:'肝癌',
                communityID:'4', 
                topic:'一个新的面貌| 辛亦范范范辛',
                topicId:'4',
                reply:'200',
                helpful:'100',
                read:'1000'
              },
              {
                communityName:'肝癌',
                communityID:'5', 
                topic:'一个新的面貌| 辛亦范范范辛',
                topicId:'5',
                reply:'200',
                helpful:'100',
                read:'1000'
              },
          ],
          communityList:[
              {value:'',label:'所有'},
              {value:'1',label:'肝癌'},
              {value:'2',label:'胃癌'},
              {value:'3',label:'肾结石'},
              {value:'4',label:'脑结石'},
              {value:'5',label:'乙肝'},
          ]
        }
    },
    methods: {
       //可以考虑注册全局
        toThousands(num) { 
            num = (num || 0).toString()
            let result = '' 
            while (num.length > 3) {  
                result = ',' + num.slice(-3) + result
                num = num.slice(0, num.length - 3)
            }  
            if (num) { result = num + result; }  
            return result
        },
        del(index,id){
            this.list.splice(index,1)
            //id与后台交互
        },
        search(){
            console.log(this.value)
            //val与后台交互
        },
        reload(){

        } 
    },
    created(){
        this.$emit('searchTabs',1) //改变选中TABS状态标识
        this.reload()
    },
}
</script>
<style lang="scss" scoped>
.community_text .community_list .topic{
    width: 34%;
}
.align-left.interactive{
    padding-left: 0px;
}
.community_text .community_list .interactive{
    width: 26%;
}
.community_text .community_list .statistics{
    width: 10%;
}
</style>
