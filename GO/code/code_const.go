package main

import (
	"fmt"
)

//常量表达式只能使用常量和内置函数
const times string = "2017-10-24"
const (
	name  = "落花浅忆"
	email = "740008538@qq.com"
	sex   = "男"
)

//定义常量组如果不提供表达式，默认使用上面的表达式
const (
	a    = 1
	b    //1  b使用a的表达式
	c    //1  c使用b的表达式
	d, e = 1, 2
	f, g //f 1 g 2 如果没有g编译不通过，每行常量个数必须相同
)

//iota 可达到枚举效果 常量计数器从0开始，组中每定义一个常量自动递增1
//每遇到一个const关键字ioto重置为0
const (
	h = "A"  //65
	i        //65
	j = iota //2
	k        //2
)

func main() {
	fmt.Print("time:", times, "\n", "name:", name, "\n", "Email:", email, "\n", "sex", sex, "\n", "a:", a, "\n", "b:", b, "\n", "c:", c, "\n", "d,e,f,g:", d, e, f, g, "\n", "h,i,j,k:", h, i, j, k, "\n")
}
