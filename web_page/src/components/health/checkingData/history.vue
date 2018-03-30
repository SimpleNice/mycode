<template>
  <section class="container">
      <header>
          <h3>我的{{checkingName}}历史</h3>
      </header>
			<div class="columns box_show">
				<div class="columns_table">
					<table v-for="(item,index) in list" :key="item.childrenID">
						<caption>
							<h3>{{item.childrenName}} </h3>
							{{item.summary}}
						</caption>
						<thead>
								<th>日期</th>
								<th>结果</th>
								<th>正常范围</th>
								<th></th>
						</thead>
						<tbody>
								<tr v-for="thing in item.recording" :key="item.checkingID">
										<td>{{thing.time}}</td>
										<td>{{thing.result}}</td>
										<td>{{thing.normal}}</td>
										<td><span class="icon danger_f" @click="del(index)"><n3-icon type="trash-o"></n3-icon></span></td>
								</tr>
						</tbody>
				</table>
				</div>
			</div>
  </section>
</template>
<script>
	export default{
		name:'CheckingDataHistory',
		data(){
			return{
				checkingName:'尿检查',
				checkingID:'1',
				list:[
					{childrenID:'1',childrenName:'颜色',summary:'尿液，俗称“小便” 、“尿”。是从生物体中排出的代谢废物和毒素，是一种液体，一般呈黄色或无色。',recording:[
						{time:'2018年3月28日',result:'透明',normal:'无色',recordingID:'1'},
						{time:'2018年3月28日',result:'透明',normal:'无色',recordingID:'2'},
						{time:'2018年3月28日',result:'透明',normal:'无色',recordingID:'3'},
						{time:'2018年3月28日',result:'透明',normal:'无色',recordingID:'4'},
					]},
					{childrenID:'2',childrenName:'颜色',summary:'尿液，俗称“小便” 、“尿”。是从生物体中排出的代谢废物和毒素，是一种液体，一般呈黄色或无色。',recording:[
						{time:'2018年3月28日',result:'透明',normal:'无色',recordingID:'1'},
						{time:'2018年3月28日',result:'透明',normal:'无色',recordingID:'2'},
						{time:'2018年3月28日',result:'透明',normal:'无色',recordingID:'3'},
						{time:'2018年3月28日',result:'透明',normal:'无色',recordingID:'4'},
					]},
					{childrenID:'3',childrenName:'颜色',summary:'尿液，俗称“小便” 、“尿”。是从生物体中排出的代谢废物和毒素，是一种液体，一般呈黄色或无色。',recording:[
						{time:'2018年3月28日',result:'透明',normal:'无色',recordingID:'1'},
						{time:'2018年3月28日',result:'透明',normal:'无色',recordingID:'2'},
						{time:'2018年3月28日',result:'透明',normal:'无色',recordingID:'3'},
						{time:'2018年3月28日',result:'透明',normal:'无色',recordingID:'4'},
					]}
				]
			}
		},
		methods:{
			del(){

			},
			reload(){
				console.log(this.$route.params.id)
			}
		},
		created(){
			this.reload()
		}
	}
</script>