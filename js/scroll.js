import { ScrollDetect } from "../lib/scrolldetect/scrollbar.js";

const sd = new ScrollDetect();
const navEl = document.getElementById("nav-bar");
const scrollDBtn = document.getElementById("scroll-d-btn");

let toggleUpDown = true;
scrollDBtn.addEventListener("click",function(e){
    e.preventDefault();
    if(toggleUpDown){
        sd.scrollTo("y",9999);
        scrollDBtn.textContent = "scroll up";
        toggleUpDown = false;
    }else{
        sd.scrollTo("y",0);
        scrollDBtn.textContent = "scroll down";
        toggleUpDown = true;
    }
})

sd.onScroll((direction)=>{
    let yPos = sd.getScrollPosY()
    let isPass = yPos > 36;
    if(isPass){
        navEl.classList.add("bg-white");

    }else{
        navEl.classList.replace("bg-white","bg-none");
    }
})