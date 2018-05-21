<template>
  <section style="margin-bottom:40px;">
      <div class="content_table box_show">
          <table>
              <caption>我的社区</caption>
              <tbody>
                  <tr v-for="(item,index) in myCommunity" :key="item.communityId">
                      <td class="icon_td sign"><n3-icon type="comments-o"></n3-icon></td>
                      <td><router-link to="" class="sign bold">{{item.communityName}}</router-link></td>
                      <td>{{item.desc}}</td>
                      <td>{{toThousands(item.member)}}名成员</td>
                      <td><n3-button @click.native="quit(index,item.communityId)">退出</n3-button></td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div class="content_table box_show ">
          <table>
              <caption>
                  其他社区
                  <n3-input v-model="value" ref="input" style="float:right;" width="360px" placeholder="输入社区名称查找" @keyup.enter.native="search"></n3-input>
                  <n3-icon type="search" @click.native="search" class="text" style="position:absolute;right: 8px;top: 8px;font-size: 16px;cursor: pointer;"></n3-icon>
              </caption>
              <tbody>
                  <tr  v-for="(item,index) in otherCommity" :key="item.communityId">
                      <td class="icon_td text_1"><n3-icon type="comments-o"></n3-icon></td>
                      <td><router-link to="" class="sign bold">{{item.communityName}}</router-link></td>
                      <td>{{item.desc}}</td>
                      <td>{{toThousands(item.member)}}名成员</td>
                      <td><n3-button  @click.native="add(index,item.communityId)">加入</n3-button></td>
                  </tr>
              </tbody>
          </table>
      </div>
  </section>
</template>
<script>
export default {
    name:"CommunityMyCommunity",
    data(){
        return{
            value:'',
            myCommunity:[
                {communityId:'1',communityName:'肝脏，胰腺和胆囊',desc:'对于那些影响肝脏，胰腺或胆囊的病人',member:5319},
                {communityId:'2',communityName:'肝脏，胰腺和胆囊',desc:'对于那些影响肝脏，胰腺或胆囊的病人',member:5319},
                {communityId:'3',communityName:'肝脏，胰腺和胆囊',desc:'对于那些影响肝脏，胰腺或胆囊的病人',member:5319},
                {communityId:'4',communityName:'肝脏，胰腺和胆囊',desc:'对于那些影响肝脏，胰腺或胆囊的病人',member:5319},
                {communityId:'5',communityName:'肝脏，胰腺和胆囊',desc:'对于那些影响肝脏，胰腺或胆囊的病人',member:5319},
            ],
            otherCommity:[
                {communityId:'1',communityName:'肝脏，胰腺和胆囊',desc:'对于那些影响肝脏，胰腺或胆囊的病人',member:5319},
                {communityId:'2',communityName:'肝脏，胰腺和胆囊',desc:'对于那些影响肝脏，胰腺或胆囊的病人',member:5319},
                {communityId:'3',communityName:'肝脏，胰腺和胆囊',desc:'对于那些影响肝脏，胰腺或胆囊的病人',member:5319},
                {communityId:'4',communityName:'肝脏，胰腺和胆囊',desc:'对于那些影响肝脏，胰腺或胆囊的病人',member:5319},
                {communityId:'5',communityName:'肝脏，胰腺和胆囊',desc:'对于那些影响肝脏，胰腺或胆囊的病人',member:5319},
            ]
        }
    },
    methods: {
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
        quit(index,id){
            this.myCommunity.splice(index,1)
            //id与后台交互
        },
        add(index,id){
            this.otherCommity.splice(index,1)
            this.myCommunity.push(this.otherCommity[index])
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
        this.$emit('searchTabs',0) //改变选中TABS状态标识
        this.reload()
    },
}
</script>

