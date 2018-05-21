<template>
    <section class="content">
        <section class="content_text login_box box_show">
            <div class="login_left">
                <img src="../../../static/img/zhongyi.jpg" alt="" srcset="">
            </div>
            <div class="login_right">
                <header>
                   <h4>成为中医联助乐网会员</h4>
                </header>
                <!-- <n3-form ref='form' > -->
                <div class="columns">
                    <p>
                       手机号<br>
                       <n3-popover effect="fade" :header="false" placement="right" trigger="focus">
                            <div slot="content" :class="[phoneStatus? 'danger_f': 'success_f']">
                                {{phoneMSG}}
                            </div>   
                            <n3-input
                                name="phone"
                                v-model="model.phone"
                                width="360px" icon="phone-square"
                                style="vertical-align: top;"
                                ref="phone"
                                @blur="getUsername">
                            </n3-input>
                        </n3-popover>
                        <n3-button type="warning" style="vertical-align: text-bottom;width:120px;" @click.native="getCode" :disabled="codeButstatus">{{lastTime == '0' ? codeMsg : codeMsg+' '+lastTime }}</n3-button>
                    </p>
                </div>
                <div class="columns">
                    <p>
                       验证码<br>
                       <n3-popover effect="fade" :header="false" placement="right" trigger="focus">
                            <div slot="content" :class="[codeStatus? 'danger_f': 'success_f']">
                                {{codeCheckMSG}}
                            </div>      
                            <n3-input
                                name="code"
                                v-model="model.code"
                                width="480px" icon="comment-o"
                                @blur="checkCode"
                                ref="code">
                            </n3-input>
                        </n3-popover>
                    </p>
                </div>
                <div class="columns">
                    <p>
                        密码<br/> 
                         <n3-popover effect="fade" :header="false" placement="right" trigger="focus">
                            <div slot="content" :class="[pwdStatus? 'danger_f': 'success_f']">
                                {{pwdMSG}}
                            </div>   
                            <n3-input class="field" v-model="model.password" type="password" placeholder="请输入密码,密码长度至少6位" width="480px" icon="keyboard-o" ref="password">
                            </n3-input>
                        </n3-popover>
                    </p>
                </div>
                <!-- <div class="columns">
                    <p>
                       昵称<br>   
                        <n3-input
                            name="nickname"
                            v-model="model.nickname"
                            :rules="[{type:'required'}]"
                            width="480px" icon="tag">
                        </n3-input>
                    </p>
                </div>
                <div class="columns">
                    <p>
                       性别<br>   
                        <n3-radio-group
                            name="sex"
                            v-model = "model.sex"
                            :rules="[{type:'required'}]"
                            width="360px">
                            <n3-radio label="0">男</n3-radio>
                            <n3-radio label="1">女</n3-radio>
                        </n3-radio-group>
                    </p>
                </div>
                <div class="columns">
                    <p>
                       你是<br>   
                        <n3-select
                            name="role"
                            :options='role'
                            v-model = "model.role"
                            :rules="[{type:'required'}]"
                            width="480px"
                            menu-max-height="80px;">
                        </n3-select>
                    </p>
                </div> -->
                <div class="columns">
                    <p>
                        <n3-checkbox-group v-model="remember" class="save-account">
                            <n3-checkbox label="remember">我已阅读并同意遵守<span class="sign">中医联助乐网</span> </n3-checkbox><span class="protocol">用户条款</span> 和 <span class="protocol">隐私政策</span>
                        </n3-checkbox-group>
                    </p>
                </div>
                <div class="submit" style="width:120px">
                    <n3-button
                    @keyup.native.enter="check"
                    @click.native="check"
                    type="primary"
                    :loading="loading"
                    :disabled="loading"
                    block
                    >
                    {{ loading ? '正在创建' : '创建账号' }}
                    </n3-button>
                </div>
                <!-- </n3-form> -->
            </div>
        </section>
    </section>
