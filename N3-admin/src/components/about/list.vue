<template>
   <section class="content"> 
     <div class="item-search">
        <router-link to="/about/add"><n3-button type="primary">添加文章</n3-button></router-link>
        <n3-button type="primary" class="item-rigth" style="margin-left:20px;" @click.native="search">搜索</n3-button>
        <n3-input v-model="value" ref="input" placeholder="请输入查询条件" class="item-rigth"></n3-input>
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
        title:'XXXX研究',
        createTime:'2017-08-25',
        author:'落花浅忆',
        sort:1,
        status:1
        },
        {
        id:2,
        title:'XXXX研究',
        createTime:'2017-08-25',
        author:'落花浅忆',
        sort:2,
        status:0
        },
        {
        id:3,
        title:'XXXX研究',
        createTime:'2017-08-25',
        author:'落花浅忆',
        sort:3,
        status:1
        },{
        id:4,
        title:'XXXX研究',
        createTime:'2017-08-25',
        author:'落花浅忆',
        sort:5,
        status:0
        },{
        id:5,
        title:'XXXX研究',
        createTime:'2017-08-25',
        author:'落花浅忆',
        sort:4,
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
          title: '标题',
          dataIndex: 'title',
          width:'24%',
          render: (text,record)=>{
            return `<router-link to="detail/${record.id}" target="_blank">
                      <span  class="span_oper select" title="点击查看文章内容">${text}</span>
                    </router-link>
            `
          }
        },
        { 
          title: '创建时间',
          dataIndex: 'createTime',
          width:'16%',
        }
        ,
        { 
          title: '作者',
          dataIndex: 'author',
          width:'16%',
        },
        { 
          title: '排序',
          dataIndex: 'sort',
          width:'8%',
        },
        {
          title: "状态",
          width: "8%",
          dataIndex: "status",
          render: text => {
            return `<span>{{${text} ? '正常' : '禁用'}}</span>`;
          }
        },
        {
          title: "操作",
          dataIndex: "id",
          render: (text, record, index) => {
            let status = record.status 
            return `<span :class="[${status} ? 'dis' : 'enable', 'span_oper']" @click="dis(${text},${status},${index})" title="禁用后页面不显示文章">{{${status} ? '禁用' : '启用'}}</span>|
                    <router-link to="edit/${text}">
                      <span  class="span_oper edit" title="修改/编辑文章信息">修改</span>
                    </router-link>|
                    <span  class="span_oper dis" title="删除文章" @click="dis(${text},${status},${index})">删除</span>`;
          }
        }],
      pagination: {
        current: 1,
        total: 20,
        pagesize: 12,
        pagesizeOpts: [12, 24, 36, 50]
      },
      value:'',
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
    }
  }
};
</script>
