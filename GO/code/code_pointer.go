package main

import "fmt"

//GOlang不支持指针运算以及“->”运算符，直接采用“.”操作指针对象成员
//“&” 取变量地址
//“*” 通过指针简介访问目标对象
//默认值nil
func main() {
	a := 1
	a++ //++,--，只能作为语句，不能作为表达式
	var p *int = &a
	fmt.Println(*p)

}
