// let a = 1;
// console.log(a);
/**
 * 变量泄露 i变成全局变量
 */
for (var i=0;i<10;i++) { 
   console.log('循环内部:'+i); 
}
console.log('循环外部'+i);
/**
 * j只在代码块里面有效,外部使用会报错:Uncaught ReferenceError: j is not defined
 */
for (let j = 0; j < 10; j++) {  
    console.log('循环内部:'+j); 
}
//console.log('循环内部:'+j); 
/**
 * 解构赋值
 */
//数组
//let [a,b,c]=[0,1,2];
//let [a,[b,c]]=[0,[1,2]]; //两边必须格式相同
let [a=5,b,c] = [,1,2];//默认值
console.log('a:'+a+',b:'+b+',c:'+c);

//对象
//对象按照key值解构,key值必须对应
let {d,e,f,g}={d:4,e:5,f:6,g:7};
let foo;
({foo}={foo:'落花浅忆'}); //必须加"()"否则会出错,js坑
console.log('d:'+d+',e:'+e+',f:'+f+',g:'+g);
console.log(foo);

//字符串解构

const [h,k,l,m] = 'lhqy';
console.log('h:'+h+',k:'+k+',l:'+l+',m:'+m);