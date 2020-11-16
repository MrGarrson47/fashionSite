//grabbers
const hamburger = document.getElementById("hamburger");
const side_menu = document.querySelector(".side-menu");
const x_btn = document.querySelector(".x-con");
const cart_con = document.querySelector(".cart-con");
const cart_inner = document.querySelector(".cart-inner-con");
const cart_x_btn = document.querySelector(".cart-x-btn-con");

let cart_item_con = document.querySelector(".cart-item-con");
let cart_btn_clear = document.querySelector(".cart-btn-clear");
let cart_total = document.querySelector(".cart-total");

//functions

const retrieve_cart_items = () => {
  if(sessionStorage.getItem("cart_items")) {
    let cart_items = sessionStorage.getItem("cart_items");
    cart_item_con.innerHTML = cart_items;
  }
  total_cart();
}; 

const store_cart_items =() => {
  let cart_items = cart_item_con.innerHTML;
  sessionStorage.setItem("cart_items", cart_items);
};

const total_cart = () => {
  let total = 0;
  let index;
  let amount;
  let all_cart_items = document.querySelectorAll(".cart-item");
  all_cart_items.forEach(item => {
    index = item.innerText.indexOf("R");
    amount = parseInt(item.innerText.slice(index + 1));
    total += amount;
  });
  cart_total.innerText = `R${total}`;
};


//event listeners
//menu left-hand side
hamburger.addEventListener("click", ()=>{
  side_menu.classList.toggle("reveal");
});
x_btn.addEventListener("click", ()=>{
  side_menu.classList.toggle("reveal");
});
//shopping cart right-hand side
cart_con.addEventListener("click", () => {
  cart_inner.classList.toggle("reveal-cart");
});
cart_x_btn.addEventListener("click", () => {
  cart_inner.classList.toggle("reveal-cart");
});

cart_btn_clear.addEventListener("click", () => {
  cart_item_con.innerHTML = "";
  sessionStorage.removeItem("cart_items");
  cart_total.innerText = "R0";
});
