<template>
  <section class="content">
     <header>
        <h3>张三丰(落花浅忆) &nbsp; &nbsp;<span class="male">♂</span></h3>
     </header>
     <div class="content_text">
         <div class="row">
             <p>
                <n3-icon type="map-marker"></n3-icon> 中国 广东 深圳 <br>
                <span class="subject">手机:</span>13355668899<span class="mg-left subject">生日:</span> 2018年4月24日<span class="mg-left subject">体重:</span>60kg <br>
                <span class="subject">种族:</span>汉<span class="mg-left subject">医疗保险:</span>有<span class="mg-left subject">职位:</span>普通职员<br>
                <span class="subject">邮编:</span>518000<br>
                <span class="subject">兴趣标签:</span>看电视,打太极,看书<br>
                <span class="subject">注册时间:</span>2018年4月24日 16:46:54<span class="mg-left subject">最后活跃时间:</span>2018年4月24日 16:47:11
             </p>
         </div>
         <div class="columns">
            <n3-accordion :one-at-time="false" @change="change">
                <n3-panel index="1" @change="change">
                    <div slot="header">个人简介</div>
                    <p>
                        张三丰，名君宝（又名“全一”），字符元，道号三丰。武林至尊、内拳始祖、原太极创始人、龙行书法开山鼻祖、武学造诣臻入化境 [1]  ，元末明初真人，武当山道人，武当派始祖，正史记载宋理宗淳佑七年(1247年) 生于辽东懿州，14岁考取文武状元，18岁担任博陵县令，与元朝丞相刘秉忠、名臣廉希宪相识，（1280年）辞官出家修道，拜火龙真人为师。
                    </p>
                </n3-panel>
                <n3-panel index="2">
                  <div slot="header">故事</div>
                    <p>
                        张三丰曾作一首《上天梯》词，是祖师苦求金丹大道，修炼有成的过程自述。 [11]  可作为张三丰生平和出身的一个重要参考资料。编者此处引取词句加以解释，来讲述其三丰先生的出身、形象和早年经历。
                        张三丰画像
                        张三丰画像
                        词曰：“大元飘远客，拂拂髯如戟，一曲上天梯，可当飞空锡。回思访道初，不转心如石，弃官游海岳，辛苦寻丹秘，舍我亡亲墓，乡山留不得，别我中年妇，出门天始白，舍我丱角儿，掉头离火宅，人所难毕者，行人已做毕，人所难割者，行人皆能割，欲证长生果，冲举乘仙鹤。后天培养坚，两足迈于役，悠悠摧我心，流年驹过隙，翘首终南山，对天三叹息。
                        天降火龙师，玄音参一一，知我内丹成，不讲筑基业，赐我外丹功，可怜谆告切，炼己忘世情，采药按时节，先天无斤两，火候无爻策，只将老嫩分，但把文武别，纯以真意求，刀圭难缕晰，十月抱元胎，九年加面壁，换鼎复生孙，骑龙起霹雳，天地坏有时，仙翁寿无极。 [11] 
                        “大元飘远客”一句，据史书记载，张三丰先生约生活在元末明初时期，这句“大元飘远客”与“汉终唐国飘蓬客。”（吕洞宾《敲爻歌》），两位祖师都称自己是“客”，这跟现代通俗的客的含义不同，道士出家修行称作“客”，是出家无家，抛弃世俗的一种谦称。“大元飘远客”有版本也写做“大元飘蓬客”，将“远”字改为“蓬”字，含有道家修仙成为蓬莱仙客的意思。而史实证明，张三丰先生主要是活动于明朝，若改为“蓬”字，则应该是“大明”飘蓬客，比较妥当些。所以，《上天梯》这句“大元飘远客”，比较符合祖师出生在宋朝末年，直到67岁入终南山出家的这个时间跨越的。
                    </p>
                </n3-panel>
                <n3-panel index="3">
                  <div slot="header">症状</div>
                  <div class="columns_table">
                    <table>
                        <thead>
                            <th class="th_time" v-for="item in timeList" :key="item"><div class="trans">{{item}}</div></th>
                            <th>症状</th>
                            <th>相关条件</th>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in dataList" :key="item.symptomID" >
                                <td class="th_time" v-for="(thing,childrenIndex) in item.status" :key="thing"><n3-icon type="circle" :class="'mark_color'+thing" @click.native="openPopUp($event,index,childrenIndex)"></n3-icon></td>
                                <td><router-link :to="'./history/'+item.symptomID" class="span_oper select">{{item.symptom}}</router-link></td>
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
                      <p>
                          <router-link to="#" v-for="item in notList" :key="item.ID"><label class="tabs_label">{{item.name}}</label></router-link>
                      </p>
                  </div>
                </n3-panel>
                <n3-panel index="4">
                  <div slot="header">治疗</div>
                     <n3-data-table
                    :source="treatment"
                    :columns="treatment_columns"
                    :filter="false"
                    :search="false"
                    :page="false"
                    :select-col="false"
                    :loading="loading"
                    responsive
                    >
                    </n3-data-table> 
                </n3-panel>
                <n3-panel index="5">
                    <div slot="header">社区</div>
                    <n3-data-table
                    :source="community"
                    :columns="community_columns"
                    :filter="false"
                    :search="false"
                    :page="false"
                    :select-col="false"
                    :loading="loading"
                    responsive
                    >
                    </n3-data-table> 
                </n3-panel>
                <n3-panel index="5">
                    <div slot="header">话题</div>
                    <n3-data-table
                    :source="topic"
                    :columns="topic_columns"
                    :filter="false"
                    :search="false"
                    :page="false"
                    :select-col="false"
                    :loading="loading"
                    responsive
                    >
                    </n3-data-table> 
                     <div class="explain">
                       <router-link to="" > <span class="span_oper select">查看更多话题</span></router-link>
                     </div>
                </n3-panel>
            </n3-accordion>
         </div>
     </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      timeList: [
        "2018年3月22日",
        "2018年3月23日",
        "2018年3月24日",
        "2018年3月25日",
        "2018年3月26日",
        "2018年3月27日",
        "2018年3月28日"
      ],
      dataList: [
        {
          symptom: "焦虑的心情",
          symptomID: "1",
          status: [1, 2, 3, 4, 1, 2, 4]
        },
        {
          symptom: "焦虑的心情",
          symptomID: "2",
          status: [1, 2, 3, 3, 1, 2, 4]
        },
        {
          symptom: "焦虑的心情",
          symptomID: "3",
          status: [1, 2, 3, 3, 1, 2, 4]
        },
        {
          symptom: "焦虑的心情",
          symptomID: "4",
          status: [1, 2, 3, 1, 1, 2, 4]
        },
        {
          symptom: "焦虑的心情",
          symptomID: "5",
          status: [1, 2, 3, 4, 1, 2, 4]
        },
        {
          symptom: "焦虑的心情",
          symptomID: "6",
          status: [1, 2, 3, 2, 1, 2, 4]
        }
      ],
      notList: [{ name: "失眠", ID: "1" }, { name: "缺乏动力", ID: "2" }],
      community: [
        {
          id: 1,
          moderatorId: 1,
          name: "帕金森",
          createTime: "2017-08-25",
          addTime: "2018-4-24",
          moderator: "落花浅忆",
          topic: 10
        },
        {
          id: 2,
          moderatorId: 2,
          name: "帕金森",
          createTime: "2017-08-25",
          addTime: "2018-4-24",
          moderator: "落花浅忆",
          topic: 10
        },
        {
          id: 3,
          moderatorId: 3,
          name: "帕金森",
          createTime: "2017-08-25",
          addTime: "2018-4-24",
          moderator: "落花浅忆",
          topic: 10
        },
        {
          id: 4,
          moderatorId: 4,
          name: "帕金森",
          createTime: "2017-08-25",
          addTime: "2018-4-24",
          moderator: "落花浅忆",
          topic: 10
        },
        {
          id: 5,
          moderatorId: 5,
          name: "帕金森",
          createTime: "2017-08-25",
          addTime: "2018-4-24",
          moderator: "落花浅忆",
          topic: 10
        }
      ],
      community_columns: [
        {
          title: "ID",
          dataIndex: "id",
          width: "8%"
        },
        {
          title: "标题",
          dataIndex: "name",
          width: "24%",
          render: (text, record) => {
            return `<router-link to="detail/${record.id}" target="_blank">
                    <span  class="span_oper select">${text}</span>
                    </router-link>
            `;
          }
        },
        {
          title: "版主",
          dataIndex: "moderator",
          width: "16%",
          render: (text, record) => {
            return `<router-link to="detail/${
              record.moderatorId
            }" target="_blank">
                    <span  class="span_oper select" >${text}</span>
                    </router-link>
            `;
          }
        },
        {
          title: "创建时间",
          dataIndex: "createTime",
          width: "16%"
        },
        {
          title: "加入时间",
          dataIndex: "addTime",
          width: "8%"
        },
        {
          title: "发布话题",
          width: "8%",
          dataIndex: "topic"
        }
      ],
      topic: [
        {
          id: 1,
          communityId: 1,
          title: "帕金森XXXX",
          content:
            "帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)，简称Parkinson病...",
          community: "帕金森",
          community_desc:
            "帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)",
          createTime: "2017-08-25",
          reply: 200,
          helpful: 100
        },
        {
          id: 2,
          communityId: 1,
          title: "帕金森XXXX",
          content:
            "帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)，简称Parkinson病...",
          community: "帕金森",
          community_desc:
            "帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)",
          createTime: "2017-08-25",
          reply: 200,
          helpful: 100
        },
        {
          id: 3,
          communityId: 1,
          title: "帕金森XXXX",
          content:
            "帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)，简称Parkinson病...",
          community: "帕金森",
          community_desc:
            "帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)",
          createTime: "2017-08-25",
          reply: 200,
          helpful: 100
        },
        {
          id: 4,
          communityId: 1,
          title: "帕金森XXXX",
          content:
            "帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)，简称Parkinson病...",
          community: "帕金森",
          community_desc:
            "帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)",
          createTime: "2017-08-25",
          reply: 200,
          helpful: 100
        },
        {
          id: 5,
          communityId: 1,
          title: "帕金森XXXX",
          content:
            "帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)，简称Parkinson病...",
          community: "帕金森",
          community_desc:
            "帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)",
          createTime: "2017-08-25",
          reply: 200,
          helpful: 100
        }
      ],
      topic_columns: [
        {
          title: "ID",
          dataIndex: "id",
          width: "8%"
        },
        {
          title: "标题",
          dataIndex: "title",
          width: "24%",
          render: (text, record) => {
            return `<router-link to="detail/${record.id}" target="_blank">
                      <n3-tooltip content="${
                        record.content
                      }" placement="top" trigger="hover" class="text-tooltip">
                        <span  class="span_oper select">${text}</span>
                      </n3-tooltip>
                    </router-link>`;
          }
        },
        {
          title: "社区",
          dataIndex: "community",
          width: "16%",
          render: (text, record) => {
            return `<router-link to="detail/${record.id}" target="_blank">
                      <n3-tooltip content="${
                        record.community_desc
                      }" placement="top" trigger="hover" class="text-tooltip">
                        <span  class="span_oper select">${text}</span>
                      </n3-tooltip>
                    </router-link>`;
          }
        },
        {
          title: "发布时间",
          dataIndex: "createTime",
          width: "16%"
        },
        {
          title: "回复",
          dataIndex: "reply",
          width: "8%",
          render: text =>
            `<n3-icon type="comments-o" size="16px"></n3-icon> ${text}`
        },
        {
          title: "有帮助",
          width: "8%",
          dataIndex: "helpful",
          render: text =>
            `<n3-icon type="thumbs-o-up" size="16px"></n3-icon> ${text}`
        }
      ],
      treatment: [
        {
          id: 1,
          name: "泛思洛维",
          type: "处方药",
          time: "2018年4月2日",
          dose: "每次1粒",
          gap: "每天",
          frequency: "2",
          lastTime: "2018年4月24日",
          purpose: [{ name: "神经痛", ID: "1" }, { name: "神经痛", ID: "2" }]
        },
        {
          id: 1,
          name: "泛思洛维",
          type: "处方药",
          time: "2018年4月2日",
          dose: "每次1粒",
          gap: "每天",
          frequency: "2",
          lastTime: "2018年4月24日",
          purpose: [{ name: "神经痛", ID: "1" }, { name: "神经痛", ID: "2" }]
        },
        {
          id: 1,
          name: "泛思洛维",
          type: "处方药",
          time: "2018年4月2日",
          dose: "每次1粒",
          gap: "每天",
          frequency: "2",
          lastTime: "2018年4月24日",
          purpose: [{ name: "神经痛", ID: "1" }, { name: "神经痛", ID: "2" }]
        },
        {
          id: 1,
          name: "泛思洛维",
          type: "处方药",
          time: "2018年4月2日",
          dose: "每次1粒",
          gap: "每天",
          frequency: "2",
          lastTime: "2018年4月24日",
          purpose: [{ name: "神经痛", ID: "1" }, { name: "神经痛", ID: "2" }]
        },
        {
          id: 1,
          name: "泛思洛维",
          type: "处方药",
          time: "2018年4月2日",
          dose: "每次1粒",
          gap: "每天",
          frequency: "2",
          lastTime: "2018年4月24日",
          purpose: [{ name: "神经痛", ID: "1" }, { name: "神经痛", ID: "2" }]
        }
      ],
      treatment_columns: [
        {
          title: "ID",
          dataIndex: "id",
          width: "8%"
        },
        {
          title: "名称",
          dataIndex: "name",
          width: "24%",
          render: (text, record) => {
            return `<router-link to="detail/${record.id}" target="_blank">
                        <span  class="span_oper select">${text}</span>
                      </n3-tooltip>
                    </router-link>
                    <span class="table-time">最后更新 ${record.lastTime}</span>`
          }
        },
        {
          title: "类型",
          dataIndex: "type",
          width: "16%",
          render: (text) => `<span>${text}</span>`
        },
        {
          title: "时间用量",
          dataIndex: "time",
          width: "16%",
          render: (text, record) =>{
              return `${text} 以来 ${record.dose} ${record.gap} ${record.frequency}`
          } 
        },
        {
          title: "目的",
          dataIndex: "purpose",
          width: "40%",
          render: text =>{ //需要更改连接地址
              let tmpl =''
              for (const iterator of text) {
                tmpl+=`<router-link to="detail/${iterator.ID}" target="_blank">
                          <label class="tabs_label">${iterator.name}</label>
                        </router-link>`
              }
              return tmpl
          }
        }
      ]
    };
  },
  methods: {
    change(show) {
      // console.log(show);
    }
  }
};
</script>

