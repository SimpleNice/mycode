package main

import (
	"fmt"
)

//GO不支持嵌套，重载，默认参数
//支持 无需声明原型、不定长度变参、多返回值、命名返回值参数，匿名函数、闭包
//定义关键字：func，左大括号不能另起一行，右大括号另起一行
//函数也可以作为一种类型使用
func main() {
	hello("hellow", "word")
	A(7, 2, 5, 1, 4, 3, 6)
	s := []int{7, 2, 5, 1, 4, 3, 6}
	fmt.Println(s)
	B(s)
	fmt.Println(s)
	a, b := 1, 2
	C(a, b)
	fmt.Println(a, b)
	D(&a)
	fmt.Println(a)
	e := E //函数类型
	e()
	f := func() {
		fmt.Println("我是匿名函数F")
	}
	f()
	g := G(10)
	fmt.Println(g(1))
	fmt.Println(g(2))
}

func hello(a, b string) {
	fmt.Println(a, b)
}

//不定长变参
//不定参变参必须是最后一个参数
func A(a ...int) {
	fmt.Println(a)

}

//slice 拷贝内存地址
func B(s []int) {
	l := len(s)
	for i := 0; i < l; i++ {
		for j := i + 1; j < l; j++ {
			temp := s[i]
			if s[i] > s[j] {
				s[i] = s[j]
				s[j] = temp
			}
		}
	}
}

//值拷贝
func C(s ...int) {
	s[0] = 3
	s[1] = 5
	fmt.Println(s)
}

//引用 地址拷贝
func D(a *int) {
	*a = 9
}

func E() {
	fmt.Println("我是函数E")
}

//闭包
func G(x int) func(int) int {
	return func(y int) int {
		return x + y
	}
}
