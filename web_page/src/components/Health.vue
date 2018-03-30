<template>
    <section class="content">
        <section class="content_text">
            <div class="health"> 
                <div class="nav">
                    <div>
                        <n3-nav  :default-active="activeIndex"  mode="vertical" :router="routerStatus">
                            <n3-nav-item index="/health/myInformation">我的信息</n3-nav-item>
                            <n3-nav-item index="/health/majorillness">主要病症</n3-nav-item>
                            <n3-nav-item index="/health/healthDiary">健康日记</n3-nav-item>
                            <n3-nav-item index="/health/checkingData">检查记录</n3-nav-item>
                            <n3-nav-item index="/health/myChart">我的图表</n3-nav-item>
                            <n3-nav-item index="/health/mySymptoms">我的症状</n3-nav-item>
                            <n3-nav-item index="/health/myTreatment">我的治疗</n3-nav-item>
                            <n3-nav-item index="/health/assess">评估</n3-nav-item>
                        </n3-nav>
                    </div>
                </div>
                <div class="row">
                    <router-view></router-view>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
    export default{
        data(){
            return {
                routerStatus:true,
                activeIndex:''
            }
        },
        created () {
            this.activeIndex = this.$route.matched[1].path
        }
    }
</script>