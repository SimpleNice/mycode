<template>
  <section class="container">
      <header>
          <h3>我的信息</h3>
          <p>告诉社区帮助我们更好的认识你,将您的健康数据连接到实时研究。</p>
      </header>
      <div class="columns">
          <div class="left">
              <section class="box box_show">
                 <header>
                     <h4>头像照片</h4>
                     <p>使用你自己喜欢的头像,我们的默认头像很无聊</p>
                 </header>
                 <div class="specific">
                     <div class="avatar">
                         <img :src="user.avatarsrc" alt="" srcset="">
                     </div>
                     <div class="operating">
                        <input type="file" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event)" ref="uploadAvatar">
                        <n3-button @click.native="updateAvatar">更改照片</n3-button></br>
                        <n3-button >删除照片</n3-button>
                     </div>
                 </div>
              </section>
              <section class="box box_show">
                   <header>
                     <h4>自我介绍</h4>
                     <p>这将是大多数人对你的看法。</p>
                     <span class="edit" @click="introduceEdit"><n3-icon type="edit"></n3-icon></span>
                 </header>
                  <div class="specific">
                      <textarea name="introduce" id="introduce" class="enter enter_textarea" v-model="user.introduce" v-show="status.introduce" ref="introduce" @blur="saveIntroduce"></textarea>
                      <p class="bold" v-show="!status.introduce">
                           {{user.introduce}}
                      </p>
                  </div>
              </section>
              <section class="box box_show">
                   <header>
                     <h4>兴趣爱好</h4>
                     <p>让更多的人了解你的兴趣,找到相同兴趣朋友.   用","隔开</p>
                     <span class="edit" @click="interestEdit"><n3-icon type="edit"></n3-icon></span>
                 </header>
                  <div class="specific">
                      <textarea name="interest" id="interest" v-model="user.interest" class="enter enter_textarea" v-show="status.interest" ref="interest" @blur="saveInterest"></textarea>
                      <p class="bold" v-show="!status.interest">
                         {{user.interest}}
                      </p>
                  </div>
              </section>
              <section class="box box_show">
                   <header>
                     <h4>分享你的故事</h4>
                 </header>
                  <div class="specific">
                      <textarea name="story" id="story" class="enter enter_textarea enter_textarea_lg" v-model="user.story"></textarea>
                  </div>
                  <div class="story">
                      <n3-button type="primary" size="sm" @click.native="submit">添加到个人资料</n3-button>
                      <n3-button size="sm" style="margin-left:10px;" @click.native="cache">取消</n3-button>
                  </div>
              </section>
          </div>
          <div class="right">
               <section class="box box_show">
                   <header>
                     <h4>基本信息统计</h4>
                     <span class="edit" @click="basicEdit"><n3-icon type="edit"></n3-icon></span>
                 </header>
                  <div class="specific">
                      <div class="inputLine">
                          <label class="headline">昵称</label>
                          <input type="text" class="enter enter_input" v-show="status.basic" v-model="user.nickname">
                          <label class="bold" v-show="!status.basic">{{user.nickname}}</label>
                      </div>
                      <div class="inputLine">
                          <label class="headline">真实姓名</label>
                          <input type="text" class="enter enter_input" v-show="status.basic" v-model="user.realname">
                          <label class="bold" v-show="!status.basic">{{user.realname}}</label>
                      </div>
                      <div class="inputLine">
                          <label class="headline">邮箱</label>
                          <input type="text" class="enter enter_input" v-show="status.basic" v-model="user.mailbox">
                          <label class="bold" v-show="!status.basic">{{user.mailbox}}</label>
                      </div>
                      <div class="inputLine">
                          <label class="headline">性别</label>
                          <select name="" id="" class="enter enter_input" v-show="status.basic" v-model="user.gender"></select>
                          <label class="bold" v-show="!status.basic">{{user.gender}}</label>
                      </div>
                      <div class="inputLine">
                        <label class="headline">体重</label>
                        <input type="text" class="enter enter_input" v-show="status.basic" v-model="user.weight">
                        <label class="bold" v-show="!status.basic">{{user.weight}}</label>
                      </div>
                      <div class="inputLine">
                          <label class="headline">生日</label>
                          <n3-datepicker
                            format="yyyy-MM-dd"
                            width="200px;"
                            v-show="status.basic"
                            v-model="user.birthday">
                            </n3-datepicker>
                            <label class="bold" v-show="!status.basic">{{user.birthday}}</label>
                      </div>
                       <div class="inputLine">
                        <label class="headline">位置</label>
                        <n3-cascader :options="address" @change="selectChange" v-model="user.address" :select-change="true" width="200px;" v-show="status.basic"></n3-cascader>
                        <label class="bold" v-show="!status.basic">{{user.addressString}}</label>
                      </div>
                      <div class="story" v-if="status.basic">
                        <n3-button type="primary" size="sm" @click.native="saveBasic">保存</n3-button>
                        <n3-button size="sm" style="margin-left:10px;" @click.native="cacheBasic">取消</n3-button>
                     </div>
                  </div>
              </section>
               <section class="box box_show">
                   <header>
                     <h4>更多信息统计</h4>
                     <span class="edit" @click="moreEdit"><n3-icon type="edit"></n3-icon></span>
                 </header>
                  <div class="specific">
                     <div class="inputLine">
                          <label class="headline">种族</label>
                          <select name="" id="" class="enter enter_input" v-show="status.more" v-model="user.race"></select>
                          <label class="bold" v-show="!status.more">{{user.race}}</label>
                      </div>
                       <div class="inputLine">
                          <label class="headline">教育层次</label>
                          <select name="" id="" class="enter enter_input" v-show="status.more" v-model="user.education"></select>
                          <label class="bold" v-show="!status.more">{{user.education}}</label>
                      </div>
                       <div class="inputLine">
                          <label class="headline">医疗保险</label>
                          <select name="" id="" class="enter enter_input" v-show="status.more" v-model="user.insure"></select>
                          <label class="bold" v-show="!status.more">{{user.insure}}</label>
                      </div>
                      <div class="story" v-if="status.more">
                        <n3-button type="primary" size="sm" @click.native="saveMore">保存</n3-button>
                        <n3-button size="sm" style="margin-left:10px;" @click.native="cacheMore">取消</n3-button>
                     </div>
                  </div>
              </section>
          </div>
      </div>
      <!--头像-->
      <n3-aside  placement="right" title="上传头像" width="600px" ref="asideRight" :header="true">
          <div style="width: 570px;height: 570px;">
              <vueCropper
            ref="cropper"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
            :info="option.info"
            :fixed="option.fixed"
            :fixedNumber="option.fixedNumber"
            :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            > 
            </vueCropper>
          </div>
        <p style="margin-top: 20px;text-align: right;">
            <n3-button @click.native="cacheAvatar">取消</n3-button>
            <n3-button @click.native="saveAvatar" type ="primary">保存</n3-button>
        </p>    
    </n3-aside>
  </section>
