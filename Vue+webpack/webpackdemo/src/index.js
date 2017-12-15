import _ from 'lodash';
import './style.css';
import MyImage from './151255511025.jpg';
import myPrint from './print.js';
function component(){
    //let element = document.getElementById('title');
    let element = document.createElement('div');
    let btn = document.createElement('button');
    element.innerHTML=_.join(['Hellow','webpack','落花浅忆'],' ');
    element.classList.add('title');
    btn.innerHTML='点解我然后查看控制台'; 
    btn.onclick=myPrint; 
    element.appendChild(btn);
    let imgs=new Image();
    imgs.src=MyImage;
    element.appendChild(imgs);
    return element;
}
//component();
document.body.appendChild(component());