package main

import "fmt"

//类型别名
type (
	byte int8
	rune int32
	文本   string
)

func main() {
	var a [10]int //数组
	var b []int   //切片 slice
	var c 文本
	d := 999                  //简短声明
	e, f, g := 1, "hellow", 2 //多变量声明简写（有值）
	var h, i, j, k int        //函数内多变量声明（无值）

	h, _, j, k = 1, 2, 3, 4 //_忽略赋值
	fmt.Print(e, g, f, a, b, c, d, h, i, j, k)
}
