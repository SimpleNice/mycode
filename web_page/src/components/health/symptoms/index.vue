<template>
  <section class="container">
      <header>
          <h3>我的症状</h3>
          <p>使用这个页面来捐献症状数据，以利于研究 - 并且亲自跟踪您的症状 - 通过评估他们的严重性随着时间的推移。评分症状严重程度可帮助您查看趋势，并与您的医疗
             团队分享相关信息。点击一个症状查看完整的历史记录，编辑过去的数据点，或者自定义你想跟踪的症状。
          </p>
      </header>
      <div class="columns box_show">
          <div class="columns_header">  
                至少每季度捐献症状数据有助于医学研究
          </div>
          <div class="columns_text">
            <header>
                <h4>跟踪症状数据</h4>
                <p>如果您还想弄清楚什么可能触发或帮助特定的症状和副作用，您可以使用下面的工具 每天跟踪他们。</p>
            </header>
            <div class="inputLine">
                <h6>添加一个新的症状</h6>
                <n3-typeahead 
                    v-model="value"
                    :data="dataList" 
                    placeholder="输入或添加一个症状"
                    width="460px">
                </n3-typeahead>
                <router-link to="./update"><n3-button class="pos_button" type="primary">更新所有症状</n3-button></router-link>
            </div>
            <div class="columns_table">
                <table>
                    <thead>
                        <th class="th_time" v-for="item in timeList"><div class="trans">{{item}}</div></th>
                        <th>症状</th>
                        <th>相关条件</th>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in dataList" :key="item.symptomID" >
                            <td class="th_time" v-for="(thing,childrenIndex) in item.status"><n3-icon type="circle" :class="'mark_color'+thing" @click.native="openPopUp($event,index,childrenIndex)"></n3-icon></td>
                            <td><router-link :to="'./history/'+item.symptomID" class="sign">{{item.symptom}}</router-link></td>
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
            <div class="inputLine" style="height:auto;">
              <h6>以前监测的症状</h6>
              <p class="text">你选择不监测。您可以将这些症状添加到上面的列表中，方法是在下面选择它们并单击“开始监视”</p>
              <p>
                  <router-link to="#" v-for="item in notList" :key="item.ID"><label class="tabs_label">{{item.name}}</label></router-link>
              </p>
            </div>
          </div>
        </div> 
        <pop-up :option="options" v-show="showStatus" @hidePopUp="hidePopUp" @change="savePopUp"></pop-up> 
  </section>
</template>
<script>
import popUp from './popUp'
export default {
    name:'MySymptoms',
    data(){
        return{
            value:'',
            timeList:[
                "2018年3月22日",
                "2018年3月23日",
                "2018年3月24日",
                "2018年3月25日",
                "2018年3月26日",
                "2018年3月27日",
                "2018年3月28日",
            ],
            dataList:[
                {
                    symptom:'焦虑的心情',symptomID:'1',status:[
                    1,2,3,4,1,2,4
                ]},
                {
                    symptom:'焦虑的心情',symptomID:'2',status:[
                    1,2,3,3,1,2,4
                ]},
                {
                    symptom:'焦虑的心情',symptomID:'3',status:[
                    1,2,3,3,1,2,4
                ]},
                {
                    symptom:'焦虑的心情',symptomID:'4',status:[
                    1,2,3,1,1,2,4
                ]},
                {
                    symptom:'焦虑的心情',symptomID:'5',status:[
                    1,2,3,4,1,2,4
                ]},
                {
                    symptom:'焦虑的心情',symptomID:'6',status:[
                    1,2,3,2,1,2,4
                ]}
            ],
            notList:[
                {name:'失眠',ID:'1'},
                {name:'缺乏动力',ID:'2'}
            ],
            options:{
                top:200,
                left:80,
                isActive:5
            },
            showStatus:false,
            editData:{
                index:-1,
                childrenIndex:-1
            }
        }
    },
    components: {
        popUp
    },
    methods: {
        openPopUp(event,index,childrenIndex){
           this.showStatus = true
           this.options.left = event.x
           this.options.top = event.y
           this.editData.index = index
           this.editData.childrenIndex = childrenIndex
        },
        hidePopUp(){
            this.showStatus = false
        },
        savePopUp(val){
            this.hidePopUp()
            this.dataList[this.editData.index].status[this.editData.childrenIndex]=val
            console.log(this.timeList[this.editData.childrenIndex])
        }
    }
}
</script>

<style lang="scss" scoped>
    .columns_text{
        padding: 20px;
    }
    .inputLine{
        margin-top: 20px;
        position: relative;
        h6{
            font-weight: 600;
        }
        .pos_button{
            position: absolute;
            right: 20px;
            top: 20px;
        }
    }
    th.th_time{
        height: 110px;
    }
    .th_time{
        width: 30px;
        direction:rtl;
        writing-mode: horizontal-tb;
        padding-right:10px; 
        padding-left:10px; 
        text-align: center;
        position: relative;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        .trans{
            position: absolute;
            bottom: 7px;
            left: 5px;
            writing-mode: tb-rl;
            font-weight: 500;
            color: #1C8BCF;
        }
    }
</style>
