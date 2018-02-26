<template>
   <section class="content"> 
     <div class="item-search">
       圈子:&nbsp;&nbsp;
        <n3-select v-model="searchArr.multiple" :options="fruitOptions" :search="true" multiple input-placeholder="请输入关键字" :limit="5" @change="multipleChan" ></n3-select>
     </div>
     <div class="item-search">
       标题:&nbsp;&nbsp;
       <n3-input v-model="searchArr.value" ref="input" placeholder="请输入标题" width="280px"></n3-input>&nbsp;&nbsp;
       排序:&nbsp;&nbsp;
       <n3-select v-model="searchArr.sort" :options="sort"></n3-select>
     </div>
     <div class="item-search">
       时间:&nbsp;&nbsp;
        <n3-datepicker
          v-model="searchArr.start"
          format="yyyy-MM-dd" placeholder="请选择开始时间">
        </n3-datepicker>
        &nbsp;&nbsp;-至-&nbsp;&nbsp;
        <n3-datepicker
          v-model="searchArr.end"
          format="yyyy-MM-dd" placeholder="请选择结束时间">
        </n3-datepicker>
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
        authorId:2,
        circleId:5, 
        title:'帕金森综合症',
        content:'帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)，简称Parkinson病...',
        createTime:'2017-08-25',
        author:'落花浅忆',
        circle:'帕金森',
        reply:20000,
        helpful:100,
        status:1
        },
        {
        id:2,
        authorId:2,
        circleId:5,
        title:'帕金森综合症',
        content:'帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)，简称Parkinson病...',
        createTime:'2017-08-25',
        author:'落花浅忆',
        circle:'帕金森',
        reply:200,
        helpful:100,
        status:0
        },
        {
        id:3,
        authorId:2,
        circleId:5,
        title:'帕金森综合症',
        content:'帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)，简称Parkinson病...',
        createTime:'2017-08-25',
        author:'落花浅忆',
        circle:'帕金森',
        reply:200,
        helpful:100,
        status:1
        },{
        id:4,
        authorId:2,
        circleId:5,
        title:'帕金森综合症',
        content:'帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)，简称Parkinson病...',
        createTime:'2017-08-25',
        author:'落花浅忆',
        circle:'帕金森',
        reply:200,
        helpful:100,
        status:0
        },{
        id:5,
        authorId:2,
        circleId:5,
        title:'帕金森综合症',
        content:'帕金森病又称特发性帕金森病(idiopathic Parkinson’s disease，PD)，简称Parkinson病...',
        createTime:'2017-08-25',
        author:'落花浅忆',
        circle:'帕金森',
        reply:200,
        helpful:100,
        status:1
        }
        ],
      columns:[
        {
          title: 'ID',
          dataIndex: 'id',
          width: '8%'
        },
        { 
          title: '话题',
          dataIndex: 'title',
          width:'24%',
          render: (text,record)=>{
            return `<router-link to="detail/${record.id}" target="_blank">
                      <n3-tooltip content="${record.content}" placement="top" trigger="hover" class="text-tooltip">
                        <span  class="span_oper select" title="点击查看文章内容">${text}</span>
                      </n3-tooltip>
                    </router-link>`
          }
        },
        { 
          title: '作者',
          dataIndex: 'author',
          width:'18%',
          render:(text,record) =>{
            return `<router-link to="detail/${record.authorId}" target="_blank">
                      <span  class="span_oper select">${text}</span>
                    </router-link>
                      <span class="table-time">${record.createTime}</span>`
          }
        },
        {
          title: '圈子',
          dataIndex: 'circle',
          width: '12%',
          render:(text,record) =>{
            return `<router-link to="detail/${record.circleId}" target="_blank">
                      <span  class="span_oper select">${text}</span>
                    </router-link>`
          }
        },
        { 
          title: '回复',
          dataIndex: 'reply',
          width:'12%',
          render:(text)=>`<n3-icon type="comments-o" size="16px"></n3-icon> ${text}`
        },
        {
          title: "有帮助",
          width: "12%",
          dataIndex: "helpful",
          render:(text)=>`<n3-icon type="thumbs-o-up" size="16px"></n3-icon> ${text}`
        },
        {
          title: "操作",
          dataIndex: "id",
          render: (text, record, index) => {
            let status = record.status 
            let titles = status ? '置顶话题优先显示在最前面' : '取消置顶'
            return `<span :class="[${status} ? 'edit' : 'enable', 'span_oper']" @click="dis(${text},${status},${index})" title="${titles}">{{${status} ? '置顶' : '取消'}}</span>|
                    <span  class="span_oper dis" title="删除话题" @click="dis(${text},${status},${index})">删除</span>`;
          }
        }],
      fruitOptions:[
        {value:0,label:'请选择圈子'},
        {value:1,label:'XXX圈子'},
        {value:2,label:'XXX圈子'},
        {value:3,label:'XXX圈子'},
        {value:4,label:'XXX圈子'},
        {value:5,label:'XXX圈子'},
        {value:6,label:'XXX圈子'}
      ], 
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
