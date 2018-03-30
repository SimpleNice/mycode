<template>
  <section class="container">
      <header>
          <h3>{{source.name}}</h3>
          <p>
              焦虑情绪是与处境不相称的痛苦情绪体验，典型形式为没有确定的客观对象和具体而固定的观念内容的提心吊胆，文献中常成为漂浮焦虑，或无名焦虑。
          </p>
      </header>
      <div class="columns box_show" @click="hide">
          <div class="columns_header">  
                <h5 style="font-weight: 600;">你的{{source.name}}历史</h5>
          </div>
          <div class="columns_text" style="padding-bottom:0px;">
              <div class="line">
                  <header><h4>治疗{{source.name}}:</h4></header>
                  <div class="label_group">
                      <label v-for="(item,index) in treatment.list">
												{{item.name}}<n3-icon type="times" class="pointer"  @click.native="treatmentDel(index)"></n3-icon>
											</label>
                      <label class="oper" v-show="!treatment.updateStatus" @click.stop="treatmentUp"><n3-icon type="plus"></n3-icon></label>
                      <n3-typeahead 
													v-model="treatment.value"
													:data="treatmentList" 
													placeholder="输入或选择一个治疗"
													v-show="treatment.updateStatus"
													@keyup.enter.native="treatmentSave"
													@click.native.stop>
											</n3-typeahead>
                  </div>
              </div>
              <div class="line">
                  <header><h4>什么引起的{{source.name}}副作用:</h4></header>
                  <div class="label_group">
                      <label v-for="(item,index) in sideEffect.list">
												{{item.name}}<n3-icon type="times" class="pointer"  @click.native="sideEffectDel(index)"></n3-icon>
											</label>
                      <label class="oper" v-show="!sideEffect.updateStatus" @click.stop="sideEffectUp"><n3-icon type="plus"></n3-icon></label>
                      <n3-typeahead 
													v-model="sideEffect.value"
													:data="sideEffectList" 
													placeholder="输入或选择一个治疗"
													v-show="sideEffect.updateStatus"
													@keyup.enter.native="sideEffectSave"
													@click.native.stop>
											</n3-typeahead>
                  </div>
              </div>
          </div>    
          <div class="columns_table no_top" style="padding-top:0px;">
            <table>
							<caption><h4>严重程度:</h4></caption>
							<thead>
									<th>时间</th>
									<th class="item">没有</th>
									<th class="item">温和</th>
									<th class="item">中等</th>
									<th class="item">严重</th>
							</thead>
							<tbody>
									<tr v-for="(item,index) in dataList" :key="index">
											<td>{{item.time}}</td>
											<td class="item"><label :class="[item.status == 1 ? 'active mark_bg1':'']" @click="checked(index,1)">没有</label></td>
											<td class="item"><label :class="[item.status == 2 ? 'active mark_bg2':'']" @click="checked(index,2)">温和</label></td>
											<td class="item"><label :class="[item.status == 3 ? 'active mark_bg3':'']" @click="checked(index,3)">中等</label></td>
											<td class="item"><label :class="[item.status == 4 ? 'active mark_bg4':'']" @click="checked(index,4)">严重</label></td>
									</tr>
									<tr v-show="addListStatus">
											<td> 
												<n3-datepicker
												format="yyyy年MM月dd日"
												width="300px"
												v-model="addlist.time"
												ref="checkedTime"
												@click.native.stop>
												</n3-datepicker>
											</td>
											<td class="item"><label :class="[addlist.status == 1 ? 'active mark_bg1':'']" @click="checkedNew(1)">没有</label></td>
											<td class="item"><label :class="[addlist.status == 2 ? 'active mark_bg1':'']" @click="checkedNew(2)">温和</label></td>
											<td class="item"><label :class="[addlist.status == 3 ? 'active mark_bg1':'']" @click="checkedNew(3)">中等</label></td>
											<td class="item"><label :class="[addlist.status == 4 ? 'active mark_bg1':'']" @click="checkedNew(4)">严重</label></td>
									</tr>
							</tbody>
						</table>
						<div class="line">
							<div class="label_group">
									<label class="oper" v-show="!addListStatus" @click.stop="addListUp"><n3-icon type="plus"></n3-icon></label>
							</div>
						</div>
						<div class="explain">
								<n3-icon type="circle" class="mark_color1"></n3-icon> 没有 &nbsp;
								<n3-icon type="circle" class="mark_color2"></n3-icon> 温和 &nbsp;
								<n3-icon type="circle" class="mark_color3"></n3-icon> 中等 &nbsp;
								<n3-icon type="circle" class="mark_color4"></n3-icon> 严重 &nbsp;
						</div>
          </div>
					<div class="columns_header">  
						<n3-button type="primary" v-if="!symptomStauts" @click.native="addSymptom">开始跟踪此症状</n3-button>
						<n3-button type="primary" v-else @click.native="delSymptom">停止跟踪此症状</n3-button>
						<n3-button type="primary" @click.native="delSymptomHistory">删除此症状历史记录</n3-button>
          </div>
        </div>  
  </section>
