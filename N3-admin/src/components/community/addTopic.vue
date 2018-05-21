<template>
<div class="topicontent">
    <div class="community_text no_top">
        <div class="community_list">
            <div class="member-home">
                <div class="box" >
                    <div class="avatar">
                        标题:
                    </div>
                    <div class="box_content">
                            <n3-input v-model="model.title" width="600px"></n3-input>
                    </div>
                </div>
                 <div class="box" >
                    <div class="avatar">
                        类型:
                    </div>
                    <div class="box_content">
                      <n3-radio-group v-model="model.types" type="primary">
                        <n3-radio label="0">话题</n3-radio>
                        <n3-radio label="1">公告</n3-radio>
                      </n3-radio-group>  
                    </div>
                </div>
                <div class="box" v-if="model.types==0">
                    <div class="avatar">
                        社区:
                    </div>
                    <div class="box_content">
                        <n3-select v-model="model.topic" :options="fruitOptions" :search="true"  width="600px"></n3-select>
                    </div>
                </div>
                <div class="box" >
                    <div class="avatar">
                        内容:
                    </div>
                    <div class="box_content">
                        <div class="show_text_img">
                            <div class="insert_text">
                                <textarea name="" id="" class="my_status_insert" v-model="model.text" ref="replyText"></textarea>
                            </div>
                            <hr v-if="model.img!==''"/>
                            <div class="show_img" v-if="model.img!==''">
                                <div class="img_box">
                                    <img :src="model.img" alt="" srcset="">
                                    <span class="del_img but_span" @click="removeImg" >
                                        <n3-icon type="trash-o"></n3-icon>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="line" style="width:80%;">
                            <input type="file" @change="tirggerFile($event)" ref="uploadFile" style="display:none;" id="uploadFile">
                            <span :class="[model.img!==''? 'but_span but_span_border dis_span' :'but_span but_span_border']" style="padding: 6px 12px 8px;" @click="openUpFile" ref="butSpan"><n3-icon type="picture-o" ></n3-icon></span>
                            <n3-button type="primary" size="sm" style="float:right;" @click.native="submit">发布话题</n3-button>
                            <n3-button size="sm" style="float:right;margin-right:10px;" @click.native="cache">取消</n3-button>
                        </div>
                    </div>
                </div>
            </div>    
        </div>        
    </div>
</div>
</template>
<script>
export default{
    name:"treatBrowse",
    data(){
        return{
           value:'',
           model:{
                text:'',
                img:'',
                tetle:'',
                topic:'',
                topicId:'',
                types:'0'
            },
            editStatus:false,
            fruitOptions: [
                {value: '1', label: '肝癌'},
                {value: '2', label: '中医助乐'},
                {value: '3', label: '五府'},
                {value: '4', label: '脑血栓'},
                {value: '5', label: '智障250'}
            ],
        }
    },
    methods:{
        tirggerFile(event){
            //兼容IE9 --无效
            // if(navigator.userAgent.indexOf("MSIE 9.0")>0){
            //     this.ie9 = true
            //     let file = document.getElementById('uploadFile')
            //     let pic =  document.getElementById('ie9Img')
            //     file.select()
            //     file.blur()
            //     let reallocalpath = document.selection.createRange().text
            //     console.log(reallocalpath)
            //     pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src=\"" + reallocalpath + "\")"
            //     pic.width = "60px"
            //     pic.height = "60px"
            //     pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
            //     return true
            // }
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
                    this.model.img=evn.target.result
                }
            }
        },
        removeImg(){
            this.model.img= ''
            this.ie9 =false
        },
        openUpFile(){
            //点击触发隐藏file框
            if(this.model.img!==''){
                return false
            }
            this.$refs.uploadFile.click()
        },
        cache(){
            if(this.editStatus){
                this.$router.go(-1)
            }else{
                this.model={
                    text:'',
                    img:'',
                    tetle:'',
                    topic:''
                }
            }
        },
        submit(){

        },
        reload(){
            if(this.$route.params.id!==undefined){
                this.editStatus = true
            }
        },
        goTopicList(){
            if(this.editStatus = true){
                 this.$router.push({ name: 'CommunityIndex', params: { id: this.model.topicId }})
            }else{
                 this.$router.push({ name: 'CommunityIndex'})
            }
        }
    },
    created () {
        this.reload()
    }
}    
</script>

<style lang="scss" scoped>
.topicontent{
    display: inline;
    .community_list{
        width: 75%;
        margin-top: 0;
        border-top:1px solid #f4f4f4;
        .member-home{
            width: 600px;
            padding: 20px;
            margin: 0;
            .my_status_insert{
                height: 360px;
            }
            .line{
                border-bottom: none;
            }
            .replyUser{
                margin-bottom: 20px;
            }
        }
    }
   
}
.line{
    border-bottom: 1px solid #f4f4f4;
}
.content_tabs{
    margin-top: 60px;
    header{
        padding: 10px 20px 20px;
    }
    .table_titel{
        font-weight: 600;
        font-size:18px; 
    }
}
.member-home{
    display: inline;
    padding-left: 20px;
    margin-left: 4.0%;
    .box{
        border-radius: 3px;
        width: 100%;
        padding: 5px;
        display: flex;
        .box_content{
            -ms-flex-positive: 1;
            flex-grow: 1;
            -ms-flex-negative: 1;
            flex-shrink: 1;
            .line{
                margin-top: 10px;
            }
        }
    }
    .avatar{
        width: 60px;
        height: 60px;
        margin-right: 20px;
        img{
            width: 100%;
            border-radius:30px; 
            height: 100%;
        }
    }
}
.show_text_img {
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #cccccc;
    width: 80%;
}
.my_status_insert {
    margin: 0px;
    height: 40px;
    width: 100%;
    outline: none;
    border: none;
    overflow: hidden;
    resize: none;
}
.but_span {
    padding: 3px 6px;
    background-color: rgba(255, 255, 255, 0.6);
    color: #969696;
}
.but_span_border {
    border: 1px solid #e6e6e6;
}
.show_img{
    .img_box{
        position: relative;
        width: 80px;
        height: 80px;;
        img{
            width: 100%;
            max-height: 100%;
        }
    }
}
.del_img{
    position: absolute;
    right: 0px;
    top: 0px;
}
.show_text_img hr {
    border-color: #cccccc;
    margin: 10px 0px;
}   
</style>
