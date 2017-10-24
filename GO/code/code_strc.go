package main

import (
	"fmt"
	"strconv"
)

func main() {
	var a int = 65
	b := string(a)       //int转string 结果大写A
	c := strconv.Itoa(a) //需要使用strconv包转结果65
	d, err := strconv.Atoi(c)
	if err != nil {
		panic(err)
	}
	fmt.Println(b, c, a, d)
}
