<template>
   <section class="content"> 
     <div class="item-search">
       标题:&nbsp;&nbsp;
       <n3-input v-model="searchArr.value" ref="input" placeholder="请输入标题" width="280px"></n3-input>&nbsp;&nbsp;
       排序:&nbsp;&nbsp;
       <n3-select v-model="searchArr.sort" :options="sort"></n3-select>
       <n3-button type="primary" style="margin-left:20px;" @click.native="search" class="item-vertical">搜索</n3-button>
     </div>
     <n3-data-table
      :source="source"
      :columns="columns"
      :filter="false"
      :search="false"
      :page="false"
      :select-col="false"
      :loading="loading"
      responsive
    >
    </n3-data-table> 
    <div class="n3-data-table-bar n3-data-table-page">
      <n3-page
      :total="pagination.total"
      :pagesize="pagination.pagesize"
      :show-total="true"
      :pagesize-opts="pagination.pagesizeOpts"
      :show-sizer="true"
      v-model="pagination.current"
      @change="pageChange"
    >
    </n3-page> 
    </div>
    <div :class="[loading ? '' : 'hide','zhezhao']" ></div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      loading:false,
      source:[
        {
        id:1,
        moderatorId:2,
        userId:2,
        title:'帕金森',
        content:'帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)，简称Parkinson病...',
        moderator:'落花浅忆',
        moderatorTime:'2018-4-23',
        createUser:'落花浅忆',
        createTime:'2017-08-25',
        member:20000,
        topic:2000,
        status:1
        },
        {
        id:2,
        moderatorId:2,
        userId:2,
        title:'帕金森',
        content:'帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)，简称Parkinson病...',
        moderator:'落花浅忆',
        moderatorTime:'2018-4-23',
        createUser:'落花浅忆',
        createTime:'2017-08-25',
        member:20000,
        topic:2000,
        status:1
        },
        {
        id:3,
        moderatorId:2,
        userId:2,
        title:'帕金森',
        content:'帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)，简称Parkinson病...',
        moderator:'落花浅忆',
        moderatorTime:'2018-4-23',
        createUser:'落花浅忆',
        createTime:'2017-08-25',
        member:20000,
        topic:2000,
        status:1
        },
        {
        id:4,
        moderatorId:2,
        userId:2,
        title:'帕金森',
        content:'帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)，简称Parkinson病...',
        moderator:'落花浅忆',
        moderatorTime:'2018-4-23',
        createUser:'落花浅忆',
        createTime:'2017-08-25',
        member:20000,
        topic:2000,
        status:1
        },
        {
        id:5,
        moderatorId:2,
        userId:2,
        title:'帕金森',
        content:'帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)，简称Parkinson病...',
        moderator:'落花浅忆',
        moderatorTime:'2018-4-23',
        createUser:'落花浅忆',
        createTime:'2017-08-25',
        member:20000,
        topic:2000,
        status:1
        },
        ],
      columns:[
        {
          title: 'ID',
          dataIndex: 'id',
          width: '8%'
        },
        { 
          title: '社区名称',
          dataIndex: 'title',
          width:'18%',
          render: (text,record)=>{
            return `<router-link to="detail/${record.id}" target="_blank">
                      <n3-tooltip content="${record.content}" placement="top" trigger="hover" class="text-tooltip">
                        <span  class="span_oper select" title="点击查看文章内容">${text}</span>
                      </n3-tooltip>
                    </router-link>`
          }
        },
        { 
          title: '版主',
          dataIndex: 'moderator',
          width:'18%',
          render:(text,record) =>{
            return `<router-link to="detail/${record.moderatorId}" target="_blank">
                      <span  class="span_oper select">${text}</span>
                    </router-link>
                      <span class="table-time">${record.moderatorTime}</span>`
          }
        },
        {
          title: '创建人',
          dataIndex: 'createUser',
          width: '18%',
          render:(text,record) =>{
            return `<router-link to="detail/${record.createUser}" target="_blank">
                      <span  class="span_oper select">${text}</span>
                    </router-link>
                    <span class="table-time">${record.createTime}</span>`
          }
        },
        { 
          title: '成员',
          dataIndex: 'member',
          width:'12%',
          render:(text,record)=>{ //连接到会员管理列表
            return `<router-link to="topic/${record.id}">
                      <span  class="span_oper select">${text}</span>
                    </router-link>`
            }
        },
        {
          title: "话题",
          width: "12%",
          dataIndex: "topic",
          render:(text,record)=>{
            return `<router-link to="topic/${record.id}">
                      <span  class="span_oper select">${text}</span>
                    </router-link>`
          }
        },
        {
          title: "操作",
          dataIndex: "id",
          render: (text, record, index) => {
            let status = record.status 
            let titles = status ? '置顶话题优先显示在最前面' : '取消置顶'
            return `<span  class="span_oper dis" title="删除社区" @click="dis(${text},${status},${index})">删除</span>`;
          }
        }],
      sort:[
        {value:0,label:'请选择排序方式'},
        {value:1,label:'回复量'},
        {value:2,label:'有帮助'},
      ],
      pagination: {
        current: 1,
        total: 20,
        pagesize: 12,
        pagesizeOpts: [12, 24, 36, 50]
      },
      searchArr:{
        multiple:[0],
        value:'',
        sort:[0],
        start:'',
        end:''

      },
      searchChanged:false
    }
  },
  created () {
  },
  methods: {
    pageChange(page){
      this.reload()
    },
    search(){
      this.searchChanged=true
      this.reload()
    },
    dis(id, status, index) {  
      let params = Object.assign({},
        {
          id: id,
          status: status
        }
      );
      this.loading = true;
      this.$http.post("#", {
        params
      })
      .then(data => {
        this.source[index].status = (status === 1 ? 0 : 1)
        this.$set(this.source,index,this.source[index])
        this.loading = false;
        this.n3Alert({
          content: "数据删除成功~",
          type: "success",
          placement: "top-right",
          duration: 3000,
          width: "240px" // 内容不确定，建议设置width
        })
      })
      .catch(error => {
        this.loading = false;
        this.n3Alert({
          content: error || "加载失败，请刷新试试~",
          type: "danger",
          placement: "top-right",
          duration: 3000,
          width: "240px" // 内容不确定，建议设置width
        })
      })
    },
    reload(){
      if(this.searchChanged) { //控制查询时的翻页
        this.pagination.current = 1
        this.searchChanged = false
      }
      let params = Object.assign({}, this.value, {
        page: this.pagination.current
      });
      this.loading = true;
      this.$http.post("#", {
          params
        })
        .then(data => {
          (this.source = data.result.data || []),
            (this.pagination.total = data.result.total || 0);
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
          this.n3Alert({
            content: error || "加载失败，请刷新试试~",
            type: "danger",
            placement: "top-right",
            duration: 2000,
            width: "240px" // 内容不确定，建议设置width
          });
        });
    },
    multipleChan(value){
      let i = this.searchArr.multiple.indexOf(0)
      let len =this.searchArr.multiple.length
      if(i >-1 && len>1){
        this.searchArr.multiple.splice(i,1)
      }
      if(len = 0){
        this.searchArr.multiple.push(0)
      }
    }
  },
  watch: {
  }
};
</script>
