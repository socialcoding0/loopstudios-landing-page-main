const menu = document.querySelector("#menu");
const hamburger = document.querySelector("#hamburger");
const close = document.querySelector("#close");



hamburger.addEventListener("click", function () {
    menu.classList.add("mobile-active");
});
close.addEventListener("click", function () {
    menu.classList.remove("mobile-active");
});
