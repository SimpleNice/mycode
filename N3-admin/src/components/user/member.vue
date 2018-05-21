<template>
   <section class="content"> 
     <div class="item-search">
       圈子:&nbsp;&nbsp;
        <n3-select v-model="searchArr.community" :options="fruitOptions" :search="true" input-placeholder="请输入关键字" :limit="5"></n3-select>
     </div>
     <div class="item-search">
       昵称:&nbsp;&nbsp;
       <n3-input v-model="searchArr.nickName" ref="input" placeholder="请输入昵称" width="280px"></n3-input>&nbsp;&nbsp;
       性别:&nbsp;&nbsp;
       <n3-select v-model="searchArr.sex" :options="sort"></n3-select>
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
        nickName:'落花浅忆',
        desc:'我是一名68岁的男性，2006年12月被迫退休。我得到了我的局部放疗诊断，同时获得了关于手术的第二个意见...',
        name:'王小二',
        createTime:'2017-08-25',
        lastTime:'2018-4-24',
        sex:'0',
        community:10,
        topic:100,
        status:1
        },
        {
        id:2, 
        nickName:'落花浅忆',
        desc:'我是一名68岁的男性，2006年12月被迫退休。我得到了我的局部放疗诊断，同时获得了关于手术的第二个意见...',
        name:'王小二',
        createTime:'2017-08-25',
        lastTime:'2018-4-24',
        sex:'0',
        community:10,
        topic:100,
        status:1
        },
        {
        id:3, 
        nickName:'落花浅忆',
        desc:'我是一名68岁的男性，2006年12月被迫退休。我得到了我的局部放疗诊断，同时获得了关于手术的第二个意见...',
        name:'王小二',
        createTime:'2017-08-25',
        lastTime:'2018-4-24',
        sex:'0',
        community:10,
        topic:100,
        status:1
        },
        {
        id:4, 
        nickName:'落花浅忆',
        desc:'我是一名68岁的男性，2006年12月被迫退休。我得到了我的局部放疗诊断，同时获得了关于手术的第二个意见...',
        name:'王小二',
        createTime:'2017-08-25',
        lastTime:'2018-4-24',
        sex:'0',
        community:10,
        topic:100,
        status:1
        },
        {
        id:5, 
        nickName:'落花浅忆',
        desc:'我是一名68岁的男性，2006年12月被迫退休。我得到了我的局部放疗诊断，同时获得了关于手术的第二个意见...',
        name:'王小二',
        createTime:'2017-08-25',
        lastTime:'2018-4-24',
        sex:'0',
        community:10,
        topic:100,
        status:1
        },
        {
        id:6, 
        nickName:'落花浅忆',
        desc:'我是一名68岁的男性，2006年12月被迫退休。我得到了我的局部放疗诊断，同时获得了关于手术的第二个意见...',
        name:'王小二',
        createTime:'2017-08-25',
        lastTime:'2018-4-24',
        sex:'0',
        community:10,
        topic:100,
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
          title: '昵称',
          dataIndex: 'nickName',
          width:'18%',
          render: (text,record)=>{
            return `<router-link to="detail/${record.id}">
                      <n3-tooltip content="${record.desc}" placement="top" trigger="hover" class="text-tooltip">
                        <span  class="span_oper select" title="点击查看会员详细">${text}</span>
                      </n3-tooltip>
                    </router-link>`
          }
        },
        { 
          title: '真实姓名',
          dataIndex: 'name',
          width:'12%',
          render:(text,record) =>{
            return `<router-link to="detail/${record.id}">
                      <span  class="span_oper select">${text}</span>
                    </router-link>`
          }
        },
        {
          title: '注册时间',
          dataIndex: 'createTime',
          width: '12%',
          render:(text,record) =>`<span>${text}</span>`
        },
        { 
          title: '最后活跃',
          dataIndex: 'lastTime',
          width:'12%',
          render:(text)=>`<span>${text}</span>`
        },
        {
          title: "社区",
          width: "12%",
          dataIndex: "community",
          render:(text)=>`<n3-icon type="comments-o" size="16px"></n3-icon> ${text}`
        },
        {
          title: "话题",
          width: "12%",
          dataIndex: "topic",
          render:(text)=>`<n3-icon type="comment-o" size="16px"></n3-icon> ${text}`
        },
        {
          title: "操作",
          dataIndex: "id",
          render: (text, record, index) => {
            let status = record.status 
            let titles = status ? '置顶话题优先显示在最前面' : '取消置顶'
            return `<span :class="[${status} ? 'dis' : 'enable', 'span_oper']" @click="dis(${text},${status},${index})" title="${titles}">{{${status} ? '禁用' : '取消'}}</span>|
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
        {value:0,label:'请选择性别'},
        {value:1,label:'先生'},
        {value:2,label:'女士'},
      ],
      pagination: {
        current: 1,
        total: 20,
        pagesize: 12,
        pagesizeOpts: [12, 24, 36, 50]
      },
      searchArr:{
        community:0,
        nickName:'',
        sex:[0],
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
  }
};
</script>
