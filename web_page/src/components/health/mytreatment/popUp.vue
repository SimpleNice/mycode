<template>
  <section class="popup" :style="{top:option.top+'px',left:option.left+'px'}">
      <ul>
          <li @click="del()" >删除这个治疗记录</li>
          <li @click="edit()" >显示/编辑历史记录</li>
          <li @click="sel()" >查看治疗报告</li>
      </ul>
  </section>
</template>
<script>
    export default{
        name:"popUp1",
        props:{
           option:{
               type:Object,
               default:{
                   top:-500,
                   left:-500,
                   treatmentID:0
               }
           }
        },
        methods: {
            hide(){
                this.$emit('hidePopUp')
            },
            del(val){
                this.$emit('del',val)
                this.hide()
            },
            edit(val){
                this.$router.push(({ path: `./history/${this.option.treatmentID}` }))
                this.hide()
            },
            sel(val){
                this.$router.push(({ path: `/treatment/survey/${this.option.treatmentID}` }))
            },
        }
    }
</script>
<style lang="scss" scoped>
.popup{
    position:fixed;
    background-color: #fff;
    z-index: 999;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 3px;
    header{
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid #e2e2e2;
    }
    li{
        text-align: left;
        cursor: pointer;
        padding: 8px 20px;
    }
    .active,li:hover{
        background: #7fcef7;
        color: #fff;
    }
    .close{
        position: absolute;
        top:0px;
        right: 5px;
        cursor: pointer;
    }
}
</style>

