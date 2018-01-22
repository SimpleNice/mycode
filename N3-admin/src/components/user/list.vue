<template>
  <section class="content">
    <n3-data-table
    :source="source" 
    :columns="columns" 
    :loading="loading"
    :pagination="pagination"
    :filter-list="filterList"
    :refresh="refresh"	
    :async="true"
    @change="pageChange"
    >
  </n3-data-table>
  <div :class="[loading ? '' : 'hide','zhezhao']" ></div>
  </section>
</template>

<script>
import API from "../../config.js"
import axios from "axios"
import storage from "../../utils/storage"
import {ADDRESS} from "../../utils/const"
export default {
  name: "list",
  data() {
    return {
      loading: false,
      columns: [
        {
          title: "昵称",
          width: "16%",
          dataIndex: "name",
          render: (text,record)=>{
            return `<router-link to="detail/${record.id}">
                      <span  class="span_oper select" title="点击查看用户详细信息">${text}</span>
                    </router-link>
            `
          }
        },
        {
          title: "性别",
          width: "8%",
          dataIndex: "sex",
          render: text => {
            if (text == 1) {
              return `<span>女</span>`;
            }
            return `<span>男</span>`;
          }
        },
        {
          title: "手机",
          width: "12%",
          dataIndex: "phone"
        },
        {
          title: "邮箱",
          width: "20%",
          dataIndex: "eMail"
        },
        {
          title: "创建时间",
          width: "12%",
          dataIndex: "createTime"
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
            return `<span :class="[${status} ? 'dis' : 'enable', 'span_oper']" @click="dis(${text},${status},${index})" title="禁止后用户无法登录">{{${status} ? '禁用' : '启用'}}</span>|
                    <router-link to="edit/${text}">
                      <span  class="span_oper edit" title="修改/编辑用户资料">修改</span>
                    </router-link>`;
          }
        }
      ],
      source: [
        {
          name: "落花浅忆1",
          sex: "1",
          phone: "13510389936",
          eMail: "740008538@qq.com",
          createTime: "2013-03-25",
          status: "1",
          id: "1"
        },
        {
          name: "落花浅忆2",
          sex: "1",
          phone: "13510389936",
          eMail: "740008538@qq.com",
          createTime: "2013-03-25",
          status: "1",
          id: "2"
        },
        {
          name: "落花浅忆3",
          sex: "1",
          phone: "13510389936",
          eMail: "740008538@qq.com",
          createTime: "2013-03-25",
          status: "0",
          id: "3"
        },
        {
          name: "落花浅忆4",
          sex: "0",
          phone: "13510389936",
          eMail: "740008538@qq.com",
          createTime: "2013-03-25",
          status: "1",
          id: "4"
        },
        {
          name: "落花浅忆5",
          sex: "1",
          phone: "13510389936",
          eMail: "740008538@qq.com",
          createTime: "2013-03-25",
          status: "0",
          id: "5"
        },
        {
          name: "落花浅忆6",
          sex: "1",
          phone: "13510389936",
          eMail: "740008538@qq.com",
          createTime: "2013-03-25",
          status: "0",
          id: "6"
        },
        {
          name: "落花浅忆7",
          sex: "0",
          phone: "13510389936",
          eMail: "740008538@qq.com",
          createTime: "2013-03-25",
          status: "0",
          id: "7"
        },
        {
          name: "落花浅忆8",
          sex: "1",
          phone: "13510389936",
          eMail: "740008538@qq.com",
          createTime: "2013-03-25",
          status: "1",
          id: "8"
        },
        {
          name: "落花浅忆9",
          sex: "1",
          phone: "13510389936",
          eMail: "740008538@qq.com",
          createTime: "2013-03-25",
          status: "1",
          id: "9"
        },
        {
          name: "落花浅忆10",
          sex: "0",
          phone: "13510389936",
          eMail: "740008538@qq.com",
          createTime: "2013-03-25",
          status: "1",
          id: "10"
        },
        {
          name: "落花浅忆11",
          sex: "1",
          phone: "13510389936",
          eMail: "740008538@qq.com",
          createTime: "2013-03-25",
          status: "1",
          id: "11"
        },
        {
          name: "落花浅忆12",
          sex: "1",
          phone: "13510389936",
          eMail: "740008538@qq.com",
          createTime: "2013-03-25",
          status: "1",
          id: "12"
        },
        {
          name: "落花浅忆13",
          sex: "0",
          phone: "13510389936",
          eMail: "740008538@qq.com",
          createTime: "2013-03-25",
          status: "1",
          id: "13"
        },
        {
          name: "落花浅忆14",
          sex: "1",
          phone: "13510389936",
          eMail: "740008538@qq.com",
          createTime: "2013-03-25",
          status: "1",
          id: "14"
        },
        {
          name: "落花浅忆15",
          sex: "1",
          phone: "13510389936",
          eMail: "740008538@qq.com",
          createTime: "2013-03-25",
          status: "1",
          id: "15"
        },
        {
          name: "落花浅忆16",
          sex: "1",
          phone: "13510389936",
          eMail: "740008538@qq.com",
          createTime: "2013-03-25",
          status: "1",
          id: "16"
        }
      ],
      pagination: {
        current: 1,
        total: 1,
        pagesize: 12,
        pagesizeOpts: [12, 24, 36, 50]
      },
      filterList: [
        {
          title: "性别",
          dataIndex: "sex",
          options: [{ value: "0", label: "男" }, { value: "1", label: "女" }],
          value: []
          // multiple,search,extra
        },
        {
          title: "状态",
          dataIndex: "status",
          options: [{ value: "0", label: "禁用" }, { value: "1", label: "正常" }],
          value: []
          // multiple,search,extra
        }
      ],
      searchKey: {
        queryResult: "",
        filter: ""
      },
      //searchChanged:false
    };
  },
  methods: {
    searchList() {
      // if (this.searchChanged) {
      //     this.pagination.current = 1
      //     this.searchChanged = false
      //   }
      let params = Object.assign({}, this.searchKey, {
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
    pageChange(page, query, sort, filter) {
      this.searchKey.queryResult = query;
      this.pagination.current = page.current;
      let str = "";
      for (let index = 0; index < filter.length; index++) {
        const element = filter[index];
        if (element.value.length == 1) {
          str += "[" + element.dataIndex + ":" + element.value[0] + "],";
        }
      }
      this.searchKey.filter = str;
      this.searchList();
    },
    refresh() {
      this.searchList();
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
          content: "数据更新成功~",
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
    }
  }
};
</script>