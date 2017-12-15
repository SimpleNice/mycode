//json数组格式
let json = {
    '0' : '落花浅忆',
    '1' : '流年似水',
    '2' : '塞北飘雪',
    length:3 //必须
}
//Array.from 方法
let arr =Array.from(json);
console.log(arr);
//Array.of方法
let arr1=Array.of(1,2,3,4,5);
let arr2=Array.of('落花浅忆','红颜若雪','千山浮沉');
console.log(arr1);
console.log(arr2);

//find() 实例方法
let arr3=[1,2,3,4,5,6,7,8,9];
//arr3.find() 
console.log(arr3);
console.log(arr3.find(function(val,index,arr){
    return val>5;
}))

console.log(arr.find(function(val,index,arr){
    //return val=="落花浅忆"; //落花浅忆
    return val=="落花";  //undefined
}))
