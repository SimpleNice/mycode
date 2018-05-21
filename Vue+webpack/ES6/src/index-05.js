import axios from 'axios'
const prov = []
let http = axios.create({
    withCredentials:false
})
http.get('http://192.168.0.112/account/province/list/')
.then(data=>{
    let arr = data.data.data;
    getCity(arr.list)
}).catch(error => {
    console.log(error);
})
function getCity(arr){
    let len=arr.length;
    for (let i = 0; i < len; i++) {
        http.get('http://192.168.0.112/account/city/list?provinceid='+arr[i].provinceid)
        .then(data=>{
            let datas = data.data.data
            let parmts = {}
            parmts.value = arr[i].provinceid
            parmts.label = arr[i].province
            parmts.children = getArea(datas.list)
            prov.push(parmts)
        }).catch(error => {
            console.log(error);
        })
        if (i == len-1){
            console.log(prov)
            document.body.innerText = prov.join()
        }
    }
}
function getArea(arr){
    let len=arr.length;
    let backArr=[]
    for (let i = 0; i < len; i++) {
        http.get('http://192.168.0.112/account/area/list?cityid='+arr[i].cityid)
        .then(data=>{
            let datas = data.data.data
            let parmts = {}
            parmts.value = arr[i].cityid
            parmts.label = arr[i].city
            parmts.children = setItem(datas.list)
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