<template>
  <section class="login-wrap">
      <n3-form ref='form' class="login-from">
          <h3>系统登录</h3>
          <div>
            <n3-input class="field" v-model="account" placeholder="账号" width="380px">
            </n3-input>
            <n3-input class="field" v-model="password" type="password" placeholder="密码" width="380px"  @keyup.native.enter="check">
            </n3-input>
            <n3-checkbox-group v-model="remember" class="save-account">
            <n3-checkbox label="remember">记住账号</n3-checkbox>
            </n3-checkbox-group>
          </div>
          <div class="submit">
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
      </n3-form>
  </section>
</template>
<style scoped>
.login-wrap {
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #111;
}
.login-from {
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 16px 20px 0;
  width: 420px;
  height: 280px;
  font-size: 14px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 2px 2px 32px 1px rgba(0, 0, 0, 0.45);
  opacity: 0.75;
}
.login-from h3 {
  margin-top: 0;
  margin-bottom: 0;
  padding: 12px 0;
  font-weight: normal;
  font-size: 22px;
  text-align: center;
}
.field,
.save-account,
.submit {
  margin-top: 15px;
}
</style>
<script>
import { STORAGE_KEY  } from "../utils/const";
import storage from "../utils/storage";
export default {
  data() {
    return {
      account: "",
      password: "",
      remember: [],
      loading: false
    };
  },
  methods: {
    saveAccount() {
      this.remember.length ? storage.setItem(STORAGE_KEY.ACCOUNT, this.account) : storage.setItem(STORAGE_KEY.ACCOUNT,'');
    },
    getAccount() {
      this.account = storage.getItem(STORAGE_KEY.ACCOUNT) || "";
      this.account!=='' && this.remember.push('remember')
    },
    check() {
      if (!this.account) {
        return this.n3Alert({
          content: '请输入账号',
          type: 'danger',
          placement: 'bottom',
          duration: 2000,
          width: '240px'
        })
      }
      if (!this.password) {
        return this.n3Alert({
          content: '请输入密码',
          type: 'danger',
          placement: 'bottom',
          duration: 2000,
          width: '240px'
        })
      }
      this.saveAccount()
      this.submit ()
    },
    submit () {
        this.loading = true
        // this.$http.post('#',{
        //   account: this.account,
        //   password: this.password
        // })
        // .then(data => {
          this.loading = false
          storage.setItem(STORAGE_KEY.LAST_LOGIN_TIME, Date.now())
        //   if (this.$route.query.back) {
        //       this.$router.replace(this.$route.query.back)
        //   } else {
            this.$router.replace({
              name: 'index'
            })
        //   }
        // })
        // .catch(error => {
        //   this.loading = false
        //   this.n3Alert({
        //     content: error || '登录失败，请检查账号密码~',
        //     type: 'danger',
        //     placement: 'bottom',
        //     duration: 5000,
        //     width: '240px'
        //   })
        // })
      },
  },
  created() {
    this.getAccount()
  }
};
</script>