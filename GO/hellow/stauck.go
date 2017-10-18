package main

import (
	"fmt"
)

type People struct {
	Name string
	Age  int
	Sex  struct {
		Sex int
	}
}

func main() {
	a := People{Name: "落花浅忆", Age: 18}
	a.Sex.Sex = 1
	fmt.Println(a)
}
