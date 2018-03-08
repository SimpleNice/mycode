<template>
    <section class="content_tabs">
        <section class="section-search"></section>
        <section class="tabs_content">
            <header>
                <label for="">按类型：<n3-select v-model="defaultVal" :options="list" @change="check"></n3-select></label>
            </header>
            <div class="list-treatment-search">
                <table>
                    <thead><th class="align-left">治疗</th><th class="align-left">类型</th><th class="align-right">耐心</th></thead>
                    <tbody>
                        <tr v-for="item in source">
                            <td class="align-left"><router-link :to="'/treatment/'+item.id">{{item.name}}</router-link></td>
                            <td class="align-left no-color">{{item.type}}</td>
                            <td class="align-right no-color">{{item.num}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <footer>
                <n3-page :total="pagination.total" :pagesize="pagination.pagesize" v-model="pagination.current" @change="pagechange" ></n3-page>
            </footer> 
        </section>
    </section> 
</template>
<script>
export default{
    name:"treatBrowse",
    props:{
        searchCondition:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            list:[
                {value:'',label:'全部'},
                {value:'处方药',label:'处方药'},
                {value:'非处方药',label:'非处方药'},
                {value:'保健药物',label:'保健药物'},
                {value:'物理疗法',label:'物理疗法'},
                {value:'设备',label:'设备'},
                {value:'手术',label:'手术'}
                ],
            defaultVal:'',
            pagination: {
                current: 1,
                total: 100,
                pagesize:30
            },
            source:[
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
                {name:'阿莫西林',type:'处方药',num:'1300',id:'1'},
            ]
        }
    },
    methods:{
        reload(val){
            console.log(val)
        },
        check(){

        },
        pagechange(page){

        }
    },
    created(){
        this.$emit('searchTabs',1) //改变选中TABS状态标识
        this.$emit('showPage',true) //改变父组件showPage状态,控制页面(搜索,浏览列表,概观)
        this.$emit('setTitle','搜索所有顶级治疗') //设置显示标题
        this.reload(this.searchCondition)
    },
    watch:{
            searchCondition(){
                this.reload(this.searchCondition)
            }
        }
}
</script>
<style lang="scss" scoped>
.section-search{
    box-shadow:  0 1px 2px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.05);
    padding: 10px 20px !important;
    margin-top: 5px;
}
.tabs_content{
    box-shadow:  0 1px 2px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.05);
    margin-bottom: 40px;
    header,footer{
        background-color: #e4e4e4;
        margin: -20px;
        padding: 10px 20px;
    }
    .list-treatment-search{
        margin-top: 26px;
        width: 100%;
        table{
            width: 100%;
            th{
                padding-top:5px; 
                color: #000;
                font-size: 12px;
            }
            td{
                padding: 10px 0;
                    a, a:active, a:hover{
                    color: #1C8BCF;
                }
            }
            th,td{
                border-bottom: 1px solid #cccccc;
            }
            tr{
                td:first-child{
                    width: 70%;
                }
            }
            tr:last-child{
                td{
                    border-bottom: none;
                }
            }
        }
    }
    footer{
        background-color: #e4e4e4;
        margin: 0 -20px -20px;
        padding: 10px 20px;
        text-align: right;
    }
}
</style>
