const PIN="18072005";

function checkPin(){

const input=document.getElementById("pinInput").value;

if(input===PIN){

document.getElementById("lockScreen").style.display="none";

document.getElementById("page").style.display="block";

window.scrollTo(0,0);

}

else{

document.getElementById("error").innerHTML="Niepoprawny PIN";

}

}



const slides=document.querySelector(".slides");

document.getElementById("next").onclick=()=>{

const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let current = 0;

function showSlide(index){

    if(index < 0)
        index = images.length-1;

    if(index >= images.length)
        index = 0;

    current = index;

    slides.scrollTo({
        left: slides.clientWidth * current,
        behavior: "smooth"
    });

}

document.getElementById("next").onclick = () => {
    showSlide(current + 1);
}

document.getElementById("prev").onclick = () => {
    showSlide(current - 1);
}

window.addEventListener("resize", () => {
    showSlide(current);
});

}

document.getElementById("prev").onclick=()=>{

slides.scrollBy({

left:-380,

behavior:"smooth"

});

}



window.addEventListener("mousemove",e=>{

document.body.style.backgroundPosition=

`${e.clientX/30}px ${e.clientY/30}px`;

});
