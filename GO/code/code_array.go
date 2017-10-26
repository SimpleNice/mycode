package main

import (
	"fmt"
)

//golang将长度作为类型，长度不同的数组是不同类系，不能进行“=”号赋值
//数组是值类型
//数组可以用“==”或“！=”比较，不能使用“<”">"
//数组比较必须是相同类型
func main() {
	a := [2]int{1}               //字面值不够会有0值自动补充
	c := [20]int{19: 1}          //索引赋值
	b := [...]int{1, 2, 3, 4, 5} //自动计算数组长度
	d := [...]int{19: 1}         //自动计算数组长度索引赋值
	fmt.Println(a, "\n", b, c, d)
	var e *[20]int = &d //指向数组的指针
	g := new([10]int)   //使用new关键字会返回一个指向数组的指针
	fmt.Println(e, g)
	x, y := 1, 2
	f := [2]*int{&x, &y} //指针数组
	fmt.Println(f)
	//多维数组
	h := [2][3]int{
		{1, 1, 1},
		{0, 0, 0}}
	fmt.Println(h)

	//冒泡排序
	k := [...]int{5, 6, 1, 3, 7, 9, 4}
	num := len(k)
	for i := 0; i < num; i++ {
		for j := i + 1; j < num; j++ {
			if k[i] > k[j] {
				temp := k[j]
				k[j] = k[i]
				k[i] = temp

			}
		}
	}
	fmt.Println(k)
}