</template>
<script>
import vueCropper from 'vue-cropper'
import { USER } from '@/utils/api.js'
import { STORAGE_KEY } from "@/utils/const";
import storage from "@/utils/storage";
export default{
    data(){
        return {
            user:{
                avatarsrc:'../../../static/img/head.jpg',
                interest:'本人性格开朗，诚实正直，谦和自信，乐于进取、乐于奉献，勤奋好学，积极上进，有较强的社会适应能力。',
                introduce:'本人性格开朗，诚实正直，谦和自信，乐于进取、乐于奉献，勤奋好学，积极上进，有较强的社会适应能力。',
                nickname:'',
                realname:'',
                mailbox:'',
                address:[],
                addressString:'',
                birthday:'',
                gender:'',
                race:'',
                education:'',
                insure:'',
                story:''
            },
            address:JSON.parse(storage.getItem(STORAGE_KEY.ADDRESSLIST)),
            status:{
                basic:false,
                more:false,
                introduce:false,
                interest:false
            },
            option:{
                img:'',
                size:1,
                info:true,
                outputType: 'png',
                fixed: true,
                fixedNumber: [1, 1],
                autoCrop: true,
				autoCropWidth: 300,
				autoCropHeight: 300,
            },
        }
    },
    methods: {
        updateAvatar(){
            this.$refs.uploadAvatar.click()
        },
        uploadImg(event){
            let file = event.target.files
            let arr=['jpg','png','bmp','jpeg','JPG','PNG']
            let str = file[0].name.split('.')[file[0].name.split('.').length-1]
            
            if(arr.indexOf(str)<0) {
                this.n3Modal.alert({
                    title: '提示消息',
                    message: '上传格式错误,允许上传'+arr.join()+'格式',
                    effect: 'fade',
                    type: 'danger'
                })
                return false
            }
            if(window.FileReader){
                let reader = new FileReader()
                reader.readAsDataURL(file[0])
                reader.onload=evn =>{
                    this.option.img=evn.target.result
                    this.$refs.asideRight.open()
                }
            }
        },
        saveAvatar(){
            this.$refs.cropper.getCropData((data) => {
					this.user.avatarsrc = data
                    console.log(convertBase64UrlToBlob(data))
			    })   
            this.$refs.asideRight.close()
            this.option.img=""
        },
        cacheAvatar(){
            this.$refs.asideRight.close()
            this.option.img=""
        },
        //编辑兴趣
        interestEdit(){
            this.status.interest = true
            setTimeout(()=>{
                this.$refs.interest.focus()
            },100)
        },
        //保存兴趣
        saveInterest(){
            this.status.interest = false
        },
        //编辑自我介绍
        introduceEdit(){
            this.status.introduce = true
            setTimeout(()=>{
                this.$refs.introduce.focus()
            },100)
        },
        //保存自我介绍
        saveIntroduce(){
            this.status.introduce = false
        },
        //编辑更多信息
        moreEdit(){
            this.status.more = true
        },
        //保存更多信息
        saveMore()
        {
            this.status.more = false
        },
        //取消更多信息
        cacheMore(){
            this.status.more = false
        },    
        //编辑基本信息
        basicEdit(){
            this.status.basic = true
        },
        //保存基本信息
        saveBasic()
        {
            this.status.basic = false
        },
        //取消保存
        cacheBasic(){
            this.status.basic = false
        },
        reload(){
            this.$http.get(USER.PROFILE,)
        },
        selectChange(val){
            for(let i=0;i<this.address.length;i++){
                if(this.address[i].value == val[0]){
                    this.user.addressString =this.address[i].label+'/'
                    if(val[1]!=undefined){
                        for(let j=0;j<this.address[i].children.length;j++){
                            if(this.address[i].children[j].value == val[1]){
                                this.user.addressString +=this.address[i].children[j].label+'/'
                                if(val[2]!=undefined){
                                    for(let k=0;k<this.address[i].children[j].children.length;k++){
                                        if(this.address[i].children[j].children[k].value == val[2]){
                                            this.user.addressString +=this.address[i].children[j].children[k].label
                                            return false 
                                        }
                                    }
                                }
                            }
                            else{
                                return false
                            }      
                        }
                    }else{
                        return false
                    }   
                }
            }
        }    
    },
    components: {
		vueCropper
	}
}
function convertBase64UrlToBlob(urlData){
    let bytes=window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte
    //处理异常,将ascii码小于0的转换为大于0
    let ab = new ArrayBuffer(bytes.length);
    let ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    return new Blob( [ab] , {type : 'image/png'});
}
</script>
<style lang="scss" scoped>
    .columns{
        display: flex;
        .left{
            width:calc(100%*13/24);
        }
        .right{
            margin-top: 20px;
            margin-left: 20px;
            width:calc(100%*11/24);
        }
        .box{
            background-color: #fff;
            padding: 20px;
            margin-top: 20px;
        }
        .box:first-child{
            margin-top: 0px;
        }
        header{
            position: relative;
            p{
                color: #949292;
            }
        }
        .avatar{
            width: 120px;
            height: 120px;
            img{
                border-radius: 80px;
                height: 100%;
                width: 100%;
            }
        }
        .operating{
            margin-top: 20px;
            line-height: 50px;
            a{
                padding: 8px 30px;
            }
        }
    }
</style>
