<template>
  <section class="content">
    <section class="list_left">  
      <h5 class="minwidt-hide">列表</h5>
      <div class="item-search minwidth-show"><n3-button type="primary" @click.native="showModal">添加友情链接</n3-button></div>
      <n3-data-table
      :source="source"
      :columns="columns"
      :filter="false"
      :search="false"
      :page="false"
      :select-col="false"
      :loading="loading"
      responsive
      class="shadow"
    >
    </n3-data-table> 
    </section>
    <div class="divider"></div>
    <section class="oper_right">
      <h5>添加/编辑</h5>
      <n3-form ref='form' class="shadow item-padding" >
        <n3-form-item
            label="状态"
            :label-col="2">
            <span v-if="model.id !==0" class="edit">正在修改编号<strong class="dis">&nbsp;{{model.id}}&nbsp;</strong>友情链接</span>
            <span v-else class="edit">新增友情链接</span>
        </n3-form-item>
        <n3-form-item
            need
            label="标题"
            :label-col="2">
          <n3-tooltip effect="scale" content="链接标题应该是有意义的" placement="top" trigger="focus">  
          <n3-input
              name="title"
              v-model="model.title"
              :rules="[{type:'required'},{type: 'maxlength=15' }, {type:'minlength=3'}]"
              placeholder= "标题"
              width="300px">
          </n3-input>
          </n3-tooltip>
        </n3-form-item>
        <n3-form-item
            need
            label="链接"
            :label-col="2">
          <n3-tooltip effect="scale" content="链接地址应该是一个网址如:www.baidu.com" placement="bottom" trigger="focus">  
          <n3-input
              name="title"
              v-model="model.url"
              :rules="[{type:'required'},{type: 'maxlength=15' }, {type:'minlength=3'}]"
              placeholder= "链接地址"
              width="300px">
          </n3-input>
          </n3-tooltip>
          </n3-form-item>
          <n3-form-item
          :label-col="3">
            <n3-button @click.native="reload" :loading="loadingBtn" :disabled="loadingBtn" class="submit-btn"> 设为新增</n3-button>
            <n3-button type="primary" @click.native="submit(true)" :loading="loadingBtn" :disabled="loadingBtn" class="submit-btn"> {{ loadingBtn ? '操作中' : '保存' }}</n3-button>
          </n3-form-item>
      </n3-form>
    </section>
    <n3-modal title="添加/编辑友情连接"  effect="fade" width="500px" ref="showModal" @confirm="submit(false)" @hide="reload()">  
      <div slot="body">
        <n3-form ref='form1'>
          <n3-form-item
            label="状态"
            :label-col="2">
            <span v-if="model.id !==0" class="edit">正在修改编号<strong class="dis">&nbsp;{{model.id}}&nbsp;</strong>友情链接</span>
            <span v-else class="edit">新增友情链接</span>
          </n3-form-item>
          <n3-form-item
              need
              label="标题"
              :label-col="2">
            <n3-tooltip effect="scale" content="链接标题应该是有意义的" placement="top" trigger="focus">  
            <n3-input
                name="title"
                v-model="model.title"
                :rules="[{type:'required'},{type: 'maxlength=15' }, {type:'minlength=3'}]"
                placeholder= "标题"
                width="300px">
            </n3-input>
            </n3-tooltip>
          </n3-form-item>
          <n3-form-item
              need
              label="链接"
              :label-col="2">
            <n3-tooltip effect="scale" content="链接地址应该是一个网址如:www.baidu.com" placement="bottom" trigger="focus">  
            <n3-input
                name="title"
                v-model="model.url"
                :rules="[{type:'required'},{type: 'maxlength=15' }, {type:'minlength=3'}]"
                placeholder= "链接地址"
                width="300px">
            </n3-input>
            </n3-tooltip>
            </n3-form-item>
          </n3-form>
          </div>
      </n3-modal>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      source: [
        {
          id: 1,
          title: "百度一下",
          url: "www.baidu.com"
        },
        {
          id: 2,
          title: "上网导航",
          url: "www.hao123.com"
        },
        {
          id: 3,
          title: "XXXX研究",
          url: "www.hao123.com"
        },
        {
          id: 4,
          title: "XXXX研究",
          url: "www.hao123.com"
        },
        {
          id: 5,
          title: "XXXX研究",
          url: "www.hao123.com"
        }
      ],
      columns: [
        {
          title: "ID",
          dataIndex: "id",
          width: "10%"
        },
        {
          title: "标题",
          dataIndex: "title",
          width: "20%"
        },
        {
          title: "连接地址",
          dataIndex: "url",
          width: "50%",
          render: text => {
            return `<a href="http://${text}" target="_blank"><span class="span_oper select">${text}</span></a>`;
          }
        },
        {
          title: "操作",
          dataIndex: "id",
          render: (text, record, index) => {
            let status = record.status;
            return `<span  class="span_oper edit" title="修改/编辑文章信息" @click="edit(${text},${index})">修改</span>|
                    <span  class="span_oper dis" title="删除文章" @click="dis(${text},${index})">删除</span>`;
          }
        }
      ],
      model: {
        id: 0,
        title: "",
        url: ""
      },
      loading: false,
      loadingBtn: false
    };
  },
  created() {},
  methods: {
    dis(id, index) {
      let params = Object.assign(
        {},
        {
          id: id,
          status: status
        }
      );
      this.loading = true;
      this.$http
        .post("#", {
          params
        })
        .then(data => {
          this.source[index].status = status === 1 ? 0 : 1;
          this.$set(this.source, index, this.source[index]);
          this.loading = false;
          this.n3Alert({
            content: "数据删除成功~",
            type: "success",
            placement: "top-right",
            duration: 3000,
            width: "240px" // 内容不确定，建议设置width
          });
        })
        .catch(error => {
          this.loading = false;
          this.n3Alert({
            content: error || "加载失败，请刷新试试~",
            type: "danger",
            placement: "top-right",
            duration: 3000,
            width: "240px" // 内容不确定，建议设置width
          });
        });
    },
    showModal() {
      this.$refs.showModal.open()
    },
    reload() {
      this.model.id = 0
      this.model.title = ''
      this.model.url = ''
    },
    edit(id,index){
      if(window.innerWidth<1279){
        this.showModal()
      }
      this.model.id = id
      this.model.title = this.source[index].title
      this.model.url = this.source[index].url
    },
    submit(status) {
      if (status === true) {
        this.$refs.form.validateFields(result => {
          this.loadingBtn = result.isvalid;
        });
      } else {
        this.$refs.form1.validateFields(result => {
          this.loadingBtn = result.isvalid;
        });
      }
    }
  },
  watch: {
    "model.url"() {
      this.model.url=this.model.url.replace(/(http|https)+(:\/\/)/,'')
    }
  }
}
</script>
<style scoped>
.submit-btn {
  width: 100px;
}
</style>