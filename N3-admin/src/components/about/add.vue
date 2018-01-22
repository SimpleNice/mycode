<template>
  <section class="content">
    <n3-form ref='form' >
      <n3-form-item
          need
          label="标题"
          :label-col="2">
        <n3-tooltip effect="scale" content="文章标题长度限制为3-15个字符" placement="right" trigger="focus">  
        <n3-input
            name="title"
            v-model="model.title"
            :rules="[{type:'required'},{type: 'maxlength=15' }, {type:'minlength=3'}]"
            width="360px"
            placeholder= "文章标题">
        </n3-input>
        </n3-tooltip>
      </n3-form-item>
      <n3-form-item
      label="排序"
      :label-col="2">
      <n3-tooltip effect="scale" content="文章在展示页面的显示顺序" placement="right" trigger="focus">  
      <n3-input
        name="sort"
        v-model="model.sort"
        :rules="[{type:'number'}]"
        width="50px">
        </n3-input>
       </n3-tooltip>  
        <n3-slider 
          v-model="model.sort" 
          @change="sliders" 
          orientation="horizontal" 
          width="280px"  
          :max="100" 
          :min="1"
          style="margin-left:20px;">
        </n3-slider>
      </n3-form-item>
      <n3-form-item
        need
        label="开启状态"
        :label-col="2">
        <n3-tooltip effect="scale" content="文章状态开关,控制文章在前台页面展示隐藏" placement="right" trigger="hover">  
        <n3-switch
          name="state"
          v-model = "model.state"
          :rules="[{type:'required'}]">
        </n3-switch>
          </n3-tooltip>  
      </n3-form-item>
       <n3-form-item
        label="文章内容"
        :label-col="2">
        <editor :content="model.content"  :auto-height="true" class="editor-heigth" @change="updateData"></editor>
      </n3-form-item> 
      <n3-form-item
      :label-col="2">
        <n3-button type="primary" @click.native="submit" class="submit-btn" :loading="loadingBtn" :disabled="loadingBtn"> {{ loadingBtn ? '操作中' : '保存' }}</n3-button>
      </n3-form-item>
    </n3-form>
  </section>
</template>
<script>
import API from "../../config.js";
import axios from "axios";
import { STORAGE_KEY } from "../../utils/const";
import VueHtml5Editor from 'vue-html5-editor'
const editor =new VueHtml5Editor({language: "zh-cn",showModuleName: true,  hiddenModules: ['info'],})
export default {
  name: "add",
  data() {
    return {
      editStatus: false,
      value2: "",
      model: {
        title: "",
        sort: 1,
        state: false,
        context:""
      },
      loading: false,
      loadingBtn:false
    };
  },
  components:{
    editor
  },
  methods: {
    reload() {
       this.editStatus = true
      // this.loading = true;
      // let params = Object.assign(
      //   {},
      //   {
      //     id: this.$route.params.id
      //   }
      // );
      // this.$http
      //   .post(API.ROOT.USER_INFO, {
      //     params
      //   })
      //   .then(data => {
      //     //需要更改返回值
      //     (this.source = data.result.data || []), (this.loading = false);
      //   this.loading = false
      //   })
      //   .catch(error => {
      //     this.loading = false;
      //     this.n3Alert({
      //       content: error || "加载用户信息失败请刷新重试",
      //       type: "danger",
      //       placement: "top-right",
      //       duration: 2000,
      //       width: "240px" // 内容不确定，建议设置width
      //     });
      //   });
      //-----------------------
      // this.model = {
      //   name: "",
      //   age: 1,
      //   address: ["440000", "440300", "440305"],
      //   birthday: "1990-10-01",
      //   sex: "0",
      //   state: false
      // };
      // this.loading = false;
    },
    submit() {
      this.$refs.form.validateFields(result => {
          this.loadingBtn=result.isvalid
      });
    },
    sliders(val) {
      this.model.sort = val;
    },
    updateData(val){
      console.log(val)
    }
  },
  created() {
    if (this.$route.params.id !== undefined) {
      this.reload();
    }
  },
  watch: {
    "model.sort"() {
      this.model.sort = this.model.sort === ''? this.model.sort = 1 : parseInt(this.model.sort)
      if (this.model.sort > 100 || this.model.sort < 1) {
        this.model.sort = 1;
      }
    }
  }
};
</script>
<style scoped>
.submit-btn {
  width: 360px;
}
</style>
