// 将h1标签文本替换成"hello world"
// defer 表示异步延迟加载js; 若为async则表示异步非延迟加载js
// let myContent = document.querySelector("h1");
// myContent.textContent = "hello world";

// 给页面添加点击事件
// document.querySelector("html").addEventListener("click", function(){alert("别戳我，我怕疼")});
let imgObj = document.querySelector("img");
imgObj.onclick = function(){
    let imgSrc = imgObj.getAttribute("src");
    if(imgSrc==="images/Firefox_logo,_2017.svg"){
        imgObj.setAttribute("src", "images/Firefox_logo2.jpg");
    }else{
        imgObj.setAttribute("src", "images/Firefox_logo,_2017.svg");
    }
}


// 找到切换用户按钮btnObj和标题headObj和localStorage中的用户名username
let btnObj = document.querySelector("button");
let headObj = document.querySelector("h1");
let username = localStorage.getItem("username");

// 设置btnObj点击事件
btnObj.onclick = setUsername;

// 根据localStorage中name判断是否设置过名字
if(!username){
    setUsername();
}else{
    headObj.textContent = "Mozilla 酷毙了, " + username;
}

// 定义设置用户名setUsername函数
function setUsername(){
    let username = prompt("请输入你的名字");
    if(!username){
        setUsername();
    }
    localStorage.setItem("username", username);
    headObj.textContent = "Mozilla 酷毙了, " + username;
}