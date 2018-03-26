<template>
  <section class="content">
    <n3-form ref='form' >
      <n3-form-item
          need
          label="账号"
          :label-col="2">
        <n3-input
            name="acc"
            v-model="model.acc"
            :rules="[{type:'required'}]"
            width="360px">
        </n3-input>
      </n3-form-item>
      <n3-form-item
          need
          label="昵称"
          :label-col="2">
        <n3-input
            name="nickname"
            v-model="model.nickname"
            :rules="[{type:'required'}]"
            width="360px">
        </n3-input>
      </n3-form-item>
      <n3-form-item
          need
          label="姓名"
          :label-col="2">
        <n3-input
            name="name"
            v-model="model.name"
            :rules="[{type:'required'}]"
            :custom-validate="nameValidate"
            width="360px">
        </n3-input>
      </n3-form-item>
      <n3-form-item
          need
          label="手机"
          :label-col="2">
        <n3-input
            name="phone"
            v-model="model.phone"
            :rules="[{type:'required'},{type:'phone'}]"
            width="360px">
        </n3-input>
      </n3-form-item>
      <n3-form-item
          label="邮箱"
          :label-col="2">
        <n3-input
            name="email"
            v-model="model.email"
            :rules="[]"
            :custom-validate="emailValidate"
            width="360px">
        </n3-input>
      </n3-form-item>
      <n3-form-item
          need
          label="密码"
          :label-col="2">
        <n3-input
            ref="password"
            v-model="model.pwd"
            :rules="[]"
            :custom-validate="pwdValidate"
            width="360px"
            type="password">
        </n3-input>
      </n3-form-item>
      <n3-form-item
      label="年龄"
      :label-col="2">
      <n3-input
        name="age"
        v-model="model.age"
        :rules="[{type:'number'}]"
        width="50px">
        </n3-input>
        <n3-slider 
          v-model="model.age" 
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
        label="地址"
        :label-col="2">
        <n3-cascader
            name="address"
            :options="options"
            v-model="model.address"
            :rules="[{type:'required'}]"
            width="360px">
        </n3-cascader>
      </n3-form-item>
    <n3-form-item
      label="生日"
      :label-col="2">
      <n3-datepicker
          name="birthday"
          v-model="model.birthday"
          :rules="[{type:'required'}]"
          width="360px">
      </n3-datepicker>
    </n3-form-item>
    <n3-form-item
        label="性别"
        :label-col="2">
        <n3-radio-group
          name="sex"
          v-model = "model.sex"
          :rules="[{type:'required'}]"
          width="360px">
          <n3-radio label="0">男</n3-radio>
          <n3-radio label="1">女</n3-radio>
        </n3-radio-group>
      </n3-form-item>
      <n3-form-item
        need
        label="开启状态"
        :label-col="2">
        <n3-switch
          name="state"
          v-model = "model.state"
          :rules="[{type:'required'}]">
        </n3-switch>
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
      editStatus: false,
      value2: "",
      model: {
        nickname: "",
        acc: "",
        name: "",
        age: 1,
        address: ["440000", "440300", "440305"],
        phone: "",
        email: "",
        pwd: "",
        birthday: "1990-10-01",
        sex: "0",
        state: false
      },
      options: JSON.parse(storage.getItem(STORAGE_KEY.ADDRESSLIST)),
      loading: false
    };
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
    nameValidate(val) {
      if (/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(val)) {
        return {
          validStatus: "success"
        };
      } else {
        return {
          validStatus: "error",
          tips: "请输入中文名"
        };
      }
    },
    emailValidate(val) {
      if (val !== undefined) {
        if (
          /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(
            val
          )
        ) {
          return {
            validStatus: "success"
          };
        } else {
          return {
            validStatus: "error",
            tips: "邮箱格式错误请重新检查后输入"
          };
        }
      } else {
        return {
          validStatus: "success"
        };
      }
    },
    pwdValidate(val){
      if (this.editStatus){
         return {
          validStatus: "success"
         }
      }else{
        if(val === undefined || val.length < 6 ){
          return{
            validStatus: "error",
            tips: "密码不能为空 密码长度不能少于6位"
          }
        }
      }
    },
    submit() {
      this.$refs.form.validateFields(result => {
          this.loadingBtn=result.isvalid
      });
    },
    sliders(val) {
      this.model.age = val;
    }
  },
  created() {
    if (this.$route.params.id !== undefined) {
      this.reload();
    }
  },
  watch: {
    "model.age"() {
      this.model.age =this.model.age ===''?this.model.age = 1 : parseInt(this.model.age)
      if (this.model.age > 100 || this.model.age < 1) {
        this.model.age = 1
      }
    }
  }
};
</script>
<style>
.submit-btn {
  width: 360px;
}
</style>
