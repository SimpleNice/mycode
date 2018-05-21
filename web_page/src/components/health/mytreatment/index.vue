<template>
  <section class="container">
      <header>
          <h3>我的治疗</h3>
          <p>改变剂量或治疗？保持你的信息最新，看看你的治疗效果如何，随着时间的推移。输入过去使用的疗法也很重要。</p>
      </header>
      <div class="columns box_show" @click="hideAll">
          <div class="columns_header">  
                添加一个新的治疗
                </br>
                <n3-typeahead 
                    v-model="value"
                    :data="dataList" 
                    placeholder="请输入治疗名称"
                    width="460px">
                </n3-typeahead>
          </div>
          <div class="columns_table no_top">
              <table v-for="(item,index) in list" :key="index" class="magin_bot">
                    <thead>
                        <th>{{item.typeName}}</th>
                        <th>时间表</th>
                        <th>目的</th>
                        <th>你的评价</th>
                    </thead>
                    <tbody>
                       <tr v-for="(line,childrenIndex) in item.typeList">
                           <td class="label_group">
                               <router-link to="#" class="sign">{{line.treatmentName}}</router-link>&nbsp;&nbsp;<label class="oper" @click.stop="openPopUp($event,index,childrenIndex)"><n3-icon type="ellipsis-h" class="pointer"></n3-icon></label></br>
                               <span class="text">最近更新{{line.lastTime}}</span>
                           </td>
                           <td class="label_group">
                               <span class="text_1 text_doline" v-if="line.time!==''"  @click="editTime(index,childrenIndex)">{{line.time}} 以来 {{line.dose}}{{line.gap}}{{line.frequency}}次</span>
                               <label class="oper" @click="editTime" v-else><n3-icon type="plus" class="pointer"></n3-icon></label>
                               </td>
                           <td class="label_group">
                            <label v-for="(purposeList,purposeIndex) in line.purpose">
                                                        {{purposeList.name}}<n3-icon type="times" class="pointer" @click.native="delPurpose(index,childrenIndex,purposeIndex)"></n3-icon>
                                                    </label>
                            <label class="oper"  @click="addPurpose(index,childrenIndex)"><n3-icon type="plus"></n3-icon></label>
                        </td>
                           <td> <router-link :to="'./evaluate/'+line.treatmentID"><n3-button>评估</n3-button></router-link></td>
                       </tr>
                    </tbody>
                </table>
          </div>
      </div>
      <!-- 引入小菜单 -->
      <pou-up :option="options" @del="del" @hidePopUp = "hidePopUp" v-show="showStatus"></pou-up>
      <n3-aside  placement="right" title="添加/更新你的治疗" width="360px" ref="asideRight" :header="true" class="asideRight">
        <div class="text">
            <p>添加或者更新你的治疗数据.</p>
            <hr/>
        </div>
        <div class="inputLine">
            <label class="text_1">选择时间</label></br>
            <n3-datepicker
            format="yyyy-MM-dd"
            width="300px"
            v-model="model.editTreatment.time">
            </n3-datepicker>
        </div>
        <div class="inputLine">
            <label class="text_1">停止治疗</label></br>
            <n3-switch ontext="是" offtext="否"  @change="toggle" v-model="stopStatus"></n3-switch>
        </div>
        <div class="inputLine" v-if="!stopStatus">
            <label class="text_1">剂量</label>
            <n3-input v-model="model.editTreatment.dose" width="300px"></n3-input>
        </div>
        <div class="inputLine" v-if="!stopStatus">
            <label class="text_1">间隔</label>
            <n3-select v-model="model.editTreatment.gap" width="300px" :options="fruitOptions"></n3-select>
        </div>
        <div class="inputLine" v-if="!stopStatus">
            <label class="text_1">几次</label>
            <n3-input v-model="model.editTreatment.frequency" width="300px"></n3-input>
        </div>
        <div class="inputLine" v-if="!stopStatus">
            <label class="text_1">状态</label>
            <n3-select v-model="model.editTreatment.status" width="300px">
               <n3-option value="1">开始</n3-option>
               <n3-option value="2">改变剂量</n3-option>  
            </n3-select>
        </div>
        <div class="story">
            <n3-button type="primary" size="sm" @click.native="save">保存</n3-button>
            <n3-button size="sm" style="margin-left:10px;" @click.native="cacheEdit">取消</n3-button>
        </div>   
     </n3-aside> 
     <n3-aside  placement="right" title="添加目的" width="360px" ref="asideRight1" :header="true" class="asideRight">
        <div class="inputLine">
            <label class="text_1">选择一个不同的目旳</label>
            <n3-typeahead 
                    v-model="model.purpose.value"
                    :data="dataList" 
                    placeholder="输入或添加一个目的"
                    width="300px">
                </n3-typeahead>
        </div>
        <div class="story">
            <n3-button type="primary" size="sm" @click.native="savePurpose">保存</n3-button>
            <n3-button size="sm" style="margin-left:10px;" @click.native="cachePurpose">取消</n3-button>
        </div>   
     </n3-aside> 
  </section>
