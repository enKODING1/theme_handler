import {ThemeHandler} from "./ThemeHandler.js";
var btn = document.querySelector('button')
var status_text = document.querySelector('h1');


function textStatus(status){
   status_text.innerHTML = `this is ${status} Mode`;
}

const light = {
    background: [
        {
            elem: 'body',
            color: 'white'
        }
    ],
    font: [
        {
            elem: 'h1',
            color: 'purple'
        }
    ]
};

const night = {
    background: [
        {
            elem: 'body',
            color: 'black'
        }
    ],
    font: [
        {
            elem: 'h1',
            color: 'white'
        }
    ]
};


let handler = new ThemeHandler(light, night);
handler.autoDetect();

let mode = 'light';

btn.addEventListener('click',()=>{
    if(mode === 'light')
    {
        handler.changeTheme(mode);
        textStatus(mode)
        mode = 'night'
    } else if(mode === 'night'){
        handler.changeTheme(mode);
        textStatus(mode)
        mode = 'light'
    }
})

