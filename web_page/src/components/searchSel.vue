<template>
  <section class="content" @click="hideList">
      <input type="text" v-model="checked" @click.stop="showList">
      <div :class="[show ? 'show' : '','searchBox']" >
        <input type="text" v-model="value">
        <ul>
            <li v-for="item in itemsnew" @click="checkValue(item)">{{item.label}}</li>
        </ul>
      </div>
  </section>
</template>
<script>
    export default{
        name:'searchBox',
        data(){
            return{
                items:[
                    {label:'aaa',value:'aaa'},
                    {label:'qqwe',value:'qqwe'},
                    {label:'ffff',value:'ffff'},
                    {label:'yyyy',value:'yyyy'},
                    {label:'bbbb',value:'bbbb'},
                    {label:'abc',value:'abc'},
                    {label:'ccc',value:'ccc'},
                    {label:'cda',value:'cda'},
                    {label:'ggg',value:'ggg'},
                ],
                itemsnew:[],
                value:'',
                checked:'',
                show:false
            }
        },
        methods: {
            checkValue(obj){
                this.checked = obj.value
                this.show = false
            },
            showList(){
                console.log(11)
                this.show = true
            },
            hideList(){
                this.show = false;
            }
        },
        created () {
           this.itemsnew = this.items 
        },
        watch:{
            value(){
                this.itemsnew=[]
                for(let i= 0;i<this.items.length;i++){
                    if(this.items[i].label.indexOf(this.value)>=0){
                        this.itemsnew.push(this.items[i])
                    }
                }
            }
        }
    }
</script>
<style>
.show{
    display: block;
}
.searchBox{
    border: 1px solid #cccccc;
    background: #fff;
    width: 220px;
    padding: 10px;
    border-radius: 3px;
    max-height: 400px;
    display: none;
}
.searchBox > input{
    width: 100%;        
}
.searchBox > ul{
    margin-top: 10px;
}
.searchBox > ul > li{
    padding: 5px;
    border-top: 1px solid #cccccc;
}
ul > li:hover{
    background-color: #348cff;
    color: #fff;
}
</style>
