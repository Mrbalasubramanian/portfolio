var home=document.querySelector("#Home");
var work=document.querySelector(".work");
var about=document.querySelector(".About");
var edu=document.querySelector(".edu");
var cer=document.querySelector(".cer");
var about1=document.querySelector(".ww")
home.addEventListener("click",()=>{
edu.classList.remove("active");
cer.classList.add("active");
about1.classList.add("active");

})
work.addEventListener("click",()=>{
 edu.classList.add("active");
cer.classList.remove("active");
about1.classList.add("active");
})

about.addEventListener("click",()=>{
about1.classList.remove("active");
edu.classList.add("active");
cer.classList.add("active");
})