package main

import (
	"fmt"
)

//切片slice,指向底层的数组
//make()创建
//make([]T,len,map)
func main() {
	var a []int //slice 类型
	fmt.Println(a)
	b := [10]int{1, 2, 3, 4, 5, 6, 7, 8, 9} //array
	b1 := b[5:9]
	fmt.Println("B:", b, "\nB1:", b1)
	c := make([]int, 3, 10) //比较正式的slice，类型，长度，初始容量
	//容量小于长度会自动重新分配,容量可以不设置
	fmt.Println(len(c), cap(c))

	s := []byte{'a', 'b', 'c', 'd', 'e', 'f', 'g'}
	//Reslice
	//Reslice索引以被slice的切片为准
	//索引不可以超过被slice的切片容量
	//索引越界会引发错误,不会重新分配
	sa := s[2:5]
	sb := sa[1:4] // slice本质是指向内存地址，指向底层数组的某个位置
	//虽然sa只包含cde，实际他的容量是一直到s的尾部
	fmt.Println(len(sa), cap(sa))
	fmt.Println(len(sb), cap(sb))
	fmt.Println(string(sa), string(sb))

	//Append，想slice追加数据
	s = append(s, 'h', 'i', 'j') //如果append完成，元素个数小于等于原始slice容量结果还是返回原始slice
	//如果元素个数大于原始slice容量，会重新分配内存地址，将原始slice数据拷贝过去，再增加需要增加的元素
	fmt.Println(string(s))

	sc := s[1:5]
	sd := s[4:6]
	se := s[5:7]
	fmt.Println(string(sc), string(sd))
	//多个slice指向相同底层数组时，其中一个改变另一个也会改变
	sc[3] = 'z'
	fmt.Println(string(sc), string(sd))
	//多个slice指向相同底层数组时，其中一个改变另一个也会改变
	fmt.Println(string(sd), string(se))
	//se超过原始slice容量指向新的地址，sd指向原来地址这时候改变sd值不会影响se
	se = append(se, 'q', 'w', 'e', 'r', 'i', 'o', 'p', 'h', 't', 'u', 'h', 'y')
	sd[1] = 'p'
	fmt.Println(string(sd), string(se))

	//copy
	//拷贝以短的slice为准
	//s1[1:2],s2[2:3]
	s1 := []int{1, 2, 3, 4, 5}
	s2 := []int{6, 7, 8}
	fmt.Println(s1, s2)
	copy(s1, s2)
	fmt.Println(s1)
	copy(s2, s1)
	fmt.Println(s2)

	s3 := s1     //完整拷贝
	s4 := s1[:5] //完整拷贝[0:] [:5] [0:5]
	fmt.Println(s3, s4)
}