</template>
<script>
import {USERNAME,GETCODE,CHECKEDCODE,REGUSER} from '@/utils/api'
import MD5 from "js-md5"
import qs from "qs"
export default {
  data() {
    return {
      model:{
          phone:'',
        //   nickname:'',
          password:'',
        //   role:'0',
        //   sex:'0',
          code:''
      },
    //   role:[
    //       {label:'患者',value:'0'},
    //       {label:'临床医生或者研究科学家',value:'1'},
    //       {label:'照顾着',value:'2'},
    //   ],
      codeMsg:"获取验证码",
      lastTime:0,
      phoneStatus:false,
      phoneOk:false,
      codeOk:false,
      phoneMSG:'手机号:138XXXXXXXX',
      codeStatus:false,
      codeCheckMSG:'请输入6位验证码',
      pwdStatus:false,
      pwdMSG:'密码长度6到16位',
      remember: [],
      loading: false,
      codeButstatus:false
    }
  },
  methods: {
    check() {
        if(this.model.phone.length!=11){
            this.$refs.phone.focus()
            this.phoneStatus = true
            return false
        }else if(this.model.code.length!=6){
            this.$refs.code.focus()
            this.codeStatus = true
            return false
        }
        if(this.checkPwd()){
            return false
        }
        if(!this.remember.length){
            this.n3Modal.alert({
                title: '提示消息',
                message: '注册必须同意用户条款',
                effect: 'fade',
                type: 'info'
            })
            return false
        }
        
        this.submit ()
    },
    //获取验证码
    getCode(){
        if(!this.phoneOk){
            if(!this.getUsername()){
                return false
            }    
        }
        alert(1)
        if(!this.phoneStatus){
            this.lastTime= 60
            this.codeMsg="重新获取"
            this.codeButstatus=true
            this.$http.get(GETCODE,{
                params:{
                    mobile:this.model.phone,
                    type:0
                }
            }) 
            .then((response) => {
                if(response.ret_code!==0){
                    this.phoneStatus = true
                    this.phoneMSG = response.ret_msg
                }else{
                    this.codeOK = true
                }
            })
            .catch((error) => {
                this.n3Alert({
                    content:'网络连接失败请重试',
                    type: 'danger',
                    placement: 'bottom',
                    duration: 5000,
                    width: '400px'
                })
            })
            let timer=setInterval(() => {
                this.lastTime--
                if(this.lastTime==0){
                    this.codeButstatus=false
                    clearInterval(timer)
                }
            }, 1000)
        }
    },
    //验证检测用户名
    getUsername(){
        if(this.model.phone.length==11){
            if(/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(this.model.phone)){
                this.$http.get(USERNAME,{
                    params:{
                        username:this.model.phone
                    }
                }) 
                .then((response) => {
                    if(response.data.ret_code!==0){
                        this.phoneStatus = true
                        this.phoneMSG = response.ret_msg
                        this.$refs.phone.focus()
                        this.phoneOk = false
                        return false
                    }else{
                        this.phoneStatus = false
                        this.phoneOk = true
                        return false
                    }
                })
                .catch((error) => {
                    this.phoneStatus = true
                    this.phoneMSG = '网络连接出错,请刷新重试'
                    this.$refs.phone.focus()
                    this.phoneOk = false
                })
            }else{
                this.phoneStatus = true
                this.phoneMSG = '手机号格式错误'
                this.$refs.phone.focus()
                this.phoneOk = false
            }
        }else{
            this.phoneStatus = true
            this.phoneMSG = '手机号长度出错,请输入11位手机号'
            this.$refs.phone.focus()
            this.phoneOk = false
        }
    },
    //检测验证码是否正确
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
                if(response.data.ret_code!==0){
                    this.codeStatus = true
                    this.codeCheckMSG = response.data.ret_msg
                    this.$refs.code.focus()
                }else{
                    this.codeStatus = false
                }
            })
            .catch((error)=> {
                this.codeStatus = true
                this.phoneMcodeCheckMSGSG = '网络连接出错,请刷新重试'
                this.$refs.code.focus()
            })
        }else{
            this.codeStatus = true
            this.codeCheckMSG = '验证码长度出错,请输入6位验证码'
            if(!this.phoneOk){
                this.$refs.phone.focus()
                return false
            }
            if(!this.codeOk){
                return false
            }
            this.$refs.code.focus()
        }
    },
    //检测用户密码
    checkPwd(){
        if(this.model.password.length < 6 || this.model.password.length >16)
        {
            this.pwdMSG = '密码长度出错,请输入长度6到16位密码'
            this.pwdStatus = true
            this.$refs.password.focus()
            return true
        }else{
            this.pwdStatus = false
            return false
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
        this.$http.post(REGUSER,qs.stringify(param))
        .then(data => {
          this.loading = false
          if(data.data.ret_code == 0){
            let self = this
            this.n3Modal.alert({
                title: '提示消息',
                message: '注册成功去登录',
                effect: 'fade',
                type: 'info',
                onHide () {
                    self.$router.replace({
                        name: 'login'
                    })
                }
            })
          }else{
            this.n3Modal.alert({
                title: '提示消息',
                message: data.data.ret_msg,
                effect: 'fade',
                type: 'danger'
            })
          }   
        })
        .catch(error => {
          this.loading = false
          this.n3Modal.alert({
                title: '提示消息',
                message: '网络繁忙请重试!',
                effect: 'fade',
                type: 'danger'
            })
        })
      }
  }
};
</script>
<style lang="scss" scoped>
    .content .content_text{
        margin-top: 40px;
        margin-bottom: 40px;
    }
</style>