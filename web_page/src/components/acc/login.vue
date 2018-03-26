<template>
    <section class="content">
        <section class="content_text login_box box_show">
            <div class="login_left">
                <img src="../../../static/img/zhongyi.jpg" alt="" srcset="">
            </div>
            <div class="login_right">
                <header>
                   <h4>账号密码登录</h4>
                </header>
                <div class="columns">
                    <p>
                        账号/手机号<br/>
                        <n3-popover effect="fade" :header="false" placement="right" trigger="focus">
                            <div slot="content" :class="[accountStatus? 'danger_f': 'success_f']">
                                {{accountStatus ? '账号格式不对或者账号不足6位' : 'ok'}}
                            </div>
                            <n3-input class="field" v-model="account" placeholder="请输入账号或者手机号,账号长度至少6位" width="480px" icon="users" ref="account">
                            </n3-input>
                        </n3-popover>
                    </p>
                </div>
                <div class="columns">
                    <p>
                        密码 <router-link to="/recoverPwd" class="sign">找回密码</router-link><br/> 
                        <n3-popover effect="fade" :header="false" placement="right" trigger="focus" >
                            <div slot="content" :class="[passwordStatus? 'danger_f': 'success_f']">
                                {{passwordStatus ? '密码长度至少6位' : 'ok'}}
                            </div>
                            <n3-input class="field" v-model="password" type="password" placeholder="请输入密码,密码长度至少6位" width="480px" icon="key" ref="password" @keyup.native.enter="check">
                            </n3-input>
                        </n3-popover>    
                    </p>
                </div>
                <div class="columns">
                    <p>
                        <n3-checkbox-group v-model="remember" class="save-account">
                            <n3-checkbox label="remember">记住账号</n3-checkbox>
                        </n3-checkbox-group>
                    </p>
                </div>
                <div class="submit" style="width:120px">
                    <n3-button
                    @click.native="check"
                    type="primary"
                    :loading="loading"
                    :disabled="loading"
                    block
                    >
                    {{ loading ? '登录中' : '登录' }}
                    </n3-button>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
import { mapActions } from 'vuex'
import { STORAGE_KEY  } from "@/utils/const"
import storage from "@/utils/storage"
import MD5 from "js-md5"
export default {
  data() {
    return {
      accountStatus:true,
      passwordStatus:true,
      account: "",
      password: "",
      remember: [],
      loading: false
    };
  },
  methods: {
    ...mapActions(['login']),
    saveAccount() {
      this.remember.length ? storage.setItem(STORAGE_KEY.ACCOUNT, this.account) : storage.setItem(STORAGE_KEY.ACCOUNT,'');
    },
    getAccount() {
      this.account = storage.getItem(STORAGE_KEY.ACCOUNT) || "";
      this.account!=='' && this.remember.push('remember')  && (this.accountStatus = false)
    },
    check() {
      if (this.account.length<6) {
        this.accountStatus=true
        this.$refs.account.focus()
        return false
      }
      if (this.password.length<6) {
        this.passwordStatus=true
        this.$refs.password.focus()
        return false
      }
      this.saveAccount()
      this.submit ()
    },
    submit () {
        this.loading = true
        let param = Object.assign({},{
            username:this.account,
            password:MD5(this.password)
        })
        this.login(param)
        .then(data => {
          this.loading = false
          storage.setItem(STORAGE_KEY.LAST_LOGIN_TIME, Date.now())
          if(data.ret_code == 0){
            if (this.$route.query.back) {
                this.$router.replace(this.$route.query.back)
                } else {
                this.$router.replace({
                name: 'PersonalCenter'
                })
            }
          }else{
            this.n3Alert({
                content:data.ret_msg,
                type: 'danger',
                placement: 'bottom',
                duration: 5000,
                width: '400px'
            })
          }
        })
        .catch(error => {
          this.loading = false
          this.n3Alert({
            content:'网络繁忙请重试!',
            type: 'danger',
            placement: 'bottom',
            duration: 5000,
            width: '400px'
          })
        })
       }
  },
  created() {
    this.getAccount()
  },
  watch:{
      account(){
        if(this.account.length<6){
            this.accountStatus=true
        }else{
            this.accountStatus=false
        }
      },
      password(){
          if(this.password.length<6){
              this.passwordStatus=true
          }else{
            this.passwordStatus=false
          }
      }
  }
}
</script>
<style lang="scss" scoped>
    .content .content_text{
        margin-top: 40px;
        margin-bottom: 40px;
    }
</style>