//node 环境
var fs=require('fs');
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}
//新增元素
function append(element) {
    this.dataStore[this.listSize++] = element;
}
//查找元素
function find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}
//删除元素
function remove(element) {
    let founAt = this.find(element);
    if (founAt > -1) {
        this.dataStore.splice(founAt, 1);
        this.listSize--;
        return true;
    }
    return false;
}
//列表元素个数
function length() {
    return this.listSize;
}
//显示列表元素
function toString() {
    return this.dataStore;
}
/**
 * 向列表插入一个元素
 * @param {*} element  
 * @param {*} after 
 */
function insert(element, after) {
    let insertPro = this.find(after);
    if (insertPro > -1) {
        this.dataStore.splice(insertPro + 1, 0, element);
        this.listSize++;
        return true;
    }
    return false;
}
/**
 * 清空列表所有元素
 */
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
/**
 * 判断给定值是否存在
 * @param {*} element 
 */
function contains(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}
//pos指向第一个元素
function front() {
    this.pos = 0;
}
//pos指向最后一个元素
function end() {
    this.pos = this.listSize - 1;
}
//pos指向上一个元素
function prev() {
    if (this.pos > 0) {
        this.pos--;
    }
}
//pos指向下一个元素
function next() {
    if (this.pos < this.listSize - 1) {
        this.pos++;
    }
}
//当前pos指向
function currPos() {
    return this.pos;
}
//移动pos到指定位置
function moveTo(position) {
    this.pos = position;
}
//获取pos指定的值
function getElement() {
    return this.dataStore[this.pos];
}
let newList = new List();
newList.append("落花浅忆");
newList.append("流年似水");
newList.append("相思成疾");
newList.append("碧水寒潭");
console.log(newList.length());
newList.front();
console.log(newList.getElement());
newList.next();
console.log(newList.getElement());
newList.prev();
console.log(newList.getElement());
console.log(newList.toString());
//let books=fs.readFileSync('./assets/js/text.txt',{encoding:'utf-8'}).split('\r\n'); //noteJS方法 引入fs包 同步读取文件，此处应该捕获异常
/**
 * 根据传入文件路径读取文件，返回数组
 * @param {文件路径} file 
 */
function createArr(file){
    if(!fs.existsSync(file)){
        console.log('文件路径不存在！');
        return false;
    }
    let arr = fs.readFileSync(file,{encoding:'utf-8'}).split('\r\n');
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].trim();
    }
    return arr;
}

function Customer(name,book){
    this.name=name;
    this.book=book;
}
function checkOut(namme,book,filmList,customerList){
    if(bookList.contains(book)){
        let c=new Customer(namme,book);
        customerList.append(c);
        filmList.remove(book);
    }else{
        console.log(book+"不存在！");
    }
}

function displayList(list){
    for(list.front();list.currPos()<list.length();list.next()){
        if (list.getElement() instanceof Customer) {
            console.log(list.getElement()["name"]+","+list.getElement()["book"]);
        }else{
            console.log(list.getElement());
        }
        if(list.currPos()==list.length()-1){
            return false;
        }
    }
}

let books=createArr('./assets/js/text.txt');
console.log(books);
let bookList=new List();
let customers= new List();
for(let i=0;i<books.length;i++){
    bookList.append(books[i]);
}
let name = "落花浅忆";
let book = "北方有佳人"
checkOut(name,book,bookList,customers);
displayList(bookList);
displayList(customers);