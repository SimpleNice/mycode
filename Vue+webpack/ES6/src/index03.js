//ES6字符串模板
window.onload=function(){
    const name ="落花浅忆";
    const templ=`
        <div>字符串模板---${name}</div>
    `;
    document.write(templ);
    const [a,b]=[1,3];
    let c=`${a+b}`;
    document.body.innerHTML+=c;

    let str="落花渐欲迷人眼,浅草才能没马蹄!";
    let search="落花";
    //es5
    //str.indexOf(search);
    //查找字符串是否存在
    document.body.innerHTML+='</br>'+str.includes(search);
    //查开头
    document.body.innerHTML+='</br>'+str.startsWith(search);
    //查结尾
    document.body.innerHTML+='</br>'+str.endsWith(search);
    //重复输出
    document.body.innerHTML+='</br>'+search.repeat(5);
}
