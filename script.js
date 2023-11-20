let menu = document.getElementById("icon-menu");
let linksPart = document.querySelector(".nav-links-part");

menu.addEventListener("click", () => {
  linksPart.classList.toggle("hide");
});

linksPart.addEventListener("click", () => {
  linksPart.classList.toggle("hide");
});
