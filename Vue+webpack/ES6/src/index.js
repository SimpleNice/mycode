import { NONAME } from "dns";

let htm = `
    <div id="box">
         <img src="./src/img/test.jpg" alt="" srcset=""  id="smallImg">
    </div>
    <div id="mask"></div>
    <div id="bigBox"> <img src="./src/img/test.jpg" alt="" srcset="" id="bigImg"></div>
`
document.body.innerHTML=htm
let box = document.getElementById('box')
let smallImg = document.getElementById('smallImg')
let mask = document.getElementById('mask')
let bigBox = document.getElementById('bigBox')
let bigImg = document.getElementById('bigImg')

box.style.width="200px"
box.style.border="1px solid #fefefe"
smallImg.style.width="200px"
smallImg.style.height="200px"
bigBox.style.width="800px"
bigBox.style.height="auto"
bigImg.style.width="100%"
mask.style.width="80px"
mask.style.height="80px"
mask.style.backgroundColor="rgb(120, 250, 222,0.5)"
mask.style.position="absolute"
box.onmouseover=function(){
    mask.style.display="block"
    bigBox.style.display="block"
}
box.onmouseout=function(){
    mask.style.display="none"
    bigBox.style.display="none"
}
box.onmousemove=function(){
    let event =event || window.event
    let scrollX= document.documentElement.scrollLeft || document.body.scrollLeft
    let scrollY= document.documentElement.scrollTop || document.body.scrollTop
    let x = event.pageX || event.clientX + scrollX
    let y = event.pageY || event.clientY + scrollY
    x<40 ? x=48:x
    x>200 ? x =160:x
    y<40 ? y=48:y
    y>208 ? y =168:y
    mask.style.left=x-40 + "px"
    mask.style.top=y-40 + "px"
    bigImg.style.marginLeft=-x+'px'
    bigImg.style.marginTop=-y+'px'
}