class A{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    print_F(){
        let str=`NAME: ${this.name} AGE: ${this.age}`
        console.log(str)
        document.body.innerHTML=str
    }
}
let a = new A('落花浅忆',26)
console.log(Object.keys(A.prototype))
console.log(Object.getOwnPropertyNames(A.prototype))
a.print_F()
document.body.innerHTML+=`<hr>KEYS: ${Object.keys(A.prototype)}<hr>getOwnPropertyNames: ${Object.getOwnPropertyNames(A.prototype)}`