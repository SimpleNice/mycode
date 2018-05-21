<template>
    <section class="content">
        <conmmunity-top @change="checkCommunity" :list="list"/>
        <section class="content_text">
            <router-view></router-view>
        </section>
    </section>
</template>
<script>
import conmmunityTop from '@/components/Community/top'
//import
export default{
    name:'Community',
    data () {
        return {
          list:[
              {label:'中医助乐',value:1},
              {label:'乙肝',value:2},
              {label:'脑血栓',value:3},
              {label:'胃癌',value:4},
              {label:'肾结石',value:5},
          ]  
        }
    },
    components:{
        conmmunityTop:conmmunityTop
    },
    methods: {
        checkCommunity(val){
            this.$router.push({ name: 'CommunityIndex', params: { id:val }})
        }
    }
}
</script>