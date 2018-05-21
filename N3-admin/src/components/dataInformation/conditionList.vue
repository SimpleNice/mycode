<template>
   <section class="content"> 
     <div class="item-search">
        <router-link to="/about/add"><n3-button type="primary">添加条件</n3-button></router-link>
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
        title:'头疼',
        createTime:'2017-08-25',
        author:'落花浅忆',
        desc:'通常将局限于头颅上半部，包括眉弓、耳轮上缘和枕外隆突连线以上部位的疼痛统称头痛。',
        },
        {
        id:2,
        title:'头疼',
        createTime:'2017-08-25',
        author:'落花浅忆',
        desc:'通常将局限于头颅上半部，包括眉弓、耳轮上缘和枕外隆突连线以上部位的疼痛统称头痛。',
        },
        {
        id:3,
        title:'头疼',
        createTime:'2017-08-25',
        author:'落花浅忆',
        desc:'通常将局限于头颅上半部，包括眉弓、耳轮上缘和枕外隆突连线以上部位的疼痛统称头痛。',
        },{
        id:4,
        title:'头疼',
        createTime:'2017-08-25',
        author:'落花浅忆',
        desc:'通常将局限于头颅上半部，包括眉弓、耳轮上缘和枕外隆突连线以上部位的疼痛统称头痛。',
        },{
        id:5,
        title:'头疼',
        createTime:'2017-08-25',
        author:'落花浅忆',
        desc:'通常将局限于头颅上半部，包括眉弓、耳轮上缘和枕外隆突连线以上部位的疼痛统称头痛。',
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
                     <n3-tooltip content="${record.desc}" placement="top" trigger="hover" class="text-tooltip">
                        <span  class="span_oper select">${text}</span>
                      </n3-tooltip>
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
          title: "操作",
          dataIndex: "id",
          render: (text, record, index) => {
            let status = record.status 
            return `<span  class="span_oper dis" title="删除" @click="dis(${text},${index})">删除</span>`;
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
    dis(id,index) {  
      let params = Object.assign({},
        {
          id: id,
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
