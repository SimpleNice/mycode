import axios from 'axios'
import Api from '../config.js'
import { ADDRESS } from './const';
function getCity(arr){
    const prov = [] 
    let len=arr.length;
    for (let i = 0; i < len; i++) {
        axios.get(Api.ROOT+Api.CITY,{
            params:{
                provinceid:arr[i].provinceid
            }
        })
        .then(data=>{
            let datas = data.data.data
            let parmts = {}
            parmts.value = arr[i].provinceid
            parmts.label = arr[i].province
            if(datas.list.length > 0){
                parmts.children = getArea(datas.list)
            }
            ADDRESS.push(parmts)
        }).catch(error => {
            console.log(error);
        })
    }
}
function getArea(arr){
    let len=arr.length;
    let backArr=[]
    for (let i = 0; i < len; i++) {
        axios.get(Api.ROOT+Api.AREA,{
            params:{
                cityid:arr[i].cityid
            }
        })
        .then(data=>{
            let datas = data.data.data
            let parmts = {}
            parmts.value = arr[i].cityid
            parmts.label = arr[i].city
            if(datas.list.length > 0){
                parmts.children = setItem(datas.list)
            }
            backArr.push(parmts)
        }).catch(error => {
            console.log(error);
        })
    }
    return backArr
}
function setItem(arr){
    let len=arr.length;
    let nArr = []
    for (let i = 0; i < len; i++) {
        let parmts = {}
        parmts.value = arr[i].areaid
        parmts.label = arr[i].area
        nArr.push(parmts)
    }
    return nArr
}
/** 
 * 异步获取省市县并封装成数组格式存在全局变量,在其他页面将数据存入localStorage
*/
export default {
    getProv(){
        axios.get(Api.ROOT+Api.PROV)
        .then(data=>{
            let arr = data.data.data;
            getCity(arr.list)
        }).catch(error => {
            console.log(error);
        })
    }
}