//对象扩展运算符 '...'
function lhqy(...arg){
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg.length);
}
lhqy(1,2,3);

let arr = ['塞北的雪','何时能下','到汴京.'];
//let arr1 = arr; //引用,arr arr1同一个地址
let arr1=[...arr]; //arr arr1地址不同,复制的是arr里面的每个元素,不是arr对象
console.log(arr1);
arr1.push('--落花浅忆');
console.log(arr);
console.log(arr1);

//rest ... 

function lhqy1(first,...arr){
    //console.log(arr.length);
    for (let val of arr) {
        console.log(val);
    }
}
lhqy1(1,2,3,4,5,6,7,8); //7 ,第一个1 = first