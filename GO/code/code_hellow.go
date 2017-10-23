package main

import (
	"fmt" // 别名： alisename pack . pakg 省略调用（不能和别名同时使用）
)

var name string = "落花浅忆" //（函数，常量，变量，类型，接口，结构）首字母小写私有（不能被外部调用），首字母大写公有（可被外部调用）

//组定要常量，全局变量，一般类型
const (
	Email string = "740008538@qq.com"
	Phone string = "13510389936"
)

//VAR组只能用在全局变量声明使用
var (
	students string
	srunum   int
	stuphone = "13510389936" //自动获取类型
)

//一般类型
type (
	newInt   int8
	newSring string
)

func main() {
	fmt.Print("hellow word! 你好，GOlang" + name)
}
