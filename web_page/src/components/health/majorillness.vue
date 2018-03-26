<template>
  <section class="container">
      <header>
          <h3>主要病史</h3>
          <p>以下是您的个人资料中显示的住院情况。您可以通过单击编辑来更改住院原因或日期，或者将新的住院治疗添加到您的个人资料中。</p>
      </header>
      <div class="columns">
          <div class="fiex-button">
              <n3-button type="primary" @click.native="addHospital">加入住院信息</n3-button>
          </div>
          <div class="columns_table box_show">
                <table>
                    <thead>
                        <th>病症</th>
                        <th>时间</th>
                        <th>住院</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in list" :key="item.diseaseID">
                            <td>{{item.disease}}</td>
                            <td>{{item.sickTime}} 至 {{item.cureTime}} </td>
                            <td>{{item.beInHospitalTime}} 至 {{item.leaveHospitalTime}} </td>
                            <td><span class="icon show_strong" @click="edit(index)"><n3-icon type="edit"></n3-icon></span><span class="icon danger_f" @click="del(index)"><n3-icon type="trash-o"></n3-icon></span></td>
                        </tr>
                    </tbody>
                </table>
          </div>
      </div>
      <n3-aside  placement="right" title="添加/编辑住院信息" width="360px" ref="asideRight" :header="true" class="asideRight">
            <div class="text">
                <p>将您的住院日期和目的添加到您的个人资料，以便其他患者可以了解您的治疗过程.</p>
                <hr/>
            </div>
           <div class="inputLine">
                <label class="text_1">你什么时候发现生病的?</label></br>
                <n3-datepicker
                format="yyyy-MM-dd"
                width="300px"
                v-model="model.sickTime">
                </n3-datepicker>
            </div>
            <div class="inputLine">
                <label class="text_1">住院了吗?</label>&nbsp;&nbsp;<n3-switch ontext="是" offtext="没有" v-model="status.beInHospitalStatus"></n3-switch></br>
                <n3-datepicker
                format="yyyy-MM-dd"
                width="300px"
                v-model="model.beInHospitalTime"
                v-show="status.beInHospitalStatus">
                </n3-datepicker>
            </div>
            <div class="inputLine">
                <label class="text_1">你已经出院了吗?</label>&nbsp;&nbsp;<n3-switch ontext="是" offtext="没有" v-model="status.leaveHospitalStatus"></n3-switch> </br>
                <n3-datepicker
                format="yyyy-MM-dd"
                width="300px"
                v-model="model.leaveHospitalTime"
                v-show="status.leaveHospitalStatus">
                </n3-datepicker>
            </div>
            <div class="inputLine">
                <label class="text_1">治愈了吗?</label>&nbsp;&nbsp;<n3-switch ontext="是" offtext="没有"  v-model="status.cureStatus"></n3-switch></br>
                <n3-datepicker
                format="yyyy-MM-dd"
                width="300px"
                v-model="model.cureTime"
                v-show="status.cureStatus">
                </n3-datepicker>
            </div>
            <div class="story">
                <n3-button type="primary" size="sm" @click.native="save">保存住院信息</n3-button>
                <n3-button size="sm" style="margin-left:10px;" @click.native="cache">取消</n3-button>
            </div>
        </div>    
     </n3-aside>
  </section>
</template>
<script>
    export default{
        name:"majorillnes",
        data(){
            return {
                list:[
                    {diseaseID:'1',disease:'纤维肌痛',sickTime:"2018年3月20日",cureTime:"2018-3-26",beInHospitalTime:"2018年3月22日",leaveHospitalTime:"2018年3月26日"},
                    {diseaseID:'2',disease:'纤维肌痛',sickTime:"2018年3月20日",cureTime:"2018-3-26",beInHospitalTime:"2018年3月22日",leaveHospitalTime:"2018年3月26日"},
                    {diseaseID:'3',disease:'纤维肌痛',sickTime:"2018年3月20日",cureTime:"2018-3-26",beInHospitalTime:"2018年3月22日",leaveHospitalTime:"2018年3月26日"},
                    {diseaseID:'4',disease:'纤维肌痛',sickTime:"2018年3月20日",cureTime:"2018-3-26",beInHospitalTime:"2018年3月22日",leaveHospitalTime:"2018年3月26日"},
                    {diseaseID:'5',disease:'纤维肌痛',sickTime:"2018年3月20日",cureTime:"2018-3-26",beInHospitalTime:"2018年3月22日",leaveHospitalTime:"2018年3月26日"},
                    {diseaseID:'6',disease:'纤维肌痛',sickTime:"2018年3月20日",cureTime:"2018-3-26",beInHospitalTime:"2018年3月22日",leaveHospitalTime:"2018年3月26日"},
                ],
                model:{
                    diseaseID:'',
                    sickTime:'',
                    beInHospitalTime:'',
                    leaveHospitalTime:'',
                    cureTime:'',
                },
                status:{
                    beInHospitalStatus:false,
                    leaveHospitalStatus:false,
                    cureStatus:false
                }
            }
        },
        methods:{
            edit(index){
                this.model = this.list[index]
                this.status.cureStatus = this.model.cureTime!==''
                this.status.leaveHospitalStatus = this.model.leaveHospitalTime!==''
                this.status.beInHospitalStatus = this.model.beInHospitalTime!==''
                this.$refs.asideRight.open()
            },
            del(index){
                this.list.splice(index,1)
            },
            addHospital(){
                this.model = {
                    diseaseID:'',
                    sickTime:'',
                    beInHospitalTime:'',
                    leaveHospitalTime:'',
                    cureTime:'',
                }
                this.status ={
                    beInHospitalStatus:false,
                    leaveHospitalStatus:false,
                    cureStatus:false
                }
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
