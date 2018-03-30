<template>
  <section class="container">
      <header>
          <h3>浏览所有的检测</h3>
          <p>这是可用于添加到您的个人资料的检查数据完整列表.</p>
      </header>
      <div class="columns box_show">
      <div class="columns_table no_top">
          <table>
                <thead>
                    <th>面板</th>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in list" :key="item.checkingID">
                        <td>
                          <h4>{{item.name}}</h4>
                          <p class="text text_2"> 
                            实验室: {{item.desc}}
                            &nbsp;
                            <span class="text">最近更新:{{item.time}}</span>
                            </p>
                          <n3-button @click.native="save(item.checkingID)">添加{{item.name}}到我的个人资料</n3-button>
                        </td>
                    </tr>
                </tbody>
            </table>
      </div>
      </div>   
  </section>
</template>
<script>
  export default{
    name:"CheckingDataAll",
    data(){
      return{
        list:[
          {checkingID:'1',name:'动脉血气',desc:'动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH)',time:'2018年3月28日'},
          {checkingID:'2',name:'动脉血气',desc:'动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH)',time:'2018年3月28日'},
          {checkingID:'3',name:'动脉血气',desc:'动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH)',time:'2018年3月28日'},
          {checkingID:'4',name:'动脉血气',desc:'动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH)',time:'2018年3月28日'},
          {checkingID:'5',name:'动脉血气',desc:'动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH)',time:'2018年3月28日'},
          {checkingID:'6',name:'动脉血气',desc:'动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH),动脉血气(pH)',time:'2018年3月28日'},
        ]
      }
    },
    methods:{
      save(id){
        // this.$http.post('#',{

        // }).then(data=>{

        // }).cacth(error=>{

        // })
      },
      reload(){
         // this.$http.post('#',{

        // }).then(data=>{

        // }).cacth(error=>{

        // })
      }
    },
    created () {
      this.reload()
    }
  }
</script>