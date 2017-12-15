//二进制声明 Binary
let binary = 0B010101;
console.log(binary);
//八进制声明 Octal
let octal = 0O666;
console.log(octal);

//十六进制声明 Hexadecimal
let Hexadecimal=0xFF;
console.log(Hexadecimal);
//判断是否是数字
let a=11/4;
console.log(Number.isFinite(a));//true
//判读NaN
console.log(Number.isNaN(NaN));//true
//判断是不是整数
let b=1;
let c=3.5;
console.log(Number.isInteger(b)); //true
console.log(Number.isInteger(c)); //false
console.log(Number.isSafeInteger(c));//false //判断是否是安全整数 
//取值范围
let d=Math.pow(2,53)-1; //最大值
let e=Math.pow(-2,53)+1; //最小值
console.log(d);
console.log(e);
//ES6自带最大最小安全值
console.log(Number.MAX_SAFE_INTEGER); //最大安全整数
console.log(Number.MIN_SAFE_INTEGER); //最小安全整数
console.log(Number.MAX_VALUE); //最大的数
console.log(Number.MIN_VALUE); //最小的数
console.log(Number.isSafeInteger(d));//true
console.log(Number.isSafeInteger(d+1));//false