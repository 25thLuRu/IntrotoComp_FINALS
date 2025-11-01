const header = document.getElementById("header");
const open = document.getElementById("btnClick");
const close = document.getElementById("btnClose");
const list = document.querySelectorAll(".list");

open.addEventListener("click", () => {
  header.classList.add("show");
  open.classList.add("opacity");

  list.forEach((item) => {
    item.classList.add("showList");
  });
});

close.addEventListener("click", () => {
  header.classList.remove("show");
  open.classList.remove("opacity");

  list.forEach((item) => {
    item.classList.remove("showlist");
  }); 
});
