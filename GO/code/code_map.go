package main

import (
	"fmt"
	"sort"
)

//mapc查找比线性查找快，比使用索引慢很多
func main() {
	//创建mao  关键字[key类型]value类型
	var m map[int]string
	m = map[int]string{} //初始化map或者make(map[int]string)
	var m1 map[int]string = make(map[int]string)
	m2 := make(map[int]string)
	//复杂map
	var m3 map[int]map[int]string = make(map[int]map[int]string)
	//赋值

	m[1] = "hellow"
	m[2] = "word"
	fmt.Println(m, m1, m2)
	delete(m, 2) //删除值
	a := m[1]
	fmt.Println(m, a)
	//多层map每一层都要make，给make赋值最好是，每次都检查map有没有make,否则赋值会发生异常
	b, ok := m3[2][1]
	fmt.Println(m2, b, ok)
	if !ok {
		m3[2] = make(map[int]string)
	}
	m3[2][1] = "ok"
	b, ok = m3[2][1]
	fmt.Println(m3, b, ok)

	//迭代操作 for range
	//slice
	/*for i, v := range slice {

	  }*/
	//map
	/*for k, v := range map {

	  }*/
	//slice map 类型
	sm := make([]map[int]string, 5)
	//值拷贝没有对map进行初始化
	for _, v := range sm {
		v = make(map[int]string)
		v[1] = "落花浅忆"
		fmt.Println(v)
	}
	fmt.Println(sm)
	//根据索引对map进行了初始化
	for i := range sm {
		sm[i] = make(map[int]string)
		sm[i][1] = "落花浅忆"
		fmt.Println(sm[1])
	}
	fmt.Println(sm)

	m4 := map[int]string{1: "落", 2: "花", 3: "浅", 4: "忆", 5: "空", 6: "流", 7: "年"}
	s := make([]int, len(m4))
	i := 0
	for k, _ := range m4 {
		s[i] = k
		i++
	}
	//map无序性
	fmt.Println(s)
	//间接让map有序
	sort.Ints(s)
	fmt.Println(s)

	m5 := make(map[string]int)
	for k, v := range m4 {
		m5[v] = k
	}
	fmt.Println(m4, "\n", m5)
}
