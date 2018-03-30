<template>
  <section class="popup" :style="{top:option.top+'px',left:option.left+'px'}">
      <header>选择症状程度
          <label class="close" @click="hide"><n3-icon type="times"></n3-icon></label>
      </header>
      <ul>
          <li @click="save(1)" :class="[option.isActive == 1 ? 'active':'']">没有</li>
          <li @click="save(2)" :class="[option.isActive == 2 ? 'active':'']">中等</li>
          <li @click="save(3)" :class="[option.isActive == 3 ? 'active':'']">温和</li>
          <li @click="save(4)" :class="[option.isActive == 4 ? 'active':'']">严重</li>
      </ul>
  </section>
</template>
<script>
    export default{
        name:"popUp",
        props:{
           option:{
               type:Object,
               default:{
                   top:-500,
                   left:-500,
                   isActive:5
               }
           }
        },
        methods: {
            hide(){
                this.$emit('hidePopUp')
            },
            save(val){
                this.option.isActive = val
                this.$emit('change',val)
            }
        }
    }
</script>
<style lang="scss" scoped>
.popup{
    position:fixed;
    background-color: #fff;
    width: 120px;
    z-index: 999;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 3px;
    header{
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid #e2e2e2;
    }
    li{
        height: 30px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
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

