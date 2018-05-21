<template>
    <section class="container">
        <header>
          <h3>治疗评估</h3>
          <p>
              分享您的意见、见解和建议，以便其他人可以从您的治疗经验中学习。
          </p>
        </header>
        <div class="columns box_show" @click="hide">
            <div class="columns_header">  
                <h4>评估 {{source.name}}</h4>
                <P>剂量：{{source.dose}} {{source.gap}} {{source.frequency}}次</P>
            </div>
            <div class="columns_text">
                <div class="line">
                    <header><h4>治疗目的:</h4></header>
                    <div class="label_group">
                        <label v-for="(item,index) in validity">
                            {{item.diseaseName}}<n3-icon type="times" class="pointer"  @click.native="validityDel(index)"></n3-icon>
                        </label>
                        <label class="oper" v-show="!validityStatus" @click.stop="validityUp"><n3-icon type="plus"></n3-icon></label>
                        <n3-typeahead 
                            v-model="validityValue"
                            :data="validityList" 
                            placeholder="输入或选择一个目的"
                            v-show="validityStatus"
                            @keyup.enter.native="validitySave"
                            @click.native.stop>
                        </n3-typeahead>
                    </div>
                </div>
            </div> 
            <div class="columns_text">
                <div class="line">
                    <header><h4>评估日期:</h4></header>
                    <div class="label_group">
                        <n3-datepicker
                            format="yyyy年MM月dd日"
                            width="360px"
                            v-model="addlist.time"
                            ref="checkedTime">
                        </n3-datepicker>
                    </div>
                </div>
            </div> 
            <div class="columns_text columns_flex">
                <div class="left">
                   <h5>有效性</h5> 
                   <p>目前这种治疗效果如何?</p>
                </div>
                <div class="columns_table right no_top">
                    <table>
                        <thead>
                            <th>病症</th>
                            <th class="item">重要</th>
                            <th class="item">中等</th>
                            <th class="item">轻微</th>
                            <th class="item">没有</th>
                            <th class="item">无法感知</th>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in validity" :key="index">
                                <td>{{item.diseaseName}}</td>
                                <td class="item"><label :class="[item.status == 1 ?'active' :'']" @click="saveValidity(index,1)">重要</label></td>
                                <td class="item"><label :class="[item.status == 2 ?'active' :'']" @click="saveValidity(index,2)">中等</label></td>
                                <td class="item"><label :class="[item.status == 3 ?'active' :'']" @click="saveValidity(index,3)">轻微</label></td>
                                <td class="item"><label :class="[item.status == 4 ?'active' :'']" @click="saveValidity(index,4)">没有</label></td>
                                <td class="item"><label :class="[item.status == 5 ?'active' :'']" @click="saveValidity(index,5)">无法感知</label></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="columns_text columns_flex">
                <div class="left">
                   <h5>副作用</h5> 
                   <p>目前，这种治疗的副作用如何?</p>
                </div>
                <div class="columns_table right no_top">
                    <table>
                        <thead>
                            <th>症状</th>
                            <th class="item">严重</th>
                            <th class="item">中等</th>
                            <th class="item">温和</th>
                            <th class="item">没有</th>
                            <th class="item"></th>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in sideEffect" :key="index">
                                <td>{{item.sideEffectName}}</td>
                                <td class="item"><label :class="[item.status == 1 ?'active' :'']" @click="saveSideEffect(index,1)">严重</label></td>
                                <td class="item"><label :class="[item.status == 2 ?'active' :'']" @click="saveSideEffect(index,2)">中等</label></td>
                                <td class="item"><label :class="[item.status == 3 ?'active' :'']" @click="saveSideEffect(index,3)">温和</label></td>
                                <td class="item"><label :class="[item.status == 4 ?'active' :'']" @click="saveSideEffect(index,4)">没有</label></td>
                                <td class="item"><n3-button type="danger" @click.native="delSideEffect(index)">删除</n3-button></td>
                            </tr>
                            <tr v-show="addSideEffectStatus">
								<td> 
									<n3-typeahead 
                                        v-model="sideEffectValue"
                                        :data="sideEffectList" 
                                        placeholder="输入或选择一个副作用"
                                        v-show="addSideEffectStatus"
                                        @keyup.enter.native="sideEffectSave"
                                        @click.native.stop>
                                    </n3-typeahead>
								</td>
								<td class="item"></td>
								<td class="item"></td>
								<td class="item"></td>
								<td class="item"></td>
						    </tr>
                        </tbody>
                    </table>
                    <div class="line">
                        <div class="label_group">
                            <label class="oper" v-show="!addSideEffectStatus" @click.stop="addSideEffect"><n3-icon type="plus"></n3-icon></label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns_text columns_flex">
                <div class="left">
                   <h5>接受治疗频次</h5> 
                   <p>目前，你接受这种治疗的频次?</p>
                </div>
                <div class="columns_table right no_top">
                    <table>
                        <thead>
                            <th></th>
                            <th class="item">总是</th>
                            <th class="item">平时</th>
                            <th class="item">有时</th>
                            <th class="item">没有</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td class="item"><label :class="[addlist.frequency == 1 ?'active' :'']" @click="saveFrequency(1)">总是</label></td>
                                <td class="item"><label :class="[addlist.frequency == 2 ?'active' :'']" @click="saveFrequency(2)">平时</label></td>
                                <td class="item"><label :class="[addlist.frequency == 3 ?'active' :'']" @click="saveFrequency(3)">有时</label></td>
                                <td class="item"><label :class="[addlist.frequency == 4 ?'active' :'']" @click="saveFrequency(4)">没有</label></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="columns_text columns_flex">
                <div class="left">
                   <h5>负担</h5> 
                   <p>目前，你接受这种治疗负担如何?</p>
                </div>
                <div class="columns_table right no_top">
                    <table>
                        <thead>
                            <th></th>
                            <th class="item">很难</th>
                            <th class="item">有点难</th>
                            <th class="item">勉强可以</th>
                            <th class="item">很容易</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td class="item"><label :class="[addlist.burden == 1 ?'active' :'']" @click="saveBurden(1)">很难</label></td>
                                <td class="item"><label :class="[addlist.burden == 2 ?'active' :'']" @click="saveBurden(2)">有点难</label></td>
                                <td class="item"><label :class="[addlist.burden == 3 ?'active' :'']" @click="saveBurden(3)">勉强可以</label></td>
                                <td class="item"><label :class="[addlist.burden == 4 ?'active' :'']" @click="saveBurden(4)">很容易</label></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> 
            <div class="columns_text columns_flex">
                <div class="left">
                   <h5>每月费用</h5> 
                   <p>目前，你接受这种治疗的频次？</p>
                </div>
                <div class="columns_table right no_top">
                    <n3-input-number v-model="addlist.price"></n3-input-number>&nbsp;&nbsp;RMB
                </div>
            </div> 
            <div class="columns_text columns_flex">
                <div class="left">
                   <h5>你的意见和建议</h5> 
                   <p>分享你在接受这种治疗的体会？</p>
                </div>
                <div class="columns_table right no_top">
                    <n3-textarea min-height="80px" width="100%" :resize="false" v-model="addlist.opinion"></n3-textarea>
                </div>
            </div>   
            <div class="columns_header">  
                <n3-button type="primary">保存评估</n3-button>
                <n3-button>取消</n3-button>
		    </div>                              
        </div>
    </section>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      source: {
        name: "泛昔洛韦片",
        desc: "泛昔洛韦片，适应症为适用于带状疱疹和原发性生殖器疱疹。",
        dose: "每次1粒",
        gap: "每天",
        frequency: "2",
        ID: 0
      },
      validityValue:'',
      validityStatus:false,
      validityList: ["aaa", "bbb", "ccc", "ddd"],
      addlist:{
          time:'',
          price:'',
          opinion:'',
          frequency:0,
          burden:0
      },
      validity:[
          {diseaseId:'1',diseaseName:'肾结石',status:0},
          {diseaseId:'2',diseaseName:'肾结石',status:0},
          {diseaseId:'3',diseaseName:'肾结石',status:0},
          {diseaseId:'4',diseaseName:'肾结石',status:0},
      ],
      sideEffect:[
          {sideEffectId:'1',sideEffectName:'喉咙紧缩',status:0},
          {sideEffectId:'2',sideEffectName:'喉咙紧缩',status:0},
          {sideEffectId:'3',sideEffectName:'喉咙紧缩',status:0},
          {sideEffectId:'4',sideEffectName:'喉咙紧缩',status:0},
      ],
      sideEffectList: ["aaa", "bbb", "ccc", "ddd"],
      addSideEffectStatus: false,
      sideEffectUpstatus:false,
      sideEffectValue:''
    };
  },
  methods: {
    validityUp() {
      this.validityStatus = true;
    },
    validityDel(index) {
      this.validity.splice(index, 1);
    },
    validitySave() {
      this.validity.push({ diseaseId: "", diseaseName: this.validityValue ,status:0}) //有效性
       this.validityValue = ''
      this.validityStatus = false
    },
    reload() {
      //加载数据
    },
    hide() {
      this.purpose.updateStatus = false;
    },
    saveValidity(index,val){
        this.validity[index].status = val
    },
    saveSideEffect(index,val){
        this.sideEffect[index].status = val
    },
    delSideEffect(index){
        this.sideEffect.splice(index,1)
    },
    saveFrequency(val){
        this.addlist.frequency = val
    },
    saveBurden(val){
        this.addlist.burden = val
    },
    addSideEffect(){
        this.addSideEffectStatus = true
    },
    sideEffectSave(){
        this.sideEffect.push({sideEffectId:'1',sideEffectName:this.sideEffectValue,status:0})
        this.sideEffectValue = ''
        this.addSideEffectStatus = false
    }
  },
  created() {
    this.source.ID = this.$route.params.id;
    this.reload();
  }
};
</script>
<style lang="scss" scoped>
.columns_text {
  padding: 20px;
  padding-bottom: 0px;
}
.columns_flex{
    display: flex;
    .left{
        width: 200px;
        h5{
            font-weight: 600;
        }
    }
    .right{
        width: calc(100% - 200px);
    }
    .no_top{
        padding-top: 0px;
    }
    textarea{
        
    }
}
.columns_table table tr td:last-child{
    font-size: 14px;
}
.pos_button {
  margin-left: 10px;
  vertical-align: bottom;
}
.columns_header {
  padding: 10px 20px;
}
.item {
  width: 15%;
}
.active{
    background: #41cac0;
    color: #fff;
}
</style>
