<template>
  <section class="index_content">
      <div class="carousel_img">
          <n3-carousel :controls="false">
            <n3-slide v-for="item in list" :key="item.id">
                <img class="slide-img" :src="'/static/img/'+item.img">
            </n3-slide>
         </n3-carousel>
      </div>
      <div class="count">
          <div class="box">
              <n3-icon type="group"></n3-icon></br>
              <b>60000+</b> </br>
              病友
          </div>
          <div class="box">
              <n3-icon type="user-md"></n3-icon></br>
              <b>3000+</b> </br>
              医生
          </div>
          <div class="box">
              <n3-icon type="h-square"></n3-icon></br>
              <b>120000+</b> </br>
              病症
          </div>
          <div class="box">
              <n3-icon type="hospital-o"></n3-icon></br>
              <b>2000+</b> </br>
              合作医院
          </div>
      </div>
      <router-view/>    
  </section>
</template>
<script>
    export default{
        data(){
            return {
                list:[
                    {
                        id:1,
                        title:"测试图片",
                        img:"1.jpg"
                    },
                    {
                        id:2,
                        title:"测试图片",
                        img:"2.jpg"
                    },
                    {
                        id:4,
                        title:"测试图片",
                        img:"3.jpg"
                    }
                ]
            }
        }
        // beforeRouteEnter: (to, from, next) => {
        //     console.log('进入路由页面')
        //     console.log(to)
        //     console.log(from)
        //     next()
        // }
    }

</script>