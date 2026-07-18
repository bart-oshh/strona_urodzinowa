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

slides.scrollBy({

left:380,

behavior:"smooth"

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