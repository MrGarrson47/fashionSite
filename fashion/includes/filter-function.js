//grabbers
const wrapper_con = document.getElementById("wrapper");
const brands = document.querySelectorAll(".brand");
const price_selects = document.querySelectorAll(".price-selects");

//variables
let category = document.querySelector(".category").id;
let sub_category = document.querySelector(".sub-category").id;
let is_sale_page;
if (document.querySelector(".sale")) {
  is_sale_page = document.querySelector(".sale").id;
}

let cards;
let add_to_cart_btns;


//functions

const click_add_to_cart = (btn) => {
  let p = document.createElement("p");
  p.classList.add("cart-item");
  p.innerHTML = `${btn.dataset.name} R${btn.dataset.price}`;
  cart_item_con.appendChild(p);
  total_cart();
  store_cart_items();
};

const scale = (card) => {
  cards.forEach(item => {
    item.classList.toggle("hide");
  });
  card.classList.toggle("hide");
  card.classList.toggle("scale");
};

const pull_all_images = (category, sub_category) => {
  images.filter(img => filter_categories(img)).map(img => map_images(img)).forEach(card => output_cards(card));
  add_to_cart_btns = document.querySelectorAll(".add-to-cart-btn-con");
  add_to_cart_btns.forEach(btn => {
    btn.addEventListener("click", (event) => {
      click_add_to_cart(btn);
      event.stopPropagation();
    })});
  cards = document.querySelectorAll(".card");
  cards.forEach(card => card.onclick = () => {
    scale(card)});
};

const filter_categories = (img) => {
  if (!is_sale_page) {
    return(
      img.category === category && img.sub_category === sub_category);
  } else {
    return(
      img.category === category && img.sub_category === sub_category && img.sale === true
    );
  }
};

const map_images = (img) => {
  if (is_sale_page) {
    return(`<a href=${category}_sale_${sub_category}.html#${img.url} id = ${img.url} class = "card"><img class = "card__img" src= ${img.url}/><div class="card__info"<div><p class="card__price">R${img.price} Brand:${img.brand}</p><div class = "add-to-cart-btn-con" data-name =${img.name} data-price =${img.price}><p class = "add-to-cart-btn">Add to cart</p></div></div></a>`);
  } else {
    return(`<a href=${category}_${sub_category}.html#${img.url} id = ${img.url} class = "card"><img class = "card__img" src= ${img.url}/><div class="card__info"<div><p class="card__price">R${img.price} Brand:${img.brand}</p><div class = "add-to-cart-btn-con" data-name =${img.name} data-price =${img.price}><p class = "add-to-cart-btn">Add to cart</p></div></div></a>`);
  }
};

const output_cards = (card) => {
  wrapper_con.innerHTML += card;
};

const filter_prices = (img) => {
  let min_price,
  max_price;
  if (parseInt(price_selects[0].value) <= parseInt(price_selects[1].value)) {
    min_price = parseInt(price_selects[0].value);
    max_price = parseInt(price_selects[1].value);
  } else {
    min_price = parseInt(price_selects[1].value);
    max_price = parseInt(price_selects[0].value);
  }
  return (img.price <= max_price && img.price >= min_price);

};

const check_brands = (abc) => {
  let the_list = [];
  let counter = 0;
  for (let i = 0; i < brands.length; i++) {
    counter++;
    if (brands[i].checked) {
      new_list = abc.filter(img => img.brand === counter);
      the_list = [...the_list,
        ...new_list];
    }
  }
  return the_list;
};

const filter_all = () => {
  wrapper.innerHTML = "";
  let cat_price_filtered = images.filter(img => filter_categories(img)).filter(img => filter_prices(img));
  let brands_filtered = check_brands(cat_price_filtered);
  brands_filtered.map(img => map_images(img)).forEach(card => output_cards(card));
  add_to_cart_btns = document.querySelectorAll(".add-to-cart-btn-con");
  add_to_cart_btns.forEach(btn => {
    btn.addEventListener("click", (event) => {
      click_add_to_cart(btn);
      event.stopPropagation();
    })});
  cards = document.querySelectorAll(".card");
  cards.forEach(card => card.onclick = () => {
    scale(card)});
};

//function calls

pull_all_images(category, sub_category);

//event listeners

price_selects.forEach(item => item.oninput = () => {
  filter_all()});

brands.forEach(brand => brand.onchange = () => {
  filter_all()});


