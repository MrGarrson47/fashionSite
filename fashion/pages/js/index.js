//image directory



//grabbers
const hamburger = document.getElementById("hamburger");
const side_menu = document.querySelector(".side-menu");
const x_btn = document.querySelector(".x-con");

//functions

//event listeners
hamburger.addEventListener("click", ()=>{
  side_menu.classList.toggle("reveal");
});
x_btn.addEventListener("click", ()=>{
  side_menu.classList.toggle("reveal");
})
