var arr=[];
for (let i = 0; i < 20; i++) {
    arr[i]=i+1;
}
console.log(arr);
arr.reverse();
console.log(arr) //数组反序
let str= arr.toString(); //数组转字符创
console.log(str);
arr.splice(5,10); //从数组第5位开始删除10个元素
console.log(arr);
arr.sort(); //数组排序，对数字排序有问题需要另外写
console.log(arr);
function sortNum(a,b){
    return a-b;
}
arr.sort(sortNum);
console.log(arr);
arr.pop();//删除数组最后一个元素
console.log(arr);
arr.shift(); //删除数组第一个元素
console.log(arr);
arr.push(20,21,22); //添加新元素到数组末尾
console.log(arr);
arr.unshift(1); //添加新元素到数组开头
console.log(arr);
arr.splice(0,3); //删除第0位到第三位元素
console.log(arr);
arr.unshift(1,2,3); //添加新元素到数组开头
console.log(arr);
arr.splice(5,0,6,7,8,9,10,11,12,13,14,15,16);
console.log(arr);
console.log(Array.isArray(arr)); //判断是否是数组
console.log(Array.isArray(str)); 
console.log(arr.indexOf(5)); //查找数组是否存在，存在就反回索引 
console.log(arr.indexOf(25)); //不存在返回-1
arr.push(5); 
console.log(arr.lastIndexOf(5)); //查找数组返回相同元素最后一个索引值
let str2="落花浅忆|流水春来|夏末未至|寒暑交替|断桥残雪";
let arr2=str2.split("|");
console.log(arr2);
console.log(arr2.join()); //数组转换为字符串
let arr3 = arr2.concat(arr); //arr2发起参数arr合并到arr3
console.log(arr3);
let arr4 = arr3.splice(7,6); //从第三位截取6位生成新数组
console.log(arr4);
function square(num){
    console.log(num ,num*num);
}
arr4.forEach(square); //forEach接受函数参数，对数组每个元素使用该函数

function isEven(num){
    return num % 2==0;
}
let even=arr4.every(isEven); //every 接受一个返回值布尔类型函数，对数组每个元素使用该函数，且对所有元素返回true时,该方法返回true
if(even){
    console.log("所有数据是even");
}else{
    console.log("不是所有数据都是even");
}
let somes=arr4.some(isEven); //some 接受一个返回值布尔类型函数，只要有一个值返回true ,该方法返回true
if(somes){
    console.log("数据存在EVEN");
}else{
    console.log("数据不存在even");
}
function add(total,value){
    return total+ value;
}
console.log(arr4.reduce(add)); //reduce 接受一个函数参数，会从一个累加值开始不断调用累加值和数组元素,知道数组最后一个元素，最后返回得到的累加值
function addStr(str1,str2){
    return str1 +'|'+ str2;
}
console.log(arr2.reduce(addStr)); //reduce拼接字符串

console.log(arr2.reduceRight(addStr)); //reduceRight 从右到左执行

function curve(grade){
    return grade+5 ;
}
let arr5=arr4.map(curve); //map对数组每个元素使用某个函数，返回一个新数组，该数组的元素是对原有元素应用某个函数的结构
function first(str){
    return str[0];
}
let arr6=arr2.map(first); //对字符串数组使用map
console.log(arr6.join(""));
let arr7 = arr4.filter(isEven); //和even类似，不同是该方法返回一个新的组，该数组包含应用该函数结构为true的元素
console.log(arr7);