</template>
<script>
export default {
  name:"",
  data(){
      return{
          source:{
							name:'焦虑的心情',
							ID:0
					},
					treatment:{
						updateStatus:false,
						value:'',
						list:[
							{treatmentId:'1',name:"盐酸乙哌立松"},
							{treatmentId:'2',name:"盐酸乙哌立松"},
							{treatmentId:'3',name:"盐酸乙哌立松"},
							{treatmentId:'4',name:"盐酸乙哌立松"},
							{treatmentId:'5',name:"盐酸乙哌立松"}
						]
					},
					treatmentList:[
						'aaa',
						'bbb',
						'ccc',
						'ddd',
					],
					sideEffect:{
						updateStatus:false,
						value:'',
						list:[
							{sideEffectId:'1',name:"盐酸乙哌立松"},
							{sideEffectId:'2',name:"盐酸乙哌立松"},
							{sideEffectId:'3',name:"盐酸乙哌立松"},
							{sideEffectId:'4',name:"盐酸乙哌立松"},
							{sideEffectId:'5',name:"盐酸乙哌立松"}
						]
					},
					sideEffectList:[
						'aaa',
						'bbb',
						'ccc',
						'ddd',
					],
          dataList:[
              {ID:'1',time:'2018年3月30日',status:1},
              {ID:'2',time:'2018年3月30日',status:2},
              {ID:'3',time:'2018年3月30日',status:3},
              {ID:'4',time:'2018年3月30日',status:4},
              {ID:'5',time:'2018年3月30日',status:2},
              {ID:'6',time:'2018年3月30日',status:3},
					],
					addListStatus:false,
					addlist:{
						ID:'',
						time:"",
						status:0
					},
					symptomStauts:true
      }
  },
  methods: {
      checked(index,val){
          this.dataList[index].status=val
          this.saveStatus = false
      },
			checkedNew(val){
				if(this.addlist.time ==""){
					let seft = this
					this.n3Modal.alert({
						title: '系统提示',
						message: '请选择时间',
						effect: 'fade',
						type: 'danger',
						width:'400px'
					})
					return false
				}
				this.addlist.status = val
				this.dataList.push(this.addlist)
				this.addlist={
					ID:'',
					time:"",
					status:0
				}
				this.addListStatus = false
			},
      save(){
          //保存数据
			},
			treatmentUp(){
				this.treatment.updateStatus = true
			},
			treatmentDel(index){
				this.treatment.list.splice(index,1)
			},
			treatmentSave(){
				this.treatment.list.push({treatmentId:'',name:this.treatment.value})
				this.treatment.updateStatus = false
			},
			sideEffectUp(){
				this.sideEffect.updateStatus = true
			},
			sideEffectDel(index){
				this.sideEffect.list.splice(index,1)
			},
			sideEffectSave(){
				this.sideEffect.list.push({sideEffectId:'',name:this.sideEffect.value})
				this.sideEffect.updateStatus = false
			},
			addListUp(){
				this.addListStatus = true
			},
			addSymptom(){
				//跟踪
			},
			delSymptom(){
				//停止跟踪
			},
			delSymptomHistory(){
				//删除历史
			},
			reload(){
				//加载数据

			},
			hide(){
				this.treatment.updateStatus = false
				this.sideEffect.updateStatus = false
				this.addListStatus = false
			}
	},
	created () {
		this.source.ID = this.$route.params.id
		this.reload()
	}
}
</script>
<style lang="scss" scoped>
.columns_text{
        padding: 20px;
    }
 .pos_button{
     margin-left: 10px;
     vertical-align: bottom;
 }
 .columns_header{
     padding: 10px 20px;
 }
 .item{
	 width: 15%;
 }
 .label_group{
     padding: 5px 0 20px 0; 
     label{
         margin-right: 5px;
         border-radius: 2px;
         background-color: #efefee;
         padding: 3px 5px;
     }
     label.oper{
         background-color: #fff;
         border: 1px solid #efefee;
         color: #b1b1b1;
         cursor: pointer;
     }
     .pointer{
          cursor: pointer;
     }
 }
</style>
