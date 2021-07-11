// -------------------Navbar section---------------------//

window.addEventListener("scroll", function () {
  var navScroll = document.getElementById("nav");
  navScroll.classList.toggle("fixed", window.scrollY > 8);
});

function navBack() {
  let nav = document.getElementById("nav").classList.toggle("change");
}

//------------------Onclick navbar hide-----------------//
$(".nav-link").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});