</template>
<script>
import PouUp from './popUp'
    export default{
        name:"CheckingDataList",
        data(){
            return{
                value:'',
                dataList:[

                ],
                list:[
                    {
                        typeName:'处方药',
                        typeList:[
                            {treatmentName:'泛思洛维',treatmentID:'1',time:'',status:0,dose:'每次1粒',gap:'每天',frequency:'2', lastTime:'2018年4月2日',purpose:[
                                    {name:'神经痛',ID:'1'},
                                    {name:'神经痛',ID:'2'},
                                ]
                            },
                            {treatmentName:'泛思洛维',treatmentID:'2',time:'2018年4月2日',status:'1',dose:'每次1粒',gap:'每天',frequency:'2', lastTime:'2018年4月2日',purpose:[
                                    {name:'神经痛',ID:'1'},
                                    {name:'神经痛',ID:'2'},
                                ]
                            },
                            {treatmentName:'泛思洛维',treatmentID:'3',time:'2018年4月2日',status:'1',dose:'每次1粒',gap:'每天',frequency:'2', lastTime:'2018年4月2日',purpose:[
                                    {name:'神经痛',ID:'1'},
                                    {name:'神经痛',ID:'2'},
                                ]
                            },
                        ]
                    },
                    {
                        typeName:'设备',
                        typeList:[
                            {treatmentName:'泛思洛维',treatmentID:'1',time:'2018年4月2日',status:'1',dose:'每次1粒',gap:'每天',frequency:'2', lastTime:'2018年4月2日',purpose:[
                                    {name:'神经痛',ID:'1'},
                                    {name:'神经痛',ID:'2'},
                                ]
                            },
                            {treatmentName:'泛思洛维',treatmentID:'2',time:'2018年4月2日',status:'1',dose:'每次1粒',gap:'每天',frequency:'2', lastTime:'2018年4月2日',purpose:[
                                    {name:'神经痛',ID:'1'},
                                    {name:'神经痛',ID:'2'},
                                ]
                            },
                            {treatmentName:'泛思洛维',treatmentID:'3',time:'2018年4月2日',status:'1',dose:'每次1粒',gap:'每天',frequency:'2', lastTime:'2018年4月2日',purpose:[
                                    {name:'神经痛',ID:'1'},
                                    {name:'神经痛',ID:'2'},
                                ]
                            },
                        ]
                    }
                    
                ],
                options:{
                    top:-500,
                    left:-500,
                    treatmentID:''
                },
                showStatus:false,
                checkedIndex:{
                    index:0,
                    childrenIndex:0,
                    purposeIndex:0,
                },
                model:{
                    editTreatment:{
                        time:'',
                        status:'',
                        dose:'',
                        gap:'',
                        frequency:''
                    },
                    purpose:{
                        value:''
                    }
                },
                stopStatus:false,
                fruitOptions:[
                    {value: '每天', label: '每天'},
                    {value: '每周', label: '每周'},
                    {value: '每月', label: '每月'},
                    {value: '每年', label: '每年'},
                   ],
                dataList:[

                ]
            }
        },
        components:{
            PouUp
        },
        methods: {
            hidePopUp(){
                this.showStatus = false
            },
            del(){
                this.list[this.checkedIndex.index].typeList.splice(this.childrenIndex,1)
            },
            hideAll(){
                this.hidePopUp()
            },
            openPopUp(event,index,childrenIndex){
                this.showStatus = true
                this.options.left = event.x
                this.options.top = event.y
                this.options.treatmentID = this.list[index].typeList[childrenIndex].treatmentID
                this.checkedIndex.index = index
                this.checkedIndex.childrenIndex = childrenIndex
            },
            editTime(index,childrenIndex){
                if(childrenIndex==undefined){
                    this.$refs.asideRight.open()
                    this.model.editTreatment ={
                        time:'',
                        status:'',
                        dose:'',
                        gap:'',
                        frequency:''
                    }
                }else{
                    this.model.editTreatment ={
                        time:this.list[index].typeList[childrenIndex].time,
                        status:this.list[index].typeList[childrenIndex].status,
                        dose:this.list[index].typeList[childrenIndex].dose,
                        gap:this.list[index].typeList[childrenIndex].gap,
                        frequency:this.list[index].typeList[childrenIndex].frequency
                    }
                    this.$refs.asideRight.open()
                }
                
            },
            toggle(val){
                if(val){
                    this.model.editTreatment.status =3
                    this.model.editTreatment ={
                        time:this.model.editTreatment.time,
                        status:3,
                        dose:'',
                        gap:'',
                        frequency:''
                    }
                }
            },
            cacheEdit(){
                this.model.editTreatment ={
                        time:'',
                        status:'',
                        dose:'',
                        gap:'',
                        frequency:''
                    }
                this.$refs.asideRight.close()
            },
            cachePurpose(){
                this.model.purpose.value=''
                this.$refs.asideRight1.close()
            },
            save(){
                //发送数据到接口保存
                console.log(this.model.editTreatment.status)
                this.$refs.asideRight.close()
            },
            savePurpose(){
                //发送数据到接口保存
                this.list[this.checkedIndex.index].typeList[this.checkedIndex.childrenIndex].purpose.push({name:'神经痛',ID:'1'})
            },
            delPurpose(index,childrenIndex,purposeIndex){
                this.list[index].typeList[childrenIndex].purpose.splice(purposeIndex,1)
                this.$refs.asideRight1.close()
            },
            addPurpose(index,childrenIndex){
                this.checkedIndex.index = index
                this.checkedIndex.childrenIndex = childrenIndex
                this.$refs.asideRight1.open()
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
.magin_bot{
    margin-bottom: 20px;
}
.text_doline{
   border-bottom: solid 1px #ccc;
   cursor: pointer;
}
</style>
