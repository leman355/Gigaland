let header = document.querySelector(".header")

window.onscroll = function () {
    if (window.scrollY > 1) {
        header.classList.add("header-active")
    }
    else {
        header.classList.remove("header-active")
    }
}

let icon = document.querySelector(".nav-ico")
let navI = document.querySelector(".nav-ico i")
let resUl = document.querySelector(".header .header-container ul")

icon.addEventListener("click", function () {
    resUl.classList.toggle("nav-active")
    icon.style.backgroundColor = "white"
    navI.style.color = "black"
})

let home = document.querySelector("header .header-container .home")
let homeUl = document.querySelector("header .header-container .home .home-ul")
home.addEventListener("click", function () {
    home.classList.toggle("hometoggle")
    homeUl.classList.toggle("homeultoggle")
})



let truthbox=document.querySelectorAll(".items .items-container .big-box-container .truth-box")
let next=document.querySelector( ".items .next-prev .next")
let prev=document.querySelector(".items .next-prev .prev")
let count=0

next.onclick=function(){
    count++;
    for(let i of truthbox){
        if(count==0){i.style='transform:translateX(0)' }
        if(count==1){i.style='transform:translateX(-324px)'}
        if(count==2){i.style='transform:translateX(-648px)'}
        if(count==3){i.style='transform:translateX(-972px)'}
        if(count==4){i.style='transform:translateX(-1296px)'}
        if(count==5){count=0; i.style='transform:translateX(0)'}
    }   
}
prev.onclick=function(){
    count--;
    for(let i of truthbox){
        if(count==0){i.style='transform:translateX(0)' }
        if(count==1){i.style='transform:translateX(-324px)'}
        if(count==2){i.style='transform:translateX(-648px)'}
        if(count==3){i.style='transform:translateX(-972px)'}
        if(count==4){i.style='transform:translateX(-1296px)'}
        if(count<0){count=4; i.style='transform:translateX(-1296px)'}
    }  
}
