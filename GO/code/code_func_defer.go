package main

import (
	"fmt"
)

//defer 延迟执行，后进先出
//go没有异常机制 有panic/recover处理错误
//panic可在任何地方引发，recover 只在defer调用的函数中有效
func main() {
	fmt.Println("a")
	defer fmt.Println("b")
	defer fmt.Println("c")

	for i := 0; i < 3; i++ {
		//地址引用
		defer func() {
			fmt.Println(i)
		}()
	}
	A()
	B()
	C()

}

func A() {
	fmt.Println("函数A")
}

func B() {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println("recover B")
		}
	}()
	panic("panic B")
}
func C() {
	fmt.Println("函数C")
}
