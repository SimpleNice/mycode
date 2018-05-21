<template>
  <section class="container">
      <header>
          <h3>更新我的症状</h3>
      </header>
      <div class="columns box_show">
          <div class="columns_header">  
                <h5 style="font-weight: 600;">选择日期</h5>
                您现在可以告诉我们您的症状，或从以前的日期.
                </br>
                <n3-datepicker
                    format="yyyy-MM-dd"
                    width="460px"
                    v-model="checkedTime"
                    @change="checkedTimes">
                </n3-datepicker>
                <n3-button class="pos_button" type="primary" :disabled="checkedTimestatus" @click.native="getData">选择日期</n3-button>
          </div>
          <div class="columns_table no_top">
              <table>
                    <thead>
                        <th>症状</th>
                        <th class="item">没有</th>
                        <th class="item">温和</th>
                        <th class="item">中等</th>
                        <th class="item">严重</th>
                        <th style="width:20%;">相关条件</th>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in dataList" :key="item.ID">
                            <td>{{item.name}}</td>
                            <td class="item"><label :class="[item.status == 1 ? 'active mark_bg1':'']" @click="checked(index,1)">没有</label></td>
                            <td class="item"><label :class="[item.status == 2 ? 'active mark_bg2':'']" @click="checked(index,2)">温和</label></td>
                            <td class="item"><label :class="[item.status == 3 ? 'active mark_bg3':'']" @click="checked(index,3)">中等</label></td>
                            <td class="item"><label :class="[item.status == 4 ? 'active mark_bg4':'']" @click="checked(index,4)">严重</label></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div class="explain">
                    <n3-icon type="circle" class="mark_color1"></n3-icon> 没有 &nbsp;
                    <n3-icon type="circle" class="mark_color2"></n3-icon> 温和 &nbsp;
                    <n3-icon type="circle" class="mark_color3"></n3-icon> 中等 &nbsp;
                    <n3-icon type="circle" class="mark_color4"></n3-icon> 严重 &nbsp;
                </div>
          </div>
          <div class="columns_header">  
              <n3-button class="pos_button" type="info" size="lg" :disabled="saveStatus" @click.native="save">保存</n3-button>
          </div>
        </div>  
  </section>
</template>
<script>
export default {
  name:"",
  data(){
      return{
          dataList:[
              {ID:'1',name:'焦虑的心情',status:0},
              {ID:'2',name:'焦虑的心情',status:0},
              {ID:'3',name:'焦虑的心情',status:0},
              {ID:'4',name:'焦虑的心情',status:0},
              {ID:'5',name:'焦虑的心情',status:0},
              {ID:'6',name:'焦虑的心情',status:0},
          ],
          checkedTime:"",
          checkedTimestatus:true,
          saveStatus:true
      }
  },
  methods: {
      checked(index,val){
          this.dataList[index].status=val
          this.saveStatus = false
      },
      checkedTimes(){
          this.checkedTimestatus = false
      },
      getData(){
          //获取选择时间的数据
      },
      save(){
          //保存数据
      }
  }
}
</script>
<style lang="scss" scoped>
 .pos_button{
     margin-left: 10px;
     vertical-align: bottom;
 }
</style>
