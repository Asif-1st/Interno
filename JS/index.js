var menu = document.getElementById("menu");

var nav = document.getElementById("nav");

menu.addEventListener("click", function () {
    menu.classList.toggle("fa-xmark");
    nav.classList.toggle("nav_active");
});


// sticky navbar 
var head = document.getElementById("#header");

window.addEventListener("scroll", function () {
    head.classList.add("scroll_navbar");
});



