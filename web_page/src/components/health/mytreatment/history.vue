<template>
  <section class="container">
      <header>
          <h3>{{source.name}}</h3>
          <p>
              {{source.desc}}
          </p>
      </header>
      <div class="columns box_show" @click="hide">
           <div class="columns_header">  
                <h5 style="font-weight: 600;">你的{{source.name}}历史</h5>
          </div>
          <div class="columns_table no_top" style="padding-top:0px;">
            <table>
                <caption><h4>时间列表:</h4></caption>
                <thead>
                    <th>时间</th>
                    <th>剂量</th>
                    <th>状态</th>
                    <th></th>
                </thead>
                <tbody>
                        <tr v-for="(item,index) in dataList" :key="index">
                                <td>{{item.time}}</td>
                                <td>{{item.dose}} {{item.gap}} {{item.frequency!==''?item.frequency+'次':''}}</td>
                                <td><span v-if="item.status ==1">开始</span> <span v-else-if="item.status==2">改变剂量</span><span v-else="item.status==3">结束</span></td>
                                <td><n3-button @click.native="del(index)">删除</n3-button></td>
                        </tr>
                        <tr v-show="addListStatus">
                                <td> 
                                    <n3-datepicker
                                    format="yyyy年MM月dd日"
                                    width="150px"
                                    v-model="addlist.time"
                                    ref="checkedTime"
                                    @click.native.stop>
                                    </n3-datepicker>
                                </td>
                                <td><n3-input v-model="addlist.dose" width="100px"  placeholder="剂量"  @click.native.stop></n3-input> 
                                    <n3-select v-model="addlist.gap" width="100px" :options="fruitOptions" style="vertical-align: bottom;"  @click.native.stop></n3-select>
                                    <n3-input v-model="addlist.frequency" width="100px" placeholder="几次"  @click.native.stop></n3-input>
                                </td>
                                <td>
                                    <n3-select v-model="addlist.status" width="120px"  @click.native.stop>
                                    <n3-option value="1">开始</n3-option>
                                    <n3-option value="2">改变剂量</n3-option>  
                                    </n3-select>
                                </td>
                                <td><n3-button type="primary" @click.native.stop="saveData">保存</n3-button></td>
                        </tr>
                </tbody>
            </table>
            <div class="line">
                <div class="label_group">
                    <label class="oper" v-show="!addListStatus" @click.stop="addListUp"><n3-icon type="plus"></n3-icon></label>
                </div>
            </div>
          </div>
          <div class="columns_text" style="padding-bottom:0px;">
              <div class="line">
                  <header><h4>治疗目的:</h4></header>
                  <div class="label_group">
                        <label v-for="(item,index) in purpose.list">
                            {{item.name}}<n3-icon type="times" class="pointer"  @click.native="purposeDel(index)"></n3-icon>
                        </label>
                      <label class="oper" v-show="!purpose.updateStatus" @click.stop="purposeUp"><n3-icon type="plus"></n3-icon></label>
                      <n3-typeahead 
                            v-model="purpose.value"
                            :data="purposeList" 
                            placeholder="输入或选择一个目的"
                            v-show="purpose.updateStatus"
                            @keyup.enter.native="purposeSave"
                            @click.native.stop>
                        </n3-typeahead>
                  </div>
              </div>
              <div class="line">
                  <header><h4>产生的副作用:</h4></header>
                  <div class="label_group">
                      <label v-for="(item,index) in sideEffect.list">
												{{item.name}}<n3-icon type="times" class="pointer"  @click.native="sideEffectDel(index)"></n3-icon>
											</label>
                      <label class="oper" v-show="!sideEffect.updateStatus" @click.stop="sideEffectUp"><n3-icon type="plus"></n3-icon></label>
                      <n3-typeahead 
                            v-model="sideEffect.value"
                            :data="sideEffectList" 
                            placeholder="输入或选择一个副作用"
                            v-show="sideEffect.updateStatus"
                            @keyup.enter.native="sideEffectSave"
                            @click.native.stop>
                    </n3-typeahead>
                  </div>
              </div>
          </div>    
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
        ID: 0
      },
      purpose:{
        updateStatus: false,
        value: "",
        list: [
          { purposeId: "1", name: "盐酸乙哌立松" },
          { purposeId: "2", name: "盐酸乙哌立松" },
          { purposeId: "3", name: "盐酸乙哌立松" },
          { purposeId: "4", name: "盐酸乙哌立松" },
          { purposeId: "5", name: "盐酸乙哌立松" }
        ]
      },
      purposeList: ["aaa", "bbb", "ccc", "ddd"],
      sideEffect: {
        updateStatus: false,
        value: "",
        list: [
          { sideEffectId: "1", name: "盐酸乙哌立松" },
          { sideEffectId: "2", name: "盐酸乙哌立松" },
          { sideEffectId: "3", name: "盐酸乙哌立松" },
          { sideEffectId: "4", name: "盐酸乙哌立松" },
          { sideEffectId: "5", name: "盐酸乙哌立松" }
        ]
      },
      sideEffectList: ["aaa", "bbb", "ccc", "ddd"],
      dataList: [
        {
          ID: "1",
          time: "2018年3月30日",
          status: 2,
          dose: "每次1粒",
          gap: "每天",
          frequency: "2"
        },
        {
          ID: "2",
          time: "2018年3月30日",
          status: 2,
          dose: "每次1粒",
          gap: "每天",
          frequency: "2"
        },
        {
          ID: "3",
          time: "2018年3月30日",
          status: 3,
          dose: "",
          gap: "",
          frequency: ""
        },
        {
          ID: "4",
          time: "2018年3月30日",
          status: 1,
          dose: "每次1粒",
          gap: "每天",
          frequency: "2"
        },
        {
          ID: "5",
          time: "2018年3月30日",
          status: 2,
          dose: "每次1粒",
          gap: "每天",
          frequency: "2"
        },
        {
          ID: "6",
          time: "2018年3月30日",
          status: 3,
          dose: "",
          gap: "",
          frequency: ""
        }
      ],
      addListStatus: false,
      addlist: {
        ID: "",
        time: "",
        status: 0,
        dose: "",
        gap: "",
        frequency: ""
      },
      symptomStauts: true,
      fruitOptions: [
        { value: "每天", label: "每天" },
        { value: "每周", label: "每周" },
        { value: "每月", label: "每月" },
        { value: "每年", label: "每年" }
      ]
    };
  },
  methods: {
    saveData(){
        this.dataList.push(this.addlist)
        this.addlist = {
            ID: "",
            time: "",
            status: 0,
            dose: "",
            gap: "",
            frequency: ""
        }
    },
    del(index){
        this.dataList.splice(index,1)
        //需添加与后台交互
    },
    purposeUp() {
      this.purpose.updateStatus = true;
    },
    purposeDel(index) {
      this.purpose.list.splice(index, 1);
    },
    purposeSave() {
      this.purpose.list.push({ purposeId: "", name: this.purpose.value });
      this.purpose.updateStatus = false;
    },
    sideEffectUp() {
      this.sideEffect.updateStatus = true;
    },
    sideEffectDel(index) {
      this.sideEffect.list.splice(index, 1);
    },
    sideEffectSave() {
      this.sideEffect.list.push({
        sideEffectId: "",
        name: this.sideEffect.value
      });
      this.sideEffect.updateStatus = false;
    },
    addListUp() {
      this.addListStatus = true;
    },
    reload() {
      //加载数据
    },
    hide() {
      this.purpose.updateStatus = false;
      this.sideEffect.updateStatus = false;
      this.addListStatus = false;
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
</style>
