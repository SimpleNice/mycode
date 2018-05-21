<template>
  <section class="content">
    <n3-form ref='form' >
      <n3-form-item
          need
          label='请输入需要过滤的词用"|"分隔'
          :label-col="2">
          <n3-textarea v-model="model.content" :resize="statue" min-height="80px" max-height="80px" width="560px"></n3-textarea>
      </n3-form-item>
      <n3-form-item
      :label-col="2">
        <n3-button type="primary" @click.native="submit" class="submit-btn">提交</n3-button>
      </n3-form-item>
    </n3-form>
  </section>
</template>
<script>
import API from "../../config.js";
import axios from "axios";
import { STORAGE_KEY } from "../../utils/const";
import storage from "../../utils/storage";
export default {
  name: "add",
  data() {
    return {
      statue: false,
      value2: "",
      model: {
        content: ""
      },
      loading: false
    };
  },
  methods: {
    reload() {
      //加载已有关键字  
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
    }
  },
  created() {
      this.reload();
  }
};
</script>
<style>
.submit-btn {
  width: 120px;
  position: absolute;
  left: 440px;

}
</style>
