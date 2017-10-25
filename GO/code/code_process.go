package main

import (
	"fmt"
)

func main() {
	//golang 流程控制语句不用（）
	//a只作用if语句，如果外部定义a ，if语句块里面的暂时隐藏外部定义的a
	//左大括号必须和if在同一行
	if a := 1; a > 1 {
		fmt.Println(a)
	}
	//go只有for循环没有while语句
	//3种for循环形式
	a := 1
	for {
		a++
		if a > 3 {
			break
		}
		fmt.Println(a)
	}

	for a <= 3 {
		a++
		fmt.Println(a)
	}

	b := "string"
	c := len(b)
	for i := 0; i < c; i++ {
		fmt.Println(i)
	}
	//switch   fallthrough符合case不需要显示break，会自动跳出switch，如果需要继续执行需要使用fallthrough关键字
	//switch 1
	switch a {
	case 0:
		fmt.Println("a=0")
	case 1:
		fmt.Println("a=1")
	default:
		fmt.Println("nil")
	}
	//switch 2
	switch {
	case a >= 0:
		fmt.Println("a>=0")
		fallthrough
	case a >= 1:
		fmt.Println("a>=1")
	default:
		fmt.Println("nil")
	}

	//switch 3
	switch a := 1; {
	case a >= 0:
		fmt.Println("a>=0")
	case a >= 1:
		fmt.Println("a>=1")
	default:
		fmt.Println("nil")
	}
	//跳转语句
	//break goto continue
LABEL1:
	for {
		for i := 0; i < 10; i++ {
			if i > 3 {
				break LABEL1 //跳出和LABEL1同一层的循环

				//goto LABEL1//程序执行位置调整到LABEL1，要使用goto需要把LABEL1放到循gotoz之后
				//continue LABEL1 //continue与LABEL1同一层的循环
			}
		}
	}
LABEL2:
	for i := 0; i < 10; i++ {
		for {
			continue LABEL2
		}
	}
	fmt.Println("OK")
}
