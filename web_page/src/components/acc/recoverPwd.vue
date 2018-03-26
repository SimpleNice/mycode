<template>
  <section class="content">
      <section class="content_text recoverPwd">
              <header>
                   <h4>找回账号密码</h4>
                   <p>如果你忘了了中医助乐网的密码,请输入你加入时使用的手机号我们会向您发送手机验证码.</p>
              </header>
              <div class="content_box">
                  <n3-step :labels="['第一步 输入你注册时手机号','第二步 输入你收到的验证','第三步 请重置你的密码']" :current="current"></n3-step>
                  <div class="row" v-if="current === 1">
                      <header>请输入手机号</header>
                      <div class="line">
                        <n3-input
                            name="phone"
                            v-model="model.phone"
                            width="100%" icon="phone-square"
                            style="vertical-align: top;"
                            @blur="getUsername">
                        </n3-input>
                      </div>
                      <div class="line">
                            <n3-button type="primary" :loading="loading" @click.native="getCode">提交</n3-button>   
                      </div>
                  </div>
                  <div class="row" v-if="current === 2">
                      <header>请输入验证码</header>
                      <div class="line">
                        <n3-input
                            name="code"
                            v-model="model.code"
                            width="100%" icon="comment-o"
                            style="vertical-align: top;">
                        </n3-input>
                      </div>
                      <div class="line">
                            <n3-button type="primary" :loading="loading" @click.native="checkCode">提交</n3-button>   
                      </div>
                  </div>
                  <div class="row" v-if="current === 3">
                      <header>请输入新密码</header>
                      <div class="line">
                        <n3-input
                            name="password"
                            v-model="model.password"
                            width="100%" icon="keyboard-o"
                            style="vertical-align: top;"
                            type="password">
                        </n3-input>
                      </div>
                      <div class="line">
                            <n3-button type="primary" :loading="loading" @click.native="submit">保存</n3-button>   
                      </div>
                  </div>
              </div>
          </section>
      </section>
  </section>
</template>
<script>
import {USERNAME,GETCODE,CHECKEDCODE,RECOVERPWD} from '@/utils/api'
import MD5 from "js-md5"
import qs from "qs"
export default{
    name:'recoverPwd',
    data(){
        return{
            model:{
                phone:'',
                code:'',
                password:''
            },
            loading:false,
            current:1,
            phoneOk:false
        }
    },
    methods: {
            getUsername(){
            if(this.model.phone.length==11){
                if(/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(this.model.phone)){
                    this.$http.get(USERNAME,{
                        params:{
                            username:this.model.phone
                        }
                    }) 
                    .then((response) => {
                        if(response.ret_code!==0){
                            this.alertMsg(response.ret_msg)
                        }else{
                            this.phoneOk = true
                        }
                    })
                    .catch((error) => {
                        this.alertMsg('网络连接出错,请刷新重试!')
                    })
                }else{
                    this.alertMsg('手机号格式错误!')
                }
            }else{
                this.alertMsg('密码长度出错,请输入长度6到16位密码!')
            }
        },
        getCode(){
            if(!this.phoneOk){
                this.getUsername()
                return false
            }
            this.loading =true
            this.$http.get(GETCODE,{
                params:{
                    mobile:this.model.phone,
                    type:0
                }
            }) 
            .then((response) => {
                if(response.ret_code!==0){
                    this.alertMsg(response.ret_msg)
                    this.loading =false
                }else{
                    this.current = 2
                    this.loading =false
                }
            })
            .catch((error) => {
                this.alertMsg('网络连接出错,请刷新重试!')
                this.loading =false
            })
        },
        checkCode(){
            if(/^[0-9]{6}$/.test(this.model.code)){
                this.$http.get(CHECKEDCODE,{
                    params:{
                        mobile:this.model.phone,
                        vcode:this.model.code,
                        type:0
                    }
                }) 
                .then((response) => {
                    if(response.ret_code!==0){
                        this.alertMsg(response.ret_msg)
                    }else{
                        this.current = 3
                    }
                })
                .catch((error)=> {
                    this.alertMsg('网络连接出错,请刷新重试')
                })
            }else{
                this.alertMsg('验证码长度出错,请输入6位验证码')
            }
        },
        submit () {
            this.loading = true
            let param = Object.assign({},{
                username:this.model.phone,
                mobile:this.model.phone,
                password:MD5(this.model.password),
                vcode:this.model.code
            })
            this.$http.post(RECOVERPWD,qs.stringify(param))
            .then(data => {
                this.loading = false
                if(data.ret_code == 0){
                    let self = this
                    this.n3Modal.alert({
                        title: '提示消息',
                        message: '密码重置成功去登录',
                        effect: 'fade',
                        type: 'info',
                        onHide () {
                            self.$router.replace({
                                name: 'login'
                            })
                        }
                    })
                }else{
                    this.alertMsg(data.ret_msg)
                }   
            })
            .catch(error => {
                this.alertMsg('网络繁忙请重试!')
                this.loading = false
            })
        },
        alertMsg(msg){
            this.n3Modal.alert({
                title: '提示消息',
                message: msg,
                effect: 'fade',
                type: 'danger'
            })
        }
    }
}
</script>
<style scoped>
  h4{
      font-weight: 600;
  }
</style>

