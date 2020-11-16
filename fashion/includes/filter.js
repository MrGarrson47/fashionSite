//grabbers
const filter_con = document.querySelector(".filter-con");
const filter_con_inner = document.querySelector(".filter-con-inner");
const x_btn_filter = document.querySelector(".x-btn-filter");

//event listeners
filter_con.addEventListener("click", ()=>{
  filter_con_inner.classList.remove("filter-con-inner-close");
  filter_con_inner.classList.add("filter-con-inner-open");
});
x_btn_filter.addEventListener("click", ()=>{
  filter_con_inner.classList.remove("filter-con-inner-open");
  filter_con_inner.classList.add("filter-con-inner-close");
});