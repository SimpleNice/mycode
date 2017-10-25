package main

import (
	"fmt"
)

const (
	B float64 = 1 << (iota * 10)
	KB
	MB
	GB
	TB
)

//计算机存储单位
func main() {
	fmt.Println(" B:", B, "\nKB:", KB, "\nMB:", MB, "\nGB:", GB, "\nTB:", TB)
}
