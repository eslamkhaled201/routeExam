
let navBar = document.querySelector('.navbar');
let navBarSocialIcons = $('.soM-icons').find("a");
let typeSpan = document.querySelector(".typewritter");
let teamMem = $("#mem1");

window.onload = editNavBar();
$(window).scroll(function () {
  editNavBar();
})
new WOW().init();
function editNavBar() {
  if ($(window).scrollTop() >= 250) {
    navBar.classList.replace('navbar-dark', 'navbar-light');
    $('.navbar').addClass("bg-white navbar-shadow navbar-height");
    $('.logo img').attr("src", "images/asset 1.png");
    $('.soM-icons').addClass('navbar-height');
    navBarSocialIcons.css("color" , "black")
  } else {
    navBar.classList.replace('navbar-light', 'navbar-dark');
    $('.navbar').removeClass("bg-white navbar-shadow navbar-height");
    $('.soM-icons').removeClass('navbar-height');
    $('.logo img').attr('src', "images/asset 0.png");
    navBarSocialIcons.css("color","white");
  }
}

let typewritter = new Typewriter(typeSpan, {
  strings: ['apps', 'websites', 'softwares'],
  loop: true,
  autoStart: true,
  cursur: "Pipe character",
  typeSpeed: 60,
  deleteSpeed: 60
})


