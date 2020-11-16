let navBar = document.querySelector('.navbar');
let navBarSocialIcons = $('.soM-icons').find("a");
let typeSpan = document.querySelector(".typewritter");
let home = document.getElementById('home');
let footer = document.getElementById('footer');
let navlinksItems = document.querySelectorAll(".nav-item");
new WOW().init();
window.onload = ()=>{
  editNavBar();
  changeActiveLink();
}
function smoothScroll(navlink) {
  let targetId = navlink.getAttribute('href');
  let targetTopOff = (document.getElementById(targetId).offsetTop - 50);
  let distance = targetTopOff - window.pageYOffset;
  scrollBy({ top: distance, behavior: 'smooth' });
}
navlinksItems.forEach(item => {
  item.firstElementChild.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll(item.firstElementChild);
  })
})

function changeActiveLink() {
  let winOffSet = window.pageYOffset;
  let sections = document.querySelectorAll('section');
  if (winOffSet >= home.offsetTop && winOffSet < (sections[0].offsetTop-300)) {
    $('.home').siblings().removeClass('active');
    $('.home').addClass('active'); 
  }
  sections.forEach((element) => {
    let secoffTop = element.offsetTop;
    navlinksItems.forEach(navItem => {
      let targetLink = $(`.${element.id}`);
      if (winOffSet >= (secoffTop-300)) {
        $(targetLink).siblings().removeClass('active');
        $(targetLink).addClass('active');
      }
    });
  });
   if (winOffSet >= (footer.offsetTop - 300)) {
    $(".contact").siblings().removeClass('active');
    $('.contact').addClass('active');
  }
}

$(window).scroll(function () {
  editNavBar();
  changeActiveLink();
})

function editNavBar() {
  if ($(window).scrollTop() >= 250) {
    navBar.classList.replace('navbar-dark', 'navbar-light');
    $('.navbar').addClass("bg-white navbar-shadow navbar-height");
    $('.logo img').attr("src", "images/asset 1.png");
    $('.soM-icons').addClass('navbar-height');
    navBarSocialIcons.css("color", "black")
  } else {
    navBar.classList.replace('navbar-light', 'navbar-dark');
    $('.navbar').removeClass("bg-white navbar-shadow navbar-height");
    $('.soM-icons').removeClass('navbar-height');
    $('.logo img').attr('src', "images/asset 0.png");
    navBarSocialIcons.css("color", "white");
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


