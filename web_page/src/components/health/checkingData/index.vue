<template>
  <section class="container">
      <header>
          <h3>检查记录</h3>
          <p>欢迎所有助乐网成员将任何可用的检测数据添加到他们的个人资料。我们也可能会建议与您的情况有关的检查数据。</p>
      </header>
      <div class="columns box_show">
          <div class="columns_header">  
                搜索新的实验室添加到您的配置文件，或 <router-link to="/health/checkingData/all" class="sign">浏览所有的实验室</router-link>。
                </br>
                <n3-typeahead 
                    v-model="value"
                    :data="dataList" 
                    placeholder="请输入检测名称"
                    width="460px">
                </n3-typeahead>
          </div>
          <div class="columns_table no_top">
              <table>
                    <thead>
                        <th>面板</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in list" :key="item.checkingID">
                            <td><router-link :to="'/health/checkingData/history/'+item.checkingID" class="sign">{{item.name}}</router-link></td>
                            <td><n3-button @click.native="edit(index,item.checkingID)">更新我的({{item.name}})</n3-button></td>
                        </tr>
                    </tbody>
                </table>
          </div>
          <div class="columns_table no_top" v-show="childrenStatus">
               <a name="childrenList"></a>
              <table>
                    <thead>
                        <th>检测项</th>
                        <th>最新结果</th>
                        <th>最近更新时间</th>
                        <th>正常范围</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in sourceList" :key="item.childrenID">
                            <td>{{item.name}}({{checkName}})</td>
                            <td>{{item.result}}</td>
                            <td>{{item.time}}</td>
                            <td>{{item.normalRange}}</td>
                            <td><n3-button @click.native="addNew(index,item.childrenID)">添加一个新结果</n3-button></td>
                        </tr>
                    </tbody>
                </table>
          </div>
      </div>
      <n3-aside  placement="right" :title="'更新你的'+updateChildrenName +'('+checkName+')'" width="360px" ref="asideRight" :header="true" class="asideRight">
        <div class="text">
            <p>更新你的检测数据.</p>
            <hr/>
        </div>
        <div class="inputLine">
            <label class="text_1">时间</label></br>
            <n3-datepicker
            format="yyyy-MM-dd"
            width="300px"
            v-model="model.time">
            </n3-datepicker>
        </div>
        <div class="inputLine">
            <label class="text_1">结果</label></br>
            <n3-input v-model="model.result"  width="300px"></n3-input>
        </div>
        <div class="story">
            <n3-button type="primary" size="sm" @click.native="save">更新</n3-button>
            <n3-button size="sm" style="margin-left:10px;" @click.native="cache">取消</n3-button>
        </div>  
     </n3-aside>
  </section>
</template>
<script>
    export default{
        name:"CheckingDataList",
        data(){
            return{
                value:'',
                dataList:[

                ],
                list:[
                    {checkingID:'1',name:"尿分析"},
                    {checkingID:'2',name:"雪分析"},
                    {checkingID:'3',name:"尿分析"},
                    {checkingID:'4',name:"尿分析"},
                    {checkingID:'5',name:"尿分析"},
                    {checkingID:'6',name:"尿分析"},
                ],
                sourceList:[
                    {childrenID:'1',name:'颜色',result:'淡黄',time:'2018年3月27日 17:25:13',normalRange:'透明'},
                    {childrenID:'2',name:'颜色',result:'淡黄',time:'2018年3月27日 17:25:13',normalRange:'透明'},
                    {childrenID:'3',name:'颜色',result:'淡黄',time:'2018年3月27日 17:25:13',normalRange:'透明'},
                    {childrenID:'4',name:'颜色',result:'淡黄',time:'2018年3月27日 17:25:13',normalRange:'透明'},
                    {childrenID:'5',name:'颜色',result:'淡黄',time:'2018年3月27日 17:25:13',normalRange:'透明'},
                    {childrenID:'6',name:'颜色',result:'淡黄',time:'2018年3月27日 17:25:13',normalRange:'透明'},
                ],
                checkName:"",
                childrenStatus:false,
                updateChildrenName:"",
                model:{
                    time:'',
                    result:''
                }
            }
        },
        methods: {
            edit(index,id){
                // this.$http.post('#',{}).then((data)=>{
                    this.checkName=this.list[index].name
                    this.childrenStatus = true
                    location.href = "#childrenList"
                // }).catch((error)=>{

                // })
            },
            addNew(index,id){
                this.updateChildrenName = this.sourceList[index].name
                this.$refs.asideRight.open()
            },
            save(){

            },
            cache(){
                this.$refs.asideRight.close()
            }
        }
    }
</script>
<style lang="scss" scoped>
.asideRight{
    .inputLine{
        width: 100%;
        line-height: 36px;
        display: inline-block;
    }
    .story{
        margin-top: 30px;
        text-align: left;
    }
}
</style>
